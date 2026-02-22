"use client";

import { FaAward, FaRubleSign, FaEye, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Card } from "@/shared/ui/Card";

import ExpertiseIcon from '@/public/icons/expertise.svg';
import Image from "next/image";

const advantages = [
  {
    icon: FaAward,
    title: "Экспертность",
    description:
      "Более 10 лет опыта работы с азиатским авторынком. Знаем все нюансы подбора и импорта.",
    color: "bg-[#e0f2fe] text-brand-primary",
  },
  {
    icon: FaRubleSign,
    title: "Выгода",
    description:
      "Прямые контакты с поставщиками позволяют предлагать лучшие цены на рынке.",
    color: "bg-[#e0f2fe] text-[#2563eb]",
  },
  {
    icon: FaEye,
    title: "Прозрачность",
    description:
      "Полная отчетность на каждом этапе. Вы всегда знаете, что происходит с вашим заказом.",
    color: "bg-[#e0f2fe] text-brand-primary",
  },
  {
    icon: FaShieldAlt,
    title: "Гарантия",
    description:
      "Гарантия качества и юридическая поддержка на всех этапах сделки.",
    color: "bg-[#e0f2fe] text-[#2563eb]",
  },
];

export default function Advantages() {
  return (
    <section id="advantages" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
            Наши преимущества
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Почему выбирают нас для импорта автомобилей из Азии
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="h-full flex flex-col p-6 group">
                <div
                  className={`bg-light-blue w-16 h-16 rounded-lg flex items-center justify-center mb-4 transition shrink-0`}
                >
                  <advantage.icon size={32} className="text-brand-primary"/>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 shrink-0">
                  {advantage.title}
                </h3>
                
                <p className="text-gray-600 flex-1 min-h-0">
                  {advantage.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
