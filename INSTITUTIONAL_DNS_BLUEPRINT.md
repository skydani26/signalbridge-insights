# Institutional DNS Blueprint: Microsoft 365 Transition 🛡️

Use this blueprint to configure your DNS records in Namecheap. This setup ensures "Elite" deliverability and institutional-grade security for both your primary and satellite domains.

---

## 📧 1. Primary Domain: `signalbridgeinsights.com`
*Status: Current MX points to PrivateEmail. Action: Replace with Microsoft 365.*

| Type | Host | Value | Priority | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **MX** | `@` | `signalbridgeinsights-com.mail.protection.outlook.com` | `0` | Mail Routing |
| **TXT** | `@` | `v=spf1 include:spf.protection.outlook.com -all` | - | SPF (Anti-Spoofing) |
| **CNAME** | `autodiscover` | `autodiscover.outlook.com` | - | Outlook Auto-Config |
| **TXT** | `_dmarc` | `v=DMARC1; p=quarantine;` | - | DMARC (Auth Policy) |

> [!IMPORTANT]
> **DKIM**: Microsoft will provide two unique CNAME records (selectors) once you initiate the domain setup in the Admin Center. You **must** add these before the warmup begins.

---

## 🚀 2. Satellite Domain: `signalbridgeadvisors.com`
*Status: 301 Redirect Active. Action: Add Mail Infrastructure.*

| Type | Host | Value | Priority | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **MX** | `@` | `signalbridgeadvisors-com.mail.protection.outlook.com` | `0` | Outreach Mail |
| **TXT** | `@` | `v=spf1 include:spf.protection.outlook.com -all` | - | SPF (Crucial for Warmup) |
| **CNAME** | `autodiscover` | `autodiscover.outlook.com` | - | Outlook Auto-Config |
| **TXT** | `_dmarc` | `v=DMARC1; p=quarantine;` | - | DMARC (Authentication) |

---

## 🏹 Implementation Checklist (The "CEO" Path)

1.  **Step 1: Initiation**: Log in to [Microsoft 365 Admin Center](https://admin.microsoft.com).
2.  **Step 2: Verification**: Microsoft will ask you to add a **TXT record** (starts with `MS=msXXXXXXXX`) to prove ownership. Add this to Namecheap first.
3.  **Step 3: Swap MX**: Remove the `mx1.privateemail.com` records and add the Outlook MX records above.
4.  **Step 4: SPF Alert**: If you have an existing SPF record for PrivateEmail, **delete it**. You must only have **ONE** SPF record.
5.  **Step 5: Heat Up**: Once the records are saved, wait 1 hour, then connect `alex@signalbridgeadvisors.com` to Instantly.ai.

---

> [!TIP]
> **Domain Health**: After setting these up, use [MxToolbox SuperTool](https://mxtoolbox.com) to verify that SPF, DKIM, and DMARC are all "Green." This is the mandatory baseline for institutional outreach.
