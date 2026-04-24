import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { CoursePage } from "../_CoursePage";
import { courseRegistry } from "../_course-data";

const data = courseRegistry["prenatal-postnatal-yoga"];

export const metadata: Metadata = buildMetadata({
  title: "Prenatal & Postnatal Yoga in Long Beach | Pregnancy-Safe Classes",
  description:
    "Prenatal and postnatal yoga in Long Beach — trimester-specific classes and careful postpartum recovery. Diastasis-safe, pelvic-floor-informed, taught by a certified specialist.",
  path: "/courses/prenatal-postnatal-yoga",
  keywords: [
    "prenatal yoga long beach",
    "postnatal yoga long beach",
    "pregnancy yoga long beach",
    "postpartum yoga long beach",
    "prenatal yoga belmont shore",
    "diastasis recti yoga long beach",
    "pelvic floor yoga long beach",
    "pregnancy yoga classes long beach",
    "baby and me yoga long beach",
  ],
});

export default function Page() {
  return <CoursePage data={data} />;
}
