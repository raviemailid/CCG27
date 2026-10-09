<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Use a shared React context for prototype teams and theme, persisted after hydration to localStorage; this keeps the frontend-only journey connected across routes.
- Keep mock athletics data and roster validation in a browser-safe module separate from reusable screen components; this makes sample content and selection rules easy to modify and test.
- Use TanStack file routes for each screen and unique leaf metadata; this preserves connected client navigation and independently shareable pages.
