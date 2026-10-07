# Xiahua DISK

A cross-platform desktop disk utility, independently rebranded from [MangoDisk](https://github.com/harry0703/MangoDisk) by harry0703. Built with Tauri 2, Vue 3 and Rust. Licensed under GPL-3.0-only; upstream authorship and license are retained.

Download packages published on this repository's [Releases page](https://github.com/ankhzw1876/Xiahua-DISK/releases). This is a desktop application; a browser preview cannot scan or clean your computer.

## Features

- Review cleanup candidates before confirming removal.
- Inspect disk usage, large files and duplicate files.
- Manage supported startup, privacy and maintenance tasks with platform-specific safeguards.
- Choose a custom AI provider for optional explanations. AI does not authorize file deletion.
- Chinese and seven additional interface languages; light and dark themes.

## Usage

1. Download the package for your operating system and processor architecture from Releases.
2. Choose the scan scope. Scanning does not delete files.
3. Review the results, file paths and risk explanations.
4. Confirm only the items you intend to process. Important personal files still need backups.

For optional AI explanations, enable AI in Settings and configure your own provider endpoint, model and API key. Provider fees and data policies apply. The upstream free AI service is not provisioned for this fork.

Updates open this repository's Releases page. Automatic installation is disabled until this project provisions its own update-signing infrastructure. Feedback opens GitHub Issues; diagnostic logs are not uploaded automatically.

macOS packages in the initial release are not Apple notarized. Windows packages are not Authenticode signed. Build from source if your device policy requires a trusted signing chain.

## Build

Prerequisites: Node.js 24, pnpm as pinned in `package.json`, Rust 1.88, and the [Tauri platform prerequisites](https://v2.tauri.app/start/prerequisites/).

```sh
pnpm install --frozen-lockfile
pnpm check
cargo test --manifest-path src-tauri/Cargo.toml --workspace
pnpm tauri build
```

The original internal crate and CLI names remain stable for compatibility:

```sh
cargo run -p mangodisk-cli -- clean --help
# CLI command: mangodisk clean
```

The application uses the independent bundle ID `com.xiahua.disk`, so its settings and installation are separate from MangoDisk.

## Design and attribution

Three interactive design studies are in `design-demos/`. They are explicitly marked as previews and contain no fabricated disk statistics. The production theme is documented in `docs/design/`.

This fork started from upstream commit `a55d0e340f1ed67fcb7857649189788fe93d8f65` (version 1.1.6). Existing scanning, file-identity validation, protected-path checks and confirmation flows are retained. See [LICENSE](LICENSE) and the Git history for copyright and contributors. Xiahua DISK is an independent fork and is not endorsed by the upstream author.
