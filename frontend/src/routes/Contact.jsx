const EMAIL = "your-email@example.com"; // TODO: तुमचा ईमेल इथे अपडेट करा

const CONTACT_LINKS = [
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/your-username",
		icon: "in"
	},
	{
		label: "GitHub",
		href: "https://github.com/your-username",
		icon: "GH"
	},
	{
		label: "Portfolio",
		href: "https://your-website.com",
		icon: "Web"
	}
];

function Contact() {
	return (
		<div className="rounded-2xl border border-slate-200 bg-white shadow-card p-5 sm:p-7">
			<h1 className="text-2xl font-semibold text-slate-900">संपर्क करा</h1>
			<p className="text-slate-600 mt-1">
				प्रोजेक्टबद्दल काही विचारायचे असेल तर खाली दिलेल्या लिंकद्वारे संपर्क करा.
			</p>

			<div className="mt-6 space-y-3">
				<a
					href={`mailto:${EMAIL}`}
					className="block w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-center text-primary font-medium hover:bg-slate-50 transition"
				>
					ईमेल करा: {EMAIL}
				</a>

				<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
					{CONTACT_LINKS.map((l) => (
						<a
							key={l.href}
							href={l.href}
							target="_blank"
							rel="noreferrer"
							className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-center hover:bg-slate-50 transition"
						>
							<div className="text-primary font-semibold">{l.icon}</div>
							<div className="text-sm text-slate-700">{l.label}</div>
						</a>
					))}
				</div>
			</div>
		</div>
	);
}

export default Contact;

