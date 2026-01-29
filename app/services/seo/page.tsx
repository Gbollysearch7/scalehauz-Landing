"use client";

import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export default function SEOPage() {
    return (
        <ServicePageTemplate
            title="Search Engine Optimization"
            tagline="SEO Services"
            heroDescription="Technical excellence meets content strategy. We engineer SEO systems that drive predictable organic growth, reducing dependency on paid channels while building long-term digital authority."
            icon="search"
            heroImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=3840&q=80"
            secondaryImage="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=3840&q=80"
            metrics={[
                { value: "340%", label: "Avg Traffic Growth" },
                { value: "2.5x", label: "Lead Generation" },
                { value: "65%", label: "Cost Reduction" },
                { value: "Top 10", label: "Rankings Achieved" },
            ]}
            whyImportant={{
                title: "Why SEO is Your Growth Foundation",
                description: "Organic search remains the highest-intent traffic source for most businesses. Unlike paid advertising that stops the moment you pause spending, SEO builds compounding returns over time. Your visibility grows, your authority increases, and your cost per acquisition decreases.",
                points: [
                    "53% of all website traffic comes from organic search",
                    "SEO leads have a 14.6% close rate vs 1.7% for outbound",
                    "75% of users never scroll past the first page of results",
                    "Organic traffic compounds while paid traffic is linear",
                ],
            }}
            whatWeOffer={{
                description: "From technical foundations to content strategy, we build comprehensive SEO systems designed for sustainable growth.",
                features: [
                    {
                        title: "Technical SEO",
                        items: [
                            "Site architecture optimization",
                            "Core Web Vitals improvement",
                            "Crawlability & indexation fixes",
                            "Schema markup implementation",
                            "Mobile optimization",
                            "Site speed enhancement",
                        ],
                    },
                    {
                        title: "On-Page Optimization",
                        items: [
                            "Keyword research & mapping",
                            "Content optimization",
                            "Meta tag strategy",
                            "Internal linking structure",
                            "Featured snippet targeting",
                            "Content gap analysis",
                        ],
                    },
                    {
                        title: "Off-Page & Authority",
                        items: [
                            "Link building campaigns",
                            "Digital PR outreach",
                            "Brand mention monitoring",
                            "Competitor backlink analysis",
                            "Authority building strategy",
                            "Local citation management",
                        ],
                    },
                    {
                        title: "Content Strategy",
                        items: [
                            "Topic cluster planning",
                            "Content calendar development",
                            "Blog & article production",
                            "Landing page optimization",
                            "Content refresh programs",
                            "AI-assisted content scaling",
                        ],
                    },
                    {
                        title: "Local SEO",
                        items: [
                            "Google Business Profile optimization",
                            "Local keyword targeting",
                            "Review management strategy",
                            "Local citation building",
                            "Multi-location SEO",
                            "Local landing pages",
                        ],
                    },
                    {
                        title: "E-commerce SEO",
                        items: [
                            "Product page optimization",
                            "Category structure strategy",
                            "Product schema implementation",
                            "Inventory & pricing markup",
                            "Shopping feed optimization",
                            "Review integration",
                        ],
                    },
                ],
            }}
            benefits={[
                {
                    title: "Sustainable Growth",
                    description: "Build assets that compound over time rather than renting visibility through ads.",
                    icon: "trending_up",
                },
                {
                    title: "Higher Trust",
                    description: "Organic results carry more credibility than paid placements in user perception.",
                    icon: "verified",
                },
                {
                    title: "Lower CAC",
                    description: "Reduce customer acquisition costs as organic traffic scales without linear cost increase.",
                    icon: "savings",
                },
                {
                    title: "Market Intelligence",
                    description: "Gain insights into what your audience searches for and how competitors position.",
                    icon: "insights",
                },
            ]}
            process={[
                {
                    step: "01",
                    title: "Audit",
                    description: "Comprehensive analysis of your current SEO health, competitors, and opportunities.",
                },
                {
                    step: "02",
                    title: "Strategy",
                    description: "Custom roadmap prioritizing quick wins and long-term authority building.",
                },
                {
                    step: "03",
                    title: "Execute",
                    description: "Systematic implementation of technical fixes, content, and link building.",
                },
                {
                    step: "04",
                    title: "Scale",
                    description: "Continuous optimization and expansion into new keyword territories.",
                },
            ]}
            testimonial={{
                quote: "ScaleHauz transformed our organic presence. We went from page 3 to consistently ranking in the top 3 for our core keywords. The traffic growth has been phenomenal.",
                author: "Marketing Director",
                role: "Head of Digital",
                company: "SaaS Company",
            }}
            relatedServices={[
                {
                    id: "content",
                    name: "Content Strategy",
                    description: "AI-powered content production that feeds your SEO engine.",
                    icon: "edit_note",
                },
                {
                    id: "analytics",
                    name: "Analytics & Attribution",
                    description: "Track every ranking, click, and conversion with precision.",
                    icon: "analytics",
                },
                {
                    id: "paid-media",
                    name: "Paid Media",
                    description: "Complement organic growth with targeted paid campaigns.",
                    icon: "campaign",
                },
            ]}
        />
    );
}
