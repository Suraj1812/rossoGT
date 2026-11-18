# Apex Drive

Choose one of the four cars, scroll until assembly finishes, then select **Test drive**.

- WASD / arrow keys: accelerate, reverse and steer.
- Space: brake. H: horn. C: cabin/chase camera. R: reset. Escape: return.
- Touch: drag the steering pad and hold accelerator, brake or reverse.
- Auto graphics reduces resolution and shadow cost after sustained slow frames. Click it to select High, Balanced or Performance.
- Sun/Moon and Rain change lighting, road grip, headlights and weather. The bulb icon in drive settings switches cabin reading lamps. Footwells light up at night; BMW and Bugatti have restrained door accents. Instruments adjust brightness with night mode. Cabin placements approximate the available model geometry, not exact factory specifications. Losing tab focus pauses the drive.

## Local development

```sh
npm install
npm run build
npm test
python3 -m http.server 4412 --bind 0.0.0.0 --directory dist
```

Open `http://localhost:4412` on the computer. On a phone on the same Wi-Fi, use the computer's LAN IP with port 4412. Landscape gives the touch controls more space.

`npm run build` produces `dist`. Vercel is configured to use that output. Nothing is deployed by the build command.

The route icon opens four regional environments: India / Grand Trunk Highway (20.1 km), New York / Westside (5.6 km), Japan / Sakura Route (12.5 km), and Germany / Autobahn (24.1 km). These are fictional, region-inspired layouts rather than surveyed replicas. They are open roads with turnaround areas at both ends, not lap circuits. Old forest/coast/desert/park query links still load their original environments.

City side streets and highway service roads are driveable. India and Japan use left-side traffic; Germany and New York use right-side traffic. Procedural traffic accelerates, follows lane headways, yields to the player's car and stops at city signals. Traffic stays on the main corridor; side-street turning AI, player traffic penalties, vehicle damage and navigation destinations are not implemented. India has automatic toll barriers. Fuel stations in every region and marked city parking areas expose one contextual icon when stopped: tap it or press E to refuel or park; press again to stop filling or leave parking. The fuel gauge tracks consumption; empty tanks disable acceleration. Refueling time is accelerated for gameplay. Nearby roads appear on a north-up local minimap. Scenery and traffic use geometry batching to limit draw calls, but rendering performance still depends on the device.

## Rendering

The park batches static objects by material and spatial cell, and instances animated pedestrians and dogs. The Chiron uses its full exterior mesh on desktop and a lighter driving mesh on touch devices. Mobile starts with a lower rendering resolution. The Ferrari cabin updates live mirror reflections at a limited rate. The other cars retain their model mirror materials.

Engine audio uses a shared CC0 engine recording with speed-dependent pitch; it is not a model-specific engine recording. The horn uses Web Audio synthesis. Asset sources and licenses are in `dist/assets/credits.html`.

Building facade materials use a generated regional texture atlas in `dist/assets/drive/regional-facades.jpg`. Roads and buildings are procedural game geometry, not scanned real-world assets.

The driving scene is a browser prototype. Android APK packaging and device-specific performance validation are future work.

Every assembly, explore, and drive route has static Open Graph metadata. Share cards in `dist/assets/social/models` were rendered from the actual app car models with `node scripts/social-preview.mjs`. The empty studio backdrop was generated with built-in ImageGen: dark concrete hangar with restrained window light and no cars or signage.
