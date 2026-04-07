import { Certificate } from "@/types";

export const certificates: Certificate[] = [
  {
    name: "Degree of Bachelor of Science in Engineering",
    issuer: "Luleå University of Technology",
    date: "June 2025",
    description: "Computer Engineering - specialisation Computer Game Programming. 180 ECTS credits.",
    image: "/images/certificates/degree.png",
    pdf: "/documents/degree.pdf",
  },
  {
    name: "Bachelor's Thesis in Computer Engineering",
    issuer: "Luleå University of Technology",
    date: "2025",
    description: "Bachelor's thesis on mapping virtual locations in Unreal Engine to real-world positions using Qualisys motion capture and Live Link integration.",
    image: "/images/certificates/thesis.png",
    pdf: "/documents/thesis.pdf",
  },
  {
    name: "Ansgarius-Stiftelsen Stipendium",
    issuer: "Skellefteå Lions Club",
    date: "2025",
    description: "5000 SEK scholarship award.",
    image: "/images/certificates/stipendium.jpg",
    pdf: null
  },
];
