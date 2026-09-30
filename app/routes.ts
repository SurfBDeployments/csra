import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/default.tsx"),
  route("home", "routes/home.tsx"),
  route("projects", "routes/ProjectHome.tsx"),
  route("proposalresults", "routes/ProposalResults.tsx"),
  route("projectresults", "routes/ProjectResults.tsx"),
  route("proposal", "routes/ProposalHome.tsx"),
  route("infocus", "routes/infocus.tsx"),
  route("highlights", "routes/highlights.tsx"),

  // Dynamic Parameter Routes
  route("proposals/:projectId", "routes/ProposalDetails.tsx"),
  route("projects/:projectId", "routes/ProjectDetails.tsx"),
];