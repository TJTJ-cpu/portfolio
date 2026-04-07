"use client"
import SectionHeading from "@/components/ui/SectionHeading";
import { SECTION_CLASSES } from "@/lib/constants";
import SocialLink from "@/components/ui/SocialLink";
import { socials } from "@/data/socials";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className={SECTION_CLASSES}>
      <SectionHeading title="Contact" />
      <motion.div 
        initial={{opacity: 0, x:30}}
        animate={{opacity: 1, x:0}}
        transition={{duration: 0.5, delay: 0.2}}
        className="flex flex-col gap-4">
        {socials.map((social) => (
          <SocialLink key={social.platform} social={social} />
        ))}
      </motion.div>
    </section>
  );
}
