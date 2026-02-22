"use client";

import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-brand-primary" />
                <span>г. Москва, ул. Примерная, д. 1</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone className="text-brand-primary" />
                <a
                  href="tel:+79991234567"
                  className="hover:text-brand-primary transition"
                >
                  +7 (999) 123-45-67
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-brand-primary" />
                <a
                  href="mailto:info@directautoimport.ru"
                  className="hover:text-brand-primary transition"
                >
                  info@directautoimport.ru
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">О компании</h3>
            <p className="text-gray-400">
              Прямой импорт автомобилей из Японии, Южной Кореи и Китая.
              Экспертный подбор, выгодные цены, прозрачные условия.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Юридическая информация</h3>
            <div className="space-y-2 text-gray-400">
              <p>ООО &quot;Директ Авто Импорт&quot;</p>
              <p>ИНН: 1234567890</p>
              <p>ОГРН: 1234567890123</p>
              <a
                href="/privacy"
                className="block hover:text-blue-400 transition mt-4"
              >
                Политика конфиденциальности
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} Direct Auto Import. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
