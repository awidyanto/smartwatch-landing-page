// app/page.tsx

import Image from "next/image"; // Gunakan komponen Image dari Next.js untuk optimasi
import FeatureCard from "./components/FeatureCard";
import SliderCard from "./components/SliderCard";

// Ikon dari Heroicons (contoh)
const HeartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-pink-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.5l1.318-1.182a4.5 4.5 0 116.364 6.364L12 20.25l-7.682-7.682a4.5 4.5 0 010-6.364z"
    />
  </svg>
);
// TODO: Buat atau cari ikon lain untuk fitur lainnya!
const StepCounter = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6 text-yellow-300"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
    />
  </svg>
);

export default function SmartWatchPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center h-48">
        <SliderCard />
      </section>
      <section className="text-center">
        {/* Kamu bisa ganti src dengan URL gambar dari Unsplash/Pexels */}
        {/* <Image
          src="/pexels-alexandr-borecky-128389-393047.jpg" // Simpan gambar di folder `public`
          alt="Smartwatch product image"
          width={300}
          height={300}
          className="mx-auto mb-8"
        /> */}
        <h1 className="text-5xl font-extrabold tracking-tight mt-2">
          The Future on Your Wrist
        </h1>
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
        <h2 className="text-3xl font-bold text-center mb-10">Fitur Unggulan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<HeartIcon />}
            title="Health Tracking"
            description="Monitor your heart rate, sleep patterns, and daily activity 24/7."
          />
          <FeatureCard
            icon={<StepCounter />}
            title="Step Counter"
            description="Step Counter and Calories Burned. For route tracking while running, cycling, hiking, etc."
          />
          <FeatureCard
            icon={<HeartIcon />}
            title="Sleep Tracking"
            description="Analyze sleep quality (sleep duration, sleep phases, etc.)"
          />
          <FeatureCard
            icon={<HeartIcon />}
            title="Stress Monitoring"
            description="Measuring stress levels based on heart rate variability."
          />
          <FeatureCard
            icon={<HeartIcon />}
            title="Voice Assistant"
            description="Integration with Siri, Google Assistant, or Alexa."
          />
          <FeatureCard
            icon={<HeartIcon />}
            title="Water Resistant"
            description="Many smartwatches are waterproof (IP68, 5ATM, 10ATM, etc.), suitable for swimming."
          />
          {/* Panggil FeatureCard lagi dengan props berbeda */}
        </div>
      </section>
    </div>
  );
}
