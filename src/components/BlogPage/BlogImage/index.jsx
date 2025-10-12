"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const BlogImage = ({ blog }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showDialog, setShowDialog] = useState(false);

  const imageUrl = `https:${blog?.fields?.image?.fields?.file?.url}`;
  const audioUrl = `https:${blog?.fields?.audio?.fields?.file?.url}`;

  useEffect(() => {
    // 3 секунд хүлээж дараа Dialog-г гаргаж байна
    const timer = setTimeout(() => {
      setShowDialog(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handlePlay = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.muted = false;
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          setIsMuted(false);
          setShowDialog(false); // Dialog-ыг хаах
        })
        .catch((err) => console.log("Play failed:", err));
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !audio.muted;
    setIsMuted(audio.muted);
  };

  return (
    <>
      {/* 3 секундийн дараа гарч ирэх Dialog */}
      <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-noto text-gray-700 text-lg">
              Аялгууг тоглуулах уу?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-noto text-gray-600 text-base">
              3D нийтлэл дунд сэтгэл хөдөлгөсөн хэсгүүд их бий. Дараах аялгууг
              сонсоод уншвал илүү таатай!
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              className="text-noto text-gray-600 text-base"
              onClick={() => setShowDialog(false)}
            >
              Үгүй
            </AlertDialogCancel>
            <AlertDialogAction
              className="text-noto text-white text-base"
              onClick={handlePlay}
            >
              Тэгье
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Blog Image */}
      <div className="relative">
        <Image
          src={imageUrl}
          alt="blog image"
          width={1200}
          height={750}
          className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition duration-500 ease-in-out mb-9"
        />

        {audioUrl && (
          <audio
            ref={audioRef}
            src={audioUrl}
            loop
            playsInline
            muted={isMuted}
          />
        )}

        {/* Mute Button */}
        {isPlaying && (
          <div
            className="absolute left-[5%] bottom-[10%] bg-white rounded-full w-12 h-12 flex justify-center items-center cursor-pointer shadow-lg hover:bg-gray-100 transition"
            onClick={toggleMute}
          >
            {isMuted ? (
              <span className="text-xl">🔇</span>
            ) : (
              <span className="text-xl">🔊</span>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default BlogImage;
