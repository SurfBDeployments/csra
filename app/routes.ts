import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/default.tsx"),
  route("home", "routes/home.tsx"),
  route("projectsummary", "routes/ProjectSummary.tsx"),
  route("proposalresults", "routes/ProposalResults.tsx"),
   route("proposaldetails", "routes/ProposalDetails.tsx"),
  route("projectresults", "routes/ProjectResults.tsx"),
  route("projectdetails", "routes/ProjectDetails.tsx"),
  route("proposal", "routes/ProposalHome.tsx"),

];



