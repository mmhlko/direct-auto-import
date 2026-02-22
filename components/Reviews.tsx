"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { reviews_images } from "@/shared/lib/images";
import { CarouselBlock } from "./carousel/CarouselBlock";
import { cn } from "@/shared/utils/utils";
import { Card } from "@/shared/ui/Card";
import { Review } from "@/shared/types/reviews";

const reviews = [
  {
    id: 1,
    name: "Иван Петров",
    city: "Москва",
    car: "Audi Q3 2020",
    text: "Отличный сервис! Помогли найти идеальный автомобиль в Японии. Все прозрачно, быстро и профессионально. Рекомендую!",
    rating: 5,
    image: reviews_images.audi_q3_1,
  },
  {
    id: 2,
    name: "Мария Сидорова",
    city: "Санкт-Петербург",
    car: "Audi Q2 2020",
    text: "Очень довольна покупкой! Менеджеры всегда на связи, все этапы контролировали. Автомобиль пришел в идеальном состоянии.",
    rating: 5,
    image: reviews_images.audi_q2_1,
  },
  {
    id: 3,
    name: "Алексей Козлов",
    city: "Казань",
    car: "Audi Q7 2020",
    text: "Заказывал для таксопарка. Отличное соотношение цена-качество. Все документы оформлены правильно, без проблем поставили на учет.",
    rating: 5,
    image: reviews_images.audi_q7_1,
  },
  {
    id: 4,
    name: "Елена Волкова",
    city: "Новосибирск",
    car: "BMW X3 2020",
    text: "Профессиональный подход, честные цены. Автомобиль превзошел ожидания. Обязательно обращусь еще раз!",
    rating: 5,
    image: reviews_images.bmw_x3_1,
  },
  {
    id: 5,
    name: "Алексей Козлов",
    city: "Казань",
    car: "Kia Sorento 2020",
    text: "Заказывал для таксопарка. Отличное соотношение цена-качество. Все документы оформлены правильно, без проблем поставили на учет.",
    rating: 5,
    image: reviews_images.kia_sorento_1,
  },
];

const ReviewCard = ({ review, index }: { review: Review, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <Card className="overflow-hidden group p-0 hover:cursor-pointer">
        {/* IMAGE */}
        <div className="relative aspect-4/3 overflow-hidden">
          <Image
            src={review.image}
            alt={review.car}
            fill
            className="
              object-cover
              transition-transform duration-700 ease-out
              group-hover:scale-105
            "
            sizes="(max-width: 768px) 100vw, 420px"
          />

          {/* gradient overlay */}
          <div className="
            absolute inset-0
            bg-linear-to-t
            from-black/70
            via-black/30
            to-transparent
          " />

          {/* title */}
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-6">
            <h3 className="text-[26px] font-semibold tracking-tight text-white">
              {review.car}
            </h3>
          </div>
        </div>

        {/* CONTENT */}
        <div className="px-6 py-8 flex flex-col">
          <p className="text-[15px] leading-relaxed text-gray-500">
            {review.text}
          </p>

          <div className="mt-8 pt-6 border-t border-black/5 flex items-center gap-2 text-sm">
            <span className="font-medium text-gray-900">
              {review.name}
            </span>
            <span className="text-gray-300">·</span>
            <span className="text-gray-400">
              {review.city}
            </span>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
            Отзывы клиентов
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Что говорят наши клиенты о работе с нами
          </p>
        </motion.div>

        <div className="">
          <CarouselBlock
            items={reviews}
            scrollOpts={{
              align: "start",
              slidesToScroll: 1,
              breakpoints: {
                "(max-width: 767px)": {
                  slidesToScroll: 1,
                },
              },
            }}
            itemWidth={542}
            itemClassName="pl-2 md:pl-5 basis-auto pt-3 pb-3"
            renderItem={(review: Review, index: number) => (
              <ReviewCard review={review} index={index} />
            )}
          />

          {/* <div className="relative bg-gray-50 rounded-lg p-8 md:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" size={20} />
                    ))}
                  </div>
                  <p className="text-lg text-gray-700 mb-6 italic">
                    &quot;{reviews[currentIndex].text}&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src={reviews[currentIndex].image}
                        alt={reviews[currentIndex].name}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">
                        {reviews[currentIndex].name}
                      </div>
                      <div className="text-gray-600">
                        {reviews[currentIndex].city}
                      </div>
                      <div className="text-brand-primary font-medium">
                        {reviews[currentIndex].car}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src={reviews[currentIndex].carImage}
                    alt={reviews[currentIndex].car}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            <button
              onClick={prevReview}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition"
              aria-label="Previous review"
            >
              <FaChevronLeft className="text-gray-700" />
            </button>
            <button
              onClick={nextReview}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition"
              aria-label="Next review"
            >
              <FaChevronRight className="text-gray-700" />
            </button>
          </div> */}

          {/* <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition ${index === currentIndex
                    ? "bg-[#4a9ba7] w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                  }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}
