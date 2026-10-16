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

- Keep portfolio facts and contact destinations centralized in `src/lib/portfolio-data.ts`; project and thesis results must share that source to avoid inconsistent claims.
- Keep portfolio section components in the existing single-page structure; use the shared Button for interactive controls and semantic CSS tokens for presentation.
- Project visuals are conceptual input/output diagrams, never fabricated screenshots or claimed evaluation plots.
- Contact enquiries compose a mailto draft in the visitor's email app; do not imply server-side delivery without a connected sending service.
