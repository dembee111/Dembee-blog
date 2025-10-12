"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

const BlogImage = ({ blog }) => {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.log("Autoplay blocked:", err);
      });
    }
  }, []);

  const toggleMute = () => {
    setIsMuted((prev) => {
      const newValue = !prev;
      if (audioRef.current) {
        audioRef.current.muted = newValue;
      }
      return newValue;
    });
  };

  const imageUrl = `https:${blog?.fields?.image?.fields?.file?.url}`;
  const audioUrl = `https:${blog?.fields?.audio?.fields?.file?.url}`;

  return (
    <div className="relative">
      <Image
        src={imageUrl}
        alt="blog image"
        width={1200}
        height={750}
        className="w-full h-full object-center object-cover grayscale hover:grayscale-0 transition duration-500 ease-in-out mb-9"
      />

      {audioUrl && (
        <audio ref={audioRef} src={audioUrl} muted={isMuted} loop autoPlay />
      )}

      {/* Mute / Unmute Button */}
      <div className="absolute left-[5%] bottom-[10%]">
        <div
          className="bg-white rounded-full w-12 h-12 flex justify-center items-center cursor-pointer shadow-lg hover:bg-gray-100 transition"
          onClick={toggleMute}
        >
          {isMuted ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
              />
            </svg>
          ) : (
            // 🔊 Unmuted icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogImage;
