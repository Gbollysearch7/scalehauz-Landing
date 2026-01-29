"use client";

import { IndustryPageTemplate } from "@/components/IndustryPageTemplate";

export default function EducationEdtechPage() {
    return (
        <IndustryPageTemplate
            name="Education & EdTech"
            tagline="Industry Expertise"
            heroDescription="We help educational institutions and EdTech companies reach learners and drive enrollment. From K-12 to higher ed to online learning platforms, we build growth systems that scale impact."
            icon="school"
            heroImage="https://images.unsplash.com/photo-1523050854058-8df90110c476?w=3840&q=80"
            secondaryImage="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=3840&q=80"
            stats={[
                { value: "185%", label: "Enrollment Growth" },
                { value: "42%", label: "Cost Per Enrollment" },
                { value: "3.5x", label: "Content Engagement" },
                { value: "67%", label: "Lead Quality" },
            ]}
            challenges={{
                intro: "Education marketing requires reaching multiple stakeholders, whether students, parents, administrators, or employers, each with different decision criteria and journeys.",
                items: [
                    {
                        title: "Multiple Decision Makers",
                        description: "Students, parents, employers, and administrators all influence education decisions differently at various stages.",
                    },
                    {
                        title: "Seasonal Cycles",
                        description: "Enrollment periods create intense competition for attention during specific windows, with quieter periods in between.",
                    },
                    {
                        title: "Demonstrating Outcomes",
                        description: "Prospective students want proof of results, whether job placement, skill development, or academic achievement.",
                    },
                    {
                        title: "Digital Disruption",
                        description: "Traditional institutions face competition from online alternatives, MOOCs, and alternative credentials.",
                    },
                    {
                        title: "Trust & Credibility",
                        description: "Education is a significant investment. Earning trust requires demonstrating legitimacy and outcomes.",
                    },
                    {
                        title: "Long Research Phase",
                        description: "Students research extensively before committing. The consideration phase can last months or years.",
                    },
                ],
            }}
            solutions={{
                intro: "Enrollment-Driven Marketing",
                description: "We build marketing systems that attract qualified prospective students and guide them through the enrollment journey. From awareness campaigns to application nurturing, every touchpoint is optimized to demonstrate value and drive action. We understand education decision-making and create strategies that work.",
            }}
            services={[
                {
                    id: "paid-media",
                    name: "Student Acquisition",
                    description: "Targeted campaigns on Google, Meta, and TikTok that reach prospective students where they are.",
                    icon: "campaign",
                },
                {
                    id: "content",
                    name: "Educational Content",
                    description: "Program information, career guides, and content that demonstrates your value proposition.",
                    icon: "edit_note",
                },
                {
                    id: "seo",
                    name: "Program SEO",
                    description: "Rank for program-specific searches and capture high-intent organic traffic.",
                    icon: "search",
                },
                {
                    id: "email",
                    name: "Enrollment Nurturing",
                    description: "Automated sequences that guide inquiries through application and enrollment.",
                    icon: "mail",
                },
                {
                    id: "social-media",
                    name: "Social & Community",
                    description: "Build community and showcase student success on social platforms.",
                    icon: "share",
                },
                {
                    id: "analytics",
                    name: "Enrollment Attribution",
                    description: "Track the complete journey from first touch to enrolled student.",
                    icon: "analytics",
                },
            ]}
            whyUs={{
                title: "Why Education Organizations Choose Us",
                points: [
                    "Experience with universities, bootcamps, online courses, and K-12 institutions",
                    "Understanding of enrollment cycles and seasonal marketing dynamics",
                    "Proven lead nurturing strategies that convert inquiries to applications",
                    "Content production that speaks to students, parents, and employers",
                    "Platform expertise for reaching Gen Z and millennial learners",
                    "CRM integration with Slate, Salesforce, and other enrollment systems",
                ],
            }}
            caseStudyTeaser={{
                title: "Online Learning Platform",
                result: "4.2x Enrollment Growth",
                description: "Scaled a professional certification program from 200 to 840 enrollments per quarter through integrated content and performance marketing.",
            }}
            relatedIndustries={[
                { slug: "saas-technology", name: "EdTech", icon: "cloud" },
                { slug: "professional-services", name: "Training", icon: "work" },
                { slug: "healthcare-wellness", name: "Med Ed", icon: "health_and_safety" },
                { slug: "nonprofits-ngos", name: "Non-profits", icon: "volunteer_activism" },
                { slug: "finance-fintech", name: "FinEd", icon: "account_balance" },
            ]}
        />
    );
}
