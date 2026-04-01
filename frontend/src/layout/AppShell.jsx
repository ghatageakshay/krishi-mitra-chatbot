import { useEffect, useState } from "react";
import { Outlet, NavLink, useLocation, useNavigate } from "react-router-dom";
import Chat from "../components/chat";
import { 
	Home as HomeIcon, 
	ScanLine, 
	FileText, 
	CloudSun, 
	BadgeIndianRupee, 
	Headset, 
	Phone 
} from "lucide-react";

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
		{ to: "/", label: isMr ? "मुखपृष्ठ" : "Home", icon: HomeIcon },
		{ to: "/detect", label: isMr ? "रोग ओळखा" : "Detect", icon: ScanLine },
		{ to: "/schemes", label: isMr ? "योजना" : "Schemes", icon: FileText },
		{ to: "/weather", label: isMr ? "हवामान" : "Weather", icon: CloudSun },
		{ to: "/market", label: isMr ? "बाजारभाव" : "Market", icon: BadgeIndianRupee },
		{ to: "/assistant", label: isMr ? "कृषीमित्र" : "Assistant", icon: Headset },
		{ to: "/contact", label: isMr ? "संपर्क" : "Contact", icon: Phone }
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
					<div className="flex items-center gap-1">
						<button 
							onClick={() => setLang(isMr ? 'en' : 'mr')}
							className="px-2 py-1 text-xs font-semibold bg-green-50 border border-green-200 rounded text-green-800 hover:bg-green-100 transition whitespace-nowrap"
						>
							{isMr ? "EN" : "मराठी"}
						</button>
					</div>
				</div>
			</header>
			
			<div className="flex-1 overflow-y-auto flex flex-col no-scrollbar">
				<main className="flex-1">
					<div className="px-3 py-4">
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
				className="absolute bottom-[84px] sm:bottom-[90px] right-4 z-20 rounded-full bg-primary text-white shadow-lg shadow-primary/40 h-14 w-14 flex items-center justify-center hover:bg-primary/90 transition transform hover:scale-105"
				aria-label="KrushiMitra assistant"
			>
				<span className="text-2xl">🤖</span>
			</button>

			{/* Bottom Navigation */}
			<nav className="shrink-0 bg-white border-t border-slate-200 safe-pb z-10 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
				<div className="flex items-center overflow-x-auto no-scrollbar px-1 py-1 gap-1">
					{items.map((it) => {
						const isActive = location.pathname === it.to || (it.to !== "/" && location.pathname.startsWith(it.to));
						return (
							<NavLink
								key={it.to}
								to={it.to}
								className={`flex flex-col items-center justify-center min-w-[72px] py-2 px-1 rounded-xl transition-all ${
									isActive
										? "text-primary"
										: "text-slate-500 hover:text-slate-700 hover:bg-slate-50"
								}`}
							>
								<div className={`mb-1 p-1 rounded-full text-slate-400 transition-colors ${isActive ? "bg-primary/10 text-primary" : ""}`}>
									<it.icon strokeWidth={isActive ? 2.5 : 2} className={`h-[22px] w-[22px] ${isActive ? "text-primary" : "currentColor"}`} />
								</div>
								<span className={`text-[10px] whitespace-nowrap ${isActive ? "font-bold text-primary" : "font-medium"}`}>{it.label}</span>
							</NavLink>
						);
					})}
				</div>
			</nav>

			{showAssistant && (
				<div className="absolute inset-0 z-30 flex items-end sm:items-center justify-center bg-black/40 backdrop-blur-sm">
					<div className="w-full h-[90%] sm:h-auto sm:max-w-md mx-0 sm:mx-2 max-h-full">
						<div className="rounded-t-2xl sm:rounded-2xl bg-white shadow-card overflow-hidden flex flex-col h-full sm:max-h-[85vh]">
							<div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 bg-slate-50 shrink-0">
								<div>
									<div className="text-sm font-semibold text-slate-900">{isMr ? "कृषीमित्र" : "KrushiMitra"}</div>
									<div className="text-xs text-slate-500">{isMr ? "शेतीविषयक प्रश्नांसाठी तुमचा सहाय्यक" : "Your assistant for farming questions"}</div>
								</div>
								<button
									type="button"
									onClick={() => setShowAssistant(false)}
									className="rounded-full w-8 h-8 flex items-center justify-center bg-slate-200 hover:bg-slate-300 text-slate-700 transition"
									aria-label="Close assistant"
								>
									<span className="text-sm font-bold">✕</span>
								</button>
							</div>
							<div className="flex-1 px-2 py-4 sm:px-4 min-h-0 overflow-y-auto">
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

