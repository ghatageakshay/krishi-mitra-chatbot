import Upload from "../components/upload";

function Detect() {
	return (
		<div className="rounded-2xl border border-slate-200 bg-white shadow-card p-5 sm:p-7">
			<h1 className="text-2xl font-semibold text-slate-900">पीक रोग ओळखा</h1>
			<p className="text-slate-600 mt-1">प्रभावित पानाचा स्पष्ट फोटो अपलोड करा.</p>
			<div className="mt-6">
				<Upload />
			</div>
		</div>
	);
}

export default Detect;

