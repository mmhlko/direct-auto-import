"use client";

import * as React from "react";
import { cn } from "@/shared/utils/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselItemWrapper,
  CarouselNext,
  CarouselPrevious,
  type CarouselOptions,
} from "./carousel";
import { CustomCarouselButton } from "./custom-carousel-button";

export type CarouselBlockScrollOpts = CarouselOptions;

export type CarouselBlockProps<T> = {
  /** Массив элементов (карточек) для карусели */
  items: T[];
  /** Настройки скролла Embla: align, slidesToScroll, breakpoints, startIndex и т.д. */
  scrollOpts: CarouselBlockScrollOpts;
  /** Рендер одной карточки */
  renderItem: (item: T, index: number) => React.ReactNode;
  /** Ключ для элемента (по умолчанию item.id ?? index) */
  getKey?: (item: T, index: number) => React.Key;
  /** Ширина слайда (передаётся в CarouselItemWrapper). Не задавать, если обёртка не нужна */
  itemWidth?: number;
  /** Класс контейнера карусели */
  className?: string;
  /** Класс контента (CarouselContent) */
  contentClassName?: string;
  /** Класс каждого слайда (CarouselItem) */
  itemClassName?: string;
  /** Показывать кнопки Назад/Вперёд */
  showArrows?: boolean;
  /** Стиль стрелок: chevron | arrow */
  arrowType?: "chevron" | "arrow";
  /** Класс кнопок (применяется к обеим) */
  arrowsClassName?: string;
};

const defaultGetKey = <T,>(item: T, index: number): React.Key => {
  const o = item as { id?: unknown };
  return o?.id != null ? String(o.id) : index;
};

export function CarouselBlock<T>({
  items,
  scrollOpts,
  renderItem,
  getKey = defaultGetKey,
  itemWidth,
  className,
  contentClassName = "-ml-2 md:-ml-5",
  itemClassName = "pl-2 md:pl-5 basis-auto",
  showArrows = true,
  arrowType = "chevron",
  arrowsClassName = "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 h-10 w-10 rounded-full border bg-background shadow-md hover:bg-accent hover:text-accent-foreground disabled:opacity-50",
}: CarouselBlockProps<T>) {
  const content = (
    <CarouselContent className={cn(contentClassName)}>
      {items.map((item, index) => (
        <CarouselItem key={getKey(item, index)} className={cn(itemClassName)}>
          {itemWidth != null ? (
            <CarouselItemWrapper width={itemWidth}>
              {renderItem(item, index)}
            </CarouselItemWrapper>
          ) : (
            renderItem(item, index)
          )}
        </CarouselItem>
      ))}
    </CarouselContent>
  );

  return (
    <div className={cn("relative", className)}>
      <Carousel opts={scrollOpts} className="w-full" arrowType={arrowType}>
        {content}
        {showArrows && (
          <>
            <CustomCarouselButton direction="left"/>
            <CustomCarouselButton direction="right"/>
{/*             <CarouselPrevious
              className={cn(
                "left-0 top-1/2 -translate-y-1/2 -translate-x-4",
                arrowsClassName
              )}
            />
            <CarouselNext
              className={cn(
                "right-0 top-1/2 -translate-y-1/2 translate-x-4",
                arrowsClassName
              )}
            /> */}
          </>
        )}
      </Carousel>
    </div>
  );
}
