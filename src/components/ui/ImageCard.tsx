// src/components/ui/ImageCard.tsx
import Image from "next/image";

interface ImageCardProps {
  title: string;
  src: string;
  alt: string;
}

export default function ImageCard({ title, src, alt }: ImageCardProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-white text-center">{title}</h3>
      <div className="rounded-xl overflow-hidden border-2 border-white/10 p-1.5 bg-white/5">
        <div className="relative w-full aspect-video rounded-lg overflow-hidden">
          <Image src={src} alt={alt} fill className="object-cover" />
        </div>
      </div>
    </div>
  );
}
