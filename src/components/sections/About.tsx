import SectionHeading from "@/components/ui/SectionHeading";
import { SECTION_CLASSES } from "@/lib/constants";
import CertificateCard from "../ui/CertificateCard";
import { certificates } from "@/data/certificates";

export default function About() {
  return (
    <section id="about" className={SECTION_CLASSES}>
      <SectionHeading title="About Me" />
      <p className="mb-3">
        I graduated from Luleå University of Technology with a degree in Computer Engineering, specialising in Computer Game Programming.
      </p>
      <p className="mb-3">
        Despite studying game dev in my university, I really enjoy making a website and hopefully trying to become a full stack developer one day. 
      </p>
      <p className="mb-10">
        Building physics engines and working with C++ and C# taught me how to think about performance, memory, and data structures. These are essential skills that can be easily translated to other projects. 
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

