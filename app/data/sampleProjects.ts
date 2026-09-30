interface ProjectItem {
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


const sampleProject: ProjectItem[] = [
    {
        id: '1',
        name: 'Client Portal Development Initiative',
        projectId: 'PROJ-2024-001',
        author: 'Business Intelligence Group',
        date: 'February 8, 2025',
        size: '10mb',
        description: 'A new client-facing portal designed to streamline account access and service requests.',
        fileName: 'client_portal_initiative_v1.pdf',
        artifacts: 'Full Project',
        tools: 'React", "Node.js", "AWS", "Figma'
    },

    {
        id: '2',
        name: 'Quarterly Results Presentation',
        projectId: 'PROJ-2024-002',
        author: 'Software Engineering',
        date: 'July 14, 2024',
        size: '6mb',
        description: 'A consolidated slide deck summarizing company performance and KPIs for Q2.',
        fileName: 'quarterly_results_q2_2024.pdf',
        artifacts: 'Oral Presentation'
    },

    {
        id: '3',
        name: 'Customer Migration Project',
        projectId: 'PROJ-2024-003',
        author: 'Infrastructure Team',
        date: 'November 3, 2024',
        size: '4mb',
        description: 'A structured plan for migrating legacy customer accounts to the new platform.',
        fileName: 'customer_migration_plan_v3.docx',
        artifacts: 'Past Performance'
    },

    {
        id: '4',
        name: 'Rapid Prototype Development Project',
        projectId: 'PROJ-2025-004',
        author: 'Business Intelligence Group',
        date: 'March 22, 2025',
        size: '8mb',
        description: 'A fast-turnaround prototype demonstrating new reporting and analytics capabilities.',
        fileName: 'rapid_prototype_demo_v2.pdf',
        artifacts: 'Gold Standard'
    },

    {
        id: '5',
        name: 'AI Prototype Project',
        projectId: 'PROJ-2025-005',
        author: 'Software Engineering',
        date: 'September 9, 2025',
        size: '5mb',
        description: 'An early-stage AI model exploring automated decision support for internal workflows.',
        fileName: 'ai_prototype_overview_v1.docx',
        artifacts: 'Project Graphic'
    },

    {
        id: '6',
        name: 'RAG Models Project',
        projectId: 'PROJ-2026-006',
        author: 'Business Intelligence Group',
        date: 'January 17, 2026',
        size: '9mb',
        description: 'A retrieval-augmented generation model designed to improve enterprise knowledge search.',
        fileName: 'rag_model_architecture_v4.pdf',
        artifacts: 'Full Project'
    },

    {
        id: '7',
        name: 'USDA App Modernization Project',
        projectId: 'PROJ-2026-007',
        author: 'Infrastructure Team',
        date: 'June 4, 2026',
        size: '7mb',
        description: 'A modernization effort updating USDA applications for improved performance and security.',
        fileName: 'usda_modernization_summary_v2.pdf',
        artifacts: 'Past Performance'
    },

    {
        id: '8',
        name: 'Enterprise Reporting Dashboard',
        projectId: 'PROJ-2024-008',
        author: 'Business Intelligence Group',
        date: 'May 11, 2024',
        size: '3mb',
        description: 'A unified dashboard providing real-time visibility into operational and financial metrics.',
        fileName: 'enterprise_reporting_dashboard_v1.xlsx',
        artifacts: 'Project Graphic'
    },

    {
        id: '9',
        name: 'Internal Developer Tools Upgrade',
        projectId: 'PROJ-2025-009',
        author: 'Software Engineering',
        date: 'October 28, 2025',
        size: '10mb',
        description: 'An upgrade package improving build pipelines, code quality tools, and developer workflows.',
        fileName: 'developer_tools_upgrade_v5.docx',
        artifacts: 'Gold Standard'
    },

    {
        id: '10',
        name: 'Cloud Infrastructure Modernization',
        projectId: 'PROJ-2026-010',
        author: 'Infrastructure Team',
        date: 'April 19, 2026',
        size: '6mb',
        description: 'A cloud modernization initiative focused on scalability, resilience, and cost optimization.',
        fileName: 'cloud_infrastructure_modernization_v3.pdf',
        artifacts: 'Oral Presentation'
    }
];