'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

type Oferta = {
  title: string
  description: string
  link: string
  video: string
}

export default function Card({ oferta, index }: { oferta: Oferta; index: number }) {
  return (
    <motion.div
      className="absolute w-full h-full rounded-2xl overflow-hidden shadow-xl"
      style={{ top: 0, left: 0, zIndex: 10 - index }}
      initial={{ scale: 1 - index * 0.02 }}
    >
      <video
        className="absolute w-full h-full object-cover opacity-60"
        src={oferta.video}
        autoPlay
        loop
        muted
      />
      <div className="relative z-10 flex flex-col justify-end p-8 h-full bg-gradient-to-t from-black/60 to-transparent">
        <h2 className="text-3xl font-bold text-white">{oferta.title}</h2>
        <p className="text-white/80 mb-4">{oferta.description}</p>
        <Link href={oferta.link} className="text-sm text-blue-400 underline">
          Dowiedz się więcej
        </Link>
      </div>
    </motion.div>
  )
}
