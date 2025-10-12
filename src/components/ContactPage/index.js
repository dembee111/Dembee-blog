"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 2500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-32 md:py-20  ">
      <motion.div
        initial="hidden"
        animate="visible"
        className="max-w-3xl w-full text-center"
      >
        <motion.h1
          variants={fadeUp}
          className="text-[#1c1c1c] mb-4 md:mb-6 text-[40px] md:text-[70px] font-sono font-normal"
        >
          Холбоо барих
        </motion.h1>

        <motion.p
          variants={fadeUp}
          custom={1}
          className="text-[#1c1c1ccc] text-[18px] leading-[1.7em] mb-10"
        >
          Хэрэв танд санал, асуулт байвал дараах формыг бөглөн илгээнэ үү. Бид
          аль болох хурдан хариу өгөх болно.
        </motion.p>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="space-y-6  rounded-2xl p-0 md:p-8 transition-all duration-500"
            >
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-6">
                  <input
                    className="w-full py-[16px] px-[20px] text-[17px] font-medium border border-[#1c1c1c33] rounded-xl  focus:border-b-2 focus:outline-none focus:border-b-[#1c1c1c] transition-all duration-300"
                    maxLength={256}
                    name="name"
                    placeholder="Нэр..."
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-span-6">
                  <input
                    className="w-full py-[16px] px-[20px] text-[17px] font-medium border border-[#1c1c1c33] rounded-xl focus:outline-none   focus:border-b-2 focus:border-b-[#1c1c1c] transition-all duration-300"
                    maxLength={256}
                    name="phone"
                    placeholder="Утас..."
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-span-12">
                  <input
                    className="w-full py-[16px] px-[20px] text-[17px] font-medium border border-[#1c1c1c33] rounded-xl focus:outline-none   focus:border-b-2 focus:border-b-[#1c1c1c] transition-all duration-300"
                    maxLength={256}
                    name="email"
                    placeholder="Имэйл..."
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-span-12">
                  <textarea
                    placeholder="Таны мессеж…"
                    maxLength={5000}
                    id="description"
                    name="description"
                    className="w-full py-[16px] px-[20px] text-[17px] font-medium border border-[#1c1c1c33] rounded-xl focus:outline-none focus:border-b-2 focus:border-b-[#1c1c1c] transition-all duration-300 resize-none h-40"
                    value={formData.description}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="col-span-12 flex justify-center items-center">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className=" border-2 border-[#1c1c1c] hover:bg-[#1c1c1c] text-[#1c1c1c] cursor-pointer w-52 hover:text-white py-3 px-6 rounded-full font-semibold tracking-wide transition-all duration-300"
                  >
                    Илгээх
                  </motion.button>
                </div>
              </div>
            </form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.6, ease: [0.445, 0.05, 0.55, 0.95] },
              }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-20 bg-white/60 backdrop-blur-md border border-[#1c1c1c1a] rounded-2xl shadow-md"
            >
              <h2 className="text-3xl font-semibold text-[#1c1c1c] mb-4">
                Амжилттай илгээгдлээ!
              </h2>
              <p className="text-[#1c1c1c99] text-lg">
                Бид таны илгээсэн мэдээллийг хүлээн авлаа.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ContactPage;
