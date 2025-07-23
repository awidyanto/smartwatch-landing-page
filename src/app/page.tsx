// app/page.tsx
import PromotText from "./components/PromotText";
import FeatureCard from "./components/FeatureCard";
import ProductCard from "./components/ProductCard";
import TestimonialCard from "./components/TestimonialCard";
import CallToAction from "./components/CallToAction";

export default function SmartWatchPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center" id="herosection">
        <h1 className="text-5xl font-extrabold tracking-tight mb-6">
          The Future on Your Wrist
        </h1>
        <section className="text-center">
          <ProductCard />
          <h3 className="text-3xl font-extrabold tracking-tight m-6 text-amber-300">
            <PromotText />
          </h3>
        </section>

        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
          Experience seamless connectivity and track your health like never
          before. Elegance meets technology.
        </p>
        <button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
          Buy Now
        </button>
      </section>

      {/* Features Section */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-10">Featured Features</h2>
        <FeatureCard />
      </section>

      {/* Testimonial Section */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-10">Testimonials</h2>
        <div className="">
          <TestimonialCard />
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-20">
        <div className="">
          <CallToAction />
        </div>
      </section>
    </div>
  );
}
