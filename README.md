
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
[UC-Day-05-Guide.md](./UC-Day-05-Guide.md)

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
[UC-Day-06-Guide.md](./UC-Day-06-Guide.md)

### Next Steps
- Add Teams utilities (list channels, create single channel)
- Add Planner utilities (list plans, create single task)
- Enhance workflow with input-based triggers for specific scripts

---

## ✅ UC Day 07 – Status & Updates
### Overview
UC Day 07 focused on **creating Teams and Planner utility scripts** for modular automation. We:
- Built `scripts/list-channels.cjs` to list channels in a Team
- Built `scripts/list-plans.cjs` to list Planner plans
- Updated workflow to include new steps for these scripts

---

### Completed Steps
- ✅ Teams utility script created
- ✅ Planner utility script created
- ✅ Workflow updated with new steps
- ✅ Scripts tested successfully in CI

---

### Documentation
Full details and troubleshooting tips are in:
[UC-Day-07-Guide.md](./UC-Day-07-Guide.md)

---

### Next Steps
- Add create-channel and create-task scripts
- Enhance workflow with input-based triggers
- Prepare UC Day 08 for reporting and notifications




---

### ✅ UC Day 08 – Status & Updates
**Overview:**  
Added reporting and optional notifications for transparency.  

---

**Completed Steps:**  
- ✅ Created `generate-report.cjs`  
- ✅ Updated workflow with report step  
- ✅ Prepared optional email notifications logic  
- ✅ Tested report script successfully

---

**Documentation:**  
[UC-Day-08-Guide.md](./UC-Day-08-Guide.md)

---

**Next Steps:**  
Implement file write for reports and add email notification script.

---



### ✅ UC Day 09 – Status & Updates
**Overview:**  
UC Day 09 focused on **hardening and polishing our automation** by introducing config management, error handling patterns, and workflow enhancements.

---

**Completed Steps:**  
- ✅ Created `/config/uc.json` for non-secret IDs and options  
- ✅ Planned error handling patterns (retry logic, structured logs)  
- ✅ Enhanced workflow with input-based triggers and conditional steps  
- ✅ Created UC-Day-09-Guide.md for documentation  

---

**Documentation:**  
[UC-Day-09-Guide.md](./UC-Day-09-Guide.md)

---

**Next Steps:**  
- Implement retry logic in scripts  
- Add structured logging for API calls  
- Prepare UC Day 10 roadmap for advanced reporting and notifications  


---

## ✅ UC Day 10 – 59 days remaining (November 27, 2025) – Pending (Microsoft backend issue)


---

## ✅ UC Day 11 – 58 days remaining (November 28, 2025) – Pending (Microsoft backend issue)


---

## ✅ UC Day 12 – 57 days remaining (November 29, 2025) – Pending (Microsoft backend issue)


---

## ✅ UC Day 13 – 56 days remaining (November 30, 2025) – Pending (Microsoft backend issue)


---

## ✅ UC Day 14 – 55 days remaining (December 01, 2025) – Pending (Microsoft backend issue)


---

## ✅ UC Day 15 – 54 days remaining (December 02, 2025) – Pending (Microsoft backend issue)


---

## ✅ UC Day 16 – 53 days remaining (December 03, 2025) – Pending (Microsoft backend issue)


---

## ✅ UC Day 17 – 52 days remaining (December 04, 2025) – Pending (Microsoft backend issue)


---

## ✅ UC Day 18 – 51 days remaining (December 05, 2025) – Pending (Microsoft backend issue)


---

## ✅ UC Day 19 – 50 days remaining (December 06, 2025) – Pending (Microsoft backend issue)


---

## ✅ UC Day 20 – 49 days remaining (December 07, 2025) – Pending (Microsoft backend issue)


---

## ✅ UC Day 21 – 48 days remaining (December 08, 2025) – Pending (Microsoft backend issue)


---

## ✅ UC Day 22 – 47 days remaining (December 09, 2025) – Pending (Microsoft backend issue)


---

## ✅ UC Day 23 – 46 days remaining (December 10, 2025) – Pending (Microsoft backend issue)


---

## ✅ UC Day 24 – 45 days remaining (December 11, 2025) – Pending (Microsoft backend issue)


---

## ✅ UC Day 25 – 44 days remaining (December 12, 2025) – Pending (Microsoft backend issue)


---

## ✅ UC Day 26 – 43 days remaining (December 13, 2025) – Pending (Microsoft backend issue)


---

## ✅ UC Day 27 – 42 days remaining (December 14, 2025) – Pending (Microsoft backend issue)


---

## ✅ UC Day 28 – 41 days remaining (December 15, 2025) – Pending (Microsoft backend issue)


---

## ✅ UC Day 29 – 40 days remaining (December 16, 2025) – Pending (Microsoft backend issue)


---

## ✅ UC Day 30 – 39 days remaining (December 17, 2025) – Pending (Microsoft backend issue)


---

## ✅ UC Day 31 – 38 days remaining (December 18, 2025) – Pending (Microsoft backend issue)


---

## ✅ UC Day 32 – 37 days remaining (December 19, 2025) – Pending (Microsoft backend issue)


---

## ✅ UC Day 33 – 36 days remaining (December 20, 2025) – Pending (Microsoft backend issue)


---

## ✅ UC Day 34 – 35 days remaining (December 21, 2025) – Pending (Microsoft backend issue)


---

## ✅ UC Day 35 – 34 days remaining (December 22, 2025) – Pending (Microsoft backend issue)

