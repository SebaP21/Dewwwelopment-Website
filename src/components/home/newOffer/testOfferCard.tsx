"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

type CardProps = {
  i: number;
  title: string;
  description: string;
  src: string;
  url: string;
};

export const Card = ({ i, title, description, src, url }: CardProps) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { amount: 0.3, once: true });


  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut", delay: i * 0.2 },
      });
    }
  }, [inView, controls, i]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className="flex flex-col lg:flex-row items-center justify-between w-full max-w-[1400px] min-h-[80vh] py-10 px-6 sm:px-10 border-b border-gray-700 mx-auto"
    >
      {/* Sekcja z obrazem */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <motion.div whileHover={{ scale: 1.05 }} className="overflow-hidden rounded-xl shadow-xl w-full max-w-[600px]">
          <Image
            src={`/assets/img/${src}`}
            alt={title}
            width={600}
            height={400}
            className="object-cover rounded-lg w-full h-auto"
          />
        </motion.div>
      </div>

      {/* Sekcja z treścią */}
      <div className="w-full lg:w-1/2 pl-0 lg:pl-10 text-center lg:text-left mt-6 lg:mt-0">
        <motion.h2
          className="text-[28px] sm:text-[32px] lg:text-[36px] font-bold tracking-wide transition-all duration-300"
          whileHover={{ scale: 1.1 }}
        >
          <a href={url}>{title}</a>
        </motion.h2>
        <p className="text-gray-400 text-base sm:text-lg mt-4">{description}</p>
        <Link
          href={url}
          className="mt-4 inline-block text-sm sm:text-base font-semibold text-gray-300 underline transition-all duration-300 hover:text-white"
        >
          Zobacz więcej →
        </Link>
      </div>
    </motion.div>
  );
};
