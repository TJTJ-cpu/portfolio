"use client"
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { SECTION_CLASSES } from "@/lib/constants";
import { education } from "@/data/education";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education" className={SECTION_CLASSES}>
      <SectionHeading title="Education" />
      <div 
      className="flex flex-col gap-8">
        {education.map((edu, index) => (
          <motion.div
            key={edu.school}
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y:0}}
            viewport={{once: true}}
            transition={{ duration: 0.5, delay: index * 0.3}}
            className="flex gap-6 rounded-xl border border-white/10 bg-white/5 p-6"
          >
            <div className="relative h-32 w-32 flex-shrink-0">
              <Image
                src={edu.logo}
                alt={edu.school}
                fill
                className="rounded-lg object-contain"
                sizes="128px"
                quality={100}
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">
                <a href={edu.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {edu.school}
                </a>
              </h3>
              <p className="text-gray-400">{edu.degree}</p>
              <p className="text-sm text-gray-500">
                {edu.period} · {edu.location}
              </p>
              {edu.highlights.length > 0 && (
                <ul className="mt-3 list-disc list-inside text-sm text-gray-400 space-y-1">
                  {edu.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
