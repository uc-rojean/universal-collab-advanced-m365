# 🌟 Universal Collab – Advanced Microsoft 365 Developer Activities 🚀

Welcome to **Universal Collab**, a repository dedicated to **advanced Microsoft 365 development activities** designed to maintain and extend the Microsoft 365 Developer E5 subscription through real, meaningful development work.

---

## ✅ Purpose
This repo showcases **advanced integrations and automation** using:
- Microsoft Graph API
- Power Automate
- Teams
- SharePoint
- Planner
- Outlook
- GitHub Actions

Our goal: **Keep the developer account active for the next 67 days and beyond** by performing high-impact activities that demonstrate real development usage.

---

## 📂 Repository Structure

---

## 🛠 Tech Stack
- **Microsoft Graph API** (v1.0 & beta endpoints)
- **Power Automate** for workflow automation
- **Node.js** for scripting Graph API calls
- **SharePoint & Teams** for collaboration signals
- **Planner & Outlook** for task and communication automation

---

## 📅 Activity Log
### UC Day 01 – Repo Initialization ✅
- Created repo structure: `/docs`, `/scripts`, `/flows`, `/samples`
- Added README.md template
- Commit message: `UC Day 01 – Repo Initialization`

### UC Day 02 – Next Steps
- Add **GettingStarted.md** in `/docs` with setup instructions
- Create first **Node.js script** in `/scripts` (Graph API: list users)
- Add **sample JSON payloads** in `/samples` (Teams channel creation)
- Export one **Power Automate flow** and place in `/flows`
- Ran list-users.js successfully (Graph API – Client Credentials)
- Keep secrets safe
Ensure .env is NOT committed.
.gitignore includes .env and node_modules/.


---

## ✅ How to Get Started
1. **Install Node.js**: Download here
2. **Install Microsoft Graph SDK**:
   ```bash
   npm install @microsoft/microsoft-graph-client isomorphic-fetch

### UC Day 03 – Advanced Activities
- Created placeholder scripts:
  - create-teams-channel.js
  - create-planner-task.js
- Added sample JSON payloads for Teams and Planner
- Updated permissions for Graph API

### UC Day 04 – Automation & Integration
- Plan Power Automate flow integration
- Plan Outlook email automation
- Add sample JSON payloads for Planner and Outlook


## UC Day 05 – Advanced Automation

### Overview
UC Day 05 focuses on automating Microsoft 365 tasks using Microsoft Graph API and GitHub Actions. This includes:
- Setting up GitHub Actions for scheduled and manual runs.
- Securely managing secrets via GitHub Repository Secrets.
- Running Node.js scripts for Microsoft Graph operations (e.g., listing users).
- Preparing batch request samples for Teams and Planner.

### Completed Steps
- ✅ Created `.github/workflows/uc-automation.yml` with triggers (manual, push, schedule).
- ✅ Configured secure environment variables using GitHub Secrets (`TENANT_ID`, `CLIENT_ID`, `CLIENT_SECRET`).
- ✅ Implemented Node.js script `scripts/list-users.cjs` to list users via Microsoft Graph.
- ✅ Verified workflow success and resolved environment variable issues.

### Next Steps
- Update batch JSON files for Teams and Planner operations.
- Add more scripts for Teams channel creation and Planner tasks.
- Document troubleshooting and best practices in `/docs/UC-Day-05-Guide.md`.

### Security Notes
- Never commit `.env` files or secrets.
- Rotate Azure client secrets regularly.

