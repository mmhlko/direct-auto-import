"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HERO_BACKGROUND, AUDI_Q3_PNG } from "@/shared/lib/images";
import { cn } from "@/shared/utils/utils";
import { useState } from "react";
import Modal from "@/shared/ui/Modal";
import ContactForm from "./ContactForm";

const TEXT_GRAY = "#6b7280";
const GRADIENT_LEFT =
  "linear-gradient(to right, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.5) 50%, transparent 75%)";
const GRADIENT_BOTTOM =
  "linear-gradient(to top, rgba(255,255,255,0.9) 0%, transparent 100%)";

export default function HeroSection() {
  const [openModal, setOpenModal] = useState(false);


  const openContactForm = () => {
    setOpenModal(true)
  };

  const closeContactForm = () => {
    setOpenModal(false)
  };

  return (
    <section className="relative min-h-[85vh] flex items-end md:items-center overflow-hidden">
      {/* Фоновое изображение (небо, горизонт, земля) */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_BACKGROUND}
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Градиент слева для читаемости текста */}
        <div
          className="absolute inset-0 z-10"
          style={{ background: GRADIENT_LEFT }}
        />
        {/* Градиент снизу для плавного перехода */
        }
        <div
          className="absolute bottom-0 left-0 right-0 h-32 z-10"
          style={{ background: GRADIENT_BOTTOM }}
        />
      </div>

      {/* PNG автомобиля поверх фона (справа) */}
      <div className="absolute inset-0 z-[15] flex items-end md:items-center justify-end pr-0 md:pr-8 lg:pr-16 pointer-events-none">
        <div className="relative w-full md:w-[60%] lg:w-[55%] h-[50vh] md:h-[70vh] max-h-[800px]">
          <Image
            src={AUDI_Q3_PNG}
            alt="Audi Q3 2020"
            fill
            className="object-contain object-bottom md:object-center"
            priority
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        </div>
      </div>

      {/* Контент поверх всего (слева) */}
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-20">
        <div className="max-w-xl md:max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 md:mb-5 text-brand-primary"
          >
            <span className="block">Авто из Азии</span>
            <span className="block text-[1.05em]">под ключ!</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-primary-dark"
          >
            Audi Q3 2020 г.в.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="text-base md:text-lg mb-5"
            style={{ color: TEXT_GRAY }}
          >
            1.4Т 150 п.с. | Передний привод | Без окрасов | До 50,000 км
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-primary-dark"
          >
            Цена до 2 300 000 Р
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={openContactForm}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
              "text-white px-10 py-4 md:px-14 md:py-5 rounded-xl text-lg md:text-xl font-semibold shadow-lg hover:shadow-xl transition-all pointer-events-auto",
              'bg-linear-to-b from-brand-primary to-brand-accent',
              'hover:opacity-95 hover:cursor-pointer'
            )}
          >
            Купить
          </motion.button>
        </div>
      </div>
      {/* Модалка */}
      <Modal open={openModal} onClose={closeContactForm}>
        <ContactForm onSubmitted={closeContactForm} />
      </Modal>
    </section>
  );
}
