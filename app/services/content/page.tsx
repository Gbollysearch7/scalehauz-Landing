"use client";

import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export default function ContentStrategyPage() {
    return (
        <ServicePageTemplate
            title="Content Strategy & Production"
            tagline="Content Marketing"
            heroDescription="Our content engine ingests your brand voice and performance data to generate high-converting content at scale. Quality and quantity, finally aligned. Build authority, drive traffic, and convert readers into customers."
            icon="edit_note"
            heroImage="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=3840&q=80"
            secondaryImage="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=3840&q=80"
            metrics={[
                { value: "10x", label: "Content Output" },
                { value: "185%", label: "Engagement Increase" },
                { value: "3.5x", label: "Lead Generation" },
                { value: "67%", label: "Cost Savings" },
            ]}
            whyImportant={{
                title: "Why Content is Your Competitive Moat",
                description: "Content is the foundation of modern marketing. It fuels your SEO, powers your social media, nurtures your leads, and establishes your expertise. In an AI-saturated world, distinctive content that genuinely helps your audience is what separates market leaders from also-rans.",
                points: [
                    "Content marketing generates 3x more leads per dollar than paid search",
                    "70% of consumers prefer learning about companies through articles vs. ads",
                    "Brands with blogs generate 67% more leads monthly",
                    "Quality content builds trust that advertising simply cannot buy",
                ],
            }}
            whatWeOffer={{
                description: "End-to-end content strategy and production that drives measurable business results across every stage of the customer journey.",
                features: [
                    {
                        title: "Strategy Development",
                        items: [
                            "Content audit & gap analysis",
                            "Audience persona development",
                            "Topic cluster mapping",
                            "Competitive content analysis",
                            "Editorial calendar planning",
                            "Distribution strategy",
                        ],
                    },
                    {
                        title: "Blog & Article Production",
                        items: [
                            "SEO-optimized blog posts",
                            "Thought leadership articles",
                            "Industry news coverage",
                            "How-to guides & tutorials",
                            "Listicles & roundups",
                            "Guest post placement",
                        ],
                    },
                    {
                        title: "Long-Form Content",
                        items: [
                            "Whitepapers & reports",
                            "E-books & guides",
                            "Case studies",
                            "Original research",
                            "Industry benchmarks",
                            "Annual reports",
                        ],
                    },
                    {
                        title: "Website Copy",
                        items: [
                            "Landing page copy",
                            "Product descriptions",
                            "About & team pages",
                            "Service page content",
                            "FAQ development",
                            "Conversion copy",
                        ],
                    },
                    {
                        title: "Social Content",
                        items: [
                            "Platform-specific content",
                            "Post copywriting",
                            "Caption frameworks",
                            "Thread & carousel scripts",
                            "Community engagement copy",
                            "Social ad copy",
                        ],
                    },
                    {
                        title: "Video & Audio",
                        items: [
                            "Video scripts",
                            "Podcast outlines",
                            "Webinar content",
                            "Tutorial scripts",
                            "Explainer video copy",
                            "Interview preparation",
                        ],
                    },
                ],
            }}
            benefits={[
                {
                    title: "Thought Leadership",
                    description: "Position your brand as the go-to authority in your industry niche.",
                    icon: "psychology",
                },
                {
                    title: "SEO Foundation",
                    description: "Every piece of content is an asset that drives organic traffic long-term.",
                    icon: "search",
                },
                {
                    title: "Lead Nurturing",
                    description: "Guide prospects through their journey with content that answers their questions.",
                    icon: "handshake",
                },
                {
                    title: "Scalable Production",
                    description: "AI-assisted workflows let us produce more content without sacrificing quality.",
                    icon: "auto_awesome",
                },
            ]}
            process={[
                {
                    step: "01",
                    title: "Research",
                    description: "Deep dive into your audience, competitors, and keyword opportunities.",
                },
                {
                    step: "02",
                    title: "Plan",
                    description: "Strategic content calendar aligned with business goals and SEO targets.",
                },
                {
                    step: "03",
                    title: "Create",
                    description: "Production by expert writers with AI assistance for efficiency.",
                },
                {
                    step: "04",
                    title: "Amplify",
                    description: "Distribution, promotion, and continuous optimization based on performance.",
                },
            ]}
            testimonial={{
                quote: "They've transformed our content from an afterthought into our primary growth driver. The quality is exceptional and the output is 5x what our internal team could produce.",
                author: "Content Lead",
                role: "VP Marketing",
                company: "B2B SaaS",
            }}
            relatedServices={[
                {
                    id: "seo",
                    name: "SEO",
                    description: "Ensure your content ranks and drives organic traffic.",
                    icon: "search",
                },
                {
                    id: "social-media",
                    name: "Social Media",
                    description: "Amplify your content across social platforms.",
                    icon: "share",
                },
                {
                    id: "email",
                    name: "Email & Lifecycle",
                    description: "Deliver content directly to engaged subscribers.",
                    icon: "mail",
                },
            ]}
        />
    );
}
