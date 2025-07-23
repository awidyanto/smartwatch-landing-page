import React from "react";

// Ini adalah kontrak TypeScript. Kita definisikan "bentuk" data
// yang boleh diterima oleh komponen ini.
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function Feature({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="bg-slate-800 p-6 rounded-lg text-center">
      <div className="flex justify-center items-center mb-4 h-12 w-12 rounded-full bg-slate-700 mx-auto">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-slate-400">{description}</p>
    </div>
  );
}
