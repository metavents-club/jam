# Jam

<a href="https://discord.gg/BfakmCuXSX">![Discord](https://img.shields.io/discord/813009761468416000?label=Jam%20discord&logo=discord)</a> <a href="https://twitter.com/jam_systems">![Twitter Follow](https://img.shields.io/twitter/follow/jam_systems?style=social)</a> <a href="https://github.com/jam-systems/jam">![GitHub Repo stars](https://img.shields.io/github/stars/jam-systems/jam?style=social)</a> <a href="https://www.npmjs.com/package/jam-react">![npm](https://img.shields.io/npm/v/jam-react?label=jam-react%20on%20npm)</a>

🍓 Jam is an open source alternative to Clubhouse, Twitter Spaces and similar audio spaces.

With Jam you can create audio rooms that can be used for panel discussions, jam sessions, free flowing conversations, debates, theatre plays, musicals and more. The only limit is your imagination.

try Jam for free on [https://jam.systems/](https://jam.systems/)

get your own Jam server hosted by us with the **[Jam _Early Access_ Program here](https://jamshelf.com)**

join the [Jam community on 🎧 Discord](https://discord.gg/BfakmCuXSX)

follow [Jam on 🐣 Twitter](https://twitter.com/jam_systems)

find [Jam on 😽 Product Hunt](https://www.producthunt.com/posts/jam-d17ff3cc-556c-4c17-8140-5211cb1cd81f)

🗓 join our weekly Jam Jam (a Jam where we jam about Jam) every [Wed @ 8pm CEST (2pm EDT)](http://jam.systems/jam-jam-ns4a)


add the `/jam` shortcut to your Slack workspace:

<a href="https://slack.com/oauth/v2/authorize?client_id=1827991458162.1827997742338&scope=chat:write,chat:write.public,commands&user_scope="><img alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack@2x.png" /></a>

add Jam to your [Wordpress](https://medium.com/jam/add-jam-to-wordpress-ca1932cd8ff3), [Webflow](https://medium.com/jam/add-jam-to-webflow-d8a680959007) or [Shopify](https://medium.com/jam/add-jam-to-shopify-a77865cd7b6f):

<a href="https://medium.com/jam/add-jam-to-wordpress-ca1932cd8ff3"><img alt="Add Jam to Wordpress" src="https://s.w.org/style/images/about/WordPress-logotype-standard.png" height="40" /></a> &nbsp;&nbsp;&nbsp; <a href="https://medium.com/jam/add-jam-to-webflow-d8a680959007"><img alt="Add Jam to Webflow" src="https://upload.wikimedia.org/wikipedia/commons/9/92/Webflow_logo.svg" height="22" /></a> &nbsp;&nbsp;&nbsp; <a href="https://medium.com/jam/add-jam-to-shopify-a77865cd7b6f"><img alt="Add Jam to Shopify" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/430px-Shopify_logo_2018.svg.png" height="22" /></a>

## Feature Comparison

An overview for how 🍓 Jam compares to similar services like Clubhouse or Twitter Spaces. We intend to keep this table up to date as the services evolve. Please let us know what you care about and how we can make it easier for you to understand whether 🍓 Jam is right for you.

|                                 | 🍓 Jam                 | 👋 Clubhouse      | 🐣 Twitter Spaces          |
|---------------------------------|------------------------|--------------------|----------------------------|
| 🎨 Branded Rooms                | ✅ set your own logo, color   | ❌                | ❌                  |
| 🧩 Embed in your app or website | ✅ iFrame, WebView, JS SDK    | ❌                | ❌                  |
| 💯 Animated Reactions           | ✅ (❤️ 💯 😂 😅 😳 🤔)| ❌                | ✅ (💯 ✋ ✊ ✌️ 👋)       |
| 📎 Description w/ Links         | ✅ w/ Markdown support | ❌                | ☑️ show tweets              |
| 💵 Earn Money                   | ✅ dedicated support for<br/>PayPal.me, Bitcoin:, Gumroad | ❌ no built in support<br/><br/>currently not allowed<br/>unless specifically authorized<br/> see Terms of Service<br/>[(Conditions of Use #9)](https://www.notion.so/Terms-of-Service-cfbd1824d4704e1fa4a83f0312b8cf88) | ❌  no built in support |
| 📱 Platform support             | ✅ Web, iOS, Android,<br/>macOS, Windows, Linux, … | ☑️ iOS App Store & invite | ☑️ iOS App Store & invite |
| 🌏 [Data Sovereignty](https://en.wikipedia.org/wiki/Data_sovereignty) | ☑️ EU 🇪🇺 (Frankfurt, Germany 🇩🇪)<br/><br/> ✅ open source, host wherever you want | ☑️ USA 🇺🇸, China 🇨🇳 (Audio API Provider)<br/><br/>❌ proprietary, no self-hosting   | ☑️ USA 🇺🇸 (?)<br/><br/>❌ proprietary, no self-hosting |
| 🎙 Number of Speakers in a Room | ✅ ~ 15+ (limited by p2p bandwidth) | ✅ ~ 100s (?) | ☑️ 10             |
| 🎫 Number of People in a Room   | ✅ unlimited (depending on server)  | ✅ up to 8000 (?)     | ✅ unlimited (?) |
| 🗓 Discovery                    | ☑️ off-platform (social networks, messengers) | ✅ hallway, upcoming events, off-platform | ✅ fleet bar, off-platform |

💯 Animated Reactions (🎬 [see a demo](https://twitter.com/__tosh/status/1362558104412565504/video/1))

🎨 Branded Rooms: set a picture and a color for your room

💵 Earn Money: dedicated support for linkinging to off-platform services to charge money or sell your own products


## Room Configuration via URL

You can configure a room by adding parameters as query parameters or as [`base64URL`](https://en.wikipedia.org/wiki/Base64#The_URL_applications) encoded string in the hash component of a url.

You can take a look at examples for room configurations via URLs in our [examples](./examples) directory or in our [Glide tutorial](https://medium.com/jam/lets-build-a-micro-clubhouse-using-glide-and-jam-32597368fc98)


| key                  | value                     | note |
|----------------------|---------------------------|------|
| `room.name`          | name of the room          |      |
| `room.description`   | description of the room   |      |
| `room.color`         | CSS value (e.g. "red" #CCCCCC) | primary color of the room, used for the primary action button and some styling like background chrome color, note that you need to encode the hash sign using %23 if passed as query parameter (#CCCCCC becomes %23CCCCCC) |
| `room.stageOnly`     | true                      | users join directly on stage instead of in the audience |
| `ux.noLeave`         | true                      | removes the "leave" button |
| `ux.autoCreate`      | true                      | create room if it does not exist yet |
| `ux.autoJoin`        | true                      | users join the room automatically without having to click a button to join |
| `ux.autoRejoin`      | true                      | users re-join the room automatically if they have been in the room previously without having to click a button to join |
| `identity.name`      | name of the user          |      |
| `identity.avatar`    | image URL of the user     | avatar, profile picture, user photo … |
| `keys.seed`    | string seed for deriving a public/private keypair     | a seed for deriving a public/private keypair. this keypair is for the current user within the room (related: creating rooms with a known set of moderators requires the public keys of the moderators) |



## Known Issues and Solutions

**📱 iPhone: audio output sometimes switches randomly between loudspeaker and earspeaker.**

Workaround: use bluetooth or cable headphones, this way audio will always go through the headphones.

**📱 iPhone & Android: when phone goes to sleep/lockscreen because of inactivity the microphone or sound output might stop working until you unlock the screen again**

Workaround: make sure you are using Jam in the standalone browser instead of within a webview

**Participants can hear me but I can not hear them**

When participants join a room on 🍓 Jam they start in the _audience_, you can add them to the stage by tapping on them and by tapping the `"invite to stage"` button

## Host Your Own Server

Hosting your own Jam server is easy.

### Minimum Requirements

To run your own Jam instance we recommend a minimum of 1 GB RAM and a 1GHz CPU.

e.g.: a Raspberry Pi (1+ GB RAM) or the smallest [Digital Ocean Basic Droplet (1 GB RAM)](https://www.digitalocean.com/pricing/) or the smallest [Linode shared plan (1 GB RAM)](https://www.linode.com/pricing/) or [t2.micro (1 GB RAM) on Amazon Web Services](https://aws.amazon.com/ec2/instance-types/t2/) should be enough to get started.

### Install

1. Install docker and docker-compose (https://docs.docker.com/compose/install/)
1. `git clone https://gitlab.com/jam-systems/jam.git`
1. `cd jam`
1. `git checkout stable`  
1. `cd deployment`
1. `cp .env.example .env`
1. `nano .env` set `JAM_HOST` to the domain you want Jam to be available (If you are deploying on AWS you need a domain you own pointing to your sever as letsencrypt does not issue certificates for `*.compute.amazonaws.com` domains)
1. In your DNS settings point `${JAM_HOST}`, and `*.${JAM_HOST}` to your IP address (if you don't want a wildcard you need the subdomains `stun` and `turn` (e.g. stun.jam.example.com and turn.jam.example.com))
1. If you are behind a NAT:
   1. Open ports 3478 and 3480, both TCP and UDP, and 80 and 443, TCP, on your firewall
   1. `nano turnserver.conf` set `realm` to your domain. If you are running coturn behind NAT, you may need to add the parameter  `external-ip` and give it the value of your public IP address.
1. `docker-compose up -d`

### Update

**NOTE:** Make sure you have the newest version of docker-compose (install according to https://docs.docker.com/compose/install/).

1. `cd jam/deployment`
2. `git checkout stable`
3. `git pull`
4. `docker-compose pull`
5. `docker-compose up -d`

**NOTE:** If you update from a version before March 23rd to one after and you want to keep users' identities and rooms:

1. `cd jam/deployment`
2. `docker-compose down`   
3. `git checkout stable`
4. `git pull`
5. `docker-compose pull`
6. `mv ../pantryredis ../data`   
7. `docker-compose up -d`


## Jam SDK

If you want to build your own audio room UI from scratch, or even develop a Jam bot, then Jam gives you the tools to do so as well! Take a look at [jam-core](https://gitlab.com/jam-systems/jam/-/tree/master/ui/packages/jam-core), our npm package which exposes all functionalities of Jam as a JavaScript library, without prescribing any UI.

For easily integrating `jam-core` into a React app, check out the companion package [jam-core-react](https://gitlab.com/jam-systems/jam/-/tree/master/ui/packages/jam-core-react). The official Jam app itself is primarily built on `jam-core-react`.

## Develop

In in the `ui` directory use `yarn` to install dependencies and `yarn start` to start the local development server.

Directory overview:

`deployment`/ docker compose file for deploying and hosting of Jam

`pantry`/ a lightweight server for handling authentication and coordination of Jam

`ui`/ web based user interface based on the React framework


## Buy Us ☕

**BTC:** 3HM1zPtLuwCGarbihNYVjFVwbFrFe9keqh

**ETH:** 0xe15265b2a309f0d20038e10b8df5a12fb5e916f8
>>>>>>> f5da6f0b8184e8d39773b78725cdff25465feeaa
