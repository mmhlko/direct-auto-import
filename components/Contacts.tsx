"use client";

import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTelegramPlane,
  FaVk,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Card } from "@/shared/ui/Card";
import Map from "./Map";

const managers = [
  {
    name: "Иван Иванов",
    phone: "+7 (999) 123-45-67",
    email: "ivan@directautoimport.ru",
    role: "Менеджер по подбору",
  },
  {
    name: "Мария Петрова",
    phone: "+7 (999) 123-45-68",
    email: "maria@directautoimport.ru",
    role: "Менеджер по подбору",
  },
  {
    name: "Алексей Сидоров",
    phone: "+7 (999) 123-45-69",
    email: "alexey@directautoimport.ru",
    role: "Менеджер по подбору",
  },
];

export default function Contacts() {
  return (
    <section id="contacts" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Контакты
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Свяжитесь с нашими специалистами для консультации
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12 items-stretch">
          <Card className="p-6 h-full">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Наши менеджеры
            </h3>
            <div className="space-y-6">
              {managers.map((manager, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border-b border-black/5 pb-4 last:border-0"
                >
                  <div className="font-bold text-gray-900 mb-1">
                    {manager.name}
                  </div>
                  <div className="text-gray-600 text-sm mb-2">{manager.role}</div>
                  <div className="flex flex-col gap-2">
                    <a
                      href={`tel:${manager.phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-2 text-brand-primary hover:text-brand-primary/80 transition"
                    >
                      <FaPhone />
                      <span>{manager.phone}</span>
                    </a>
                    <a
                      href={`mailto:${manager.email}`}
                      className="flex items-center gap-2 text-brand-primary hover:text-brand-primary/80 transition"
                    >
                      <FaEnvelope />
                      <span>{manager.email}</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>

          <Card className="p-6 h-full">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Офис</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-brand-accent mt-1 shrink-0" />
                <div>
                  <div className="font-semibold text-gray-900">Адрес</div>
                  <div className="text-gray-600">
                    г. Москва, ул. Примерная, д. 1
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaPhone className="text-brand-primary mt-1 shrink-0" />
                <div>
                  <div className="font-semibold text-gray-900">Телефон</div>
                  <div className="text-gray-600">
                    <a
                      href="tel:+79991234567"
                      className="hover:text-blue-600 transition"
                    >
                      +7 (999) 123-45-67
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <div className="font-semibold text-gray-900 mb-3">
                  Социальные сети
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://t.me/directautoimport"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand-primary hover:opacity-95 text-white p-3 rounded-lg transition"
                    aria-label="Telegram"
                  >
                    <FaTelegramPlane size={20} />
                  </a>
                  <a
                    href="https://vk.com/directautoimport"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand-primary text-white p-3 rounded-lg hover:opacity-95 transition"
                    aria-label="VKontakte"
                  >
                    <FaVk size={20} />
                  </a>
                  <a
                    href="https://wa.me/79991234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white p-3 rounded-lg hover:opacity-95 transition"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp size={20} />
                  </a>
                </div>
              </div>

              <div className="pt-4">
                <div className="font-semibold text-gray-900 mb-3">
                  Отзывы о нас
                </div>
                <div className="flex flex-col gap-2">
                  <a
                    href="https://t.me/directautoimport/reviews"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-primary hover:text-brand-primary/80 transition"
                  >
                    Telegram канал с отзывами
                  </a>
                  <a
                    href="https://2gis.ru/firm/123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-primary hover:text-brand-primary/80 transition"
                  >
                    2ГИС
                  </a>
                  <a
                    href="https://yandex.ru/maps/org/direct_auto_import/123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-primary hover:text-brand-primary/80 transition"
                  >
                    Яндекс.Карты
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <Map />
      </div>
    </section>
  );
}
