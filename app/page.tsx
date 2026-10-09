import Image from "next/image";
import { hero } from "@/data/home";
import GoogleReviews from "@/components/googlereview";
import Footer from "@/components/footer"; 

export const metadata = {
  title: "P Square Enterprises | Industrial Safety Gloves",
  description:
    "Leading manufacturer of cotton knitted gloves and PPE safety products.",
};

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <Image
          src={hero.image.url}
          alt={hero.image.alternativeText}
          fill
          className="object-cover"
          priority
          unoptimized
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0E5AA7]/80 via-[#1E78C8]/70 to-[#0B3C6F]/80" />

        <div className="absolute inset-0 opacity-15 bg-[linear-gradient(45deg,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:32px_32px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-12 items-center text-white">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {hero.heading}
            </h1>

            <p className="mt-6 text-lg text-blue-100">
              {hero.subheading}
            </p>
          </div>
        </div>
      </section>

      {/* GOOGLE REVIEWS */}
      <section>
        <GoogleReviews />
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}