import Weather from "../components/Weather";

function WeatherRoute() {
	return (
		<div className="rounded-2xl border border-slate-200 bg-white shadow-card p-5 sm:p-7">
			<h1 className="text-2xl font-semibold text-slate-900">हवामान आणि शेती टिप्स</h1>
			<p className="text-slate-600 mt-1">तुमच्या शहरानुसार माहिती मिळवा.</p>
			<div className="mt-6">
				<Weather />
			</div>
		</div>
	);
}

export default WeatherRoute;

