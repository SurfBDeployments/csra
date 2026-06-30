import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CSRA Modern Instranet" },
    { name: "description", content: "Welcome to CSRA Modern Intranet!" },
  ];
}


export default function Home() {
  return <Welcome />;
}
