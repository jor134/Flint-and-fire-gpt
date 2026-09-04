# Flint & Fire

A browser-playable Stone Age RTS prototype based on the supplied build specification.

## Run
Serve this folder from a local/static web server (ES modules are not used, but browser security still makes a server preferable):

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080`.

## Included
- 112×112 procedural terrain
- largest-landmass filtering
- guaranteed resource rings
- 20 Hz authoritative simulation loop
- flow-field BFS with budget and diagonal corner protection
- villagers, infantry, ranged, cavalry and siege archetypes
- buildings, population, resources, gathering and construction
- eight ages and specified costs
- basic combat and AI
- minimap, desktop controls, PWA shell and save-ready structure

## Deliberate scope
This is a playable foundation rather than a claim that every production feature in the specification is complete. The next implementation pass should add the full touch/gamepad/Quest input layer, instanced rendering pools, synthesized audio, save/resume serialization, durable KV multiplayer, co-op selection fan-out, tutorial state machine, wall/gate placement, and the complete headless harness suite.
