import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "미용 사례",
  description: "다양한 견종의 미용 전후 사례를 확인하실 수 있습니다.",
};

const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=800&q=80", alt: "미용 사례 1" },
  { id: 2, src: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&q=80", alt: "미용 사례 2" },
  { id: 3, src: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&q=80", alt: "미용 사례 3" },
  { id: 4, src: "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=800&q=80", alt: "미용 사례 4" },
  { id: 5, src: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&q=80", alt: "미용 사례 5" },
  { id: 6, src: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&q=80", alt: "미용 사례 6" },
  { id: 7, src: "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=800&q=80", alt: "미용 사례 7" },
  { id: 8, src: "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=800&q=80", alt: "미용 사례 8" },
  { id: 9, src: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&q=80", alt: "미용 사례 9" },
  { id: 10, src: "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=800&q=80", alt: "미용 사례 10" },
  { id: 11, src: "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=800&q=80", alt: "미용 사례 11" },
  { id: 12, src: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&q=80", alt: "미용 사례 12" },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 text-darkGray">
          미용 사례
        </h1>
        <p className="text-center text-darkGray/70 mb-12">
          아이들의 아름다운 변화를 확인해보세요
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

