"use client";

import { IndustryPageTemplate } from "@/components/IndustryPageTemplate";

export default function ManufacturingB2BPage() {
    return (
        <IndustryPageTemplate
            name="Manufacturing & B2B"
            tagline="Industry Expertise"
            heroDescription="We help manufacturers, industrial suppliers, and B2B companies generate qualified leads and build market authority. Complex sales cycles require sophisticated marketing."
            icon="precision_manufacturing"
            heroImage="https://images.unsplash.com/photo-1565043666747-69f6646db940?w=3840&q=80"
            secondaryImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=3840&q=80"
            stats={[
                { value: "285%", label: "Lead Generation" },
                { value: "52%", label: "Sales Cycle" },
                { value: "4.2x", label: "Pipeline Value" },
                { value: "38%", label: "Cost Per Lead" },
            ]}
            challenges={{
                intro: "B2B and manufacturing marketing involves long sales cycles, multiple decision makers, and the need to demonstrate technical expertise while building trust.",
                items: [
                    {
                        title: "Long Sales Cycles",
                        description: "B2B deals often take 6-18 months to close, requiring sustained engagement and nurturing across the journey.",
                    },
                    {
                        title: "Complex Buying Committees",
                        description: "Multiple stakeholders including engineers, procurement, and executives each need different information.",
                    },
                    {
                        title: "Technical Differentiation",
                        description: "Products may appear similar. Communicating technical advantages clearly to non-experts is challenging.",
                    },
                    {
                        title: "Trade Show Dependency",
                        description: "Many manufacturers rely heavily on trade shows for lead generation, missing digital opportunities.",
                    },
                    {
                        title: "Content Complexity",
                        description: "Technical accuracy is essential, but content also needs to be accessible and engaging.",
                    },
                    {
                        title: "Global Markets",
                        description: "Many manufacturers sell internationally, requiring localized marketing across regions.",
                    },
                ],
            }}
            solutions={{
                intro: "Technical Marketing That Drives Pipeline",
                description: "We build marketing systems that generate qualified leads and support complex B2B sales processes. From technical content that demonstrates expertise to ABM campaigns that target specific accounts, we align marketing with how your buyers actually make decisions.",
            }}
            services={[
                {
                    id: "content",
                    name: "Technical Content",
                    description: "Whitepapers, case studies, and technical articles that demonstrate expertise.",
                    icon: "edit_note",
                },
                {
                    id: "seo",
                    name: "Industrial SEO",
                    description: "Capture search traffic from engineers and buyers researching solutions.",
                    icon: "search",
                },
                {
                    id: "paid-media",
                    name: "B2B Lead Gen",
                    description: "LinkedIn, Google, and programmatic campaigns targeting industrial buyers.",
                    icon: "campaign",
                },
                {
                    id: "email",
                    name: "Lead Nurturing",
                    description: "Long-cycle nurturing that keeps you top of mind through extended sales processes.",
                    icon: "mail",
                },
                {
                    id: "social-media",
                    name: "LinkedIn Strategy",
                    description: "Build company and executive presence on the platform where B2B decisions are influenced.",
                    icon: "share",
                },
                {
                    id: "analytics",
                    name: "Pipeline Attribution",
                    description: "Connect marketing activities to pipeline and revenue across long sales cycles.",
                    icon: "analytics",
                },
            ]}
            whyUs={{
                title: "Why B2B Companies Choose Us",
                points: [
                    "Experience with manufacturers, distributors, and industrial service providers",
                    "Technical content capabilities including engineering and specification writing",
                    "ABM expertise for targeting specific accounts and buying committees",
                    "Trade show marketing integration and lead capture optimization",
                    "CRM integration with Salesforce, HubSpot, and industrial CRMs",
                    "International marketing experience across multiple regions and languages",
                ],
            }}
            caseStudyTeaser={{
                title: "Industrial Equipment Manufacturer",
                result: "$4.2M Pipeline Generated",
                description: "Built a content and ABM engine that generated $4.2M in qualified pipeline within 12 months for an industrial equipment manufacturer.",
            }}
            relatedIndustries={[
                { slug: "saas-technology", name: "Industrial Tech", icon: "cloud" },
                { slug: "professional-services", name: "Consulting", icon: "work" },
                { slug: "real-estate", name: "Commercial RE", icon: "apartment" },
                { slug: "finance-fintech", name: "Trade Finance", icon: "account_balance" },
                { slug: "healthcare-wellness", name: "Medical Devices", icon: "health_and_safety" },
            ]}
        />
    );
}
