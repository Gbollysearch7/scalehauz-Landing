"use client";

import { IndustryPageTemplate } from "@/components/IndustryPageTemplate";

export default function EcommerceRetailPage() {
    return (
        <IndustryPageTemplate
            name="E-commerce & Retail"
            tagline="Industry Expertise"
            heroDescription="We help e-commerce and retail brands scale profitably with performance marketing that drives revenue, not just traffic. From D2C startups to established retailers, we build growth engines that compound."
            icon="storefront"
            heroImage="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=3840&q=80"
            secondaryImage="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=3840&q=80"
            stats={[
                { value: "12x", label: "Avg ROAS" },
                { value: "$50M+", label: "Revenue Driven" },
                { value: "340%", label: "Traffic Growth" },
                { value: "45%", label: "CAC Reduction" },
            ]}
            challenges={{
                intro: "E-commerce is fiercely competitive. Rising ad costs, platform algorithm changes, and increasing customer acquisition costs make profitable growth harder than ever.",
                items: [
                    {
                        title: "Rising Acquisition Costs",
                        description: "Facebook CPMs have increased 89% since 2020. Without sophisticated strategies, profitable customer acquisition becomes impossible.",
                    },
                    {
                        title: "Platform Dependency",
                        description: "Relying too heavily on paid channels creates vulnerability. One algorithm change can crater your revenue overnight.",
                    },
                    {
                        title: "Low Customer Lifetime Value",
                        description: "Many brands focus on first purchase without systems to drive repeat purchases and maximize customer value.",
                    },
                    {
                        title: "Attribution Complexity",
                        description: "iOS privacy changes and cookie deprecation make it harder to know what's actually driving sales.",
                    },
                    {
                        title: "Creative Fatigue",
                        description: "Ad creative burns out faster than ever. Constant testing and iteration is required to maintain performance.",
                    },
                    {
                        title: "Inventory & Cash Flow",
                        description: "Poor forecasting leads to stockouts or excess inventory, both of which hurt profitability.",
                    },
                ],
            }}
            solutions={{
                intro: "Full-Funnel E-commerce Growth",
                description: "We build integrated marketing systems that drive profitable growth at every stage of the customer journey. From awareness through retention, every touchpoint is optimized for revenue. Our approach combines AI-powered media buying, conversion-focused creative, and lifecycle marketing to maximize your return on every dollar spent.",
            }}
            services={[
                {
                    id: "paid-media",
                    name: "Paid Media",
                    description: "AI-optimized campaigns across Meta, Google, TikTok and beyond with creative that converts.",
                    icon: "campaign",
                },
                {
                    id: "seo",
                    name: "E-commerce SEO",
                    description: "Product and category optimization that drives organic traffic and reduces CAC.",
                    icon: "search",
                },
                {
                    id: "email",
                    name: "Email & SMS",
                    description: "Automated flows that recover carts, drive repeat purchases, and maximize LTV.",
                    icon: "mail",
                },
                {
                    id: "creative",
                    name: "Creative Production",
                    description: "Thumb-stopping ads, UGC content, and landing pages built to convert.",
                    icon: "brush",
                },
                {
                    id: "analytics",
                    name: "Attribution & Analytics",
                    description: "Clear visibility into what's driving sales in a post-iOS world.",
                    icon: "analytics",
                },
                {
                    id: "content",
                    name: "Content Strategy",
                    description: "Product content, blogs, and guides that educate and convert.",
                    icon: "edit_note",
                },
            ]}
            whyUs={{
                title: "Why E-commerce Brands Choose Us",
                points: [
                    "Deep expertise in Shopify, WooCommerce, and headless commerce platforms",
                    "Proven track record scaling D2C brands from $1M to $10M+ revenue",
                    "Full creative studio producing 100+ ad variations monthly for testing",
                    "Klaviyo and email marketing expertise driving 30-45% of revenue from owned channels",
                    "Proprietary attribution systems that work in a cookieless world",
                    "Dedicated account teams who understand e-commerce unit economics",
                ],
            }}
            caseStudyTeaser={{
                title: "D2C Skincare Brand",
                result: "4.2x Revenue Growth",
                description: "Scaled a skincare brand from $80K to $340K monthly revenue in 8 months through integrated paid media, email, and creative optimization.",
            }}
            relatedIndustries={[
                { slug: "saas-technology", name: "SaaS & Tech", icon: "cloud" },
                { slug: "healthcare-wellness", name: "Healthcare", icon: "health_and_safety" },
                { slug: "hospitality-travel", name: "Travel", icon: "flight" },
                { slug: "finance-fintech", name: "Fintech", icon: "account_balance" },
                { slug: "manufacturing-b2b", name: "B2B", icon: "precision_manufacturing" },
            ]}
        />
    );
}
