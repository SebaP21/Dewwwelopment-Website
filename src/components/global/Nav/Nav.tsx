"use client";

import Image from "next/image";

import logoImageBlack from "../../../assets/img/dewwwelopment-low-resolution-logo-black-on-transparent-background-3.png";
import logoImageWhite from "../../../assets/img/dewwwelopment-low-resolution-logo-white-on-transparent-background (2).png";
import crossIcon from "../../../assets/icons/close (2).png";

import burgerBlack from "../../../assets/icons/sort.png";
import burgerWhite from "../../../assets/icons/sort (1).png";
import Link from "next/link";
import { useState, useEffect } from "react";

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
				className={`fixed top-0 w-full flex opacity-95 justify-center items-center  transition-all duration-500 z-50 min-h-[8svh] ${
					isScrolled ? "bg-darkmain bg-opacity-20" : "bg-transparent"
				} 
				${!isNavShown ? "translate-y-0" : "-translate-y-full"}
				`}
			>
				<div className='w-[90%] flex justify-between items-center'>
					<Link
						href={"/"}
						className='w-[180px]'
					>
						<div className={`${isScrolled ? "hidden" : "flex"}`}>
							<Image
								src={logoImageBlack}
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
						} w-[30px] h-[30px] cursor-pointer`}
						onClick={onClickNav}
					>
						<Image
							src={burgerBlack}
							alt={"burger-icon-black"}
						/>
					</div>
					<div
						className={`${
							isScrolled ? "flex" : "hidden"
						} w-[30px] h-[30px] cursor-pointer`}
						onClick={onClickNav}
					>
						<Image
							src={burgerWhite}
							alt={"burger-icon-black"}
						/>
					</div>
				</div>
			</nav>

			<nav
				className={`w-full fixed top-0 bg-darkmain opacity-95 min-h-[100svh] z-50 flex justify-center items-center duration-500 transition-all ${
					!isNavShown ? "translate-x-full" : "translate-x-0"
				}`}
			>
				<div className='w-[90%] min-h-[95svh] flex flex-col justify-evenly'>
					<div
						className='absolute top-5 right-5 flex self-end w-[25px]'
						onClick={onClickNav}
					>
						<Image
							src={crossIcon}
							alt={"close-btn"}
						/>
					</div>
					<div className='min-h-[80svh] flex flex-col justify-evenly'>
						<Link
							href={"/"}
							onClick={onClickNav}
						>
							<div className='w-full'>
								<Image
									src={logoImageWhite}
									alt={""}
								/>
							</div>
						</Link>
						<div className='w-full min-h-[60svh] flex flex-col items-center justify-evenly text-white text-xl font-semibold uppercase'>
							<Link
								href={"/#o-nas"}
								onClick={onClickNav}
								className='border-b-2 border-b-accent pb-2'
							>
								O Nas
							</Link>
							<Link
								href={"/oferta"}
								onClick={onClickNav}
								className='border-b-2 border-b-accent pb-2'
							>
								Oferta
							</Link>
							<Link
								href={"/#faq"}
								onClick={onClickNav}
								className='border-b-2 border-b-accent pb-2'
							>
								FAQ
							</Link>
							<Link
								href={"/#kontakt"}
								onClick={onClickNav}
								className='border-b-2 border-b-accent pb-2'
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