
- Use a shared React context for prototype teams and theme, persisted after hydration to localStorage; this keeps the frontend-only journey connected across routes.
- Keep mock athletics data and roster validation in a browser-safe module separate from reusable screen components; this makes sample content and selection rules easy to modify and test.
- Use TanStack file routes for each screen and unique leaf metadata; this preserves connected client navigation and independently shareable pages.
