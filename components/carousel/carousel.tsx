'use client'

import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from 'embla-carousel-react'
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/shared/utils/utils'

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: 'horizontal' | 'vertical'
  setApi?: (api: CarouselApi) => void
  arrowType?: 'chevron' | 'arrow'
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
  selectedIndex: number
  scrollTo: (index: number) => void
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

export function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />')
  }

  return context
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = 'horizontal',
      opts,
      setApi,
      plugins,
      arrowType = 'chevron',
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === 'horizontal' ? 'x' : 'y',
      },
      plugins
    )
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)
    const [selectedIndex, setSelectedIndex] = React.useState(
      opts?.startIndex || 0
    )

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return
      }

      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
      setSelectedIndex(api.selectedScrollSnap())
    }, [])

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev()
    }, [api])

    const scrollNext = React.useCallback(() => {
      api?.scrollNext()
    }, [api])

    const scrollTo = React.useCallback(
      (index: number) => {
        if (index === api?.selectedScrollSnap()) return
        // const autoplay = api?.plugins()?.autoplay
        // autoplay?.reset()
        api?.scrollTo(index)
      },
      [api]
    )

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'ArrowLeft') {
          event.preventDefault()
          scrollPrev()
        } else if (event.key === 'ArrowRight') {
          event.preventDefault()
          scrollNext()
        }
      },
      [scrollPrev, scrollNext]
    )

    React.useEffect(() => {
      if (!api || !setApi) {
        return
      }

      setApi(api)
    }, [api, setApi])

    React.useEffect(() => {
      if (!api) {
        return
      }

      onSelect(api)
      api.on('reInit', onSelect)
      api.on('select', onSelect)

      return () => {
        api?.off('select', onSelect)
      }
    }, [api, onSelect])

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation:
            orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
          arrowType,
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
          selectedIndex,
          scrollTo,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn('relative', className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    )
  }
)
Carousel.displayName = 'Carousel'

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div
      ref={carouselRef}
      className="overflow-hidden"
    >
      <div
        ref={ref}
        className={cn(
          'flex items-stretch',
          orientation === 'horizontal' ? '' : '-mt-4 flex-col',
          className
        )}
        {...props}
      />
    </div>
  )
})
CarouselContent.displayName = 'CarouselContent'

const CarouselDots = ({ className, ...props }: React.ComponentProps<'div'>) => {
  const { selectedIndex, scrollTo, api } = useCarousel()

  return (
    <div
      role="tablist"
      className={cn(
        'absolute bottom-13 w-full flex items-center justify-center gap-2',
        className
      )}
      {...props}
    >
      {api?.scrollSnapList().map((_, index) => (
        <button
          key={index}
          role="tab"
          data-slot="carousel-dot"
          aria-selected={index === selectedIndex}
          aria-controls="carousel-item"
          aria-label={`Slide ${index + 1}`}
          className={cn(
            'size-2 rounded-full cursor-pointer',
            index === selectedIndex ? 'bg-white' : 'bg-white/60'
          )}
          onClick={() => scrollTo(index)}
        />
      ))}
    </div>
  )
}

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel()

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        'min-w-0 shrink-0 grow-0 basis-full',
        orientation === 'horizontal' ? 'pl-4' : 'pt-4',
        className
      )}
      {...props}
    />
  )
})
CarouselItem.displayName = 'CarouselItem'

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<'button'>
>(({ className, ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev, arrowType = 'chevron' } = useCarousel()

  return (
    <button
      ref={ref}
      className={cn(
        'h-8 w-8 rounded-full',
        orientation === 'horizontal'
          ? '-left-12 top-1/2 -translate-y-1/2 absolute'
          : '-top-12 left-1/2 -translate-x-1/2 rotate-90 absolute',
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      {arrowType === 'arrow' ? (
        <ArrowLeft className="h-4 w-4" />
      ) : (
        <ChevronLeft className="h-4 w-4" />
      )}
      <span className="sr-only">Previous slide</span>
    </button>
  )
})
CarouselPrevious.displayName = 'CarouselPrevious'

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<'button'>
>(({ className, ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext, arrowType = 'chevron' } = useCarousel()

  return (
    <button
      ref={ref}
      className={cn(
        'h-8 w-8 rounded-full',
        orientation === 'horizontal'
          ? '-right-12 top-1/2 -translate-y-1/2 absolute'
          : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90 absolute',
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      {arrowType === 'arrow' ? (
        <ArrowRight className="h-4 w-4" />
      ) : (
        <ChevronRight className="h-4 w-4" />
      )}
      <span className="sr-only">Next slide</span>
    </button>
  )
})
CarouselNext.displayName = 'CarouselNext'

export const CarouselItemWrapper = ({ width = 542, children }: { width?: number, children: React.ReactNode }) => {
  const [viewportWidth, setViewportWidth] = React.useState<number>(width)
  const mdBreakpoint = 768;
  const mobilePaddingX = 16;
  // Отслеживаем размер экрана
  React.useEffect(() => {
    if (typeof window === undefined) return
    const checkMobile = () => {
      setViewportWidth(window.innerWidth) // md breakpoint
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  return (
    <div
      style={{ 
        width: viewportWidth < mdBreakpoint ? viewportWidth - mobilePaddingX : width,
        maxWidth: `${width}px` 
      }}
      className='h-full'
    >
      {children}
    </div>
  )

}

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
  type CarouselApi,
  type CarouselOptions,
}
