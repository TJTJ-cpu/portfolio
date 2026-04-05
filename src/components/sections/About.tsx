import SectionHeading from "@/components/ui/SectionHeading";
import { SECTION_CLASSES } from "@/lib/constants";
import CertificateCard from "../ui/CertificateCard";
import { certificates } from "@/data/certificates";

export default function About() {
  return (
    <section id="about" className={SECTION_CLASSES}>
      <SectionHeading title="About Me" />
      <p className="mb-10">
        I graduated from Luleå University of Technology with a degree in Computer Engineering, specialising in Computer Game Programming.
        I enjoy working on complex stuff such as building a game physics engine and workshop production tools in C++ and Unreal Engine. As well as building a more simplier project, such as a full stack web app using.NET or data analysis in Python.
      </p>

      <h3 className="text-2xl text-center mb-10 font-bold">
        Certificates
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certificates.map((cert) => (
          <CertificateCard key={cert.name} cert={cert} />
        ))}
      </div>
    </section>
  );
}

