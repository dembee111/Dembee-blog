"use client";

import Image from "next/image";
import Link from "next/link";
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
          src="/image/zuragaa.jpg"
          alt="bg-hero"
          width={1450}
          height={725}
          priority
          className="w-[1360px] h-[350px] md:h-[650px] object-cover object-center rounded-xl shadow-lg"
        />
        <div className="bg-black/30 absolute inset-0"></div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.445, 0.05, 0.55, 0.95] }}
          className="absolute left-1/2 top-2/3 -translate-x-1/2 -translate-y-1/2 z-10 text-center"
        >
          <h1 className="text-[#f1f4f5] text-[45px] leading-[40px] md:leading-20 xl:leading-20 md:text-[90px] font-sono drop-shadow-lg">
            Миний тухай
          </h1>
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-[865px] mx-auto my-9 md:my-16 text-[#1c1c1ccc] text-[18px] font-normal leading-[1.8em] space-y-6"
      >
        <motion.p variants={fadeUp} custom={1}>
          Миний нэрийг М.Батдэмбэрэл гэдэг. Би 14 гаруй жилийн турш програм
          хангамжийн инженерээр ажиллаж байгаа бөгөөд backend development,
          full-stack development, distributed architecture болон ерөнхий
          програмчлалын чиглэлээр ажиллаж ирсэн. JavaScript, Java, Python зэрэг
          хэлүүд дээр хөгжүүлэлт хийдэг.
        </motion.p>

        <motion.h2
          variants={fadeUp}
          custom={2}
          className="text-[#1c1c1c] text-[32px] md:text-[50px] font-normal leading-[1.15em]"
        >
          Технологи, философи, ирээдүй
        </motion.h2>

        <motion.p variants={fadeUp} custom={3}>
          Би зөвхөн код бичихээс илүүтэйгээр технологи, хиймэл оюун ухаан, хүний
          нийгэм болон ирээдүйн өөрчлөлтийн талаар сонирхон судалдаг. Буддын
          философи, системийн сэтгэлгээ, software architecture болон AI-ийн
          нийгэмд үзүүлэх нөлөөлөл зэрэг сэдвүүдийг гүнзгий сонирхдог.
        </motion.p>

        <motion.p variants={fadeUp} custom={4}>
          Сүүлийн жилүүдэд AI, Machine Learning, IoT, embedded system, hardware
          architecture болон open-source технологиуд дээр төвлөрөн судалж байгаа
          бөгөөд software ба hardware-ийн огтлолцол дээрх шинэ үеийн
          системүүдийг илүү сонирхон ажиллаж байна.
        </motion.p>

        <motion.div
          variants={fadeUp}
          custom={5}
          className="border-t border-[#1c1c1c33] mt-[55px] pt-[26px] space-y-4"
        >
          <h2 className="text-[#1c1c1c80] text-[16px] font-semibold leading-[1.3em]">
            Холбоо барих
          </h2>

          <div className="text-[#1c1c1c] text-[20px] md:text-[24px] font-medium space-y-1">
            <motion.a
              href="mailto:batdemberel_sh@yahoo.com"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
              className="block cursor-pointer hover:text-black/70 transition"
            >
              batdemberel_sh@yahoo.com
            </motion.a>

            <motion.a
              href="tel:+97699134731"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
              className="block cursor-pointer hover:text-black/70 transition"
            >
              +976 9913-4731
            </motion.a>
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

          <div className="text-[#1c1c1c] text-[20px] md:text-[24px] font-medium space-y-1">
            <motion.div whileHover={{ x: 10 }} transition={{ duration: 0.3 }}>
              <Link
                href="https://twitter.com/"
                target="_blank"
                className="hover:text-black/70 transition"
              >
                Twitter
              </Link>
            </motion.div>

            <motion.div whileHover={{ x: 10 }} transition={{ duration: 0.3 }}>
              <Link
                href="https://facebook.com/"
                target="_blank"
                className="hover:text-black/70 transition"
              >
                Facebook
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
