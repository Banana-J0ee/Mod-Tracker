/* The Memory Card, issue #1 (Nov 20 – Nov 24, 2026). Each issue is its own file; add new ones to index.html. */
(window.NEWS = window.NEWS || []).push(
{
  id:"issue-1", no:1, from:"2026-11-20", to:"2026-11-24", published:"2026-11-24",
  headline:"Recomp Season Is Here",
  deck:"Nine new ports join the tracker, Pokémon XD learns 314 new Pokémon, and Crash finally steers his slides.",
  lead:[
    "If you've ever wanted to play Smash Ultimate, Soulcalibur II and a FromSoftware game nobody remembers all in one evening, this was your week. The tracker grew from fourteen projects to twenty-three, and almost every newcomer was made the same way: take a console game's own code, translate it ahead of time into something a PC understands, and skip the emulator entirely. Two months ago that was a rare trick. Now it's practically a genre.",
    "And the old guard didn't sit still either. TimeSplitters moved online play into the game's own menus, Tekken Tag 2 opened its wardrobe to the guest fighters, and Crash's PC port picked up the Greatest Hits fixes and a sneaky new move. Grab a drink. There's a lot to get through."
  ],
  stats:[["32","releases across 8 projects since Friday"],["18","of those from Astro Bot alone"],["9","new projects on the tracker"],["314","new Pokémon in Pokémon XD"]],
  stories:[
    {pid:"pokemon-xd-pc", kicker:"Gotta port 'em all", title:"Pokémon XD's Pokédex grows to 807",
     body:`<p>The newest arrival on the tracker was also the busiest. In three releases over three days, the Pokémon XD port went from "GameCube game on PC" to something closer to a fan-made sequel. Version 0.7.0 brings in every Pokémon from generations five to seven, built from your own Ultra Sun or Ultra Moon dump, with Mega Evolution, Alolan forms and form-changers like Aegislash. There's a full Pokédex covering all 807, and you can save replays of your battles and watch them back with a free camera.</p>
     <p>0.7.1 added hidden abilities and an optional cheat menu, which marks any save that's used it, so no sneaking a perfect-IV team into online rooms. Then 0.7.2 fixed a crash that hit everyone entering Kaminko's House. Things that are still missing, like Z-moves that only do damage, are labelled in game. Next up, already sitting in the code: a save editor and the option to pick your own starter.</p>`},
    {pid:"crashwoc-nuworld", kicker:"Crash Bandicoot", title:"Wrath of Cortex picks up the Greatest Hits fixes, and the slide gets a steering wheel",
     body:`<p>The Crash port took a clever step with 0.10.0. It now accepts four different disc versions, PAL and US, original and budget re-release, and whichever one you own, it plays as the US Greatest Hits version at 60 Hz. That means everyone gets the fixes Traveller's Tales made in the reprint. On top of that come the developer's own fixes for bugs that shipped on PS2, from a phantom body slam to N. Tropy's name being misspelled in the credits for over twenty years. Each fix can be switched off if you're a purist.</p>
     <p>Crash can now steer a little while sliding, and 0.10.1 lets spins collect Wumpa Fruit too, since the developer expects slide-spinning to become the main way to get around. The other big tease: a <b>Time Trial beta</b> is coming, with separate "Retail" and "NuWorld" leaderboards. Jetpack movement is next on the list.</p>`},
    {pid:"ttt2-ultimate", kicker:"Tekken", title:"Tekken Tag 2's guest fighters finally get to go shopping",
     body:`<p>Two releases this week, and one of them was a hotfix that's becoming a routine. Every time Tekken 8 updates on Steam, the launcher's importer briefly can't find what it needs, and 0.7.1 was the second fix for that this month. The real story is <b>0.8.0</b>: twenty of the added fighters can now wear TTT2's shop outfits in Customize, fitted to their own bodies, with colours, PAINT and five save slots each. PAINT also finally works without a Wii U GamePad.</p>
     <ul><li>Added fighters now keep their own rank and record. They'd been quietly sharing Paul's.</li><li>Memory use dropped a lot: the game used to load every fighter's files up front, 2.4 GB for 23 fighters.</li><li>Azazel learned to crouch and block like a normal fighter, and stopped borrowing Lars's voice. He roars now, as a 4-metre demon should.</li></ul>
     <p>From the community: modder NexusSecret released <b>Tag 2 Tunes</b>, a plugin for swapping in your own music, and keeps posting progress on Tekken 6 outfits and stages in their own version of the project.</p>`},
    {pid:"tsfp", kicker:"TimeSplitters", title:"TimeSplitters online moves into the game's own menus",
     body:`<p>This one landed Thursday night, just before the week started, but it's too big to skip. In version 0.7.0, online play moved out of the separate launcher window and into the game's own Multiplayer menu, with a community match list, private servers and LAN, Invite Only lobbies and lobby codes. Community matches need no port forwarding at all.</p>
     <p>0.7.1 followed on Sunday. Windows now uses Vulkan by default, controller turning goes faster at the top of the range, and the welcome addition for anyone short on friends: <b>solo Arcade</b>, where you can start any online or LAN lobby with just yourself and bots.</p>`},
    {pid:"project-reclaimer", kicker:"Halo", title:"Reclaimer turns Forge into an AI sandbox",
     body:`<p>Project Reclaimer's pace never really drops, and this week the focus was Forge's AI. Spawners now come with settings for nearly everything: up to eight AI alive per spawner, damage from 25% to 500%, size from half to triple, camouflage, grenade types, and an option where an enemy you kill comes back on your team. AI can also walk across objects you place and get into empty vehicles on their own. Dedicated servers can now host any game's campaign by name, Halo CE and Halo 2 mod campaigns included.</p>
     <p>0.10.9 then tidied up parties and lobbies, with a new Switch Lobby option to move everyone between Custom Games, Forge and Campaign. <b>Heads up:</b> it also moved to a new friends service, so your friends list starts empty after updating. The team says your old list will come back later.</p>`},
    {pid:"astrobot-pc", kicker:"Release counter go brrr", title:"Astro Bot ships eighteen versions in five days",
     body:`<p>Most projects release every week or so. Astro Bot's port went from 1.2.6 on Friday to 1.2.24 today. Behind the flood is a fairly normal story: a newly playable port fixing problems as people hit them on their own PCs. VSync is now on by default, 6-8 GB graphics cards no longer stall when they run out of video memory, laptops with two GPUs stopped hanging at startup, and a crash in the Serpent Starway level was fixed.</p>
     <p>The neatest addition is in today's 1.2.24: press <b>F6</b> to lock physics to the PS5's 60 Hz step, for the few physics-sensitive spots, like the Hieroglitch Pyramid's volcano door, that misbehave when your frame rate drops.</p>`},
    {pid:"cubic-heroes", kicker:"Blocky hero, tidy launcher", title:"Cubic.Heroes learns to update itself",
     body:`<p>The 3D Dot Game Heroes port put out three betas since Friday, and all three were about the boring stuff that makes a port pleasant to live with. Beta 4's launcher now downloads, checks and installs its own updates, and can roll back if one goes wrong. Beta 5 accepts more kinds of disc dumps and checks every one of the game's 2,799 files against a known-good copy while installing. It can also add the game to Steam with proper library artwork.</p>`},
    {pid:"soulcalibur2-recomp", kicker:"Soulcalibur", title:"Soulcalibur II stops losing your Weapon Master progress",
     body:`<p>The port with all three guest fighters in one game put out 0.6.0-beta.1 on Monday. The important fix: a "code 2" crash when saving in Weapon Master. The game could only keep track of 64 finished file reads at once, and fell over on the 65th. The Museum was tidied up too, with the bonus fighters no longer showing empty endings and Link's and Heihachi's art in the right galleries.</p>`},
    {pid:"opensmash-ultimate", kicker:"Smash", title:"OpenSmash: no release, but rollback got snappier",
     body:`<p>No new version of the Smash Ultimate port since last Wednesday, but 57 changes landed in the code. The ones you'd notice online: a <b>South America</b> server region, a smaller rollback input delay (from 8 frames to 6 at 130 ms ping), and lower latency in low-latency mode. Also fixed: Mii faces, and the stadium jumbotrons that showed red and blue swapped. They'll all arrive with the next release.</p>`}
  ],
  newcomers:[
    ["opensmash-ultimate","Smash Ultimate natively on PC, with its own online servers and mod support."],
    ["astrobot-pc","The PS5 platformer with DLSS and FSR frame generation and full DualSense support."],
    ["pokemon-xd-pc","Pokémon XD from a decompilation, with later-gen Pokémon and online play."],
    ["cubic-heroes","FromSoftware's blocky Zelda tribute, recompiled from PS3."],
    ["soulcalibur2-recomp","Spawn, Link and Heihachi in one game, with rollback online and training mode."],
    ["medievil-pc","The PS4 MediEvil remake with DLSS and high frame rates. Mature and stable."],
    ["wipeout-pc","WipEout HD, Fury and 2048 at up to 240 FPS."],
    ["black-2006-recomp","Criterion's shooter rebuilt from the Xbox disc, with a launcher and save editor. Still alpha."],
    ["ssne-native","The GameCube Serious Sam with PC controls. Mature and stable."]
  ],
  quick:[
    "<b>BLACK</b> had no release, but its launcher got a command-line mode, and a split-screen fix stops the active player taking damage from the wrong place.",
    "<b>Item Fever</b> released 1.1.2 just before the week started, with a 30 FPS option so it doesn't slow down on a real Wii. Downloads passed 11,600.",
    "<b>WipEout</b> was meant to release every Sunday, but the last one was Nov 14. Something to keep an eye on."
  ],
  quiet:"Nothing new from TF2 Classified, Tekken 3 Expanded, MediEvil, Serious Sam: Next Encounter, Spyro, TimeSplitters Rewind, CTR Nitro-Fueled, either Kingdom Hearts project, Smash Remix or Akaneia. Rest well, friends.",
  watch:[
    "Crash's <b>Time Trial beta</b> and Jetpack movement.",
    "Pokémon XD 0.7.3: a save editor and choosing your starter.",
    "Whether Reclaimer's old friends lists come back.",
    "OpenSmash's next release, with the rollback and region changes.",
    "Whether WipEout's Sunday releases start up again."
  ],
  signoff:"That's the week. See you next Friday."
}
);
