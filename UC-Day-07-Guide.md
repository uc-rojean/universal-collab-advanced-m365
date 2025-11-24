# UC Day 07 Guide

## ✅ Overview
UC Day 07 adds **modular utility scripts** for Microsoft Teams and Planner so you can run targeted operations (list channels, list plans) without $batch. These utilities make your automation flexible and easier to test.

---

## ⚙️ What We Accomplished
1. **Teams utility** — `scripts/list-channels.cjs` lists channels for a given Team ID.
2. **Planner utility** — `scripts/list-plans.cjs` lists Planner plans.
3. **Workflow update** — Added two new steps in `.github/workflows/uc-automation.yml` to run these scripts with secrets passed via `env`.
4. **Tests** — Both steps executed successfully in CI.

---

## 🔗 API Endpoints Used
- **Teams – List Channels**: `GET https://graph.microsoft.com/v1.0/teams/{team-id}/channels`
- **Planner – List Plans**: `GET https://graph.microsoft.com/v1.0/planner/plans`

> Note: Replace `{team-id}` with your actual Team ID. Ensure Graph **Application permissions** are granted and admin-consented.

---

## 🧩 Workflow Snippet (for reference)
```yaml
# UC Day 07 steps
- name: Run list-channels.cjs
  env:
    TENANT_ID: ${{ secrets.TENANT_ID }}
    CLIENT_ID: ${{ secrets.CLIENT_ID }}
    CLIENT_SECRET: ${{ secrets.CLIENT_SECRET }}
  run: node scripts/list-channels.cjs

- name: Run list-plans.cjs
  env:
    TENANT_ID: ${{ secrets.TENANT_ID }}
    CLIENT_ID: ${{ secrets.CLIENT_ID }}
    CLIENT_SECRET: ${{ secrets.CLIENT_SECRET }}
  run: node scripts/list-plans.cjs
```

---

## ✅ Best Practices
- **Secrets**: Keep using GitHub Repository Secrets (`TENANT_ID`, `CLIENT_ID`, `CLIENT_SECRET`). Do **not** commit `.env`.
- **Permissions**: Verify **Application permissions** and **admin consent** for Teams and Planner.
- **Logs**: Print concise results (name + ID) to keep Actions logs readable.
- **IDs**: Store non-secret IDs in a small config file (e.g., `/config/uc.json`) to avoid hardcoding in scripts.

---

## 🛠 Troubleshooting
- **403 Forbidden**: Permission missing or not admin-consented.
- **404 Not Found**: Incorrect `{team-id}`; verify via Graph Explorer or prior scripts.
- **401 Unauthorized**: Client secret expired; rotate in Azure and update GitHub Secret.
- **Rate limits (429)**: Re-run later; keep outputs minimal.

---

## 🧭 Next Steps (UC Day 08)
- Add **Teams single-channel create** script (non-batch) and **Planner create-task** script.
- Enhance workflow with `workflow_dispatch` inputs to pick which utility to run.
- Start a daily **report job** that logs a short summary to `/reports/`.

---

## 📄 Files touched in UC Day 07
- `scripts/list-channels.cjs`
- `scripts/list-plans.cjs`
- `.github/workflows/uc-automation.yml` (added two steps)
- `docs/UC-Day-07-Guide.md` (this document)

---

Keep going, Buddy—modular tools make the whole system easier to evolve and debug. 🚀
