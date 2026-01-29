"use client";

import { IndustryPageTemplate } from "@/components/IndustryPageTemplate";

export default function HealthcareWellnessPage() {
    return (
        <IndustryPageTemplate
            name="Healthcare & Wellness"
            tagline="Industry Expertise"
            heroDescription="We help healthcare providers, wellness brands, and health tech companies grow responsibly. Compliant marketing that builds trust and drives patient acquisition."
            icon="health_and_safety"
            heroImage="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=3840&q=80"
            secondaryImage="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=3840&q=80"
            stats={[
                { value: "215%", label: "Patient Inquiries" },
                { value: "67%", label: "Cost Per Lead" },
                { value: "4.5x", label: "Content Engagement" },
                { value: "92%", label: "Compliance Rate" },
            ]}
            challenges={{
                intro: "Healthcare marketing operates under unique constraints. You need to reach patients effectively while maintaining strict compliance with regulations and ethical standards.",
                items: [
                    {
                        title: "Regulatory Compliance",
                        description: "HIPAA, FTC guidelines, and medical advertising rules create complex requirements that vary by specialty and jurisdiction.",
                    },
                    {
                        title: "Trust & Credibility",
                        description: "Patients research extensively and need to trust providers before booking. Building that trust requires authentic communication.",
                    },
                    {
                        title: "Competitive Markets",
                        description: "Healthcare is increasingly competitive, with private equity-backed groups and telehealth disrupting traditional practices.",
                    },
                    {
                        title: "Patient Privacy",
                        description: "Marketing must respect patient privacy while still being able to measure effectiveness and optimize campaigns.",
                    },
                    {
                        title: "Multi-Location Complexity",
                        description: "Managing marketing across multiple locations, providers, and service lines requires sophisticated coordination.",
                    },
                    {
                        title: "Online Reputation",
                        description: "Reviews heavily influence patient choice. Managing and improving online reputation is essential but challenging.",
                    },
                ],
            }}
            solutions={{
                intro: "Patient-Centered Growth",
                description: "We build marketing systems that attract patients while maintaining the highest standards of compliance and ethics. From local SEO to content marketing, every tactic is designed to educate, build trust, and drive qualified inquiries. Our team understands healthcare regulations and implements appropriate safeguards.",
            }}
            services={[
                {
                    id: "seo",
                    name: "Healthcare SEO",
                    description: "Local and specialty SEO that helps patients find you when they're searching for care.",
                    icon: "search",
                },
                {
                    id: "content",
                    name: "Patient Education",
                    description: "Content that educates patients, builds trust, and positions you as the authority.",
                    icon: "edit_note",
                },
                {
                    id: "paid-media",
                    name: "Compliant Paid Media",
                    description: "Google and social advertising that follows platform and regulatory guidelines.",
                    icon: "campaign",
                },
                {
                    id: "social-media",
                    name: "Social Media",
                    description: "Humanize your practice and connect with patients on social platforms.",
                    icon: "share",
                },
                {
                    id: "email",
                    name: "Patient Communications",
                    description: "Nurturing campaigns that keep patients engaged and drive retention.",
                    icon: "mail",
                },
                {
                    id: "analytics",
                    name: "Privacy-Safe Analytics",
                    description: "Track marketing performance while maintaining patient privacy compliance.",
                    icon: "analytics",
                },
            ]}
            whyUs={{
                title: "Why Healthcare Organizations Choose Us",
                points: [
                    "Deep understanding of HIPAA, FTC, and state medical advertising regulations",
                    "Experience with multi-location healthcare groups and private practices",
                    "Proven patient acquisition strategies for various specialties",
                    "Reputation management expertise including review generation and response",
                    "Privacy-compliant tracking and attribution systems",
                    "Content production that balances medical accuracy with accessibility",
                ],
            }}
            caseStudyTeaser={{
                title: "Multi-Location Dental Group",
                result: "340% New Patient Growth",
                description: "Built an integrated local SEO and paid media strategy that tripled new patient appointments across 8 locations.",
            }}
            relatedIndustries={[
                { slug: "saas-technology", name: "HealthTech", icon: "cloud" },
                { slug: "professional-services", name: "Medical Legal", icon: "work" },
                { slug: "ecommerce-retail", name: "Wellness D2C", icon: "storefront" },
                { slug: "nonprofits-ngos", name: "Health NPOs", icon: "volunteer_activism" },
                { slug: "education-edtech", name: "Health Ed", icon: "school" },
            ]}
        />
    );
}
