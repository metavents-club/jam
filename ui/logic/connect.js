import {is, update} from 'use-minimal-state';
import log from '../lib/causal-log';
import {signData, verifyData} from '../lib/identity-utils';
import {dispatch, useOn, useRootState} from '../lib/state-tree';
import {get} from './backend';
import {staticConfig} from './config';
import {populateCache} from './GetRequest';
import {currentId} from './identity';
import {actions, swarm} from './state';

// TODO this is an intermediary component to set up swarm that should be replaced w/ one that
// properly integrates with swarm (knows connection state, returns remote streams etc)

export function ConnectRoom() {
  const state = useRootState();

  let connectedRoomId = null;
  configSwarm(state, swarm, staticConfig);
  useOn(staticConfig, conf => configSwarm(state, swarm, conf));

  is(swarm.myPeerState, {inRoom: false, micMuted: false, leftStage: false});

  useOn(swarm, 'newPeer', async id => {
    for (let i = 0; i < 5; i++) {
      // try multiple times to lose race with the first POST /identities
      let [data, ok] = await get(`/identities/${id}`);
      if (ok) {
        state.identities[id] = data;
        update(state, 'identities');
        return;
      } else {
        await new Promise(r => setTimeout(r, 1000));
      }
    }
  });

  useOn(swarm.peerEvent, 'identity-update', async peerId => {
    let [data, ok] = await get(`/identities/${peerId}`);
    if (ok) {
      state.identities[peerId] = data;
      update(state, 'identities');
    }
  });

  useOn(swarm.serverEvent, 'room-info', data => {
    log('new room info', data);
    if (connectedRoomId !== null) {
      populateCache(`/rooms/${connectedRoomId}`, data);
    }
  });

  // leave room when same peer joins it from elsewhere and I'm in room
  // TODO: currentId() is called too early to react to any changes!
  useOn(swarm.connectionState, currentId(), myConnState => {
    if (myConnState === undefined) {
      is(state, {otherDeviceInRoom: false});
      return;
    }
    let {states, latest} = myConnState;
    let {myConnId} = swarm;
    let otherDeviceInRoom = false;
    for (let connId in states) {
      if (connId !== myConnId && states[connId].state.inRoom) {
        otherDeviceInRoom = true;
        if (connId === latest && state.inRoom) {
          dispatch(state, actions.JOIN, null);
        }
        break;
      }
    }
    is(state, {otherDeviceInRoom});
  });

  return function ConnectRoom({roomId, shouldConnect}) {
    if (shouldConnect && roomId && connectedRoomId !== roomId) {
      connectedRoomId = roomId;
      if (swarm.room === roomId && swarm.hub) return;
      log('connecting room', roomId);
      if (swarm.hub) swarm.disconnect();
      // make sure peerId is the current one
      swarm.config({myPeerId: currentId()});
      swarm.connect(roomId);
    } else if ((!shouldConnect || !roomId) && connectedRoomId !== null) {
      connectedRoomId = null;
      if (swarm.connected && swarm.room === roomId) swarm.disconnect();
    }
  };
}

function configSwarm(state, swarm, staticConfig) {
  swarm.config({
    debug: staticConfig.development,
    url: staticConfig.urls.pantry,
    sign: data => signData(state.myIdentity, data),
    verify: verifyData,
    reduceState: (_states, _current, latest, findLatest) => {
      if (latest.inRoom) return latest;
      return findLatest(s => s.inRoom) ?? latest;
    },
    pcConfig: {
      iceTransportPolicy: 'all',
      iceServers: [
        // {urls: `stun:stun.jam.systems:3478`},
        {urls: [`${staticConfig.urls.stun}`, `stun:stun.jam.systems:3478`]},
        {
          ...staticConfig.urls.turnCredentials,
          urls: `${staticConfig.urls.turn}`,
        },
      ],
    },
  });
}