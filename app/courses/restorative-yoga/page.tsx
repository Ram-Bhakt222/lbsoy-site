import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { CoursePage } from "../_CoursePage";
import { courseRegistry } from "../_course-data";

const data = courseRegistry["restorative-yoga"];

export const metadata: Metadata = buildMetadata({
  title: "Restorative Yoga in Long Beach | Deep Rest for Stress & Burnout",
  description:
    "Restorative yoga in Long Beach — a prop-supported deep-rest practice for burnout, chronic stress, insomnia, and illness recovery. Evidence-based nervous-system regulation.",
  path: "/courses/restorative-yoga",
  keywords: [
    "restorative yoga long beach",
    "yoga for stress long beach",
    "yoga for insomnia long beach",
    "yoga for burnout long beach",
    "gentle yoga long beach",
    "healthcare worker yoga long beach",
    "yin yoga long beach",
    "yoga nidra long beach",
    "evening yoga long beach",
  ],
});

export default function Page() {
  return <CoursePage data={data} />;
}
