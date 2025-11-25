
# UC Day 08 – Reporting & Notifications

## ✅ Overview
UC Day 08 focuses on **reporting and optional notifications** to make automation transparent and professional.

### Goals:
- Generate a user snapshot report.
- Optionally send a summary email using Microsoft Graph.

---

## ✅ Steps Completed
1. **Created reporting script** (`generate-report.cjs`)
2. **Updated workflow** to include report generation step.
3. **Prepared optional notifications logic** (Mail.Send permission added).
4. **Tested report script** – confirmed workflow runs successfully.

---

## ✅ API Endpoints Used
- **List Users:**  
  `GET https://graph.microsoft.com/v1.0/users`
- **Send Email (optional):**  
  `POST https://graph.microsoft.com/v1.0/users/{id}/sendMail`

---

## ✅ Workflow Snippet
```yaml
- name: Generate user snapshot report
  run: node scripts/generate-report.cjs
