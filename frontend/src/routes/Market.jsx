import { useOutletContext } from "react-router-dom";

function Market() {
	const { lang } = useOutletContext() || { lang: 'mr' };
	const isMr = lang === 'mr';

	// Hardcoded data
	const marketData = [
		{ crop: "कांदा (Onion)", market: "पुणे (Pune)", min: "₹1500", max: "₹2200", unit: "क्विंटल", trend: "up" },
		{ crop: "सोयाबीन (Soybean)", market: "लातूर (Latur)", min: "₹4200", max: "₹4800", unit: "क्विंटल", trend: "down" },
		{ crop: "कापूस (Cotton)", market: "जळगाव (Jalgaon)", min: "₹6500", max: "₹7200", unit: "क्विंटल", trend: "stable" },
		{ crop: "गहू (Wheat)", market: "नाशिक (Nashik)", min: "₹2100", max: "₹2500", unit: "क्विंटल", trend: "up" },
		{ crop: "टोमॅटो (Tomato)", market: "नारायणगाव (Narayangaon)", min: "₹800", max: "₹1200", unit: "कॅरेट", trend: "down" },
	];

	return (
		<div className="flex flex-col gap-4">
			<div className="bg-white rounded-2xl p-4 border border-green-100 shadow-card">
				<h2 className="text-xl font-semibold mb-1 text-slate-800">
					{isMr ? "आजचे बाजारभाव" : "Today's Market Prices"}
				</h2>
				<p className="text-sm text-slate-500 mb-4">
					{isMr ? "विविध कृषी उत्पन्न बाजार समित्यांमधील अद्ययावत दर" : "Latest rates across different APMC markets"}
				</p>

				<div className="flex flex-col gap-3">
					{marketData.map((item, idx) => (
						<div key={idx} className="p-3 border border-slate-100 rounded-xl bg-slate-50 flex flex-col gap-2">
							<div className="flex justify-between items-center">
								<h3 className="font-semibold text-slate-700">{item.crop}</h3>
								{item.trend === 'up' && <span className="text-green-600 text-sm font-bold flex items-center gap-1">📈 {isMr ? 'वाढ' : 'Up'}</span>}
								{item.trend === 'down' && <span className="text-red-500 text-sm font-bold flex items-center gap-1">📉 {isMr ? 'घट' : 'Down'}</span>}
								{item.trend === 'stable' && <span className="text-slate-500 text-sm font-bold flex items-center gap-1">➖ {isMr ? 'स्थिर' : 'Stable'}</span>}
							</div>
							
							<div className="flex justify-between text-sm">
								<span className="text-slate-500 flex items-center gap-1">📍 {item.market}</span>
								<span className="font-medium text-slate-800">{item.min} - {item.max} <span className="font-normal text-xs text-slate-400">/{item.unit}</span></span>
							</div>
						</div>
					))}
				</div>
				
				<div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200 text-xs text-yellow-800 text-center">
					{isMr ? "टीप: हे दर प्रातिनिधिक आहेत आणि वेळेनुसार बदलू शकतात." : "Note: These rates are representative and subject to change."}
				</div>
			</div>
		</div>
	);
}

export default Market;
