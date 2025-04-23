"use client"

/* eslint-disable @typescript-eslint/no-explicit-any */

import { FC, ReactNode, useEffect, useRef } from "react"
import { useTransform, motion } from "framer-motion"

type NewCardProps = {
  i: number
  title: string
  description: string
  src: string
  url: string
  color: string
  progress: any
  range: any
  targetScale: any
  bgColor: string
  isLight: boolean
  disable?: boolean
}

const allCards: {
  video: HTMLVideoElement
  container: HTMLElement
}[] = []

export const Card: FC<NewCardProps> = ({
  i,
  title,
  description,
  src,
  url,
  color,
  progress,
  range,
  targetScale,
  isLight,
  disable,
}) => {
  const scale = useTransform(progress, range, [1, targetScale])
  const videoRef = useRef<HTMLVideoElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const videoEl = videoRef.current
    const overlayEl = overlayRef.current
    const cardEl = cardRef.current
    if (!videoEl || !overlayEl || !cardEl) return

    const current = { video: videoEl, container: overlayEl }
    allCards.push(current)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Resetuj inne karty
          allCards.forEach(({ video, container }) => {
            if (!video || !container || !container.isConnected) return
            if (video !== videoEl) {
              video.pause()
              video.currentTime = 0
              container.style.opacity = "0"
            } else {
              container.style.opacity = "1"
            }
          })

          videoEl.play().catch(() => {})
        }
      },
      {
        threshold: 0.7,
      }
    )

    observer.observe(cardEl)

    return () => {
      observer.disconnect()
      // Nie usuwaj z allCards — pozwalamy kartom wracać do gry
    }
  }, [])

  return (
    <BackgroundColorChange isLight={isLight} disable={disable} videoRef={videoRef}>
      <div className='flex items-center justify-center mb-12 relative'>
        <motion.div
          ref={cardRef}
          style={{
            color,
            scale,
            top: `calc(1vh + ${i * 10}px)`,
          }}
          className='flex flex-col h-[90svh] w-[95%] relative origin-top rounded-xl shadow-lg overflow-hidden bg-gray-500'
        >
          <video
            ref={videoRef}
            className='w-full h-full object-cover relative'
            loop
            muted
            playsInline
          >
            <source src={`/assets/video/${src}`} type='video/mp4' />
            Błąd wyświetlania.
          </video>

          <div
            ref={overlayRef}
            className='absolute w-full h-full flex flex-col justify-center px-6 gap-12 bg-black/40 will-change-transform transition-opacity duration-500'
            style={{ opacity: 0 }}
          >
            <h2 className='text-4xl text-white brightness-[200] drop-shadow-lg mix-blend-screen'>
              {title}
            </h2>

            <div className='w-full flex flex-col gap-6'>
              <p className='text-white drop-shadow-lg mix-blend-screen'>
                {description}
              </p>
              <a
                href={url}
                target='_blank'
                className='cursor-pointer self-end text-lime-300 drop-shadow-lg mix-blend-screen border-lime-300 border p-2 rounded-xl'
              >
                Zobacz więcej
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </BackgroundColorChange>
  )
}

interface BackgroundColorChangeProps {
  children: ReactNode
  isLight?: boolean
  disable?: boolean
  videoRef?: React.RefObject<HTMLVideoElement>
}

const BackgroundColorChange: React.FC<BackgroundColorChangeProps> = ({
  children,
  isLight,
  disable,
  videoRef,
}) => {
  const handleEnter = () => {
    if (disable) return

    const wrapper = document.querySelector(".offerbackground")
    if (wrapper) {
      if (isLight) {
        wrapper.classList.add("light-section")
      } else {
        wrapper.classList.remove("light-section")
      }
    }

    if (videoRef?.current) {
      videoRef.current.play().catch(() => {})
    }
  }

  const handleLeave = () => {
    if (disable) return

    const wrapper = document.querySelector(".offerbackground")
    if (wrapper) {
      if (!isLight) {
        wrapper.classList.add("light-section")
      } else {
        wrapper.classList.remove("light-section")
      }
    }

    if (videoRef?.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <motion.div
      viewport={{ amount: 0.7 }}
      onViewportEnter={handleEnter}
      onViewportLeave={handleLeave}
      className='sticky top-[9svh]'
    >
      {children}
    </motion.div>
  )
}


{
	/* <div className='flex flex-col h-full w-full mt-6'>
<div className='w-full  top-[10%]'>
	<p className='text-[16px]'>{description}</p>
	<span className='flex items-center gap-2'>
		<a
			href={url}
			target='_blank'
			className='text-[12px] underline cursor-pointer'
		>
			Zobacz więcej
		</a>
	</span>
</div>
<div className=' w-full h-full rounded-xl overflow-hidden '>
	<motion.div
		className='w-full h-full relative '
		style={{ scale: imageScale }}
	>
		<Image
			src={`/assets/img/${src}`}
			alt='image'
			fill
			className='object-cover'
		/>
	</motion.div>
</div>
</div> */
}
