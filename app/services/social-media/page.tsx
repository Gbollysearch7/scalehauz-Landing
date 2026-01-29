"use client";

import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export default function SocialMediaPage() {
    return (
        <ServicePageTemplate
            title="Social Media Marketing"
            tagline="Community & Engagement"
            heroDescription="Build communities, not just followers. Our social media strategies create genuine engagement that translates into brand loyalty and business growth. Platform strategy, content creation, and community management that actually moves the needle."
            icon="share"
            heroImage="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=3840&q=80"
            secondaryImage="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=3840&q=80"
            metrics={[
                { value: "285%", label: "Engagement Growth" },
                { value: "3.8x", label: "Follower Growth" },
                { value: "42%", label: "Referral Traffic" },
                { value: "500+", label: "Posts Monthly" },
            ]}
            whyImportant={{
                title: "Why Social Media Drives Brand Value",
                description: "Social media is where your audience lives, discovers brands, and forms opinions. It's not just about vanity metrics, it's about building genuine connections that translate into trust, word-of-mouth, and ultimately sales. Done right, social becomes a powerful brand-building and customer acquisition channel.",
                points: [
                    "54% of social browsers use social media to research products",
                    "71% of consumers who have a positive social experience recommend the brand",
                    "Social commerce sales are projected to reach $1.2 trillion by 2025",
                    "Authentic engagement builds trust that paid advertising cannot buy",
                ],
            }}
            whatWeOffer={{
                description: "Complete social media management from strategy to execution. We handle everything so you can focus on running your business.",
                features: [
                    {
                        title: "Strategy Development",
                        items: [
                            "Platform selection & prioritization",
                            "Audience analysis",
                            "Competitor benchmarking",
                            "Content pillar development",
                            "Posting cadence optimization",
                            "KPI framework setup",
                        ],
                    },
                    {
                        title: "Content Creation",
                        items: [
                            "Social-first content production",
                            "Video content (Reels, TikTok)",
                            "Carousel & story design",
                            "Copywriting & captions",
                            "User-generated content curation",
                            "Trending content adaptation",
                        ],
                    },
                    {
                        title: "Community Management",
                        items: [
                            "Comment & DM management",
                            "Brand mention monitoring",
                            "Reputation management",
                            "Influencer engagement",
                            "Crisis response",
                            "Community building",
                        ],
                    },
                    {
                        title: "Platform Management",
                        items: [
                            "Instagram & Facebook",
                            "LinkedIn B2B",
                            "TikTok",
                            "X (Twitter)",
                            "Pinterest",
                            "YouTube Shorts",
                        ],
                    },
                    {
                        title: "Influencer Marketing",
                        items: [
                            "Influencer identification",
                            "Outreach & negotiation",
                            "Campaign management",
                            "Content collaboration",
                            "Performance tracking",
                            "Ambassador programs",
                        ],
                    },
                    {
                        title: "Analytics & Reporting",
                        items: [
                            "Performance dashboards",
                            "Engagement analysis",
                            "Audience insights",
                            "Competitor tracking",
                            "ROI measurement",
                            "Monthly reporting",
                        ],
                    },
                ],
            }}
            benefits={[
                {
                    title: "Brand Awareness",
                    description: "Consistent presence builds recognition and keeps you top of mind.",
                    icon: "visibility",
                },
                {
                    title: "Community Building",
                    description: "Create loyal advocates who spread your message organically.",
                    icon: "groups",
                },
                {
                    title: "Direct Connection",
                    description: "Engage directly with customers, gathering feedback and building relationships.",
                    icon: "connect_without_contact",
                },
                {
                    title: "Traffic Driver",
                    description: "Drive qualified traffic to your website and conversion points.",
                    icon: "moving",
                },
            ]}
            process={[
                {
                    step: "01",
                    title: "Audit",
                    description: "Analyze current presence, competitors, and audience landscape.",
                },
                {
                    step: "02",
                    title: "Strategy",
                    description: "Develop platform-specific strategies aligned with business goals.",
                },
                {
                    step: "03",
                    title: "Execute",
                    description: "Consistent content creation, publishing, and community management.",
                },
                {
                    step: "04",
                    title: "Grow",
                    description: "Continuous optimization based on performance data and trends.",
                },
            ]}
            testimonial={{
                quote: "Our social presence went from an afterthought to our primary brand-building channel. Engagement is up 300% and we're seeing real business results.",
                author: "Brand Director",
                role: "Head of Marketing",
                company: "Lifestyle Brand",
            }}
            relatedServices={[
                {
                    id: "content",
                    name: "Content Strategy",
                    description: "Feed your social channels with compelling content.",
                    icon: "edit_note",
                },
                {
                    id: "creative",
                    name: "Creative Production",
                    description: "Scroll-stopping visuals for every platform.",
                    icon: "brush",
                },
                {
                    id: "paid-media",
                    name: "Paid Media",
                    description: "Amplify your best content with social advertising.",
                    icon: "campaign",
                },
            ]}
        />
    );
}
