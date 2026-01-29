"use client";

import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export default function AnalyticsPage() {
    return (
        <ServicePageTemplate
            title="Analytics & Attribution"
            tagline="Data-Driven Decisions"
            heroDescription="Know exactly what's working. Our attribution systems cut through the noise to show true performance across every touchpoint. Make decisions based on data, not guesswork."
            icon="analytics"
            heroImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=3840&q=80"
            secondaryImage="https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=3840&q=80"
            metrics={[
                { value: "100%", label: "Data Clarity" },
                { value: "35%", label: "Budget Efficiency" },
                { value: "2.8x", label: "Decision Speed" },
                { value: "95%", label: "Tracking Accuracy" },
            ]}
            whyImportant={{
                title: "Why Measurement is Your Superpower",
                description: "You can't improve what you can't measure. In a world of rising acquisition costs and privacy changes, brands that nail measurement and attribution gain an unfair advantage. They know exactly where to invest for maximum return.",
                points: [
                    "Companies with advanced analytics are 2.6x more likely to have higher ROI",
                    "Privacy changes have made proper tracking setup more critical than ever",
                    "Multi-touch attribution reveals the true customer journey",
                    "Real-time data enables rapid optimization and budget reallocation",
                ],
            }}
            whatWeOffer={{
                description: "End-to-end analytics infrastructure that gives you clarity on what's driving growth and where to invest.",
                features: [
                    {
                        title: "Tracking Setup",
                        items: [
                            "GA4 implementation",
                            "Google Tag Manager setup",
                            "Conversion tracking",
                            "Event tracking design",
                            "E-commerce tracking",
                            "Cross-domain tracking",
                        ],
                    },
                    {
                        title: "Attribution Modeling",
                        items: [
                            "Multi-touch attribution",
                            "First & last click analysis",
                            "Data-driven attribution",
                            "Incrementality testing",
                            "Media mix modeling",
                            "Customer journey mapping",
                        ],
                    },
                    {
                        title: "Dashboard & Reporting",
                        items: [
                            "Custom dashboard builds",
                            "Looker Studio reports",
                            "Executive dashboards",
                            "Real-time monitoring",
                            "Automated reporting",
                            "Performance scorecards",
                        ],
                    },
                    {
                        title: "Data Infrastructure",
                        items: [
                            "Data warehouse setup",
                            "CDP implementation",
                            "Data pipeline creation",
                            "Server-side tracking",
                            "Privacy-compliant setup",
                            "Data governance",
                        ],
                    },
                    {
                        title: "Conversion Optimization",
                        items: [
                            "A/B testing programs",
                            "Funnel analysis",
                            "Heat mapping",
                            "User session recording",
                            "Form analytics",
                            "Checkout optimization",
                        ],
                    },
                    {
                        title: "Predictive Analytics",
                        items: [
                            "Customer lifetime value",
                            "Churn prediction",
                            "Demand forecasting",
                            "Lead scoring models",
                            "Revenue attribution",
                            "ROI modeling",
                        ],
                    },
                ],
            }}
            benefits={[
                {
                    title: "Budget Efficiency",
                    description: "Allocate spend to channels that actually drive results, not vanity metrics.",
                    icon: "savings",
                },
                {
                    title: "Faster Decisions",
                    description: "Real-time insights enable rapid optimization and market response.",
                    icon: "bolt",
                },
                {
                    title: "Clear ROI",
                    description: "Demonstrate marketing's impact on revenue to stakeholders confidently.",
                    icon: "monitoring",
                },
                {
                    title: "Future-Proofing",
                    description: "Privacy-compliant setup that works in a cookieless world.",
                    icon: "shield",
                },
            ]}
            process={[
                {
                    step: "01",
                    title: "Audit",
                    description: "Comprehensive review of current tracking, data quality, and gaps.",
                },
                {
                    step: "02",
                    title: "Design",
                    description: "Measurement framework aligned with business objectives and KPIs.",
                },
                {
                    step: "03",
                    title: "Implement",
                    description: "Technical setup of tracking, attribution, and reporting infrastructure.",
                },
                {
                    step: "04",
                    title: "Activate",
                    description: "Training, ongoing optimization, and insight generation.",
                },
            ]}
            testimonial={{
                quote: "We finally understand what's actually driving our growth. The attribution clarity alone has saved us 30% on wasted ad spend.",
                author: "Growth Lead",
                role: "CMO",
                company: "Tech Startup",
            }}
            relatedServices={[
                {
                    id: "paid-media",
                    name: "Paid Media",
                    description: "Optimize campaigns with clear performance data.",
                    icon: "campaign",
                },
                {
                    id: "seo",
                    name: "SEO",
                    description: "Track organic growth and content performance.",
                    icon: "search",
                },
                {
                    id: "email",
                    name: "Email & Lifecycle",
                    description: "Measure email's true contribution to revenue.",
                    icon: "mail",
                },
            ]}
        />
    );
}
