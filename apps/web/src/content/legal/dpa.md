This Data Processing Agreement ("DPA") forms part of the agreement between HeirDock LLC ("HeirDock," "Processor," "we," "us") and the entity agreeing to these terms ("Client," "Controller," "you"), and supplements the HeirDock [Terms of Service](/legal/terms) (the "Agreement").

This DPA applies where Client uses the HeirDock platform (the "Platform") in a manner that involves processing personal data of Client's end users or clients ("Data Subjects") on Client's behalf. This DPA is intended for institutional clients - such as estate planners, attorneys, financial advisors, insurance professionals, and similar service providers - who use HeirDock workspaces to manage Household Records containing their clients' personal data.

Capitalized terms not defined in this DPA, such as Household Record, Account Holder, Trusted Participant, Professional, Vault, and AI Features, have the meanings given in our [Terms of Service](/legal/terms).

---

## 1. Definitions

**"Personal Data"** means any information relating to an identified or identifiable natural person that is processed by HeirDock on behalf of the Client through the Platform.

**"Processing"** means any operation performed on Personal Data, including collection, storage, retrieval, use, disclosure, transmission, alteration, and deletion.

**"Sub-Processor"** means any third party engaged by HeirDock to process Personal Data on behalf of the Client.

**"Data Breach"** means a breach of security leading to the accidental or unlawful destruction, loss, alteration, unauthorized disclosure of, or access to Personal Data.

**"Applicable Data Protection Law"** means all laws and regulations applicable to the processing of Personal Data under this DPA, including, as applicable: the California Consumer Privacy Act and the California Privacy Rights Act (CCPA/CPRA); applicable U.S. state privacy laws; the Personal Information Protection and Electronic Documents Act (PIPEDA) and applicable Canadian provincial privacy legislation; and, to the extent applicable in the future, the General Data Protection Regulation (GDPR) and UK GDPR.

**"Standard Contractual Clauses" or "SCCs"** means the standard contractual clauses for the transfer of personal data to third countries adopted by the European Commission (Decision 2021/914), as may be amended or replaced.

---

## 2. Scope and Roles

### 2.1 Roles

For the purposes of this DPA, the Client is the Controller (or the equivalent under applicable law) and HeirDock is the Processor. The Client determines the purposes and means of processing Personal Data; HeirDock processes Personal Data only on behalf of and in accordance with the Client's instructions.

### 2.2 Subject Matter and Duration

HeirDock processes Personal Data to provide the Platform's services as described in the Agreement. Processing will continue for the duration of the Agreement and as otherwise specified in this DPA.

### 2.3 Nature and Purpose of Processing

HeirDock processes Personal Data for the following purposes: hosting and storing Household Records and associated content; facilitating access by authorized users (Trusted Participants and the Account Holder) in accordance with client-configured roles and permissions; processing item descriptions and photographs through AI Features (categorization, tagging, description generation, and estimated valuations); providing data export functionality; maintaining audit trails and data integrity checksums; and providing customer support.

### 2.4 Types of Personal Data

The types of Personal Data processed may include: names, email addresses, and phone numbers of Data Subjects and their household members; photographs of household items and property; descriptions and valuations of household assets; insurance and financial information; legal documents (wills, trusts, deeds, insurance policies) stored in the encrypted Vault; family relationships, Intentions (and who each item is Intended For), and Beneficiaries; Steward and Care Steward designations.

### 2.5 Categories of Data Subjects

Data Subjects may include: the Client's end clients (Primary Account Holders); household members of the Client's end clients; Stewards, Alternate Stewards, Care Stewards, Beneficiaries, and Trusted Participants; and any other individuals whose personal data is included in Household Records managed through the Client's workspace.

---

## 3. Client Obligations

### 3.1 Lawful Basis

The Client is responsible for ensuring that it has a lawful basis for processing Personal Data and for providing Personal Data to HeirDock, including obtaining any necessary consents from Data Subjects.

### 3.2 Instructions

The Client's instructions to HeirDock regarding the processing of Personal Data are set forth in this DPA and the Agreement. The Client may provide additional reasonable written instructions that are consistent with the terms of this DPA and the Agreement.

### 3.3 Data Accuracy

The Client is responsible for the accuracy, quality, and legality of Personal Data provided to HeirDock, and for ensuring that it has the right to provide such data.

---

## 4. HeirDock Obligations

### 4.1 Processing Instructions

HeirDock will process Personal Data only in accordance with the Client's documented instructions, including the terms of this DPA and the Agreement, unless required to do otherwise by applicable law. If HeirDock is required by law to process Personal Data for any other purpose, we will inform the Client of that requirement before processing, unless prohibited by law from doing so.

### 4.2 Confidentiality

HeirDock ensures that all personnel authorized to process Personal Data are subject to appropriate confidentiality obligations, whether contractual or statutory.

### 4.3 Security Measures

HeirDock implements and maintains appropriate technical and organizational security measures to protect Personal Data, including:

- **Tenant isolation:** PostgreSQL row-level security ensuring all queries are filtered by household, preventing cross-tenant data access.
- **Encryption at rest:** AES-256 encryption for Vault documents (wills, trusts, deeds, insurance policies) with a separate encryption key for each document, protected by AWS Key Management Service (KMS). AWS-managed encryption for other data at rest.
- **Encryption in transit:** TLS encryption for all data transmitted between Client devices, the Platform, and Sub-Processors.
- **Access controls:** Multi-layered access enforcement including middleware role checks, compound scope resolution, and database-level row-level security. Household roles (Manager and Shared Access), with Shared Access limited to specific Collections (optionally narrowed by category or property) and Vault documents, each at Viewer, Contributor, or Full Access level.
- **Media access controls:** Photos and other files are served through signed links that expire within 15 minutes; Vault documents are sent directly by our servers after the user confirms their identity.
- **Authentication:** Two-step sign-in with an authenticator app (TOTP), available with every sign-in method and required for Professional users.
- **Audit logging:** Structured, append-only audit logs recording all state changes, mode transitions, consent changes, and security-relevant operations. Audit logs hold user and household identifiers and IP addresses, but no names or Household Record content.
- **Integrity verification:** SHA-256 cryptographic checksum chain for mode change events. SHA-256 hashes for household data snapshots at each mode transition.
- **Minimal personal data in logs:** Structured JSON application logs refer to people by user and household identifiers, not names or email addresses.

HeirDock will review and update these measures periodically to maintain appropriate protection against identified risks.

### 4.4 Data Subject Rights

HeirDock will assist the Client in fulfilling its obligations to respond to Data Subject requests to exercise their rights under Applicable Data Protection Law (including rights of access, rectification, erasure, restriction, portability, and objection), to the extent reasonably possible and taking into account the nature of the processing.

The Platform provides built-in features that enable Data Subjects and Clients to exercise many of these rights directly, including data export, archiving items, and account deletion.

### 4.5 Data Protection Impact Assessments

Upon the Client's reasonable request, HeirDock will provide information reasonably necessary for the Client to conduct a data protection impact assessment, to the extent required by Applicable Data Protection Law.

### 4.6 Cooperation with Authorities

HeirDock will cooperate with the Client and any applicable supervisory authority or regulatory body in the performance of their duties, to the extent required by Applicable Data Protection Law.

---

## 5. Sub-Processors

### 5.1 Authorized Sub-Processors

The Client provides general authorization for HeirDock to engage Sub-Processors to process Personal Data on behalf of the Client. A current list of HeirDock's Sub-Processors is available on our [Sub-Processors page](/legal/sub-processors).

### 5.2 Sub-Processor Obligations

HeirDock will ensure that each Sub-Processor is bound by written data processing obligations that provide at least the same level of data protection as this DPA, including confidentiality, security, and use restrictions. HeirDock remains fully liable to the Client for the performance of each Sub-Processor's obligations.

### 5.3 Changes to Sub-Processors

HeirDock will notify the Client at least thirty (30) days before engaging a new Sub-Processor or replacing an existing Sub-Processor that processes Personal Data. Notification will be provided by email to the address associated with the Client's account and by updating the Sub-Processors page.

### 5.4 Right to Object

If the Client has a reasonable, documented basis for objecting to a new Sub-Processor (based on data protection concerns), the Client may object by notifying HeirDock in writing within fifteen (15) days of receiving notice of the change. HeirDock will use commercially reasonable efforts to address the Client's concerns, which may include: providing additional information about the Sub-Processor's data protection practices; modifying the arrangement to avoid processing Personal Data through the objected-to Sub-Processor; or offering an alternative solution.

If HeirDock is unable to resolve the Client's objection within thirty (30) days, either party may terminate the affected portion of the Agreement (or the Agreement in its entirety, if the Sub-Processor is integral to the Platform's operation) upon written notice. In such case, HeirDock will facilitate the return or deletion of Personal Data as described in Section 8.

---

## 6. Data Breach Notification

### 6.1 Notification Timeline

HeirDock will notify the Client of a confirmed Data Breach without undue delay and in no event later than forty-eight (48) hours after becoming aware of the breach. This timeline is designed to enable the Client to meet any applicable regulatory notification deadlines (such as the 72-hour window under GDPR, if applicable).

### 6.2 Notification Content

The notification will include, to the extent reasonably available at the time:

- A description of the nature of the breach, including the categories and approximate number of Data Subjects and Personal Data records affected.
- The name and contact details of HeirDock's point of contact for the incident.
- A description of the likely consequences of the breach.
- A description of the measures taken or proposed to address the breach, including measures to mitigate its potential adverse effects.

### 6.3 Ongoing Communication

HeirDock will provide timely updates as additional information becomes available, cooperate with the Client's investigation and response efforts, and take reasonable steps to contain and remediate the breach.

### 6.4 Documentation

HeirDock will maintain a record of all Data Breaches, including the facts relating to the breach, its effects, and the remedial actions taken.

---

## 7. Audit Rights

### 7.1 Audit and Inspection

The Client has the right to audit HeirDock's compliance with this DPA. HeirDock will make available to the Client all information reasonably necessary to demonstrate compliance with this DPA and will allow for and contribute to audits, including inspections, conducted by the Client or an independent third-party auditor mandated by the Client.

### 7.2 Audit Process

Audits will be conducted: with at least thirty (30) days' advance written notice; during normal business hours; no more than once per twelve (12) month period (unless a Data Breach has occurred or a regulatory authority requires an audit); and in a manner that does not unreasonably disrupt HeirDock's operations.

### 7.3 Third-Party Audit Reports

As an alternative to an on-site audit, HeirDock may satisfy audit requests by providing: copies of relevant third-party audit reports or certifications, where available (such as those of our hosting provider, AWS); written responses to the Client's reasonable audit questionnaire; and other documentation demonstrating compliance.

### 7.4 Costs

Each party will bear its own costs in connection with audits. If an audit reveals a material breach of this DPA, HeirDock will bear the reasonable costs of the audit.

### 7.5 Confidentiality

All audit materials, reports, and findings are confidential. The Client and its auditors may not disclose audit findings to third parties except as required by law or regulatory obligation, and will not access data belonging to other HeirDock clients during the audit.

---

## 8. Data Return and Deletion

### 8.1 During the Agreement

During the term of the Agreement, the Client (and authorized Data Subjects, through the Platform's built-in features) may export Personal Data at any time using the Platform's data export feature.

### 8.2 Upon Termination

Upon termination or expiration of the Agreement, HeirDock will, at the Client's written election:

- **Return:** Make all Personal Data available for export through the Platform's data export feature for a period of thirty (30) days following termination; or
- **Delete:** Delete all Personal Data from the Platform's active systems.

If the Client does not make an election within thirty (30) days of termination, HeirDock will delete all Personal Data from active systems.

### 8.3 Backup Retention

Following deletion from active systems, Personal Data may persist in encrypted backup copies for up to thirty (30) days, and in security logs (which hold identifiers and IP addresses, but no names or content) for up to ninety (90) days. After the backup retention period, all copies of Personal Data will be permanently destroyed.

### 8.4 Exceptions

HeirDock may retain Personal Data to the extent required by applicable law (such as tax, accounting, or financial reporting obligations). Any data retained for legal reasons will continue to be protected in accordance with this DPA and will not be processed for any other purpose.

### 8.5 Certification

Upon the Client's written request, HeirDock will certify in writing that it has deleted Personal Data in accordance with this Section 8 (subject to the backup retention period and legal retention exceptions).

---

## 9. International Data Transfers

### 9.1 Processing Location

All Personal Data processed under this DPA is stored and processed in the United States, primarily in Amazon Web Services (AWS) data centers.

### 9.2 Canadian Clients

For Clients located in Canada, Personal Data is transferred to and processed in the United States. HeirDock protects this data using the security measures described in Section 4.3 and processes it only for the purposes described in this DPA. The Client is responsible for ensuring that the transfer complies with PIPEDA and applicable provincial privacy legislation, including providing any required notices to Data Subjects.

### 9.3 Future GDPR Compliance

If HeirDock expands to serve clients in the European Economic Area (EEA) or United Kingdom, we will supplement this DPA with: the applicable Standard Contractual Clauses (SCCs) for data transfers to the United States; a transfer impact assessment as required; and any supplementary measures necessary to ensure adequate protection. This section will be updated accordingly.

---

## 10. Liability

Each party's liability arising out of or related to this DPA is subject to the limitations of liability set forth in the Agreement. Nothing in this DPA limits either party's liability for: breaches of confidentiality obligations with respect to Personal Data; either party's indemnification obligations as set forth in the Agreement; or liability that cannot be limited by applicable law.

---

## 11. Term and Termination

### 11.1 Term

This DPA takes effect on the date the Client accepts it (whether by signing a copy or by reference in an order form) and remains in effect for the duration of the Agreement.

### 11.2 Survival

Sections 6 (Data Breach Notification), 7 (Audit Rights), 8 (Data Return and Deletion), and 10 (Liability) will survive the termination or expiration of this DPA for as long as HeirDock processes or retains any Personal Data on behalf of the Client.

---

## 12. Conflict

In the event of any conflict between this DPA and the Agreement, this DPA will prevail with respect to the processing of Personal Data. In all other respects, the Agreement will prevail.

---

## 13. Amendments

HeirDock may update this DPA from time to time to reflect changes in Applicable Data Protection Law, our data processing practices, or our Sub-Processor list. Material changes will be communicated to the Client at least thirty (30) days before they take effect. The Client's continued use of the Platform after the effective date of any changes constitutes acceptance of the revised DPA.

For Clients with individually negotiated agreements, amendments to this DPA require the written agreement of both parties.

---

## 14. Contact

For questions about this DPA or data processing practices:

**HeirDock LLC**
P.O. Box 161
Moultonborough, NH 03254
United States

**Email:** [privacy@heirdock.com](mailto:privacy@heirdock.com)

---

## Annex A - Description of Processing

| Element | Description |
|---------|-------------|
| **Controller** | The Client (institutional user) |
| **Processor** | HeirDock LLC |
| **Data Subjects** | Client's end clients (Primary Account Holders), their household members, designated Stewards and Care Stewards, Trusted Participants, and any individuals whose data appears in Household Records |
| **Categories of Personal Data** | Names, email addresses, phone numbers, photographs of personal property, item descriptions and valuations, insurance and financial information, legal documents (wills, trusts, deeds), family relationships, Intentions (and who each item is Intended For), and Beneficiaries, Steward/Care Steward designations, life event documentation |
| **Sensitive Data** | Legal documents (wills, trusts, Powers of Attorney), financial records (valuations, insurance details). Vault documents are encrypted with AES-256, with a separate key for each document, protected by AWS KMS. |
| **Processing Activities** | Storage and hosting; display to authorized users per configured access controls; AI processing (identifying and describing items, and estimating values) via Amazon Bedrock; data export; audit trail maintenance; life event transition verification; backup and disaster recovery |
| **Processing Duration** | For the duration of the Agreement, plus backup retention (30 days) and any legally required retention |
| **Sub-Processors** | See our [Sub-Processors page](/legal/sub-processors) |

---

## Annex B - Technical and Organizational Security Measures

| Measure | Implementation |
|---------|---------------|
| **Tenant isolation** | PostgreSQL row-level security; all queries filtered by household_id |
| **Encryption at rest (Vault)** | AES-256, with a separate encryption key for each document, protected by AWS KMS |
| **Encryption at rest (other data)** | AWS-managed encryption |
| **Encryption in transit** | TLS for all data in transit |
| **Media access controls** | Signed links expiring within 15 minutes for photos and files; Vault documents sent directly by our servers after identity confirmation |
| **Access controls** | Multi-layered: middleware role checks, compound scope resolution (collection + category + property filters), database-level RLS |
| **Authentication** | Email and password, or Sign in with Google; two-step sign-in (TOTP) available, and required for Professional users |
| **Audit logging** | Structured, append-only logs of all state changes, mode transitions, consent changes; identifiers and IP addresses, no names or content |
| **Integrity verification** | SHA-256 checksum chain for mode change events; SHA-256 hashes for household data snapshots |
| **AI processing** | Amazon Bedrock, which does not use data for training, does not store requests, and does not share data with model makers; data encrypted in transit |
| **Backup** | Regular encrypted backups; 30-day retention post-deletion |
| **Personnel** | Confidentiality obligations for all staff with access to Personal Data |
