import SectionHeading from "@/components/ui/SectionHeading";
import { SECTION_CLASSES } from "@/lib/constants";
import SocialLink from "@/components/ui/SocialLink";
import { socials } from "@/data/socials";

export default function Contact() {
  return (
    <section id="contact" className={SECTION_CLASSES}>
      <SectionHeading title="Contact" />
      <div className="flex flex-col gap-4">
        {socials.map((social) => (
          <SocialLink key={social.platform} social={social} />
        ))}
      </div>
    </section>
  );
}
