import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "My New React Router App" },
    { name: "description", content: "Welcome to My React Page!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
