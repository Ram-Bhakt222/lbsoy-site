import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { CoursePage } from "../_CoursePage";
import { courseRegistry } from "../_course-data";

const data = courseRegistry["senior-yoga"];

export const metadata: Metadata = buildMetadata({
  title: "Senior Yoga in Long Beach | Safe Classes for Adults 60+",
  description:
    "Senior yoga classes in Long Beach for adults 60+. Balance, joint mobility, bone-loading strength — taught by a registered yoga therapist. Modifications for arthritis, joint replacements, and osteoporosis.",
  path: "/courses/senior-yoga",
  keywords: [
    "senior yoga long beach",
    "yoga for seniors long beach",
    "chair yoga seniors long beach",
    "gentle yoga long beach",
    "yoga for osteoporosis long beach",
    "yoga for arthritis long beach",
    "balance yoga seniors",
    "fall prevention yoga long beach",
    "senior wellness long beach",
  ],
});

export default function Page() {
  return <CoursePage data={data} />;
}
