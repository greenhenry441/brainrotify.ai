"use client";

import Image from "next/image";

interface ResultCardProps {
  animalName: string;
  imageUrl: string;
  audioUrl: string;
}

export function ResultCard({ animalName, imageUrl, audioUrl }: ResultCardProps) {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">{animalName}</h2>
      {imageUrl && (
        <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
          <Image src={imageUrl} alt={animalName} layout="fill" objectFit="cover" />
        </div>
      )}
      {audioUrl && (
        <audio controls src={audioUrl} className="w-full">
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
}
