"use client"

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion"
import Link from "next/link"

export const SmoothScrollHero = () => {
  return (
    <div className='bg-zinc-950'>
      <Hero />
    </div>
  )
}

const SECTION_HEIGHT = 1000

const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 10vh)` }}
      className='relative w-full'
    >
      <CenterImage />

      <div className='absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950' />
    </div>
  )
}

const CenterImage = () => {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, SECTION_HEIGHT], [1, 0])

  return (
    <motion.div
      className='sticky top-0 h-screen w-full'
      style={{ opacity }}
    >
      <section className='w-full min-h-[100svh]'>
        <div className='absolute w-full min-h-[100svh] flex items-end justify-center overflow-hidden'>
          <video
            className='absolute top-0 left-0 w-full h-full object-cover'
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src='/assets/video/Gen-3 Alpha Turbo 1620967955, New standards of web, Cropped - Dewwwelopm, M 5.mp4'
              type='video/mp4'
            />
            Your browser does not support the video tag.
          </video>

          {/* Zawartość */}
          <div className='relative z-10 min-h-[50svh] w-[90%] flex flex-col gap-12 mb-2 sm:justify-center lg:w-[80%]'>
            <h1 className='text-5xl font-extrabold lg:text-5xl animate-fade-right text-white'>
              Budowanie stron i sklepów internetowych
            </h1>

            <div className='w-[80%] flex flex-col animate-fade-right'>
              <p className="text-white">Zakładanie własnej strony internetowej nie musi być trudne.</p>
              <p className="text-white">Zbuduj z nami swój wizerunek w sieci!</p>
            </div>

            <div className='flex w-full justify-end xl:justify-start animate-fade-left xl:animate-fade-right'>
              <Link
                className='px-6 py-2 bg-main transition-all text-white hover:bg-darkmain cursor-pointer'
                href={"/#oferta"}
              >
                Sprawdź
              </Link>
            </div>
          </div>
        </div>

        <div className='absolute inset-0 w-full h-full bg-black/50'></div>
      </section>
    </motion.div>
  )
}




// export const Schedule = () => {
// 	return (
// 		<section
// 			id='launch-schedule'
// 			className='mx-auto max-w-5xl px-4 py-48 text-white'
// 		>
// 			<motion.h1
// 				initial={{ y: 48, opacity: 0 }}
// 				whileInView={{ y: 0, opacity: 1 }}
// 				transition={{ ease: "easeInOut", duration: 0.75 }}
// 				className='mb-20 text-4xl font-black uppercase text-zinc-50'
// 			>
// 				FAQ
// 			</motion.h1>
// 			<ScheduleItem
// 				title='NG-21'
// 				date='Dec 9th'
// 				// location='Florida'
// 			/>
// 			<ScheduleItem
// 				title='Starlink'
// 				date='Dec 20th'
// 				// location='Texas'
// 			/>
// 			<ScheduleItem
// 				title='Starlink'
// 				date='Jan 13th'
// 				// location='Florida'
// 			/>
// 			<ScheduleItem
// 				title='Turksat 6A'
// 				date='Feb 22nd'
// 				// location='Florida'
// 			/>
// 			<ScheduleItem
// 				title='NROL-186'
// 				date='Mar 1st'
// 				// location='California'
// 			/>
// 			<ScheduleItem
// 				title='GOES-U'
// 				date='Mar 8th'
// 				// location='California'
// 			/>
// 			<ScheduleItem
// 				title='ASTRA 1P'
// 				date='Apr 8th'
// 				// location='Texas'
// 			/>
// 		</section>
// 	);
// };

// type ParallaxImgProps = {
// 	className?: string;
// 	alt: string;
// 	src: string;
// 	start: number;
// 	end: number;
// };

// const ParallaxImg: React.FC<ParallaxImgProps> = ({
// 	className,
// 	alt,
// 	src,
// 	start,
// 	end,
// }) => {
// 	const ref = useRef<HTMLImageElement>(null);

// 	const { scrollYProgress } = useScroll({
// 		target: ref,
// 		offset: [`${start}px end`, `end ${end * -1}px`],
// 	});

// 	const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
// 	const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
// 	const y = useTransform(scrollYProgress, [0, 1], [start, end]);
// 	const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

// 	return (
// 		<motion.img
// 			src={src}
// 			alt={alt}
// 			className={className}
// 			ref={ref}
// 			style={{ transform, opacity }}
// 		/>
// 	);
// };

// type ScheduleItemProps = {
// 	title: string;
// 	date: string;
// };

// const ScheduleItem: React.FC<ScheduleItemProps> = ({ title, date }) => {
// 	return (
// 		<motion.div
// 			initial={{ y: 48, opacity: 0 }}
// 			whileInView={{ y: 0, opacity: 1 }}
// 			transition={{ ease: "easeInOut", duration: 0.75 }}
// 			className='mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9'
// 		>
// 			<div>
// 				<p className='mb-1.5 text-xl text-zinc-50'>{title}</p>
// 				<p className='text-sm uppercase text-zinc-500'>{date}</p>
// 			</div>
// 			<div className='flex items-center gap-1.5 text-end text-sm uppercase text-zinc-500'>
// 				<p>+</p>
// 			</div>
// 		</motion.div>
// 	);
// };

// const Nav = () => {
// 	return (
// 		<nav className='fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-3 text-white'>
// 			{/* <SiSpacex className="text-3xl mix-blend-difference" /> */}
// 			<button
// 				onClick={() => {
// 					document.getElementById("launch-schedule")?.scrollIntoView({
// 						behavior: "smooth",
// 					});
// 				}}
// 				className='flex items-center gap-1 text-xs text-zinc-400'
// 			>
// 				LAUNCH SCHEDULE
// 			</button>
// 		</nav>
// 	);
// };
