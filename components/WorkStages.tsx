"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card } from "@/shared/ui/Card";
import { CarouselBlock } from "./carousel/CarouselBlock";

type TWorkStage = {
  step: string;
  title: string;
  description: string;
  image: string;
}

const stages = [
  {
    step: "01",
    title: "Консультация",
    description: "Обсуждаем ваши требования, бюджет и предпочтения",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
  },
  {
    step: "02",
    title: "Подбор вариантов",
    description: "Ищем подходящие автомобили на азиатских площадках",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7",
  },
  {
    step: "03",
    title: "Проверка",
    description: "Проводим техническую и юридическую проверку",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7",
  },
  {
    step: "04",
    title: "Оформление",
    description: "Подготавливаем все необходимые документы",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
  },
  {
    step: "05",
    title: "Доставка",
    description: "Организуем транспортировку до вашего города",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64",
  },
  {
    step: "06",
    title: "Таможня",
    description: "Оформляем таможенные документы и растаможку",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
  },
  {
    step: "07",
    title: "Постановка на учет",
    description: "Помогаем с регистрацией в ГИБДД",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d",
  },
  {
    step: "08",
    title: "Получение",
    description: "Вы получаете ключи и документы на свой автомобиль",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7",
  },
];

const WorkStagesCard = ({ stage, index }: { stage: TWorkStage, index: number }) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.01 }}
    className="h-full"
  >
    <Card className="h-full flex flex-col overflow-hidden group p-0">
      <div className="relative h-48 shrink-0">
        <Image
          src={stage.image}
          alt={stage.title}
          fill
          className="object-cover transition duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className="absolute top-4 left-4 bg-brand-accent opacity-80 backdrop-blur-md text-white px-4 py-2 rounded-lg font-bold text-lg">
          {stage.step}
        </div>
      </div>
      <div className="flex flex-col flex-1 min-h-0 p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 shrink-0">
          {stage.title}
        </h3>
        <p className="text-gray-600 flex-1 min-h-0">{stage.description}</p>
      </div>
    </Card>
  </motion.div>
)

export default function WorkStages() {
  return (
    <section id="stages" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
            Этапы работы
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Простой и понятный процесс от заявки до получения автомобиля
          </p>
        </motion.div>
        <CarouselBlock
          items={stages}
          scrollOpts={{
            align: "start",
            slidesToScroll: 1,
            breakpoints: {
              "(max-width: 767px)": {
                slidesToScroll: 1,
              },
            },
          }}
          itemWidth={350}
          itemClassName="pl-2 md:pl-5 basis-auto pt-3 pb-3"
          renderItem={(stage: TWorkStage, index: number) => (
            <WorkStagesCard stage={stage} index={index} />
          )}
        />
      </div>
    </section>
  );
}
