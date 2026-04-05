import SectionHeading from "@/components/ui/SectionHeading";
import { SECTION_CLASSES } from "@/lib/constants";
import ImageCard from "../ui/ImageCard";

export default function About() {

  return (

    <section id="about" className={SECTION_CLASSES}>

      <SectionHeading title="About Me" />
      <p className="mb-10">
        The National Aeronautics and Space Administration (NASA /ˈnæsə/) is an independent agency of the U.S. federal government responsible for the United States' civil space program and for research in aeronautics and space. Headquartered in Washington, D.C., NASA operates ten field centers across the U.S. and is organized into mission directorates for Science, Space Operations, Exploration Systems Development, Space Technology, Aeronautics Research, and Mission Support
      </p>

      <h3 className="text-2xl text-center mb-10 font-bold">
        Certificates
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <ImageCard 
      title="Basketball"
      src="/images/about/penguin.jpg" 
      alt="..." />
      <ImageCard 
      title="Coding"
      src="/images/about/coding.jpg" 
      alt="..." />
      <ImageCard 
      title="Reading"
      src="/images/about/bible.jpg" 
      alt="..." />
    </div>

      


    </section>

  );

}

