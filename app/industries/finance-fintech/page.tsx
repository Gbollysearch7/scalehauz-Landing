"use client";

import { IndustryPageTemplate } from "@/components/IndustryPageTemplate";

export default function FinanceFintechPage() {
    return (
        <IndustryPageTemplate
            name="Finance & Fintech"
            tagline="Industry Expertise"
            heroDescription="We help financial services firms and fintech companies acquire customers at scale. Compliant marketing that builds trust, demonstrates value, and drives conversions."
            icon="account_balance"
            heroImage="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=3840&q=80"
            secondaryImage="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=3840&q=80"
            stats={[
                { value: "245%", label: "User Acquisition" },
                { value: "38%", label: "CAC Reduction" },
                { value: "4.2x", label: "Content ROI" },
                { value: "156%", label: "Qualified Leads" },
            ]}
            challenges={{
                intro: "Financial services marketing requires navigating complex regulations while competing with both traditional institutions and innovative startups. Trust is everything.",
                items: [
                    {
                        title: "Regulatory Complexity",
                        description: "SEC, FINRA, state regulations, and compliance requirements create strict guardrails for what you can say and claim.",
                    },
                    {
                        title: "Trust Deficit",
                        description: "After multiple financial crises, consumers are skeptical. Building trust requires transparency and demonstrated value.",
                    },
                    {
                        title: "Competitive Intensity",
                        description: "Fintechs, neobanks, and traditional institutions all compete for the same customers with massive marketing budgets.",
                    },
                    {
                        title: "Complex Products",
                        description: "Financial products are inherently complicated. Explaining value proposition clearly without oversimplifying is challenging.",
                    },
                    {
                        title: "High CAC Sensitivity",
                        description: "Customer acquisition costs directly impact unit economics. Efficiency is critical for sustainable growth.",
                    },
                    {
                        title: "Platform Restrictions",
                        description: "Google, Facebook, and other platforms have strict policies for financial services advertising.",
                    },
                ],
            }}
            solutions={{
                intro: "Trust-Building Growth Marketing",
                description: "We build marketing systems that acquire customers efficiently while building the trust that drives long-term relationships. From educational content that demonstrates expertise to performance marketing that scales acquisition, we balance brand and demand generation for sustainable growth.",
            }}
            services={[
                {
                    id: "content",
                    name: "Financial Content",
                    description: "Educational content that builds trust, demonstrates expertise, and drives organic acquisition.",
                    icon: "edit_note",
                },
                {
                    id: "paid-media",
                    name: "Compliant Paid Media",
                    description: "Performance marketing that navigates platform policies and regulatory requirements.",
                    icon: "campaign",
                },
                {
                    id: "seo",
                    name: "Financial SEO",
                    description: "Dominate search for financial terms while building topical authority.",
                    icon: "search",
                },
                {
                    id: "email",
                    name: "Lifecycle Marketing",
                    description: "Onboarding, activation, and retention campaigns that maximize customer value.",
                    icon: "mail",
                },
                {
                    id: "analytics",
                    name: "Attribution & Analytics",
                    description: "Understand true customer acquisition costs and lifetime value across channels.",
                    icon: "analytics",
                },
                {
                    id: "creative",
                    name: "Brand & Creative",
                    description: "Visual identity and creative that conveys trust, security, and innovation.",
                    icon: "brush",
                },
            ]}
            whyUs={{
                title: "Why Financial Services Companies Choose Us",
                points: [
                    "Understanding of SEC, FINRA, and financial marketing regulations",
                    "Experience with banks, wealth managers, insurers, and fintech startups",
                    "Proven user acquisition strategies for both B2C and B2B financial products",
                    "Content production that balances compliance with engagement",
                    "Platform expertise for navigating Google and Meta financial policies",
                    "Attribution systems that connect marketing to funded accounts and AUM",
                ],
            }}
            caseStudyTeaser={{
                title: "Fintech App",
                result: "3.2x User Growth",
                description: "Scaled a personal finance app from 50K to 160K monthly active users through integrated content marketing and performance campaigns.",
            }}
            relatedIndustries={[
                { slug: "saas-technology", name: "Fintech", icon: "cloud" },
                { slug: "professional-services", name: "Advisory", icon: "work" },
                { slug: "real-estate", name: "Real Estate", icon: "apartment" },
                { slug: "ecommerce-retail", name: "E-commerce", icon: "storefront" },
                { slug: "healthcare-wellness", name: "InsurTech", icon: "health_and_safety" },
            ]}
        />
    );
}
