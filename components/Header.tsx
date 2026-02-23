"use client";

import { useState } from "react";
import { FaBars, FaTimes, FaPhone, FaMapMarkerAlt, FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/shared/utils/utils";
import Modal from "@/shared/ui/Modal";
import ContactForm from "./ContactForm";
import { useScrollPosition } from "@/shared/hooks/useScrollPosition";

const TEXT_DARK = "#1a1a1a";
const TEXT_GRAY = "#4b5563";
const BTN_GRADIENT = "linear-gradient(to bottom, #2175C2 0%, #1860A4 100%)";

const menuItems = [
  { id: "advantages", label: "Преимущества" },
  { id: "stages", label: "Этапы" },
  { id: "reviews", label: "Отзывы" },
  { id: "faq", label: "ЧАВО" },
  { id: "contacts", label: "Контакты" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const scrolled = useScrollPosition();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const openContactForm = () => {
    setOpenModal(true)
  };

  const closeContactForm = () => {
    setOpenModal(false)
  };


  return (
    <>
      <motion.header
        className={cn(
          "z-50 border-b border-white/20 shadow-sm flex flex-col",
          'fixed top-0 left-0 w-full'
        )}
        style={{
          background: "rgba(255, 255, 255, 0.5)",
          backdropFilter: "saturate(180%) blur(20px)",
          WebkitBackdropFilter: "saturate(180%) blur(20px)",
        }}
      >


        {/* Нижний ряд: лого + навигация + кнопка */}
        <div className={cn(
          "container mx-auto px-4 flex items-center justify-between py-3",
        )}>
          <div className="flex items-center justify-between w-full">
            {/* Логотип */}
            <motion.div
              className="inline-block overflow-hidden"
              initial={false}
              animate={{ height: scrolled ? 56 : 80 }} // px, например
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <Image
                src="/logo.png"
                alt="DIRECT AUTOIMPORT+"
                width={280}
                height={80}
                className="block w-auto h-full"
                priority
              />
            </motion.div>

            <div>
              {/* Верхний ряд: контакты и соцсети */}
              <motion.div
                initial={{ height: "auto", opacity: 1 }}
                animate={{ height: scrolled ? 0 : "auto", opacity: scrolled ? 0 : 1 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div
                  className="container mx-auto px-4 flex flex-wrap items-center gap-4 md:gap-6 justify-between text-sm flex-1 border-b border-black/5 pb-2 mb-2"
                  style={{ color: TEXT_GRAY }}
                >
                  <div className="flex items-center gap-4 md:gap-6 flex-wrap">
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="shrink-0 text-gray-600" />
                      <span>Москва, ул. Примерная 10</span>
                    </div>
                    <a
                      href="tel:+74951234567"
                      className="flex items-center gap-2 hover:opacity-80 transition"
                    >
                      <FaPhone className="shrink-0" />
                      <span>+7 (495) 123-45-67</span>
                    </a>
                    <a
                      href="https://t.me/directautoimport"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:opacity-80 transition"
                    >
                      <FaTelegramPlane className="shrink-0 text-brand-accent" />
                      <span>@telegram</span>
                    </a>
                    <div className="flex items-center gap-1.5">
                      <a
                        href="https://wa.me/74951234567"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white hover:opacity-90 transition"
                        aria-label="WhatsApp"
                      >
                        <FaWhatsapp size={16} />
                      </a>
                      <a
                        href="#contacts"
                        className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center text-white hover:opacity-90 transition"
                        aria-label="На карте"
                      >
                        <FaMapMarkerAlt size={12} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Навигация */}
              <div className="hidden md:flex items-center gap-8 lg:gap-10 ml-8">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="font-medium text-sm transition opacity-80 hover:opacity-100 hover:cursor-pointer"
                    style={{ color: TEXT_DARK }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
{/* Кнопка */}
<button
            onClick={openContactForm}
            className={cn(
              "text-white px-5 py-2.5 rounded-lg font-medium text-sm shrink-0 shadow-md transition",
              "bg-linear-to-b from-brand-primary to-brand-accent",
              "hover:opacity-95 hover:cursor-pointer"
            )}
          >
            Заказать авто
          </button>
          </div>         

          {/* Кнопка мобильного меню */}
          <div className="md:hidden flex items-center pl-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
              style={{ color: TEXT_DARK }}
              aria-label="Меню"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Мобильное меню */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-white/20"
              style={{
                background: "rgba(255, 255, 255, 0.65)",
                backdropFilter: "saturate(180%) blur(20px)",
                WebkitBackdropFilter: "saturate(180%) blur(20px)",
              }}
            >
              <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left py-3 font-medium text-sm"
                    style={{ color: TEXT_DARK }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Модалка */}
      <Modal open={openModal} onClose={closeContactForm}>
        <ContactForm onSubmitted={closeContactForm} />
      </Modal>
    </>
  );
}
