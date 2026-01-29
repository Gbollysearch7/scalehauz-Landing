"use client";

import { IndustryPageTemplate } from "@/components/IndustryPageTemplate";

export default function NonprofitsNGOsPage() {
    return (
        <IndustryPageTemplate
            name="Non-profits & NGOs"
            tagline="Industry Expertise"
            heroDescription="We help non-profits, charities, and social enterprises amplify their impact through strategic marketing. Mission-driven campaigns that inspire donors, volunteers, and advocates."
            icon="volunteer_activism"
            heroImage="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=3840&q=80"
            secondaryImage="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=3840&q=80"
            stats={[
                { value: "185%", label: "Donation Growth" },
                { value: "3.5x", label: "Email Performance" },
                { value: "42%", label: "Cost Per Donation" },
                { value: "285%", label: "Awareness Reach" },
            ]}
            challenges={{
                intro: "Non-profit marketing operates with limited budgets while competing for attention against well-funded commercial brands. Every dollar must maximize impact.",
                items: [
                    {
                        title: "Limited Budgets",
                        description: "Marketing budgets are constrained by the need to maximize program spending. Efficiency is essential.",
                    },
                    {
                        title: "Donor Fatigue",
                        description: "Donors are approached constantly by many causes. Breaking through requires compelling storytelling.",
                    },
                    {
                        title: "Measuring Impact",
                        description: "Demonstrating ROI is challenging when success metrics include awareness, engagement, and long-term behavior change.",
                    },
                    {
                        title: "Seasonal Giving",
                        description: "Donations concentrate around year-end and specific campaigns. Sustaining engagement year-round is challenging.",
                    },
                    {
                        title: "Multi-Stakeholder Communication",
                        description: "Donors, volunteers, beneficiaries, and partners all need different messages and engagement approaches.",
                    },
                    {
                        title: "Volunteer Recruitment",
                        description: "Finding and engaging volunteers requires different strategies than donor acquisition.",
                    },
                ],
            }}
            solutions={{
                intro: "Mission-Driven Marketing That Inspires Action",
                description: "We build marketing systems that tell your story compellingly, engage supporters meaningfully, and drive the donations and volunteer hours your mission needs. From emotional storytelling to data-driven fundraising campaigns, we help you maximize impact with every marketing dollar.",
            }}
            services={[
                {
                    id: "email",
                    name: "Fundraising Email",
                    description: "Donor communications that drive donations while building lasting relationships.",
                    icon: "mail",
                },
                {
                    id: "content",
                    name: "Impact Storytelling",
                    description: "Compelling narratives that showcase your work and inspire support.",
                    icon: "edit_note",
                },
                {
                    id: "paid-media",
                    name: "Donation Campaigns",
                    description: "Google Ad Grants optimization and social campaigns that maximize reach.",
                    icon: "campaign",
                },
                {
                    id: "social-media",
                    name: "Community Building",
                    description: "Social strategies that engage supporters and amplify your message.",
                    icon: "share",
                },
                {
                    id: "seo",
                    name: "Cause SEO",
                    description: "Capture organic traffic from people searching for ways to help.",
                    icon: "search",
                },
                {
                    id: "analytics",
                    name: "Donor Analytics",
                    description: "Understand donor behavior and optimize for lifetime value.",
                    icon: "analytics",
                },
            ]}
            whyUs={{
                title: "Why Non-profits Choose Us",
                points: [
                    "Experience with charities, foundations, and social enterprises of all sizes",
                    "Google Ad Grants expertise maximizing $10K monthly in free advertising",
                    "Storytelling capabilities that convey impact emotionally and authentically",
                    "Donor lifecycle strategies that increase retention and lifetime value",
                    "Event and campaign marketing for galas, giving days, and peer-to-peer",
                    "Non-profit friendly pricing that respects budget constraints",
                ],
            }}
            caseStudyTeaser={{
                title: "Environmental Non-profit",
                result: "256% Donation Increase",
                description: "Transformed year-end giving campaign through email optimization and social storytelling, increasing donations from $180K to $640K.",
            }}
            relatedIndustries={[
                { slug: "healthcare-wellness", name: "Health NPOs", icon: "health_and_safety" },
                { slug: "education-edtech", name: "Education", icon: "school" },
                { slug: "professional-services", name: "Consulting", icon: "work" },
                { slug: "hospitality-travel", name: "Cultural", icon: "flight" },
                { slug: "finance-fintech", name: "Foundation", icon: "account_balance" },
            ]}
        />
    );
}
