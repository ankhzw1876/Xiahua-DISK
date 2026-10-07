# Verification — 2026-10-07

Local Apple Silicon macOS validation:

- Product identity, rule sources, source language, generated UI boundaries and style checks passed.
- ESLint, Prettier and production Vite build passed.
- Frontend: 200 test files, 1,528 tests passed. Statement coverage 86.09%, branch coverage 82.90%.
- Rust: format, Clippy with warnings denied, and all-target workspace check passed.
- Rust workspace tests: 1,287 passed, 148 ignored (platform/privilege/external-service checks), zero failed.
- Debug macOS app bundle built and launched. Actual cleanup, settings and About windows display Xiahua DISK, the new logo and the Precision Console theme. About offers the fork's GitHub Releases action.
- Built CSS contrast checks passed for six foreground/background pairs in each theme (minimum measured ratio 5.13:1).
- Visual design studies checked at 1440×900. No real cleanup was executed during this branding verification.

Release CI additionally checks and packages macOS, Windows and Linux. Refer to the release-associated workflow run for the exact commit and platform results. Packages are unsigned; no update-signing or notarization credentials were provisioned.

Published release: [v1.1.6-xiahua.1](https://github.com/ankhzw1876/Xiahua-DISK/releases/tag/v1.1.6-xiahua.1). [Final CI run](https://github.com/ankhzw1876/Xiahua-DISK/actions/runs/37593500129) passed all three platform jobs and publication. Release commit: `adb1e44a82593e7952bd8bf639d71817e7d479fa`.

Actual native light and dark settings views were inspected; the theme was restored to the system setting and the test application exited. The downloaded Apple Silicon DMG passed `hdiutil verify`; its Actions artifact SHA-256 matched GitHub metadata.
