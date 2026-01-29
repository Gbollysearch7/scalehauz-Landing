"use client";

import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export default function PaidMediaPage() {
    return (
        <ServicePageTemplate
            title="Paid Media & Performance Marketing"
            tagline="Paid Advertising"
            heroDescription="We engineer paid media systems that compound. From Meta to Google to TikTok, our AI-driven approach finds and scales winning campaigns faster than humanly possible, turning ad spend into predictable revenue."
            icon="campaign"
            heroImage="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=3840&q=80"
            secondaryImage="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=3840&q=80"
            metrics={[
                { value: "12x", label: "Avg ROAS" },
                { value: "45%", label: "Lower CPA" },
                { value: "$50M+", label: "Ad Spend Managed" },
                { value: "3.2x", label: "Revenue Growth" },
            ]}
            whyImportant={{
                title: "Why Paid Media Accelerates Growth",
                description: "Paid advertising provides the fastest path to market validation and revenue growth. When optimized correctly, it creates a predictable acquisition engine that scales with your business. The key is systematic testing, relentless optimization, and creative that resonates.",
                points: [
                    "Immediate visibility while organic channels build",
                    "Precise targeting based on demographics, behavior, and intent",
                    "Complete control over budget, timing, and messaging",
                    "Rich data for understanding customer behavior and preferences",
                ],
            }}
            whatWeOffer={{
                description: "Full-funnel paid media management across all major platforms, powered by AI optimization and creative excellence.",
                features: [
                    {
                        title: "Google Ads",
                        items: [
                            "Search campaigns",
                            "Shopping & Performance Max",
                            "Display advertising",
                            "YouTube video ads",
                            "Remarketing campaigns",
                            "Local service ads",
                        ],
                    },
                    {
                        title: "Meta Advertising",
                        items: [
                            "Facebook & Instagram ads",
                            "Dynamic product ads",
                            "Lead generation campaigns",
                            "Advantage+ shopping",
                            "Messenger & WhatsApp ads",
                            "Lookalike audiences",
                        ],
                    },
                    {
                        title: "Emerging Platforms",
                        items: [
                            "TikTok advertising",
                            "LinkedIn B2B campaigns",
                            "Pinterest shopping",
                            "Snapchat ads",
                            "Reddit advertising",
                            "Connected TV",
                        ],
                    },
                    {
                        title: "Programmatic",
                        items: [
                            "Display network buying",
                            "Native advertising",
                            "Audio ads (Spotify, podcasts)",
                            "DOOH (Digital out-of-home)",
                            "Cross-device targeting",
                            "Contextual targeting",
                        ],
                    },
                    {
                        title: "Creative Production",
                        items: [
                            "Ad creative design",
                            "Video production",
                            "UGC-style content",
                            "Dynamic creative testing",
                            "Landing page design",
                            "Conversion optimization",
                        ],
                    },
                    {
                        title: "Strategy & Analytics",
                        items: [
                            "Media mix modeling",
                            "Attribution setup",
                            "Budget allocation",
                            "Competitive analysis",
                            "A/B testing frameworks",
                            "Performance reporting",
                        ],
                    },
                ],
            }}
            benefits={[
                {
                    title: "Predictable Revenue",
                    description: "Turn advertising into a reliable growth lever with consistent, scalable returns.",
                    icon: "attach_money",
                },
                {
                    title: "Rapid Learning",
                    description: "Test messaging, audiences, and offers faster than any other channel allows.",
                    icon: "speed",
                },
                {
                    title: "Precise Targeting",
                    description: "Reach exactly who you want, when they're ready to buy.",
                    icon: "target",
                },
                {
                    title: "Full-Funnel Impact",
                    description: "Drive awareness, consideration, and conversion with integrated campaigns.",
                    icon: "conversion_path",
                },
            ]}
            process={[
                {
                    step: "01",
                    title: "Audit",
                    description: "Deep analysis of current campaigns, tracking setup, and competitive landscape.",
                },
                {
                    step: "02",
                    title: "Strategy",
                    description: "Channel selection, budget allocation, and audience targeting framework.",
                },
                {
                    step: "03",
                    title: "Launch",
                    description: "Campaign build-out with multiple creative variants and systematic testing.",
                },
                {
                    step: "04",
                    title: "Optimize",
                    description: "AI-powered optimization, scaling winners, and continuous creative refresh.",
                },
            ]}
            testimonial={{
                quote: "Our ROAS went from 2x to 8x within 90 days. The team's systematic approach to testing and optimization completely transformed our paid strategy.",
                author: "Ecommerce Director",
                role: "VP of Growth",
                company: "D2C Brand",
            }}
            relatedServices={[
                {
                    id: "creative",
                    name: "Creative Production",
                    description: "Performance-driven design that converts browsers to buyers.",
                    icon: "brush",
                },
                {
                    id: "analytics",
                    name: "Analytics & Attribution",
                    description: "Know exactly which campaigns drive real business results.",
                    icon: "analytics",
                },
                {
                    id: "email",
                    name: "Email & Lifecycle",
                    description: "Maximize LTV of customers acquired through paid channels.",
                    icon: "mail",
                },
            ]}
        />
    );
}
