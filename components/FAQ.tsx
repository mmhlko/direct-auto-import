"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/shared/ui/Card";

const faqs = [
  {
    question: "Сколько времени занимает импорт автомобиля из Азии?",
    answer:
      "Средний срок от момента заказа до получения автомобиля составляет 2-3 месяца. Это включает подбор, проверку, оформление документов, доставку и таможенное оформление.",
  },
  {
    question: "Какие документы нужны для покупки?",
    answer:
      "Для физических лиц нужен паспорт. Для юридических лиц - полный пакет учредительных документов. Мы поможем подготовить все необходимые документы.",
  },
  {
    question: "Какова стоимость услуг?",
    answer:
      "Стоимость зависит от выбранного автомобиля и комплекса услуг. Обычно комиссия составляет 5-10% от стоимости автомобиля. Точную стоимость мы рассчитаем после консультации.",
  },
  {
    question: "Гарантируете ли вы качество автомобиля?",
    answer:
      "Да, мы проводим тщательную проверку каждого автомобиля перед покупкой. Предоставляем полный отчет о состоянии и истории автомобиля. При обнаружении скрытых дефектов берем на себя ответственность.",
  },
  {
    question: "Можно ли посмотреть автомобиль перед покупкой?",
    answer:
      "Да, мы можем организовать видеосвязь для осмотра автомобиля на аукционе или у продавца. Также предоставляем детальные фото и видео отчеты.",
  },
  {
    question: "Какие страны вы обслуживаете?",
    answer:
      "Мы работаем с автомобилями из Японии, Южной Кореи и Китая. Доставка возможна в любой город России.",
  },
  {
    question: "Что делать, если автомобиль не подошел?",
    answer:
      "Мы гарантируем соответствие автомобиля заявленным характеристикам. Если есть несоответствия, мы решаем вопрос в вашу пользу или помогаем найти альтернативный вариант.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
            Часто задаваемые вопросы
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ответы на популярные вопросы об импорте автомобилей
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden p-0" hover={false}>
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50/80 transition"
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <FaChevronDown
                    className={`text-gray-500 transition-transform shrink-0 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-gray-600">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
