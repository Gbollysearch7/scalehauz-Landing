"use client";

import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export default function EmailLifecyclePage() {
    return (
        <ServicePageTemplate
            title="Email & Lifecycle Marketing"
            tagline="Marketing Automation"
            heroDescription="Turn one-time buyers into lifetime customers. Our lifecycle marketing systems nurture, convert, and retain on autopilot. Email remains the highest-ROI channel, and we make it work harder for you."
            icon="mail"
            heroImage="https://images.unsplash.com/photo-1563986768609-322da13575f2?w=3840&q=80"
            secondaryImage="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=3840&q=80"
            metrics={[
                { value: "45%", label: "Revenue from Email" },
                { value: "38x", label: "Avg ROI" },
                { value: "156%", label: "Open Rate Increase" },
                { value: "4.2x", label: "Customer LTV" },
            ]}
            whyImportant={{
                title: "Why Email is Your Revenue Engine",
                description: "Email marketing delivers the highest ROI of any channel at $36-42 for every $1 spent. It's the only channel you truly own, where you can reach your audience without algorithmic interference. A well-built email program becomes a predictable, scalable revenue stream.",
                points: [
                    "Email ROI averages 3,800% when done correctly",
                    "Automated emails generate 320% more revenue than non-automated",
                    "Segmented campaigns see 760% increase in revenue",
                    "You own the channel and the relationship direct with customers",
                ],
            }}
            whatWeOffer={{
                description: "Complete email and lifecycle marketing systems from strategy through execution, designed to maximize customer lifetime value.",
                features: [
                    {
                        title: "Email Strategy",
                        items: [
                            "Program audit & analysis",
                            "Customer journey mapping",
                            "Segmentation strategy",
                            "Send cadence optimization",
                            "Deliverability assessment",
                            "Tech stack evaluation",
                        ],
                    },
                    {
                        title: "Automation Flows",
                        items: [
                            "Welcome sequences",
                            "Abandoned cart recovery",
                            "Browse abandonment",
                            "Post-purchase flows",
                            "Win-back campaigns",
                            "Re-engagement sequences",
                        ],
                    },
                    {
                        title: "Campaign Management",
                        items: [
                            "Newsletter design & copy",
                            "Promotional campaigns",
                            "Product launch emails",
                            "Seasonal campaigns",
                            "Event invitations",
                            "Content distribution",
                        ],
                    },
                    {
                        title: "Platform Setup",
                        items: [
                            "Klaviyo implementation",
                            "HubSpot setup",
                            "Mailchimp configuration",
                            "Customer.io integration",
                            "Data migration",
                            "ESP selection",
                        ],
                    },
                    {
                        title: "List Management",
                        items: [
                            "Segmentation setup",
                            "List hygiene & cleaning",
                            "Preference centers",
                            "Signup form optimization",
                            "Lead scoring",
                            "Subscriber growth tactics",
                        ],
                    },
                    {
                        title: "SMS Marketing",
                        items: [
                            "SMS strategy development",
                            "Compliance setup",
                            "Automation flows",
                            "Campaign execution",
                            "Two-way messaging",
                            "MMS campaigns",
                        ],
                    },
                ],
            }}
            benefits={[
                {
                    title: "Predictable Revenue",
                    description: "Build email into a consistent revenue stream you can count on monthly.",
                    icon: "payments",
                },
                {
                    title: "Higher LTV",
                    description: "Systematic nurturing increases repeat purchases and customer lifetime value.",
                    icon: "loyalty",
                },
                {
                    title: "Channel Control",
                    description: "Own the relationship with your customers without platform dependency.",
                    icon: "security",
                },
                {
                    title: "Automation Scale",
                    description: "Automated flows work 24/7 generating revenue while you focus elsewhere.",
                    icon: "autorenew",
                },
            ]}
            process={[
                {
                    step: "01",
                    title: "Audit",
                    description: "Comprehensive review of current program, flows, and performance data.",
                },
                {
                    step: "02",
                    title: "Architecture",
                    description: "Design the complete email ecosystem: segments, flows, and campaigns.",
                },
                {
                    step: "03",
                    title: "Build",
                    description: "Implement automations, templates, and segmentation in your platform.",
                },
                {
                    step: "04",
                    title: "Optimize",
                    description: "Continuous A/B testing and refinement to maximize performance.",
                },
            ]}
            testimonial={{
                quote: "Email went from 12% of our revenue to 38% after working with ScaleHauz. Their automation flows are printing money while we sleep.",
                author: "Ecommerce Owner",
                role: "Founder",
                company: "D2C Brand",
            }}
            relatedServices={[
                {
                    id: "paid-media",
                    name: "Paid Media",
                    description: "Drive new subscribers to feed your email engine.",
                    icon: "campaign",
                },
                {
                    id: "content",
                    name: "Content Strategy",
                    description: "Create compelling content for your email campaigns.",
                    icon: "edit_note",
                },
                {
                    id: "analytics",
                    name: "Analytics & Attribution",
                    description: "Track email's true impact on your bottom line.",
                    icon: "analytics",
                },
            ]}
        />
    );
}
