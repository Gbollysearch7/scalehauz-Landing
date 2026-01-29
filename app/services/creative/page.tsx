"use client";

import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export default function CreativePage() {
    return (
        <ServicePageTemplate
            title="Creative Production"
            tagline="Performance-Driven Design"
            heroDescription="Creative that converts. Our designers are marketers first, producing assets optimized for performance, not just aesthetics. From ad creative to landing pages, every pixel earns its place."
            icon="brush"
            heroImage="https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=3840&q=80"
            secondaryImage="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=3840&q=80"
            metrics={[
                { value: "3x", label: "CTR Improvement" },
                { value: "250+", label: "Creatives Monthly" },
                { value: "2.4x", label: "Conversion Lift" },
                { value: "48hr", label: "Turnaround" },
            ]}
            whyImportant={{
                title: "Why Creative is Your Conversion Lever",
                description: "In a world of infinite content, only the most compelling creative cuts through. The difference between a 1% and 3% click-through rate can mean the difference between profitable and unprofitable campaigns. Creative is often the biggest lever for performance improvement.",
                points: [
                    "Creative accounts for up to 70% of campaign performance",
                    "Ad fatigue sets in fast, requiring constant creative refresh",
                    "UGC-style content outperforms polished ads by 4x on social",
                    "Landing page design can double or triple conversion rates",
                ],
            }}
            whatWeOffer={{
                description: "Full-service creative production built for performance marketing. Every asset tested, optimized, and designed to convert.",
                features: [
                    {
                        title: "Ad Creative",
                        items: [
                            "Static image ads",
                            "Carousel designs",
                            "Story & Reels formats",
                            "Display banners",
                            "Native ad creative",
                            "Dynamic templates",
                        ],
                    },
                    {
                        title: "Video Production",
                        items: [
                            "Social video ads",
                            "Product demos",
                            "Testimonial videos",
                            "UGC-style content",
                            "Motion graphics",
                            "YouTube ads",
                        ],
                    },
                    {
                        title: "Landing Pages",
                        items: [
                            "Conversion-focused design",
                            "A/B test variants",
                            "Product landing pages",
                            "Lead generation pages",
                            "Sales pages",
                            "Webinar registration",
                        ],
                    },
                    {
                        title: "Brand Identity",
                        items: [
                            "Logo design",
                            "Brand guidelines",
                            "Color & typography",
                            "Visual identity system",
                            "Brand refresh",
                            "Style guides",
                        ],
                    },
                    {
                        title: "Social Content",
                        items: [
                            "Feed post templates",
                            "Story templates",
                            "Infographics",
                            "Quote graphics",
                            "Data visualizations",
                            "Platform-specific sizes",
                        ],
                    },
                    {
                        title: "Email Design",
                        items: [
                            "Email templates",
                            "Newsletter design",
                            "Promotional emails",
                            "Automated flow design",
                            "Mobile optimization",
                            "Template systems",
                        ],
                    },
                ],
            }}
            benefits={[
                {
                    title: "Performance Focus",
                    description: "Every design decision is driven by conversion data, not just aesthetics.",
                    icon: "trending_up",
                },
                {
                    title: "Speed & Scale",
                    description: "Rapid production enables continuous testing and creative refresh.",
                    icon: "speed",
                },
                {
                    title: "Consistency",
                    description: "Cohesive visual identity across all channels and touchpoints.",
                    icon: "auto_awesome",
                },
                {
                    title: "Data-Informed",
                    description: "Creative iterations based on performance data and user behavior.",
                    icon: "insights",
                },
            ]}
            process={[
                {
                    step: "01",
                    title: "Brief",
                    description: "Understand objectives, audience, and performance benchmarks.",
                },
                {
                    step: "02",
                    title: "Concept",
                    description: "Develop creative concepts based on winning patterns and fresh ideas.",
                },
                {
                    step: "03",
                    title: "Produce",
                    description: "Rapid production of multiple variants for testing.",
                },
                {
                    step: "04",
                    title: "Iterate",
                    description: "Analyze performance and refine based on real data.",
                },
            ]}
            testimonial={{
                quote: "Their creative team thinks like performance marketers. The designs aren't just beautiful, they convert. Our CTR doubled within the first month.",
                author: "Brand Manager",
                role: "Director of Marketing",
                company: "Consumer Brand",
            }}
            relatedServices={[
                {
                    id: "paid-media",
                    name: "Paid Media",
                    description: "Deploy creative across all advertising platforms.",
                    icon: "campaign",
                },
                {
                    id: "content",
                    name: "Content Strategy",
                    description: "Visual content that supports your content engine.",
                    icon: "edit_note",
                },
                {
                    id: "social-media",
                    name: "Social Media",
                    description: "Platform-optimized creative for social engagement.",
                    icon: "share",
                },
            ]}
        />
    );
}
