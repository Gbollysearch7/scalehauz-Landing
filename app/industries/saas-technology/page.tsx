"use client";

import { IndustryPageTemplate } from "@/components/IndustryPageTemplate";

export default function SaaSTechnologyPage() {
    return (
        <IndustryPageTemplate
            name="SaaS & Technology"
            tagline="Industry Expertise"
            heroDescription="We help SaaS and technology companies build predictable growth engines. From early-stage startups to scaling enterprises, we create marketing systems that generate qualified pipeline and reduce CAC."
            icon="cloud"
            heroImage="https://images.unsplash.com/photo-1518770660439-4636190af475?w=3840&q=80"
            secondaryImage="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=3840&q=80"
            stats={[
                { value: "185%", label: "MQL Growth" },
                { value: "42%", label: "CAC Reduction" },
                { value: "3.8x", label: "Pipeline Value" },
                { value: "67%", label: "Faster Sales Cycle" },
            ]}
            challenges={{
                intro: "SaaS marketing is uniquely complex. Long sales cycles, multiple stakeholders, and the need to demonstrate value before purchase create challenges that traditional marketing can't solve.",
                items: [
                    {
                        title: "Long Sales Cycles",
                        description: "B2B SaaS deals can take 3-12 months to close, requiring sophisticated nurturing and multi-touch attribution.",
                    },
                    {
                        title: "Crowded Market",
                        description: "Every category has dozens of competitors. Standing out requires sharp positioning and compelling differentiation.",
                    },
                    {
                        title: "Complex Buyer Journey",
                        description: "Multiple stakeholders, from end users to executives, need different messaging at different stages.",
                    },
                    {
                        title: "Proving ROI",
                        description: "Connecting marketing activities to revenue is challenging when sales cycles are long and touchpoints are many.",
                    },
                    {
                        title: "Content Demands",
                        description: "SaaS buyers research extensively. You need a constant stream of educational content to stay relevant.",
                    },
                    {
                        title: "Scaling Efficiently",
                        description: "Moving from founder-led sales to scalable demand generation requires systematic processes.",
                    },
                ],
            }}
            solutions={{
                intro: "Demand Generation That Scales",
                description: "We build integrated demand generation systems that attract, engage, and convert your ideal customers. From thought leadership content to targeted ABM campaigns, every tactic is aligned to your revenue goals. Our approach combines inbound and outbound strategies to create predictable, scalable pipeline growth.",
            }}
            services={[
                {
                    id: "content",
                    name: "Content Marketing",
                    description: "Thought leadership, product content, and SEO that positions you as the category leader.",
                    icon: "edit_note",
                },
                {
                    id: "paid-media",
                    name: "Paid Media",
                    description: "LinkedIn, Google, and programmatic campaigns that reach decision-makers efficiently.",
                    icon: "campaign",
                },
                {
                    id: "seo",
                    name: "SEO",
                    description: "Dominate search results for your category keywords and capture high-intent traffic.",
                    icon: "search",
                },
                {
                    id: "email",
                    name: "Email & Nurturing",
                    description: "Automated sequences that warm leads and accelerate them through your funnel.",
                    icon: "mail",
                },
                {
                    id: "analytics",
                    name: "Attribution",
                    description: "Multi-touch attribution that shows exactly what's driving pipeline and revenue.",
                    icon: "analytics",
                },
                {
                    id: "creative",
                    name: "Creative & Brand",
                    description: "Product marketing assets, landing pages, and brand design that converts.",
                    icon: "brush",
                },
            ]}
            whyUs={{
                title: "Why SaaS Companies Choose Us",
                points: [
                    "Deep understanding of SaaS metrics: CAC, LTV, payback period, and unit economics",
                    "Experience with PLG, sales-led, and hybrid go-to-market motions",
                    "Integration expertise with HubSpot, Salesforce, Marketo, and other marketing tech",
                    "Content production at scale: we can produce 50+ pieces of content monthly",
                    "ABM capabilities for targeting specific accounts and buying committees",
                    "Proven playbooks for different stages: seed to Series D and beyond",
                ],
            }}
            caseStudyTeaser={{
                title: "B2B SaaS Platform",
                result: "285% Pipeline Growth",
                description: "Built a content and paid media engine that grew qualified pipeline from $500K to $1.9M quarterly for a Series B SaaS company.",
            }}
            relatedIndustries={[
                { slug: "finance-fintech", name: "Fintech", icon: "account_balance" },
                { slug: "education-edtech", name: "EdTech", icon: "school" },
                { slug: "healthcare-wellness", name: "HealthTech", icon: "health_and_safety" },
                { slug: "professional-services", name: "Services", icon: "work" },
                { slug: "ecommerce-retail", name: "E-commerce", icon: "storefront" },
            ]}
        />
    );
}
