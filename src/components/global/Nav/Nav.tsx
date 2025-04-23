"use client";

import Image from "next/image";

// import logoImageBlack from "../../../assets/img/dewwwelopment-low-resolution-logo-black-on-transparent-background-3.png";
import logoImageWhite from "../../../assets/img/dewwwelopment-low-resolution-logo-white-on-transparent-background (2).png";
import crossIcon from "../../../assets/icons/close (2).png";

// import burgerBlack from "../../../assets/icons/sort.png";
import burgerWhite from "../../../assets/icons/sort (1).png";
import Link from "next/link";
import { useState, useEffect } from "react";
import TransitionLink from "@/components/utils/TransitionLink";

const Nav = () => {
	const [isNavShown, setIsNavShown] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	const onClickNav = () => {
		setIsNavShown((prev) => !prev);
	};

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			<nav
				className={`fixed top-0 w-full flex  opacity-95 justify-center items-center  transition-all duration-400 ease-ease-custom z-50 min-h-[8svh] ${
					isScrolled ? "bg-black bg-opacity-35 backdrop-blur-[22.5px]" : "bg-transparent"
				} 
				${isScrolled ? "pt-0" : "pt-8"} 
				${!isNavShown ? "translate-y-0" : "-translate-y-full"}
				`}
			>
				<div className='w-[90%]  flex justify-between items-center lg:w-[80%]'>
					<Link
						href={"/"}
						className='w-[180px] lg:w-[220px]'
					>
						<div className={`${isScrolled ? "hidden" : "flex"}`}>
							<Image
								src={logoImageWhite}
								alt={
									"Dewwwelopment-tworzenie stron i sklepów internetowych logo"
								}
								
							/>
						</div>
						<div className={`${isScrolled ? "flex" : "hidden"}`}>
							<Image
								src={logoImageWhite}
								alt={
									"Dewwwelopment-tworzenie stron i sklepów internetowych logo"
								}
							/>
						</div>
					</Link>
					<div
						className={`${
							isScrolled ? "hidden" : "flex"
						} w-[30px] h-[30px] cursor-pointer lg:hidden`}
						onClick={onClickNav}
					>
						<Image
							src={burgerWhite}
							alt={"burger-icon-black"}
						/>
					</div>
					<div
						className={`${
							isScrolled ? "flex" : "hidden"
						} w-[30px] h-[30px] cursor-pointer lg:hidden`}
						onClick={onClickNav}
					>
						<Image
							src={burgerWhite}
							alt={"burger-icon-black"}
						/>
					</div>
					<div
						className={`hidden w-[60%] lg:flex justify-evenly uppercase font-semibold text-lg ${
							isScrolled ? "text-white" : "text-black"
						}`}
					>
						<TransitionLink
							href={"/#o-nas"}
							// className='transition-all hover:text-break'
						>
							O nas
						</TransitionLink>
						<TransitionLink
							href={"/oferta"}
							// className='transition-all hover:text-break'
						>
							Oferta
						</TransitionLink>
						<TransitionLink
							href={"/#faq"}
							// className='transition-all hover:text-break'
						>
							FAQ
						</TransitionLink>
						<TransitionLink
							href={"/#kontakt"}
							// className='transition-all hover:text-break'
						>
							Kontakt
						</TransitionLink>
					</div>
				</div>
			</nav>

			<nav
				className={`w-full fixed top-0 bg-black bg-opacity-70 backdrop-blur-lg min-h-[100svh] z-50 flex justify-center items-center duration-500 transition-all ${
					!isNavShown ? "translate-x-full" : "translate-x-0"
				}`}
			>
				<div className='w-[90%] min-h-[95svh] flex flex-col justify-evenly'>
					<div
						className='absolute top-5 right-5 flex self-end w-[25px] cursor-pointer'
						onClick={onClickNav}
					>
						<Image
							src={crossIcon}
							alt={"close-btn"}
							className='transition-all hover:rotate-90'
						/>
					</div>
					<div className='min-h-[80svh] flex flex-col justify-evenly '>
						<Link
							href={"/"}
							onClick={onClickNav}
						>
							<div
								className={`w-[80%] mx-auto transition-all hover:scale-105 ${
									isNavShown && "animate-fade-down "
								} `}
							>
								<Image
									src={logoImageWhite}
									alt={""}
								/>
							</div>
						</Link>
						<div
							className={`w-full min-h-[60svh] flex flex-col items-center justify-evenly text-white text-xl font-semibold uppercase delay-500 ${
								isNavShown && "animate-fade-right "
							} `}
						>
							<Link
								href={"/#o-nas"}
								onClick={onClickNav}
								className='w-[50%] border-b-2 border-b-accent pb-4 text-2xl text-center transition-all hover:scale-105'
							>
								O nas
							</Link>
							<Link
								href={"/oferta"}
								onClick={onClickNav}
								className='w-[50%] border-b-2 border-b-accent pb-4 text-2xl text-center transition-all hover:scale-105'
							>
								Oferta
							</Link>
							<Link
								href={"/#faq"}
								onClick={onClickNav}
								className='w-[50%] border-b-2 border-b-accent pb-4 text-2xl text-center transition-all hover:scale-105'
							>
								FAQ
							</Link>
							<Link
								href={"/#kontakt"}
								onClick={onClickNav}
								className='w-[50%] border-b-2 border-b-accent pb-4 text-2xl text-center transition-all hover:scale-105'
							>
								Kontakt
							</Link>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Nav;
