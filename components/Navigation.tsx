"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const NAV_COLOR = "#1a2a50";

const menuItems = [
  { id: "advantages", label: "Преимущества" },
  { id: "stages", label: "Этапы" },
  { id: "reviews", label: "Отзывы" },
  { id: "faq", label: "ЧАВО" },
  { id: "contacts", label: "Контакты" },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <nav className="bg-white sticky top-0 z-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="DIRECT AUTOIMPORT+"
                width={200}
                height={56}
                className="h-12 md:h-14 w-auto"
                priority
              />
            </div>

            <div className="hidden md:flex items-center gap-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="font-medium transition opacity-80 hover:opacity-100"
                  style={{ color: NAV_COLOR }}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
              style={{ color: NAV_COLOR }}
              aria-label="Меню"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100"
            >
              <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left py-3 font-medium transition opacity-80 hover:opacity-100"
                    style={{ color: NAV_COLOR }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-xl p-8 max-w-md w-full shadow-xl"
            >
              <h2 className="text-2xl font-bold mb-4" style={{ color: NAV_COLOR }}>
                Свяжитесь с нами
              </h2>
              <p className="text-gray-600 mb-6">
                Вы можете заполнить заявку или сразу связаться с менеджером
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="tel:+74951234567"
                  className="bg-[#1a2a50] text-white px-6 py-3 rounded-lg hover:bg-[#152238] transition text-center font-medium"
                >
                  Позвонить менеджеру
                </a>
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    scrollToSection("contact-form");
                  }}
                  className="border-2 px-6 py-3 rounded-lg font-medium transition border-[#1a2a50] hover:bg-gray-50"
                  style={{ color: NAV_COLOR }}
                >
                  Заполнить заявку
                </button>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700 transition mt-2"
                >
                  Отмена
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
