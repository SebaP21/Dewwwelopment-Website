









// import { useEffect, useRef, useState } from "react";
// import { motion, useMotionValue, useTransform, animate, useScroll } from "framer-motion";
// import Image from "next/image";
// import styles from "./zoom.module.css";

// import Picture1 from "../../../assets/img/Dewwwelopment-o-nas (1).jpg";
// import Picture2 from "../../../assets/img/Dewwwelopment-oferta-projektowa.jpg";
// import Picture3 from "../../../assets/img/Dewwwelopment-sklep-intenetowy.jpg";
// import Picture4 from "../../../assets/img/Dewwwelopment-o-nas (1).jpg";
// import Picture5 from "../../../assets/img/Dewwwelopment-oferta-projektowa.jpg";
// import Picture6 from "../../../assets/img/Dewwwelopment-sklep-intenetowy.jpg";
// import Picture7 from "../../../assets/img/Dewwwelopment-sklep-intenetowy.jpg";

// const ZoomAnimation = () => {
//   const container = useRef<HTMLDivElement>(null);

//   // Śledzimy postęp scrolla w obrębie kontenera
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ["5vh start", "end end"],
//   });

//   // Motion value, która w fazie "push" animuje się od 0 do 1
//   const progress = useMotionValue(0);
//   // finalValue steruje transformacjami – gdy nie ma push, opiera się na scrollYProgress, inaczej na progress
//   const finalValue = useMotionValue(0.3);

//   // Stan określający, czy jesteśmy w fazie push (czyli czy animacja jest aktywna)
//   const [isPushActive, setIsPushActive] = useState(false);

//   // Gdy nie jesteśmy w fazie push, synchronizujemy finalValue z scrollYProgress
//   useEffect(() => {
//     const unsubscribe = scrollYProgress.on("change", (value) => {
//       if (!isPushActive) {
//         finalValue.set(value);
//       }
//     });
//     return () => unsubscribe();
//   }, [scrollYProgress, isPushActive, finalValue]);

//   // Nasłuchujemy zmian scrollYProgress, aby wyzwalać animację push w górę lub w dół
//   useEffect(() => {
//     const unsubscribe = scrollYProgress.on("change", (value) => {
//       if (value >= 0.3 && !isPushActive) {
//         // Po przekroczeniu 0.3 – uruchamiamy animację push z 0 do 1 przez 3 sekundy
//         setIsPushActive(true);
//         animate(progress, 1, { duration: 1 });
//       } else if (value < 0.3 && isPushActive) {
//         // Gdy przewijamy w górę poniżej 0.3 – animujemy z 1 do 0 przez 3 sekundy,
//         // a po zakończeniu wracamy do sterowania przez scrollYProgress
//         animate(progress, 0, { duration: 1, onComplete: () => setIsPushActive(false) });
//       }
//     });
//     return () => unsubscribe();
//   }, [scrollYProgress, isPushActive, progress]);

//   // Gdy jesteśmy w fazie push, synchronizujemy finalValue z progress
//   useEffect(() => {
//     const unsubscribe = progress.on("change", (p) => {
//       if (isPushActive) {
//         finalValue.set(p);
//       }
//     });
//     return () => unsubscribe();
//   }, [progress, isPushActive, finalValue]);

//   // Definicje transformacji – korzystają z finalValue
//   const scale4 = useTransform(finalValue, [0, 1], [1, 4]);
//   const scale5 = useTransform(finalValue, [0, 1], [1, 5]);
//   const scale6 = useTransform(finalValue, [0, 1], [1, 6]);
//   const scale8 = useTransform(finalValue, [0, 1], [1, 8]);
//   const scale9 = useTransform(finalValue, [0, 1], [1, 9]);

//   const headerOpacity = useTransform(finalValue, [0.3, 1], [0, 1]);
//   const headerScale = useTransform(finalValue, [0.3, 1], [0.8, 1]);
//   const overlayOpacity = useTransform(finalValue, [0.3, 1], [0, 0.4]);

//   const pictures = [
//     { src: Picture1, scale: scale4, title: "Zbuduj swoją stronę" },
//     { src: Picture2, scale: scale5, title: "Oferta projektowa" },
//     { src: Picture3, scale: scale6, title: "Sklep internetowy" },
//     { src: Picture4, scale: scale5, title: "O nas" },
//     { src: Picture5, scale: scale6, title: "Oferta projektowa" },
//     { src: Picture6, scale: scale8, title: "Sklep internetowy" },
//     { src: Picture7, scale: scale9, title: "E-commerce" },
//   ];

//   return (
//     <div ref={container} className={styles.container}>
//       <div className={styles.sticky}>
//         {pictures.map(({ src, scale, title }, index) => (
//           <motion.div key={index} style={{ scale }} className={styles.el}>
//             <div className={styles.imageContainer}>
//               <Image src={src} fill alt={title} placeholder="blur" />
//               <motion.div className={styles.overlay} style={{ opacity: overlayOpacity }} />
//               <motion.div className={styles.imageTitle} style={{ opacity: headerOpacity, scale: headerScale }}>
//                 {title}
//               </motion.div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ZoomAnimation;
