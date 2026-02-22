"use client";

import { FaPhone, FaMapMarkerAlt, FaTelegramPlane, FaCar } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function TopBar() {
  const scrollToForm = () => {
    const element = document.getElementById("contact-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gray-100 border-b border-gray-200">
      <div className="container mx-auto px-4 py-2.5 flex flex-wrap items-center justify-between gap-4 text-sm">
        <div className="flex items-center gap-6 flex-wrap">
          <div className="flex items-center gap-2 text-[#1a2a50]">
            <FaMapMarkerAlt className="text-[#1a2a50] shrink-0" />
            <span>Москва, ул. Примерная 10</span>
          </div>
          <a
            href="tel:+74951234567"
            className="flex items-center gap-2 text-[#1a2a50] hover:opacity-80 transition"
          >
            <FaPhone className="shrink-0" />
            <span>+7 (495) 123-45-67</span>
          </a>
          <a
            href="https://t.me/directautoimport"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#1a2a50] hover:opacity-80 transition"
          >
            <FaTelegramPlane className="shrink-0" />
            <span>@telegram</span>
          </a>
          <div className="hidden sm:flex items-center gap-2">
            <a
              href="https://wa.me/74951234567"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white hover:opacity-90 transition"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={16} />
            </a>
            <a
              href="#contacts"
              className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-white hover:opacity-90 transition"
              aria-label="На карте"
            >
              <FaMapMarkerAlt size={14} />
            </a>
          </div>
        </div>
        <button
          onClick={scrollToForm}
          className="bg-[#1a2a50] hover:bg-[#152238] text-white px-5 py-2.5 rounded-lg transition font-medium text-sm flex items-center gap-2 border border-[#1a2a50]"
        >
          <FaCar className="text-white" size={14} />
          Заказать авто 1212
        </button>
      </div>
    </div>
  );
}
