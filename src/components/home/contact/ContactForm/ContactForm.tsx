"use client";

import { useState } from "react";

const ContactForm = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		message: "",
	});
	const [status, setStatus] = useState("");

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setStatus("Wysyłanie...");

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				setStatus("Wiadomość wysłana! Dziękujemy! ");
				setFormData({
					firstName: "",
					lastName: "",
					email: "",
					phone: "",
					message: "",
				});
			} else {
				setStatus("Błąd wysyłania wiadomości");
			}
		} catch (error) {
			setStatus(`${error}`);
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='w-full flex flex-col gap-4 py-8 md:order-2 lg:max-w-[500px] lg:mx-auto'
		>
			<div className=''>
				<input
					type='text'
					id='firstName'
					name='firstName'
					placeholder='Imię'
					value={formData.firstName}
					onChange={handleChange}
					required
					className=' w-full px-4 py-4 bg-formBgc border border-transparent rounded-sm'
				/>
			</div>

			<div className=''>
				<input
					type='text'
					id='lastName'
					name='lastName'
					placeholder='Nazwisko'
					value={formData.lastName}
					onChange={handleChange}
					required
					className=' w-full px-4 py-4 bg-formBgc border border-transparent rounded-sm'
				/>
			</div>

			<div className=''>
				<input
					type='email'
					id='email'
					name='email'
					placeholder='Adres e-mail'
					value={formData.email}
					onChange={handleChange}
					required
					className=' w-full px-4 py-4 bg-formBgc border border-transparent rounded-sm'
				/>
			</div>

			<div className=''>
				<input
					type='tel'
					id='phone'
					name='phone'
					placeholder='Telefon'
					value={formData.phone}
					onChange={handleChange}
					required
					className=' w-full px-4 py-4 bg-formBgc border border-transparent rounded-sm'
				/>
			</div>

			<div className=''>
				<textarea
					id='message'
					name='message'
					placeholder='Wiadomość'
					value={formData.message}
					onChange={handleChange}
					required
					className=' w-full min-h-[8svh] px-4 py-4 bg-formBgc border border-transparent rounded-sm'
				></textarea>
			</div>

			<button
				type='submit'
				className='w-full transition-all tracking-wider uppercase text-md  py-4 px-4 bg-darkmain text-white rounded-sm hover:bg-main'
			>
				Wyślij wiadomość
			</button>

			{status && (
				<p className='mt-4 text-center text-sm text-gray-600'>{status}</p>
			)}
		</form>
	);
};

export default ContactForm;
