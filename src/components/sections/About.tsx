import SectionHeading from "@/components/ui/SectionHeading";
import { SECTION_CLASSES } from "@/lib/constants";
import ImageCard from "../ui/ImageCard";

export default function About() {

  return (

    <section id="about" className={SECTION_CLASSES}>

      <SectionHeading title="About Me" />

      <h3 className="text-2xl text-center mb-10">
        Certifcate 
      </h3>
      {/* <p className="text-gray-400 leading-relaxed mb-10">
         Coding : Basketball : Gym : Jesus
      </p> */}
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

