import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { CoursePage } from "../_CoursePage";
import { courseRegistry } from "../_course-data";

const data = courseRegistry["chair-yoga"];

export const metadata: Metadata = buildMetadata({
  title: "Chair Yoga in Long Beach | Seated Yoga for Seniors & Desk Workers",
  description:
    "Chair yoga in Long Beach — a 100% seated practice for seniors, desk-bound professionals, and post-surgical students. Restore mobility, strength, and calm without leaving your chair.",
  path: "/courses/chair-yoga",
  keywords: [
    "chair yoga long beach",
    "seated yoga long beach",
    "chair yoga seniors long beach",
    "desk yoga long beach",
    "office yoga long beach",
    "chair yoga belmont shore",
    "chair yoga for arthritis",
    "workplace chair yoga",
    "accessible yoga long beach",
  ],
});

export default function Page() {
  return <CoursePage data={data} />;
}
