## Overview

HeirDock uses generative artificial intelligence ("AI") to help you organize, describe, and understand the value of your household assets. In the Platform these features are called **Asset Analysis**, **Suggestions**, and **Market Valuation**; in this document we call them "AI Features." This document explains what they do, how they process your data, their limitations, and how you can control their use. Capitalized terms not defined here have the meanings given in our [Terms of Service](/legal/terms).

---

## 1. What AI Does in HeirDock

The AI Features help with:

**Identifying and Categorizing Items (Asset Analysis).** When you add photos with Quick Add, or ask for Asset Analysis, AI suggests what an item is, its category and tags, and details such as its make and model, based on your photos and descriptions. It can also read a serial number from a photo of a label. For example, it may identify a piece of furniture as a "Dining Table" and tag it "Wood" and "Antique."

**Suggestions.** AI can suggest descriptions and other details for an item, check how complete its record is, and suggest questions worth answering. This helps create consistent, detailed records without writing everything yourself.

**Market Valuation.** AI can estimate an item's market value from its description, photographs, condition, purchase price and date, and other available information. These estimates are intended to help you understand the approximate value of your household assets.

---

## 2. How AI Processes Your Data

### 2.1 What Data Is Sent to AI

When you use an AI Feature, the following data may be sent to our AI infrastructure for processing:

- Item descriptions and text details (names, categories, condition, notes)
- Photographs of items, including photos of serial-number labels
- For Market Valuation, the price you paid and when you bought the item
- For questions about a Vault document, only the type of document (never its contents)

Only the data relevant to the item being analyzed is sent. For example, if you request a valuation for a single item, only that item's description and photos are processed - not your entire Household Record.

### 2.2 AI Infrastructure

Our AI Features use **generative AI models from Amazon and Anthropic**, run inside **Amazon Web Services (AWS)** through **Amazon Bedrock**, in the United States.

Amazon Bedrock is a managed AI service designed with the following data protections:

- **No model training:** Your inputs and outputs are never used to train or improve any foundation model - not by AWS, not by Anthropic, and not by any other party.
- **No data sharing with model makers:** Your data remains within AWS. It is not sent to Anthropic or any other model maker.
- **No retention:** Amazon Bedrock does not store your requests or its responses, and we have not turned on Bedrock's optional request logging.
- **Encryption:** All data sent to and from Amazon Bedrock is encrypted in transit using TLS.

Your data does not leave the AWS environment during AI processing. HeirDock does not operate its own AI models or send your data to any AI provider other than through Amazon Bedrock.

### 2.3 What Happens After Processing

The results are kept in your Household Record as suggestions until you accept or dismiss them; what you accept becomes part of the record. Amazon Bedrock keeps nothing, and HeirDock does not keep the request it sent. We do keep a record that the feature was used (which feature, when, which model, and the outcome, with none of your content) for thirteen (13) months, to monitor cost and reliability.

---

## 3. Important Limitations

### 3.1 AI Valuations Are Estimates, Not Appraisals

**AI-generated market valuations are rough estimates based on available data. They are not professional appraisals, certified valuations, insurance assessments, or legal determinations of value.**

AI valuations should not be used as the sole basis for: insurance coverage decisions or claims; estate valuations for tax or legal purposes; buying, selling, or pricing decisions; legal proceedings, including probate or divorce; or financial planning or lending decisions.

For any purpose where an accurate, defensible valuation is needed, you should engage a qualified professional appraiser, insurance agent, or financial advisor.

### 3.2 AI Descriptions May Be Inaccurate

AI-generated descriptions and categorizations are best-effort suggestions based on pattern recognition. They may contain errors, miss important details, or misidentify items. You should always review and verify AI-generated descriptions before relying on them.

### 3.3 AI Does Not Provide Professional Advice

AI Features do not constitute legal, financial, tax, insurance, or estate planning advice. The Platform and its AI Features are organizational tools - they help you document and catalog your assets, but they do not replace the judgment of qualified professionals.

### 3.4 AI Performance May Vary

The quality and accuracy of AI outputs depend on the quality and clarity of the inputs you provide. Blurry photographs, vague descriptions, or unusual items may produce less accurate results. AI performance may also vary over time as underlying models are updated.

---

## 4. Your Control Over AI Features

### 4.1 When AI Features Run

AI Features run when you use them: when you add photos with Quick Add, or ask for Asset Analysis, Suggestions, or Market Valuation. After you edit an item that has already been analyzed, the analysis refreshes to take your changes into account.

If you do not use these features, your data is not sent for analysis.

### 4.2 Reviewing and Editing AI Outputs

Suggestions are marked as suggestions until you accept them, and estimated values show where they came from. You can review, edit, or delete any description, category, tag, or valuation at any time. AI Features do not override your own entries - they are suggestions that you choose to accept.

### 4.3 Future Controls

There is not yet a setting to turn AI Features off for your account. We may add one, and will update this disclosure if we do.

---

## 5. AI and Your Privacy

Your use of AI Features is governed by our [Privacy Policy](/legal/privacy), which describes in detail how we collect, use, and protect your data. Key points specific to AI:

- We process your data through AI only for the purposes described in this disclosure (identifying and describing items, and estimating values).
- We do not use your data to train AI models.
- We do not sell your data or AI-generated outputs to third parties.
- AI processing is performed within the same AWS infrastructure that hosts the Platform, subject to the same security measures (encryption, access controls, audit logging).

For institutional clients with a [Data Processing Agreement](/legal/dpa), AI processing is covered under that agreement.

---

## 6. Our Commitment to Responsible AI

We are committed to using AI responsibly within the Platform. This means:

**Transparency.** We clearly disclose what AI does, how it works, and what data it processes. AI-generated content is labeled as such within the Platform.

**User control.** You decide when to use AI Features, and what to accept. You can review, edit, or delete all AI-generated content. AI does not take actions on your behalf.

**Data protection.** We use an AI infrastructure (Amazon Bedrock) designed not to store requests or use them for model training. Your data is encrypted in transit and isolated.

**Accuracy disclosure.** We do not overstate the capabilities of AI. Valuations are presented as estimates with clear disclaimers, not as professional appraisals.

**Continuous improvement.** We regularly evaluate the accuracy and reliability of AI outputs and update the models we use and our prompts to improve quality.

---

## 7. Changes to This Disclosure

We may update this AI Disclosure from time to time, particularly as we add new AI Features or change our AI infrastructure. We will post the revised AI Disclosure here and update the "Last updated" date at the top of this page.

---

## 8. Contact

If you have questions about our use of AI, please contact us:

**HeirDock LLC**
P.O. Box 161
Moultonborough, NH 03254
United States

**Email:** [privacy@heirdock.com](mailto:privacy@heirdock.com)
