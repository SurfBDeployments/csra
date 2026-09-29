interface ProposalItem {
    id: string;
    name: string;
    projectId?: string;
    author: string;
    date: string;
    size: string;
    description: string;
    fileName: string;
    artifacts: string;
}


const sampleProposals: ProposalItem[] = [
    {
        id: '1',
        name: 'Digital Services Modernization Proposal',
        projectId: 'PROP-2024-001',
        author: 'Software Engineering',
        date: 'January 18, 2024',
        size: '4mb',
        description: 'A proposal outlining modernization of digital services to improve customer-facing performance.',
        fileName: 'digital_services_modernization_v1.pdf',
        artifacts: 'Gold Standard'
    },

    {
        id: '2',
        name: 'AI Decision Support Proposal',
        projectId: 'PROP-2024-002',
        author: 'Business Intelligence Group',
        date: 'March 2, 2024',
        size: '3mb',
        description: 'A proposal introducing AI-driven decision support tools for operational efficiency.',
        fileName: 'ai_decision_support_proposal_v2.docx',
        artifacts: 'Oral Presentation'
    },

    {
        id: '3',
        name: 'Secure Cloud Readiness Proposal',
        projectId: 'PROP-2024-003',
        author: 'Infrastructure Team',
        date: 'May 27, 2024',
        size: '7mb',
        description: 'A proposal assessing cloud readiness and recommending secure migration strategies.',
        fileName: 'secure_cloud_readiness_v1.pdf',
        artifacts: 'Full Project'
    },

    {
        id: '4',
        name: 'Enterprise Workflow Automation Proposal',
        projectId: 'PROP-2025-004',
        author: 'Software Engineering',
        date: 'February 11, 2025',
        size: '6mb',
        description: 'A proposal to automate enterprise workflows using modern orchestration tools.',
        fileName: 'workflow_automation_proposal_v3.docx',
        artifacts: 'Past Performance'
    },

    {
        id: '5',
        name: 'Advanced Analytics Platform Proposal',
        projectId: 'PROP-2025-005',
        author: 'Business Intelligence Group',
        date: 'June 6, 2025',
        size: '5mb',
        description: 'A proposal for building an advanced analytics platform to support predictive insights.',
        fileName: 'advanced_analytics_platform_v1.pdf',
        artifacts: 'Project Graphic'
    },

    {
        id: '6',
        name: 'Infrastructure Resilience Upgrade Proposal',
        projectId: 'PROP-2025-006',
        author: 'Infrastructure Team',
        date: 'September 14, 2025',
        size: '9mb',
        description: 'A proposal recommending upgrades to improve infrastructure resilience and uptime.',
        fileName: 'infrastructure_resilience_upgrade_v2.pdf',
        artifacts: 'Gold Standard'
    },

    {
        id: '7',
        name: 'AI Compliance and Governance Proposal',
        projectId: 'PROP-2026-007',
        author: 'Business Intelligence Group',
        date: 'January 9, 2026',
        size: '2mb',
        description: 'A proposal establishing governance standards for responsible AI deployment.',
        fileName: 'ai_compliance_governance_v1.docx',
        artifacts: 'Full Project'
    },

    {
        id: '8',
        name: 'Unified DevSecOps Pipeline Proposal',
        projectId: 'PROP-2026-008',
        author: 'Software Engineering',
        date: 'April 3, 2026',
        size: '10mb',
        description: 'A proposal to unify development, security, and operations into a single DevSecOps pipeline.',
        fileName: 'devsecops_pipeline_proposal_v4.pdf',
        artifacts: 'Oral Presentation'
    },

    {
        id: '9',
        name: 'High-Availability Cloud Architecture Proposal',
        projectId: 'PROP-2026-009',
        author: 'Infrastructure Team',
        date: 'July 22, 2026',
        size: '8mb',
        description: 'A proposal detailing a high-availability cloud architecture for mission-critical workloads.',
        fileName: 'ha_cloud_architecture_v2.pdf',
        artifacts: 'Past Performance'
    },

    {
        id: '10',
        name: 'Enterprise Data Governance Proposal',
        projectId: 'PROP-2026-010',
        author: 'Business Intelligence Group',
        date: 'September 5, 2026',
        size: '6mb',
        description: 'A proposal defining enterprise-wide data governance standards and stewardship practices.',
        fileName: 'enterprise_data_governance_v1.docx',
        artifacts: 'Project Graphic'
    }
];
