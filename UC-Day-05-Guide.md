# UC Day 05 Guide

## ✅ Overview
UC Day 05 focused on making our GitHub Actions workflow **secure, clean, and functional** for automating Microsoft Graph scripts. We:
- Fixed environment variable issues
- Removed debug clutter
- Ensured secrets are passed safely
- Prepared batch request samples for Teams and Planner

---

## 🔐 Secrets Best Practices
- **Never commit secrets** to the repository.
- Use **GitHub Repository Secrets** for sensitive values:
  - `TENANT_ID`
  - `CLIENT_ID`
  - `CLIENT_SECRET`
- Pass secrets directly to workflow steps using `env:` mapping.

Example:
```yaml
env:
  TENANT_ID: ${{ secrets.TENANT_ID }}
  CLIENT_ID: ${{ secrets.CLIENT_ID }}
  CLIENT_SECRET: ${{ secrets.CLIENT_SECRET }}
```

---

## ⚙️ Workflow Structure
### Triggers
- **Manual**: `workflow_dispatch`
- **Push**: Runs on `main` branch
- **Schedule**: Optional daily run using cron

### Steps
1. Checkout repository
2. Setup Node.js (v18)
3. Install required packages
4. Run script with secrets passed via `env`

---

## 🛠 Troubleshooting Summary
### Common Issues & Fixes
- **Missing environment variables** → Ensure secrets are defined in GitHub and mapped in workflow.
- **ESM vs CommonJS error** → Use `.cjs` extension and remove `"type": "module"` from `package.json`.
- **npm install failures** → Confirm `node-version` is set and packages listed correctly.

---

## 📦 Batch Request Concept
Batching allows multiple Graph API calls in **one HTTP request** using `$batch` endpoint.

### Teams Sample Placeholder
```json
{
  "requests": [
    {
      "id": "createChannel",
      "method": "POST",
      "url": "/teams/{team-id}/channels",
      "body": {
        "displayName": "General",
        "description": "Channel created via batch"
      },
      "headers": { "Content-Type": "application/json" }
    }
  ]
}
```

### Planner Sample Placeholder
```json
{
  "requests": [
    {
      "id": "createTask1",
      "method": "POST",
      "url": "/planner/tasks",
      "body": {
        "planId": "{plan-id}",
        "bucketId": "{bucket-id}",
        "title": "Task 1"
      },
      "headers": { "Content-Type": "application/json" }
    }
  ]
}
```

---

## ✅ Next Steps
- Commit cleaned workflow
- Parameterize batch samples with real IDs
- Prepare UC Day 06 for `$batch` implementation

