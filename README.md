
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

---

## ✅ UC Day 05 – Status & Updates
### Overview
UC Day 05 focused on **cleaning and securing our GitHub Actions workflow** and preparing for batch automation. We:
- Removed debug clutter from workflow
- Passed secrets securely using GitHub Repository Secrets
- Verified successful run of `list-users.cjs`
- Drafted batch request samples for Teams and Planner

---

### Completed Steps
- ✅ Workflow cleaned and tested
- ✅ Secrets mapped correctly (TENANT_ID, CLIENT_ID, CLIENT_SECRET)
- ✅ Node script runs successfully in CI
- ✅ Batch JSON samples created in `/samples/`

---

### Documentation
Full details and troubleshooting tips are in:  
UC-Day-05-Guide.md

---

### Next Steps
- Parameterize batch samples with real IDs
- Prepare UC Day 06 for `$batch` implementation (Teams + Planner)
- Expand permissions for Graph API calls

---

## ✅ UC Day 06 – Status & Updates
### Overview
UC Day 06 focused on **implementing Microsoft Graph `$batch` operations** to automate multiple requests in a single call. We:
- Expanded Azure permissions for Teams and Planner
- Created `scripts/run-batch.cjs` to handle batch requests
- Updated GitHub Actions workflow to include batch step
- Successfully tested batch execution

---

### Completed Steps
- ✅ Permissions validated (Channel.Create, Team.ReadBasic.All, Tasks.ReadWrite.All)
- ✅ Batch script created and tested
- ✅ Workflow updated with new step for batch operations
- ✅ Batch run successful in CI

---

### Documentation
Full details and troubleshooting tips are in:  
[UC-Day-06-Guide.md](./

### Next Steps
- Add Teams utilities (list channels, create single channel)
- Add Planner utilities (list plans, create single task)
- Enhance workflow with input-based triggers for specific scripts

---
