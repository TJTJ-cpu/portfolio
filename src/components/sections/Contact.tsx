import SectionHeading from "@/components/ui/SectionHeading";
import SocialLink from "@/components/ui/SocialLink";
import { socials } from "@/data/socials";

export default function Contact() {
  return (
    <section id="contact" className="py-20 max-w-3xl mx-auto px-6">
      <SectionHeading title="Contact" />
      <div className="flex flex-col gap-4">
        {socials.map((social) => (
          <SocialLink key={social.platform} social={social} />
        ))}
      </div>
    </section>
  );
}
