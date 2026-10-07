# Xiahua DISK brand implementation

The initial implementation uses the recommended Precision Console direction, pending any later user preference. Reference principles: grouped navigation and clear hierarchy from Things; restrained desktop utility density. This does not copy Things artwork.

- Product name: Xiahua DISK. Binary: XiahuaDisk. Bundle ID: com.xiahua.disk.
- Original vector mark: assets/brand/xiahua-disk.svg; public copy: public/xiahua-disk.svg.
- Tray mask: assets/brand/tray.svg. Native icons generated with Tauri CLI.
- Light canvas #F7F9FC; workspace #FFFFFF; ink #202C3D; action #225FE8.
- Dark canvas #151B24; workspace #19212D; ink #E6EDF7; action #92B4FF.
- Shared tokens: src/assets/themes/xiahua-disk.css; 224px expanded navigation, 28px content gutters, 6px base radius.
- Keep native system fonts for Chinese readability and platform consistency.
- Original filesystem safeguards and production domain layout remain intact. Design studies explore broader layouts separately; no synthetic statistics appear in production.

The three studies are retained in design-demos. They do not access or modify local disks.
