import { useOutletContext } from "react-router-dom";

function Calendar() {
	const { lang } = useOutletContext() || { lang: 'mr' };
	const isMr = lang === 'mr';

	const stages = [
		{
			month: isMr ? "पहिला महिना" : "Month 1",
			title: isMr ? "जमिनीची मशागत व लागवड" : "Land Prep & Sowing",
			desc: isMr ? "जमीन भुसभुशीत करून योग्य अंतरावर ऊस किंवा कापसाची लागवड करावी." : "Prepare soft soil and sow at appropriate distances.",
			icon: "🚜"
		},
		{
			month: isMr ? "दुसरा महिना" : "Month 2",
			title: isMr ? "प्राथमिक खत आणि पाणी" : "Initial Fertilizer & Water",
			desc: isMr ? "माती परीक्षणानुसार नत्र, स्फुरद व पालाश खतांची पहिली मात्रा द्या." : "Apply first dose of NPK fertilizers based on soil testing.",
			icon: "🌱"
		},
		{
			month: isMr ? "तिसरा महिना" : "Month 3",
			title: isMr ? "तण नियंत्रण व कीड व्यवस्थापन" : "Weed & Pest Control",
			desc: isMr ? "तण काढून शेत स्वच्छ ठेवा. कीड दिसल्यास योग्य कीटकनाशकाची फवारणी करा." : "Remove weeds and spray pesticides if pests are observed.",
			icon: "🐛"
		},
		{
			month: isMr ? "काढणीचा काळ" : "Harvest Time",
			title: isMr ? "पीक काढणी" : "Harvesting",
			desc: isMr ? "पीक पक्व झाल्यावर योग्य हवामान बघून काढणी करावी." : "Harvest when the crop is mature and weather is suitable.",
			icon: "🌾"
		}
	];

	return (
		<div className="flex flex-col gap-4">
			<div className="bg-white rounded-2xl p-4 border border-green-100 shadow-card">
				<h2 className="text-xl font-semibold mb-1 text-slate-800">
					{isMr ? "पीक वेळापत्रक (ऊस/इतर)" : "Crop Calendar (Sugarcane/Others)"}
				</h2>
				<p className="text-sm text-slate-500 mb-6">
					{isMr ? "उत्तम उत्पादनासाठी टप्पेवार नियोजन" : "Step-by-step planning for optimal yield"}
				</p>

				<div className="relative pl-6 border-l-2 border-green-200 flex flex-col gap-6">
					{stages.map((stage, i) => (
						<div key={i} className="relative">
							{/* Timeline dot */}
							<div className="absolute -left-[35px] top-1 h-7 w-7 bg-white border-2 border-primary rounded-full flex items-center justify-center text-[10px] shadow-sm">
								{stage.icon}
							</div>
							
							<div className="bg-slate-50 p-3 rounded-xl border border-slate-100 shadow-sm">
								<span className="text-xs font-bold text-primary uppercase tracking-wider">{stage.month}</span>
								<h3 className="font-semibold text-slate-800 mt-1">{stage.title}</h3>
								<p className="text-sm text-slate-600 mt-1">{stage.desc}</p>
							</div>
						</div>
					))}
				</div>
				
				<div className="mt-6 p-3 bg-blue-50 rounded-lg border border-blue-200 text-xs text-blue-800 leading-relaxed">
					{isMr 
						? "💡 कृषी सल्ला: कोणत्याही रासायनिक खताचा वापर करताना नेहमी माती चाचणी अहवालाचा संदर्भ घ्या." 
						: "💡 Agri Tip: Always refer to soil testing reports before applying chemical fertilizers."}
				</div>
			</div>
		</div>
	);
}

export default Calendar;
