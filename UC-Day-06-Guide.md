# UC Day 06 Guide

## ✅ Overview
UC Day 06 focused on **implementing Microsoft Graph $batch operations** to automate multiple requests in a single call. We:
- Expanded Azure permissions for Teams and Planner
- Created `scripts/run-batch.cjs` to handle batch requests
- Updated GitHub Actions workflow to include batch step
- Successfully tested batch execution

---

## ⚙️ What We Accomplished
1. **Permissions**: Added `Channel.Create`, `Team.ReadBasic.All`, `Tasks.ReadWrite.All` (and validated admin consent).
2. **Batch Script**: Built `run-batch.cjs` to read JSON samples and send `$batch` POST request.
3. **Workflow Update**: Added new step to run batch operations in `.github/workflows/uc-automation.yml`.
4. **Test Success**: Verified workflow runs and batch requests return `200 OK`.

---

## 📦 Understanding $batch
The `$batch` endpoint lets you combine multiple Graph API calls into **one HTTP request**, reducing network overhead and improving efficiency.

### Why Use $batch?
- Fewer HTTP calls → faster execution
- Group related operations (e.g., create Teams channels and Planner tasks together)
- Easier error handling in one response payload

---

## ✅ Best Practices for Batch Calls
- **Limit**: Max 20 requests per batch
- **Unique IDs**: Each request must have a unique `id`
- **Headers**: Include `Content-Type: application/json`
- **Atomicity**: Batch is not transactional—some requests may succeed while others fail

---

## 🔍 Troubleshooting Tips
- **403 Forbidden**: Check permissions and admin consent
- **Invalid IDs**: Ensure `teamId`, `planId`, and `bucketId` are correct
- **Malformed JSON**: Validate structure before sending
- **429 Too Many Requests**: Implement retry logic for large batches

---

## ✅ Next Steps (UC Day 07)
- Add **Teams utilities** (list channels, create single channel)
- Add **Planner utilities** (list plans, create single task)
- Enhance workflow with input-based triggers for specific scripts

