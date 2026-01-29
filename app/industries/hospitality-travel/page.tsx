"use client";

import { IndustryPageTemplate } from "@/components/IndustryPageTemplate";

export default function HospitalityTravelPage() {
    return (
        <IndustryPageTemplate
            name="Hospitality & Travel"
            tagline="Industry Expertise"
            heroDescription="We help hotels, restaurants, travel agencies, and experience providers fill rooms, tables, and tours. Destination marketing that inspires action and drives direct bookings."
            icon="flight"
            heroImage="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=3840&q=80"
            secondaryImage="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=3840&q=80"
            stats={[
                { value: "215%", label: "Direct Bookings" },
                { value: "48%", label: "OTA Dependency" },
                { value: "3.8x", label: "Social Engagement" },
                { value: "156%", label: "Revenue Growth" },
            ]}
            challenges={{
                intro: "Hospitality marketing competes for attention in a highly visual, emotional category while battling OTA dependency and increasingly sophisticated traveler expectations.",
                items: [
                    {
                        title: "OTA Dependency",
                        description: "Booking.com, Expedia, and other OTAs take significant commissions. Driving direct bookings is essential for profitability.",
                    },
                    {
                        title: "Visual Competition",
                        description: "Travelers are bombarded with stunning imagery. Standing out requires exceptional visual content and storytelling.",
                    },
                    {
                        title: "Seasonal Volatility",
                        description: "Demand fluctuates dramatically by season. Marketing needs to smooth peaks and valleys while maximizing high seasons.",
                    },
                    {
                        title: "Review Influence",
                        description: "TripAdvisor, Google, and social reviews heavily influence booking decisions. Reputation management is critical.",
                    },
                    {
                        title: "Complex Attribution",
                        description: "Travelers research across many touchpoints before booking. Understanding what drove the decision is challenging.",
                    },
                    {
                        title: "Local Discovery",
                        description: "Restaurants and experiences need to capture travelers who are searching in the moment while in destination.",
                    },
                ],
            }}
            solutions={{
                intro: "Destination Marketing That Converts",
                description: "We build marketing systems that inspire travelers, drive direct bookings, and build lasting guest relationships. From stunning visual content to sophisticated retargeting, every element is designed to reduce OTA dependency and maximize revenue per guest.",
            }}
            services={[
                {
                    id: "paid-media",
                    name: "Travel Advertising",
                    description: "Campaigns across Meta, Google, and programmatic that reach travelers at every stage of planning.",
                    icon: "campaign",
                },
                {
                    id: "content",
                    name: "Destination Content",
                    description: "Inspiring content that captures the experience and drives booking intent.",
                    icon: "edit_note",
                },
                {
                    id: "social-media",
                    name: "Social Media",
                    description: "Visual storytelling on Instagram, TikTok, and Facebook that builds wanderlust.",
                    icon: "share",
                },
                {
                    id: "seo",
                    name: "Local & Travel SEO",
                    description: "Capture organic search traffic from travelers researching destinations and experiences.",
                    icon: "search",
                },
                {
                    id: "email",
                    name: "Guest Lifecycle",
                    description: "Pre-arrival, in-stay, and post-stay communications that maximize guest value.",
                    icon: "mail",
                },
                {
                    id: "creative",
                    name: "Visual Production",
                    description: "Photography, video, and creative that showcases your property and experience.",
                    icon: "brush",
                },
            ]}
            whyUs={{
                title: "Why Hospitality Brands Choose Us",
                points: [
                    "Experience with hotels, restaurants, tour operators, and travel agencies",
                    "Proven direct booking strategies that reduce OTA commission costs",
                    "Visual content expertise including photography and video production partnerships",
                    "Reputation management systems for reviews across all platforms",
                    "Seasonal marketing strategies that maximize revenue year-round",
                    "Integration with booking engines, PMS, and restaurant management systems",
                ],
            }}
            caseStudyTeaser={{
                title: "Boutique Hotel Group",
                result: "68% Direct Booking Increase",
                description: "Reduced OTA dependency from 72% to 44% of bookings while increasing overall revenue by 34% through direct channel optimization.",
            }}
            relatedIndustries={[
                { slug: "ecommerce-retail", name: "E-commerce", icon: "storefront" },
                { slug: "real-estate", name: "Real Estate", icon: "apartment" },
                { slug: "healthcare-wellness", name: "Wellness", icon: "health_and_safety" },
                { slug: "nonprofits-ngos", name: "Tourism", icon: "volunteer_activism" },
                { slug: "saas-technology", name: "TravelTech", icon: "cloud" },
            ]}
        />
    );
}
