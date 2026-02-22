import { twMerge } from 'tailwind-merge'
import { useCarousel } from './carousel'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/shared/utils/utils'

type Props = {
  direction: 'left' | 'right'
}

export const CustomCarouselButton = ({ direction = 'right' }: Props) => {
  const { scrollNext, canScrollNext, scrollPrev, canScrollPrev } = useCarousel()

  const scroll = direction === 'right' ? scrollNext : scrollPrev
  const canScroll = direction === 'right' ? canScrollNext : canScrollPrev

  if (!canScroll) return null

  return (
    <div
      className={twMerge(
        'absolute top-1/2 -translate-y-1/2 z-30',
        direction === 'right' ? 'right-6' : 'left-6'
      )}
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 320, damping: 22 }}
        onClick={scroll}
        className={cn(
          'relative',
          'flex items-center justify-center',
          'w-14 h-14',
          'rounded-full',
          'backdrop-blur-md',
          'bg-white/25',
          // 'ring-1 ring-gray-100/40',
          'shadow-[0_8px_32px_rgba(0,0,0,0.12)]',
          'transition-all duration-300',
          'hover:bg-white/35 hover:cursor-pointer',
          'active:bg-white/45'
        )}
      >
        {/* subtle inner highlight */}
        <span className="absolute inset-0 rounded-full bg-gradient-to-b from-white/40 to-transparent opacity-10 pointer-events-none" />

        <ArrowRight
          className={twMerge(
            'relative w-5 h-5 text-gray-900',
            direction === 'left' ? 'rotate-180' : ''
          )}
        />
      </motion.button>
    </div>
  )
}