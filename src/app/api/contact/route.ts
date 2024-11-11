import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
	const { firstName, lastName, email, phone, message } = await req.json();

	const transporter = nodemailer.createTransport({
		host: "smtp.gmail.com",
		port: 587,
		secure: false,
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASS,
		},
		tls: {
			rejectUnauthorized: false,
		},
	});

	const mailOptions = {
		from: email,
		to: "dewwwelopment@gmail.com",
		subject: `Wiadomość od ${firstName} ${lastName}`,
		text: `
      Imię: ${firstName}
      Nazwisko: ${lastName}
      E-mail: ${email}
      Telefon: ${phone}
      Wiadomość:
      ${message}
    `,
		html: `
      <p><strong>Imię:</strong> ${firstName}</p>
      <p><strong>Nazwisko:</strong> ${lastName}</p>
      <p><strong>E-mail:</strong> ${email}</p>
      <p><strong>Telefon:</strong> ${phone}</p>
      <p><strong>Wiadomość:</strong><br />${message}</p>
    `,
	};

	try {
		await transporter.sendMail(mailOptions);
		return NextResponse.json({ status: "Wiadomość wysłana" });
	} catch (error) {
		console.error("Błąd wysyłania wiadomości:", error);
		return NextResponse.json(
			{ status: "Błąd wysyłania wiadomości." },
			{ status: 500 }
		);
	}
}
