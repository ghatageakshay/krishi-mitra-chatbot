import Schemes from "../components/schemes";

function SchemesRoute() {
	return (
		<div className="rounded-2xl border border-slate-200 bg-white shadow-card p-5 sm:p-7">
			<h1 className="text-2xl font-semibold text-slate-900">शासकीय योजना</h1>
			<p className="text-slate-600 mt-1">तुमच्या पिकासाठी योजना शोधा.</p>
			<div className="mt-6">
				<Schemes />
			</div>
		</div>
	);
}

export default SchemesRoute;

