---
description: Standard Deployment Workflow for SignalBridge Insights
---

// turbo-all
1. Stage all changes: `git add .`
2. Commit with an institutional-grade message: `git commit -m "..."`
3. Verify site integrity: `npm run build`
4. Push to remote to trigger Vercel/GitHub CI: `git push origin main`

> [!IMPORTANT]
> Always verify the build locally before pushing to ensure production stability.
