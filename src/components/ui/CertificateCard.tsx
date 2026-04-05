"use client";
import Image from "next/image";
import { useState } from "react";
import { Certificate } from "@/types";

export default function CertificateCard({ cert }: { cert: Certificate }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="rounded-xl border border-white/10 bg-white/5 overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:border-white/25"
        onClick={() => setIsOpen(true)}
      >
        <div className="relative w-full aspect-video">
          <Image
            src={cert.image}
            alt={cert.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white">{cert.name}</h3>
          <p className="text-sm text-gray-400">
            {cert.issuer} · {cert.date}
          </p>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative bg-gray-900 border border-white/10 rounded-2xl max-w-2xl w-[90vw] max-h-[85vh] overflow-y-auto p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4">
              <Image
                src={cert.image}
                alt={cert.name}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">{cert.name}</h2>
            <p className="text-gray-400 mb-1">
              {cert.issuer} · {cert.date}
            </p>
            <p className="text-sm text-gray-500 mb-4">{cert.description}</p>
            {cert.pdf && (
              <a
                href={cert.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors text-sm"
              >
                View PDF
              </a>
            )}
          </div>
        </div>
      )}
    </>
  );
}
