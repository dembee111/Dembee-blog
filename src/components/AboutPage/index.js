"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
      ease: [0.445, 0.05, 0.55, 0.95],
    },
  }),
};

const AboutPage = () => {
  return (
    <div className="max-w-7xl mx-auto py-24 px-4">
      <div className="relative">
        <Image
          src="/image/hero.avif"
          alt="bg-hero"
          width={1450}
          height={725}
          priority
          className="w-[1360px] h-[650px] object-cover object-center rounded-xl shadow-lg"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.445, 0.05, 0.55, 0.95] }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center"
        >
          <h1 className="text-[#f1f4f5] text-[90px] font-sono drop-shadow-lg">
            Миний тухай
          </h1>
        </motion.div>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-[865px] mx-auto my-16 text-[#1c1c1ccc] text-[18px] font-normal leading-[1.6em] space-y-6"
      >
        <motion.p variants={fadeUp} custom={1}>
          Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
          tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
          enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
          Phasellus viverra nulla ut metus varius laoreet.
        </motion.p>

        <motion.h2
          variants={fadeUp}
          custom={2}
          className="text-[#1c1c1c] text-[50px] font-normal leading-[1.15em]"
        >
          Curabitur ullamcorper.
        </motion.h2>

        <motion.p variants={fadeUp} custom={3}>
          Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
          tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
          enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
        </motion.p>

        <motion.p variants={fadeUp} custom={4}>
          Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
          pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
        </motion.p>

        {/* --- Info --- */}
        <motion.div
          variants={fadeUp}
          custom={5}
          className="border-t border-[#1c1c1c33] mt-[55px] pt-[26px] space-y-4"
        >
          <h2 className="text-[#1c1c1c80] text-[16px] font-semibold leading-[1.3em]">
            Info
          </h2>
          <div className="text-[#1c1c1c] text-[24px] font-medium space-y-1">
            <motion.h1
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
              className="cursor-pointer"
            >
              info@yoursite.com
            </motion.h1>
            <motion.h1
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
              className="cursor-pointer"
            >
              800-123-4567
            </motion.h1>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={6}
          className="border-t border-[#1c1c1c33] pt-[26px] space-y-4"
        >
          <h2 className="text-[#1c1c1c80] text-[16px] font-semibold leading-[1.3em]">
            Social
          </h2>
          <div className="text-[#1c1c1c] text-[24px] font-medium space-y-1">
            <motion.h1
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
              className="cursor-pointer"
            >
              Twitter
            </motion.h1>
            <motion.h1
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
              className="cursor-pointer"
            >
              Facebook
            </motion.h1>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
