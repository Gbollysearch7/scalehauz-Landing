"use client";

import { IndustryPageTemplate } from "@/components/IndustryPageTemplate";

export default function RealEstatePage() {
    return (
        <IndustryPageTemplate
            name="Real Estate"
            tagline="Industry Expertise"
            heroDescription="We help real estate agencies, property developers, and PropTech companies generate quality leads and build lasting brands. Local expertise combined with digital sophistication."
            icon="apartment"
            heroImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=3840&q=80"
            secondaryImage="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=3840&q=80"
            stats={[
                { value: "285%", label: "Lead Generation" },
                { value: "52%", label: "Cost Per Lead" },
                { value: "Top 3", label: "Local Rankings" },
                { value: "4.8x", label: "Marketing ROI" },
            ]}
            challenges={{
                intro: "Real estate marketing is intensely local and highly competitive. Standing out requires a combination of brand building, lead generation, and nurturing prospects through long consideration cycles.",
                items: [
                    {
                        title: "Portal Dependency",
                        description: "Many agents rely too heavily on Zillow, Realtor.com, and other portals, paying premium prices for shared leads.",
                    },
                    {
                        title: "Local Competition",
                        description: "Every market has established agents and teams with deep relationships. Breaking through requires differentiation.",
                    },
                    {
                        title: "Long Sales Cycles",
                        description: "Buyers often take months or years to transact. Staying top of mind throughout that journey is essential.",
                    },
                    {
                        title: "Seasonal Fluctuations",
                        description: "Real estate is cyclical. Marketing needs to generate consistent leads while managing budget through slow seasons.",
                    },
                    {
                        title: "Market Volatility",
                        description: "Interest rates, inventory, and economic conditions constantly shift. Messaging needs to adapt accordingly.",
                    },
                    {
                        title: "Brand vs. Lead Gen",
                        description: "Balancing immediate lead generation with long-term brand building requires strategic resource allocation.",
                    },
                ],
            }}
            solutions={{
                intro: "Hyperlocal Marketing That Converts",
                description: "We build marketing systems that establish you as the local authority while generating a consistent flow of qualified leads. From SEO that dominates local search to nurturing campaigns that convert prospects over time, we create sustainable competitive advantages in your market.",
            }}
            services={[
                {
                    id: "seo",
                    name: "Local SEO",
                    description: "Dominate search results for neighborhoods, property types, and local real estate terms.",
                    icon: "search",
                },
                {
                    id: "paid-media",
                    name: "Lead Generation",
                    description: "Facebook, Google, and programmatic campaigns that generate buyer and seller leads.",
                    icon: "campaign",
                },
                {
                    id: "content",
                    name: "Market Content",
                    description: "Neighborhood guides, market reports, and content that positions you as the local expert.",
                    icon: "edit_note",
                },
                {
                    id: "email",
                    name: "Lead Nurturing",
                    description: "Long-term drip campaigns that keep you top of mind until prospects are ready to move.",
                    icon: "mail",
                },
                {
                    id: "social-media",
                    name: "Social Media",
                    description: "Build your personal brand and showcase listings on Instagram, Facebook, and LinkedIn.",
                    icon: "share",
                },
                {
                    id: "creative",
                    name: "Listing Marketing",
                    description: "Photography direction, virtual tours, and marketing materials that sell properties faster.",
                    icon: "brush",
                },
            ]}
            whyUs={{
                title: "Why Real Estate Professionals Choose Us",
                points: [
                    "Deep understanding of local search and hyperlocal marketing strategies",
                    "Experience with individual agents, teams, and multi-office brokerages",
                    "Proven lead generation systems that reduce portal dependency",
                    "CRM integration expertise with Follow Up Boss, kvCORE, and others",
                    "Content production for neighborhood expertise and market authority",
                    "Video marketing capabilities for listing promotion and personal branding",
                ],
            }}
            caseStudyTeaser={{
                title: "Luxury Real Estate Team",
                result: "$2.4M Additional GCI",
                description: "Built an SEO and content engine that generated 340 additional leads, resulting in $2.4M in gross commission income over 18 months.",
            }}
            relatedIndustries={[
                { slug: "professional-services", name: "Legal", icon: "work" },
                { slug: "finance-fintech", name: "Mortgage", icon: "account_balance" },
                { slug: "saas-technology", name: "PropTech", icon: "cloud" },
                { slug: "hospitality-travel", name: "Hospitality", icon: "flight" },
                { slug: "manufacturing-b2b", name: "Construction", icon: "precision_manufacturing" },
            ]}
        />
    );
}
