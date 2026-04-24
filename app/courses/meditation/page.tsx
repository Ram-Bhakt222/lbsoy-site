import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { CoursePage } from "../_CoursePage";
import { courseRegistry } from "../_course-data";

const data = courseRegistry["meditation"];

export const metadata: Metadata = buildMetadata({
  title: "Meditation Classes in Long Beach | 8-Week Practical Curriculum",
  description:
    "Learn meditation in Long Beach — breath awareness, mantra, body scan, and mindfulness taught as distinct techniques. 8-week curriculum grounded in yoga and clinical research.",
  path: "/courses/meditation",
  keywords: [
    "meditation classes long beach",
    "meditation long beach",
    "mindfulness long beach",
    "mbsr long beach",
    "meditation belmont shore",
    "learn to meditate long beach",
    "anxiety meditation long beach",
    "corporate meditation long beach",
    "guided meditation long beach",
  ],
});

export default function Page() {
  return <CoursePage data={data} />;
}
