'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'
import Card from './Card' 

const oferty = [
  {
    title: 'Strony internetowe',
    description: 'Nowoczesne, szybkie i responsywne.',
    link: '/oferta/strony',
    video: '/videos/web.mp4',
  },
  {
    title: 'Sklepy online',
    description: 'Sklepy zintegrowane z płatnościami i systemami magazynowymi.',
    link: '/oferta/sklepy',
    video: '/videos/shop.mp4',
  },
  {
    title: 'Branding',
    description: 'Logo, identyfikacja wizualna, key visual.',
    link: '/oferta/branding',
    video: '/videos/branding.mp4',
  },
]

export default function OfertaSnap() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef })
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [0, -100 * oferty.length]), {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  })

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-neutral-950 overflow-hidden">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <motion.div style={{ y }} className="relative w-full max-w-5xl mx-auto h-[70vh]">
          {oferty.map((oferta, index) => (
            <Card key={index} oferta={oferta} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
