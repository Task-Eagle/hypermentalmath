import { createFileRoute } from "@tanstack/react-router";
import { TrainerApp } from "@/components/trainer/trainer-app";

export const Route = createFileRoute("/")({
  ssr: false,
  component: Home,
});

function Home() {
  return <TrainerApp />;
}
