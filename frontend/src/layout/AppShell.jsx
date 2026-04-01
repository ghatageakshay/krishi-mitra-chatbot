import { useEffect, useState } from "react";
import { Outlet, NavLink, useLocation, useNavigate } from "react-router-dom";
import Chat from "../components/chat";

function AppShell() {
	const navigate = useNavigate();
	const location = useLocation();
	const [showAssistant, setShowAssistant] = useState(false);
	const [lang, setLang] = useState('mr');
	const isMr = lang === 'mr';

	useEffect(() => {
		// Mobile/SPA: ensure the new page starts from the top.
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, [location.pathname]);

	const items = [
		{ to: "/", label: isMr ? "मुखपृष्ठ" : "Home" },
		{ to: "/detect", label: isMr ? "रोग ओळखा" : "Detect" },
		{ to: "/schemes", label: isMr ? "योजना" : "Schemes" },
		{ to: "/weather", label: isMr ? "हवामान" : "Weather" },
		{ to: "/market", label: isMr ? "बाजारभाव" : "Market Prices" },
		{ to: "/calendar", label: isMr ? "पीक वेळापत्रक" : "Crop Calendar" },
		{ to: "/assistant", label: isMr ? "कृषीमित्र" : "Assistant" },
		{ to: "/contact", label: isMr ? "संपर्क करा" : "Contact" }
	];

	return (
		<div className="h-full relative flex flex-col sm:rounded-2xl bg-white border border-green-100 shadow-card overflow-hidden">
			<header className="shrink-0 sticky top-0 z-10 bg-white/95 backdrop-blur border-b border-green-100">
				<div className="px-3 py-3 flex items-center justify-between gap-2">
					<div className="flex items-center gap-2">
						<div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
							<span className="text-primary font-bold">🌿</span>
						</div>
						<span className="font-semibold text-slate-800">
							{isMr ? "पीक आरोग्य सहाय्यक" : "Crop Assistant"}
						</span>
					</div>
					{/* Mobile-first dropdown nav (shown on all sizes) */}
					<div className="flex items-center gap-1">
						<button 
							onClick={() => setLang(isMr ? 'en' : 'mr')}
							className="px-2 py-1 text-xs font-semibold bg-green-50 border border-green-200 rounded text-green-800 hover:bg-green-100 transition whitespace-nowrap"
						>
							{isMr ? "EN" : "मराठी"}
						</button>
						<select
							className="w-full min-w-[90px] bg-white border border-green-200 rounded-lg px-1 py-1 text-sm text-slate-800 focus:outline-none"
							onChange={(e) => navigate(e.target.value)}
							defaultValue={window.location.pathname}
						>
							{items.map((it) => (
								<option key={it.to} value={it.to}>
									{it.label}
								</option>
							))}
						</select>
					</div>
				</div>
			</header>
			<div className="flex-1 overflow-y-auto flex flex-col">
				<main className="flex-1">
					<div className="px-3 py-4">
						{/* Route content animation (keeps navigation feeling smooth) */}
						<div key={location.pathname} className="route-transition">
							<Outlet context={{ lang }} />
						</div>
					</div>
				</main>
				<footer className="shrink-0 border-t border-slate-200 py-6 text-center text-xs text-slate-500 px-4">
					{isMr ? "स्पर्धेसाठी तयार केलेले • पीक आरोग्य, योजना आणि हवामान एका ठिकाणी" : "Built for Competition • Crop Health, Schemes & Weather"}
				</footer>
			</div>
			{/* Floating KrushiMitra assistant button */}
			<button
				type="button"
				onClick={() => setShowAssistant(true)}
				className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 rounded-full bg-primary text-white shadow-lg shadow-primary/40 h-14 w-14 flex items-center justify-center hover:bg-primary/90 transition"
				aria-label="KrushiMitra assistant"
			>
				<span className="text-2xl">🤖</span>
			</button>

			{showAssistant && (
				<div className="absolute inset-0 z-30 flex items-end sm:items-center justify-center bg-black/40">
					<div className="w-full sm:max-w-md mx-2 sm:mx-0 mb-2 sm:mb-0 max-h-full">
						<div className="rounded-t-2xl sm:rounded-2xl bg-white shadow-card overflow-hidden flex flex-col max-h-full">
							<div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 bg-slate-50">
								<div>
									<div className="text-sm font-semibold text-slate-900">{isMr ? "कृषीमित्र" : "KrushiMitra"}</div>
									<div className="text-xs text-slate-500">{isMr ? "शेतीविषयक प्रश्नांसाठी तुमचा सहाय्यक" : "Your assistant for farming questions"}</div>
								</div>
								<button
									type="button"
									onClick={() => setShowAssistant(false)}
									className="rounded-full p-1.5 hover:bg-slate-200 transition"
									aria-label="Close assistant"
								>
									<span className="text-lg">✕</span>
								</button>
							</div>
							<div className="flex-1 px-4 py-4 min-h-0 overflow-y-auto">
								<Chat />
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default AppShell;

