export interface ProjectDetails {
    id: string;
    name: string;
    projectId: string;
    submissionDate: string;
    endDate: string;
    description: string;
    customer: string;
    group: string;
    businessProgram: string;
    account: string;
    projectManager: string;
    technicalLead: string;
    projectSize: string;
    contractName: string;
    contractType: string;
    projectType: string;
    artifactType: string;
    riskLevel: string;
    tools: string;
    capabilities: string;
    govWinId: string;

}

export const sampleProjectDetails: ProjectDetails[] = [
    {
        id: '1',
        name: 'Client Portal Development Initiative',
        projectId: 'PROJ-2024-001',
        submissionDate: 'January 15, 2024',
        endDate: 'December 31, 2024',
        description:
            'A modernization initiative focused on building a secure, scalable client portal with integrated analytics and workflow automation.',
        customer: 'Acme Corporation Enterprise Solutions',
        group: 'Solutions & Services',
        businessProgram: 'Enterprise Services Division',
        account: 'Enterprise Clients - North America',
        projectManager: 'Sarah Johnson',
        technicalLead: 'Michael Chen',
        projectSize: 'Large (200+ person-hours)',
        contractName: 'Enterprise Portal Development Contract',
        contractType: 'Fixed Price',
        projectType: 'Development',
        artifactType: 'Full Project',
        riskLevel: 'Medium',
        capabilities: '"Business Intelligence / Big Data", "Software & System Development"',
        tools: '"Tableau", "PostgreSQL", "Angular", "Docker"',
        govWinId: "OPP147837",
    },

    {
        id: '2',
        name: 'Quarterly Results Presentation',
        projectId: 'PROJ-2024-002',
        submissionDate: 'April 1, 2024',
        endDate: 'July 14, 2024',
        description:
            'A consolidated reporting effort to produce quarterly KPIs, financial summaries, and operational performance dashboards.',
        customer: 'Global Finance Partners',
        group: 'Business Intelligence Group',
        businessProgram: 'Financial Analytics Program',
        account: 'Finance & Reporting',
        projectManager: 'David Thompson',
        technicalLead: 'Emily Carter',
        projectSize: 'Medium (120 person-hours)',
        contractName: 'Financial Reporting Support Contract',
        contractType: 'Time & Materials',
        projectType: 'Analytics',
        artifactType: 'Oral Presentation',
        riskLevel: 'Low',
        tools: '"Python", "Airflow", "Docker", "GitLab CI/CD"',
        capabilities: '"Mobile Solutions", "Cyber Security"',
        govWinId: "OPP147997",

    },

    {
        id: '3',
        name: 'Customer Migration Project',
        projectId: 'PROJ-2024-003',
        submissionDate: 'August 1, 2024',
        endDate: 'November 3, 2024',
        description:
            'A structured migration of legacy customer accounts to a new cloud-based platform with enhanced security and performance.',
        customer: 'Unified Services Group',
        group: 'Infrastructure Team',
        businessProgram: 'Cloud Modernization Program',
        account: 'Infrastructure Services',
        projectManager: 'Linda Martinez',
        technicalLead: 'Robert Singh',
        projectSize: 'Large (300+ person-hours)',
        contractName: 'Legacy Migration Contract',
        contractType: 'Cost Plus',
        projectType: 'Migration',
        artifactType: 'Past Performance',
        riskLevel: 'High',
        tools: '"Snowflake", "Databricks", "Power BI", "Python"',
        capabilities: '"DevSecOps", "Software & System Development"',
        govWinId: "NN147837",
    },

    {
        id: '4',
        name: 'Rapid Prototype Development Project',
        projectId: 'PROJ-2025-004',
        submissionDate: 'January 10, 2025',
        endDate: 'March 22, 2025',
        description:
            'A fast-turnaround prototype demonstrating new reporting and analytics capabilities for enterprise clients.',
        customer: 'NextGen Analytics',
        group: 'Business Intelligence Group',
        businessProgram: 'Prototype Innovation Program',
        account: 'Analytics & Insights',
        projectManager: 'Kevin Brooks',
        technicalLead: 'Sophia Patel',
        projectSize: 'Small (80 person-hours)',
        contractName: 'Prototype Development Contract',
        contractType: 'Fixed Price',
        projectType: 'Prototype',
        artifactType: 'Project Graphic',
        riskLevel: 'Low',
        tools: '"Splunk", "Palo Alto Networks", "Ansible", "Terraform"',
        capabilities: '"Infrastructure Services", "Cyber Security", "High Availability"',

        govWinId: "TNS103984",
    },

    {
        id: '5',
        name: 'AI Prototype Project',
        projectId: 'PROJ-2025-005',
        submissionDate: 'June 1, 2025',
        endDate: 'September 9, 2025',
        description:
            'An early-stage AI model exploring automated decision support for internal workflows and predictive analytics.',
        customer: 'AI Research Consortium',
        group: 'Software Engineering',
        businessProgram: 'AI Innovation Program',
        account: 'AI & Automation',
        projectManager: 'Jessica Lee',
        technicalLead: 'Daniel Rivera',
        projectSize: 'Medium (150 person-hours)',
        contractName: 'AI Prototype Contract',
        contractType: 'Time & Materials',
        projectType: 'AI/ML',
        artifactType: 'Gold Standard',
        riskLevel: 'Medium',
        tools: '"Jenkins", "OpenShift", "SonarQube", "Docker"',
        capabilities: '"DevSecOps", "Software & System Development"',

        govWinId: "OPP147838",
    },

    {
        id: '6',
        name: 'RAG Models Project',
        projectId: 'PROJ-2026-006',
        submissionDate: 'October 15, 2025',
        endDate: 'January 17, 2026',
        description:
            'A retrieval-augmented generation model designed to improve enterprise knowledge search and document summarization.',
        customer: 'Enterprise Knowledge Systems',
        group: 'Business Intelligence Group',
        businessProgram: 'Knowledge Automation Program',
        account: 'Enterprise AI',
        projectManager: 'Mark Davis',
        technicalLead: 'Priya Nair',
        projectSize: 'Large (250 person-hours)',
        contractName: 'Knowledge Automation Contract',
        contractType: 'Cost Plus',
        projectType: 'AI/ML',
        artifactType: 'Full Project',
        riskLevel: 'High',
        capabilities: '"Mobile Solutions", "Cyber Security"',
        tools: '"Swift", "Kotlin", "Firebase", "Workspace ONE"',
        govWinId: "FBO582914",
    },

    {
        id: '7',
        name: 'USDA App Modernization Project',
        projectId: 'PROJ-2026-007',
        submissionDate: 'February 1, 2026',
        endDate: 'June 4, 2026',
        description:
            'A modernization effort updating USDA applications for improved performance, security, and compliance.',
        customer: 'U.S. Department of Agriculture',
        group: 'Infrastructure Team',
        businessProgram: 'Federal Modernization Program',
        account: 'Federal Agencies',
        projectManager: 'Rachel Kim',
        technicalLead: 'Anthony Rogers',
        projectSize: 'Large (400 person-hours)',
        contractName: 'Federal Modernization Contract',
        contractType: 'Fixed Price',
        projectType: 'Modernization',
        artifactType: 'Past Performance',
        riskLevel: 'Medium',
        capabilities: '"Business Intelligence / Big Data", "Software & System Development"',
        tools: '"Tableau", "PostgreSQL", "Angular", "Docker"',
        govWinId: "TNS103985",
    },

    {
        id: '8',
        name: 'Enterprise Reporting Dashboard',
        projectId: 'PROJ-2024-008',
        submissionDate: 'March 1, 2024',
        endDate: 'May 11, 2024',
        description:
            'A unified dashboard providing real-time visibility into operational and financial metrics.',
        customer: 'Global Operations Network',
        group: 'Business Intelligence Group',
        businessProgram: 'Enterprise Reporting Program',
        account: 'Operations & Reporting',
        projectManager: 'Olivia Turner',
        technicalLead: 'Jason Wu',
        projectSize: 'Medium (140 person-hours)',
        contractName: 'Enterprise Reporting Contract',
        contractType: 'Time & Materials',
        projectType: 'Analytics',
        artifactType: 'Project Graphic',
        riskLevel: 'Low',
        capabilities: '"Research & Analysis", "Management & Consulting"',
        tools: '"GovWin IQ", "GovWin CRM", "MS Visio", "SharePoint"',
        govWinId: "BID948203",
    },

    {
        id: '9',
        name: 'Internal Developer Tools Upgrade',
        projectId: 'PROJ-2025-009',
        submissionDate: 'August 1, 2025',
        endDate: 'October 28, 2025',
        description:
            'An upgrade package improving build pipelines, code quality tools, and developer workflows.',
        customer: 'Internal Engineering Division',
        group: 'Software Engineering',
        businessProgram: 'Developer Productivity Program',
        account: 'Internal Systems',
        projectManager: 'Ethan Moore',
        technicalLead: 'Chloe Ramirez',
        projectSize: 'Medium (160 person-hours)',
        contractName: 'Developer Tools Upgrade Contract',
        contractType: 'Fixed Price',
        projectType: 'Engineering',
        artifactType: 'Gold Standard',
        riskLevel: 'Medium',
        capabilities: '"Research & Analysis", "Management & Consulting"',
        tools: '"GovWin IQ", "GovWin CRM", "MS Visio", "SharePoint"',
        govWinId: "GID948203",
    },

    {
        id: '10',
        name: 'Cloud Infrastructure Modernization',
        projectId: 'PROJ-2026-010',
        submissionDate: 'January 10, 2026',
        endDate: 'April 19, 2026',
        description:
            'A cloud modernization initiative focused on scalability, resilience, and cost optimization.',
        customer: 'Cloud Enterprise Solutions',
        group: 'Infrastructure Team',
        businessProgram: 'Cloud Optimization Program',
        account: 'Cloud Services',
        projectManager: 'Isabella Green',
        technicalLead: 'Liam Carter',
        projectSize: 'Large (300 person-hours)',
        contractName: 'Cloud Modernization Contract',
        contractType: 'Cost Plus',
        projectType: 'Cloud Engineering',
        artifactType: 'Oral Presentation',
        riskLevel: 'High',
        tools: '"GovWin IQ", "GovWin CRM", "Miro", "Figma"',
        capabilities: 'Research & Analysis", "Management & Consulting',
        govWinId: "BIO938203",

    }
];