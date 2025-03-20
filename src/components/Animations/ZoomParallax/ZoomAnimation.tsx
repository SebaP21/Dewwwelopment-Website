import Picture1 from "../../../assets/img/Dewwwelopment-o-nas (1).jpg";
import Picture2 from "../../../assets/img/Dewwwelopment-oferta-projektowa.jpg";
import Picture3 from "../../../assets/img/Dewwwelopment-sklep-intenetowy.jpg";
import Picture4 from "../../../assets/img/Dewwwelopment-o-nas (1).jpg";
import Picture5 from "../../../assets/img/Dewwwelopment-oferta-projektowa.jpg";
import Picture6 from "../../../assets/img/Dewwwelopment-sklep-intenetowy.jpg";
import Picture7 from "../../../assets/img/Dewwwelopment-sklep-intenetowy.jpg";
import Image from "next/image";

import styles from "./zoom.module.css";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
// import Paragraph from "../OpacityTextTest/Character";
import TextOpacityAnimated from "../OpacityTextTest/OpacityText";

const ZoomAnimation = () => {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start start", "end end"],
	});

	const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
	const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
	const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
	const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
	const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

	// Animacje nagłówka i tła (overlay)
	const headerOpacity = useTransform(scrollYProgress, [0.7, 1], [0, 1]);
	const headerScale = useTransform(scrollYProgress, [0.7, 1], [0.8, 1]);
	const overlayOpacity = useTransform(scrollYProgress, [0.3, 0.7], [0, 0.4]); // 40% ciemnego tła

	const pictures = [
		{ src: Picture1, scale: scale4, title: "Zbuduj swoją stronę" },
		{ src: Picture2, scale: scale5, title: "Oferta projektowa" },
		{ src: Picture3, scale: scale6, title: "Sklep internetowy" },
		{ src: Picture4, scale: scale5, title: "O nas" },
		{ src: Picture5, scale: scale6, title: "Oferta projektowa" },
		{ src: Picture6, scale: scale8, title: "Sklep internetowy" },
		{ src: Picture7, scale: scale9, title: "E-commerce" },
	];

	return (
		<div
			ref={container}
			className={styles.container}
		>
			<div className={styles.sticky}>
				{pictures.map(({ src, scale, title }, index) => (
					<motion.div
						key={index}
						style={{ scale }}
						className={styles.el}
					>
						<div className={styles.imageContainer}>
							<Image
								src={src}
								fill
								alt={title}
								placeholder='blur'
							/>

							{/* Nakładka (ciemne tło) */}
							<motion.div
								className={styles.overlay}
								style={{ opacity: overlayOpacity }}
							/>

							{/* Nagłówek na obrazie */}
							<motion.div
								className="absolute bottom-0"
								style={{ opacity: headerOpacity, scale: headerScale }}
							>
								<TextOpacityAnimated/>
							</motion.div>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default ZoomAnimation;
