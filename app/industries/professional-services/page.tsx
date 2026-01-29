"use client";

import { IndustryPageTemplate } from "@/components/IndustryPageTemplate";

export default function ProfessionalServicesPage() {
    return (
        <IndustryPageTemplate
            name="Professional Services"
            tagline="Industry Expertise"
            heroDescription="We help law firms, consulting practices, and professional service firms build authority and generate qualified leads. Trust-based marketing that positions you as the obvious choice."
            icon="work"
            heroImage="https://images.unsplash.com/photo-1507679799987-c73b1e76ad0c?w=3840&q=80"
            secondaryImage="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=3840&q=80"
            stats={[
                { value: "156%", label: "Lead Growth" },
                { value: "4.2x", label: "Content ROI" },
                { value: "38%", label: "Referral Increase" },
                { value: "Top 3", label: "Search Rankings" },
            ]}
            challenges={{
                intro: "Professional services marketing requires a delicate balance. You need to demonstrate expertise without appearing promotional, and build trust before a prospect ever speaks to you.",
                items: [
                    {
                        title: "Trust-Based Buying",
                        description: "Clients choose professionals they trust. Building that trust through marketing requires demonstrating expertise, not making claims.",
                    },
                    {
                        title: "Long Consideration",
                        description: "Prospects research extensively before engaging. Your content and reputation need to guide them through a long decision process.",
                    },
                    {
                        title: "Referral Dependency",
                        description: "Many firms rely heavily on referrals but lack systems to generate them consistently or supplement with other channels.",
                    },
                    {
                        title: "Partner Buy-In",
                        description: "Marketing often requires participation from partners who have limited time and varying enthusiasm for self-promotion.",
                    },
                    {
                        title: "Compliance Constraints",
                        description: "Legal, financial, and other regulated industries have strict rules about what you can say and claim.",
                    },
                    {
                        title: "Differentiation",
                        description: "Most firms offer similar services. Standing out requires clear positioning and demonstrated thought leadership.",
                    },
                ],
            }}
            solutions={{
                intro: "Authority-Building That Drives Inquiries",
                description: "We position your firm as the definitive expert in your practice areas. Through strategic content, SEO, and targeted outreach, we build the authority that attracts high-value clients and strengthens referral networks. Our approach respects professional standards while maximizing your market presence.",
            }}
            services={[
                {
                    id: "content",
                    name: "Thought Leadership",
                    description: "Articles, whitepapers, and insights that demonstrate expertise and attract ideal clients.",
                    icon: "edit_note",
                },
                {
                    id: "seo",
                    name: "Local & Specialty SEO",
                    description: "Dominate search results for your practice areas and geographic markets.",
                    icon: "search",
                },
                {
                    id: "social-media",
                    name: "LinkedIn Strategy",
                    description: "Build partner profiles and firm presence on the platform where professionals research.",
                    icon: "share",
                },
                {
                    id: "email",
                    name: "Client Nurturing",
                    description: "Stay top of mind with clients and referral sources through valuable communications.",
                    icon: "mail",
                },
                {
                    id: "creative",
                    name: "Brand & Design",
                    description: "Professional visual identity that reflects your firm's expertise and values.",
                    icon: "brush",
                },
                {
                    id: "analytics",
                    name: "Lead Attribution",
                    description: "Track where your best clients come from and optimize your marketing investment.",
                    icon: "analytics",
                },
            ]}
            whyUs={{
                title: "Why Professional Service Firms Choose Us",
                points: [
                    "Experience working with law firms, accounting practices, and consulting firms",
                    "Understanding of professional ethics rules and compliance requirements",
                    "Ghostwriting capabilities that capture partner voices authentically",
                    "Proven track record building thought leadership that generates inbound inquiries",
                    "Systems for capturing and amplifying client testimonials and case results",
                    "Referral marketing programs that systematically generate recommendations",
                ],
            }}
            caseStudyTeaser={{
                title: "Mid-Size Law Firm",
                result: "89% Inquiry Growth",
                description: "Built a content and SEO engine that nearly doubled qualified inquiries for a 40-attorney firm specializing in commercial litigation.",
            }}
            relatedIndustries={[
                { slug: "finance-fintech", name: "Finance", icon: "account_balance" },
                { slug: "healthcare-wellness", name: "Healthcare", icon: "health_and_safety" },
                { slug: "real-estate", name: "Real Estate", icon: "apartment" },
                { slug: "saas-technology", name: "Technology", icon: "cloud" },
                { slug: "nonprofits-ngos", name: "Non-profits", icon: "volunteer_activism" },
            ]}
        />
    );
}
