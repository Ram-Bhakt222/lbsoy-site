import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { CoursePage } from "../_CoursePage";
import { courseRegistry } from "../_course-data";

const data = courseRegistry["private-yoga"];

export const metadata: Metadata = buildMetadata({
  title: "Private Yoga in Long Beach | 1-on-1 Sessions In-Home or Virtual",
  description:
    "Private yoga sessions in Long Beach with Ram Bhakt, E-RYT 500. One-on-one instruction in-studio, in-home across Belmont Shore, Naples, Bixby Knolls and more, or virtual. Built around your body.",
  path: "/courses/private-yoga",
  keywords: [
    "private yoga long beach",
    "private yoga lessons long beach",
    "1 on 1 yoga long beach",
    "yoga in home long beach",
    "yoga teacher long beach",
    "private yoga belmont shore",
    "yoga lessons near me long beach",
    "virtual yoga lessons",
    "one on one yoga therapy",
  ],
});

export default function Page() {
  return <CoursePage data={data} />;
}
