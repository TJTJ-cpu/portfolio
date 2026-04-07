"use client"
import Image from "next/image";
import { useState } from "react";

interface ImageCardProps {
  title: string;
  src: string;
  alt: string;
  children?: React.ReactNode;
}

export default function ImageCard({ title, src, alt, children }: ImageCardProps) {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="space-y-3">
        <h3 className="text-lg fontsemibold text-white text-center min-h-[3.5rem] flex items-center justify-center">{title}</h3>

        <div className="rounded-xl overflow-hidden border-2 border-white/10 p-1.5 bg-white/5 cursor-pointer transition-all duration-300 hover:scale-110 hover:border-white/25" onClick={() => setIsOpen(true)}>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden">
            <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm cursor-pointer" onClick={() => setIsOpen(false)}>
          {children ? (
            <div
              className="relative bg-gray-900 border border-white/10 rounded-2xl max-w-2xl w-[90vw] max-h-[85vh] overflow-y-auto p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-6">
                <Image src={src} alt={alt} fill className="object-contain" />
              </div>
              {children}
            </div>
          ) : (
            <div className="relative w-[90vw] max-w-4xl aspect-video">
              <Image src={src} alt={alt} fill className="object-contain rounded-lg" />
            </div>
          )}
        </div>
      )}
    </>
  );
}
