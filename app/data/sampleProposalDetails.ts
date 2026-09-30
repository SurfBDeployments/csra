export interface ProposalDetails {
    id: string;
    name: string;
    projectId: string;
    submissionDate: string;
    dueDate: string;
    description: string;
    customer: string;
    group: string;
    businessProgram: string;
    account: string;
    proposalManager: string;
    solicitationStatus: string;
    contractName: string;
    contractVehicle: string;
    contractType: string;
    proposalType: string;
    artifactType: string;
    evaluationScore: string;
    riskLevel: string;
    govWinId: string;

}


export const sampleProposalDetails: ProposalDetails[] = [
    {
        id: '1',
        name: 'Digital Services Modernization Proposal',
        projectId: 'PROP-2024-001',
        submissionDate: 'January 18, 2024',
        dueDate: 'February 10, 2024',
        description:
            'A modernization proposal outlining improvements to digital services, customer-facing applications, and backend workflow automation.',
        customer: 'Acme Corporation Enterprise Solutions',
        group: 'Software Engineering',
        businessProgram: 'Enterprise Modernization Program',
        account: 'Enterprise Clients - North America',
        proposalManager: 'Sarah Johnson',
        solicitationStatus: "Active (Accepting Bids)",
        contractName: 'Digital Services Modernization Contract',
        contractVehicle: 'GSA',
        contractType: 'Fixed Price',
        proposalType: 'Technical Response',
        artifactType: 'Gold Standard',
        evaluationScore: '92/100',
        riskLevel: 'Medium',
        govWinId: "OPP147837"
    },

    {
        id: '2',
        name: 'AI Decision Support Proposal',
        projectId: 'PROP-2024-002',
        submissionDate: 'March 2, 2024',
        dueDate: 'March 20, 2024',
        description:
            'A proposal introducing AI-driven decision support tools for operational efficiency, predictive analytics, and workflow automation.',
        customer: 'Global Finance Partners',
        group: 'Business Intelligence Group',
        businessProgram: 'AI Innovation Program',
        account: 'Finance & Reporting',
        proposalManager: 'David Thompson',
        solicitationStatus: "Active (Accepting Bids)",
        contractName: 'AI Decision Support Contract',
        contractVehicle: 'IDIQ',
        contractType: 'Time & Materials',
        proposalType: 'Technical + Cost Volume',
        artifactType: 'Oral Presentation',
        evaluationScore: '88/100',
        riskLevel: 'Low',
        govWinId: "P147837"
    },

    {
        id: '3',
        name: 'Secure Cloud Readiness Proposal',
        projectId: 'PROP-2024-003',
        submissionDate: 'May 27, 2024',
        dueDate: 'June 15, 2024',
        description:
            'A proposal assessing cloud readiness and recommending secure migration strategies, compliance controls, and performance improvements.',
        customer: 'Unified Services Group',
        group: 'Infrastructure Team',
        businessProgram: 'Cloud Modernization Program',
        account: 'Infrastructure Services',
        proposalManager: 'Linda Martinez',
        solicitationStatus: "Draft",
        contractName: 'Cloud Readiness Assessment Contract',
        contractVehicle: 'GWAC',
        contractType: 'Cost Plus',
        proposalType: 'Technical Response',
        artifactType: 'Full Project',
        evaluationScore: '94/100',
        riskLevel: 'High',
        govWinId: "FBO582914"
    },

    {
        id: '4',
        name: 'Enterprise Workflow Automation Proposal',
        projectId: 'PROP-2025-004',
        submissionDate: 'February 11, 2025',
        dueDate: 'March 1, 2025',
        description:
            'A proposal to automate enterprise workflows using modern orchestration tools, reducing manual processing and improving throughput.',
        customer: 'NextGen Analytics',
        group: 'Software Engineering',
        businessProgram: 'Workflow Automation Program',
        account: 'Analytics & Insights',
        proposalManager: 'Kevin Brooks',
        solicitationStatus: "Draft",
        contractName: 'Workflow Automation Contract',
        contractVehicle: 'GSA',
        contractType: 'Fixed Price',
        proposalType: 'Technical + Management Volume',
        artifactType: 'Gold Standard',
        evaluationScore: '89/100',
        riskLevel: 'Low',
        govWinId: "TNS103984"
    },

    {
        id: '5',
        name: 'Advanced Analytics Platform Proposal',
        projectId: 'PROP-2025-005',
        govWinId: "BID948202",
        submissionDate: 'June 6, 2025',
        dueDate: 'June 30, 2025',
        description:
            'A proposal for building an advanced analytics platform supporting predictive insights, real-time dashboards, and enterprise reporting.',
        customer: 'AI Research Consortium',
        group: 'Business Intelligence Group',
        businessProgram: 'Advanced Analytics Program',
        account: 'AI & Automation',
        proposalManager: 'Jessica Lee',
        solicitationStatus: "Draft",
        contractName: 'Advanced Analytics Platform Contract',
        contractVehicle: 'IDIQ',
        contractType: 'Time & Materials',
        proposalType: 'Technical Response',
        artifactType: 'Project Graphic',
        evaluationScore: '91/100',
        riskLevel: 'Medium'
    },

    {
        id: '6',
        name: 'Infrastructure Resilience Upgrade Proposal',
        projectId: 'PROP-2025-006',
        govWinId: "OPP147838",
        submissionDate: 'September 14, 2025',
        dueDate: 'October 5, 2025',
        description:
            'A proposal recommending upgrades to improve infrastructure resilience, uptime, and disaster recovery capabilities.',
        customer: 'Enterprise Knowledge Systems',
        group: 'Infrastructure Team',
        businessProgram: 'Resilience Engineering Program',
        account: 'Enterprise Infrastructure',
        proposalManager: 'Mark Davis',
        solicitationStatus: "Awarded",

        contractName: 'Infrastructure Resilience Contract',
        contractVehicle: 'GWAC',
        contractType: 'Cost Plus',
        proposalType: 'Technical + Past Performance',
        artifactType: 'Past Performance',
        evaluationScore: '95/100',
        riskLevel: 'High'
    },

    {
        id: '7',
        name: 'AI Compliance and Governance Proposal',
        projectId: 'PROP-2026-007',
        govWinId: "FBO582915",
        submissionDate: 'January 9, 2026',
        dueDate: 'January 30, 2026',
        description:
            'A proposal establishing governance standards for responsible AI deployment, compliance controls, and ethical model usage.',
        customer: 'U.S. Department of Agriculture',
        group: 'Business Intelligence Group',
        businessProgram: 'AI Governance Program',
        account: 'Federal Agencies',
        proposalManager: 'Rachel Kim',
        solicitationStatus: "Closed / Under Evaluation",
        contractName: 'AI Governance Contract',
        contractVehicle: 'BPA',
        contractType: 'Fixed Price',
        proposalType: 'Technical Response',
        artifactType: 'Oral Presentation',
        evaluationScore: '87/100',
        riskLevel: 'Medium'
    },

    {
        id: '8',
        name: 'Unified DevSecOps Pipeline Proposal',
        projectId: 'PROP-2026-008',
        govWinId: "TNC103985",
        submissionDate: 'April 3, 2026',
        dueDate: 'April 25, 2026',
        description:
            'A proposal to unify development, security, and operations into a single DevSecOps pipeline with automated compliance checks.',
        customer: 'Global Operations Network',
        group: 'Software Engineering',
        businessProgram: 'DevSecOps Modernization Program',
        account: 'Operations & Reporting',
        proposalManager: 'Olivia Turner',
        solicitationStatus: "Cancelled / Archived",
        contractName: 'DevSecOps Pipeline Contract',
        contractVehicle: 'IDIQ',
        contractType: 'Time & Materials',
        proposalType: 'Technical + Security Volume',
        artifactType: 'Gold Standard',
        evaluationScore: '93/100',
        riskLevel: 'Low'
    },

    {
        id: '9',
        name: 'High-Availability Cloud Architecture Proposal',
        projectId: 'PROP-2026-009',
        govWinId: "OPP147839",
        submissionDate: 'July 22, 2026',
        dueDate: 'August 10, 2026',
        description:
            'A proposal detailing a high-availability cloud architecture for mission-critical workloads with redundancy and failover.',
        customer: 'Internal Engineering Division',
        group: 'Infrastructure Team',
        businessProgram: 'Cloud Architecture Program',
        account: 'Internal Systems',
        proposalManager: 'Ethan Moore',
        technicalLead: 'Chloe Ramirez',
        contractName: 'High-Availability Cloud Contract',
        contractVehicle: 'GWAC',
        contractType: 'Fixed Price',
        proposalType: 'Technical Response',
        artifactType: 'Project Graphic',
        evaluationScore: '90/100',
        riskLevel: 'Medium'
    },

    {
        id: '10',
        name: 'Enterprise Data Governance Proposal',
        projectId: 'PROP-2026-010',
        govWinId: "BID948203",
        submissionDate: 'September 5, 2026',
        dueDate: 'September 30, 2026',
        description:
            'A proposal defining enterprise-wide data governance standards, stewardship practices, and compliance frameworks.',
        customer: 'Cloud Enterprise Solutions',
        group: 'Business Intelligence Group',
        businessProgram: 'Data Governance Program',
        account: 'Cloud Services',
        proposalManager: 'Isabella Green',
        technicalLead: 'Liam Carter',
        contractName: 'Enterprise Data Governance Contract',
        contractVehicle: 'BPA',
        contractType: 'Cost Plus',
        proposalType: 'Technical + Management Volume',
        artifactType: 'Full Project',
        evaluationScore: '96/100',
        riskLevel: 'High'
    }
];
