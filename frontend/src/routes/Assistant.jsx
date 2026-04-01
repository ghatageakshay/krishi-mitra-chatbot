import Chat from "../components/chat";

function AssistantRoute() {
	return (
		<div className="rounded-2xl border border-slate-200 bg-white shadow-card p-5 sm:p-7">
			<h1 className="text-2xl font-semibold text-slate-900">कृषीमित्र</h1>
			<p className="text-slate-600 mt-1">शेतीविषयक प्रश्नांसाठी तुमचा AI सहाय्यक.</p>
			<div className="mt-6">
				<Chat />
			</div>
		</div>
	);
}

export default AssistantRoute;

