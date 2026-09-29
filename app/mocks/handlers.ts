// app/mocks/handlers.ts
import { http, HttpResponse } from 'msw';

import { sampleProjects } from '../data/sampleProjects';
import { sampleProposals } from '../data/sampleProposals';

import { sampleProjectDetails } from '../data/sampleProjectDetails';
import { sampleProposalDetails } from '../data/sampleProposalDetails';

export const handlers = [

    // -------------------------------------------------------
    // PROJECT LIST + SEARCH + FILTER + PAGINATION
    // -------------------------------------------------------
    http.get('/api/projects', ({ request }) => {
        const url = new URL(request.url);

        const keywords = url.searchParams.get("keywords")?.toLowerCase() ?? "";
        const artifact = url.searchParams.get("artifact")?.toLowerCase() ?? "";
        const page = Number(url.searchParams.get("page") ?? "1");
        const pageSize = Number(url.searchParams.get("pageSize") ?? "10");

        let results = [...sampleProjects];

        // --- Keyword Search ---
        if (keywords) {
            results = results.filter(p =>
                p.name.toLowerCase().includes(keywords)
            );
        }

        // --- Artifact Filter ---
        if (artifact) {
            results = results.filter(p =>
                p.artifacts.toLowerCase() === artifact
            );
        }

        // --- Pagination ---
        const start = (page - 1) * pageSize;
        const paginated = results.slice(start, start + pageSize);

        return HttpResponse.json({
            total: results.length,
            page,
            pageSize,
            results: paginated
        });
    }),

    // -------------------------------------------------------
    // PROPOSAL LIST + SEARCH + FILTER + PAGINATION
    // -------------------------------------------------------
    http.get('/api/proposals', ({ request }) => {
        const url = new URL(request.url);

        const keywords = url.searchParams.get("keywords")?.toLowerCase() ?? "";
        const customer = url.searchParams.get("customer")?.toLowerCase() ?? "";
        const page = Number(url.searchParams.get("page") ?? "1");
        const pageSize = Number(url.searchParams.get("pageSize") ?? "10");

        let results = [...sampleProposals];

        // --- Keyword Search ---
        if (keywords) {
            results = results.filter(p =>
                p.name.toLowerCase().includes(keywords)
            );
        }

        // --- Customer Filter ---
        if (customer) {
            results = results.filter(p =>
                p.author.toLowerCase().includes(customer)
            );
        }

        // --- Pagination ---
        const start = (page - 1) * pageSize;
        const paginated = results.slice(start, start + pageSize);

        return HttpResponse.json({
            total: results.length,
            page,
            pageSize,
            results: paginated
        });
    }),

    // -------------------------------------------------------
    // PROJECT DETAIL ENDPOINT
    // -------------------------------------------------------
    http.get('/api/projects/:id', ({ params }) => {
        const project = sampleProjectDetails.find(p => p.id === params.id);

        if (!project) {
            return HttpResponse.json({ error: 'Not found' }, { status: 404 });
        }

        return HttpResponse.json(project);
    }),

    // -------------------------------------------------------
    // PROPOSAL DETAIL ENDPOINT
    // -------------------------------------------------------
    http.get('/api/proposals/:id', ({ params }) => {
        const proposal = sampleProposalDetails.find(p => p.id === params.id);

        if (!proposal) {
            return HttpResponse.json({ error: 'Not found' }, { status: 404 });
        }

        return HttpResponse.json(proposal);
    })

];
