/* The Memory Card, issue #2 (Nov 24 – Nov 28, 2026). */
(window.NEWS = window.NEWS || []).push(
{
  id:"issue-2", no:2, from:"2026-11-24", to:"2026-11-28", published:"2026-11-28",
  headline:"Everybody's Going Online",
  deck:"Smash gets one account and three continents, Pokémon XD gets a save editor, and Spyro wakes up from a three-week nap.",
  lead:[
    "A short week by the calendar (Issue #1 only went out Tuesday), but nobody told the developers. If last week was about new ports arriving, this one was about making them nicer to play with other people. OpenSmash rebuilt its online around a single account and added a third continent, Project Reclaimer turned on party voice chat, TimeSplitters stopped making you restart between online matches, and Pokémon XD fixed online battles that only let two of your six Pokémon fight.",
    "Meanwhile the release counters kept spinning, and one of the quietest projects on the tracker finally broke its silence. Here's what you missed."
  ],
  stats:[["31","releases across 9 projects"],["7","Pokémon XD releases in five days"],["6","frames of input delay in OpenSmash at 130 ms ping, down from 8"],["1,024","AI allowed in a Reclaimer game, up from 256"]],
  stories:[
    {pid:"opensmash-ultimate", kicker:"Smash", title:"OpenSmash rebuilds its online: one account, three continents",
     body:`<p>Last issue we said OpenSmash's rollback improvements would "arrive with the next release." They did, and then some. <b>v0.5.0</b> is the project's biggest update so far. You now sign in once, with Discord, to a single account shared with the SSBU Arena community, and the official lobbies cover Europe, North America and now <b>South America</b>. Epic's online services are gone completely, and matches run through the project's own relays. GSP has been replaced by Mastery Points, with per-fighter leaderboards on the website.</p>
     <p>Under the hood, input delay at 130 ms ping dropped from 8 frames to 6, input now goes out a frame earlier so rollbacks are shallower, and an in-match overlay shows everyone's ping. Four quick fix releases followed in three days, sorting out a broken install, the most common crash at the start of online matches, and a freeze when your opponent left before the fight began. One known problem remains: online matches freeze when Joker's or Sephiroth's video Final Smash starts. Maybe pick someone else for now.</p>`},
    {pid:"pokemon-xd-pc", kicker:"Gotta port 'em all, again", title:"Pokémon XD adds a save editor, Arceus Plates and an Android beta",
     body:`<p>Last week's busiest newcomer didn't slow down: seven more releases, from 0.7.3 to 0.8.1. The save editor we flagged in the watch list arrived first, with the option to <b>pick your own starter</b> instead of Eevee. Both mark your save as "cheats used", so no surprises in competitive rooms.</p>
     <ul><li><b>Fairy type</b> is in (with Modern types turned on), and Gen 5-7 Pokémon now turn up at the Poké Spots, Alolan forms included.</li><li>"More Shadow Pokémon" is now a percentage slider. At 100%, story trainers' own Pokémon become up to 117 Shadow Pokémon to snag on the USA disc.</li><li><b>0.8.0</b> added a paged prize desk selling Mega Stones and all 17 Arceus Plates, dozens more forms (Giratina Origin, Kyurem Black and White, all 20 Vivillon patterns), an HD texture maker, save states, a stream overlay, and a first <b>Android beta</b>.</li></ul>
     <p>Online battles also work properly now. Before, a fainted Pokémon could get sent straight back out, and only the first two of your team ever fought.</p>`},
    {pid:"project-reclaimer", kicker:"Halo", title:"Reclaimer: plug in a controller and say hello",
     body:`<p>Project Reclaimer's two releases this week were about how the game feels rather than what's in it. <b>0.10.11</b> makes every page work with a controller, from the menus to the server browser, Theater, Forge and the scoreboard, with button prompts that match the pad you're holding and an on-screen keyboard for names. Party voice chat is now on by default, with a relay for friends who can't connect directly, and parties stick together across restarts and crashes.</p>
     <p>0.10.10 brought a new start-up screen: a light that sweeps across the title as the game really loads, with a seven-note chord the game generates itself as a nod to Halo CE's loading sound. It also raised the AI limit from 256 to <b>1,024</b>, which pairs nicely with last week's Forge AI spawners.</p>`},
    {pid:"spyro-soi-3d", kicker:"The quiet one speaks", title:"Spyro's winter remake opens a new door",
     body:`<p>After more than three weeks of silence, the Season of Ice 3D remake posted <b>Update 5</b> this morning. The headline is <b>Winter Fairy Home</b>, now both a playable area and the new title screen backdrop. Swimmable areas also got underwater light ripples, and the thief in Market Mesa got faster, so good luck. It's a small project and updates come every month or so, which makes each one worth a look.</p>`},
    {pid:"soulcalibur2-recomp", kicker:"Soulcalibur", title:"Link and Heihachi finally join Survival",
     body:`<p>Three beta releases put the guest fighters where they belonged on the original consoles. Link and Heihachi now show up in Extra Survival, Extra Time Attack and Extra Arcade, on their own stage, and their wins count on the results screen. In widescreen, menus and select screens now show in 4:3 with black sides instead of stretching everyone's portraits, while fights stay 16:9. You can also assign each gamepad to a player, which helps on a Steam Deck with two pads plugged in.</p>`},
    {pid:"astrobot-pc", kicker:"Release counter, part two", title:"Astro Bot gets a big speed boost",
     body:`<p>"Only" seven releases this time, but they're good ones. A compiler optimisation pass gave the thread that holds the game back about <b>15-22% more FPS</b> on Windows and Linux, and AMD on Linux got another 11% plus a fix for crashes in Sky Garden. Physics now never runs slower than 30 Hz, which fixes the bridges and triggers that went missing during frame drops, and VSync stopped swinging between 60 and 40 FPS on high-refresh monitors. Intel Arc owners get XeSS upscaling.</p>
     <p>One thing to check: if you did a <b>fresh install</b> between 1.2.25 and 1.2.29 and saw heavy stutter, update. Those downloads were missing the shader list, so every shader compiled while you played.</p>`},
    {pid:"tsfp", kicker:"TimeSplitters", title:"TimeSplitters lets you hop between online matches",
     body:`<p>TimeSplitters 0.7.2 fixes the most annoying part of last week's online launch: leaving a lobby or failing to join could leave the game stuck, so you had to restart before trying again. Now you can go straight into another match. The Temporal Uplink's holographic map is back, and default colours got richer, closer to the console's contrast. The launcher also got a redesign, a guided first install with an optional tour, and one Linux installer that picks x64 or ARM64 for you.</p>`}
  ],
  newcomers:[
    ["mk64-pc-ultimate","SpaghettiKart cranked to eleven: 16 local players, race grids of up to 4,096, online (beta) and character sets from popular kart mods. Today's v0.97 adds Jotaro and DIO."]
  ],
  quick:[
    "<b>WipEout</b>'s missing weekly release turned up today, a day early: dumps missing a PlayGo file no longer keep HD, Fury and 2048 locked.",
    "<b>Crash: Wrath of Cortex</b> had no release, but a reworked boss picture for the Crunch fight was merged. Time Trials and Jetpack movement are still on the way.",
    "<b>Item Fever</b> passed 12,000 downloads on GameBanana."
  ],
  quiet:"Tekken Tag 2 Ultimate is resting after last week's 0.8.0. Also quiet: TF2 Classified, Tekken 3 Expanded, MediEvil, Serious Sam: Next Encounter, Cubic.Heroes, BLACK, TimeSplitters Rewind, CTR Nitro-Fueled, both Kingdom Hearts projects, Smash Remix and Akaneia.",
  watch:[
    "Crash's Time Trial beta and Jetpack movement (still teased, still coming).",
    "A fix for OpenSmash's Joker and Sephiroth Final Smash freeze online.",
    "How Pokémon XD's Android beta holds up.",
    "Whether Reclaimer's old friends lists come back.",
    "Tekken Tag 2's next fighter or Customize update."
  ],
  signoff:"Short week, busy week. See you next Friday."
}
);
