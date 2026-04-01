import { Link } from "react-router-dom";

function Home() {
	return (
		<div className="text-center rounded-2xl border border-green-100 bg-white shadow-card p-5">
			<h1 className="text-2xl font-semibold text-slate-900 leading-snug">पिकांचे आजार ओळखा, योग्य मार्गदर्शन मिळवा</h1>
			<p className="text-slate-600 mt-2">फोटो पाठवा, शासकीय योजना पाहा आणि हवामानानुसार नियोजन करा.</p>

			<div className="grid grid-cols-1 gap-4 mt-6">
				<Link to="/detect" className="rounded-2xl border border-green-100 p-5 shadow-card hover:shadow-lg transition bg-white text-left">
					<div className="text-2xl">🩺</div>
					<div className="font-medium mt-2">रोग ओळखा</div>
					<p className="text-base text-slate-600 mt-1">पानाचा फोटो अपलोड करा आणि त्वरित सल्ला मिळवा.</p>
				</Link>
				<Link to="/schemes" className="rounded-2xl border border-green-100 p-5 shadow-card hover:shadow-lg transition bg-white text-left">
					<div className="text-2xl">🏛️</div>
					<div className="font-medium mt-2">शासकीय योजना</div>
					<p className="text-base text-slate-600 mt-1">तुमच्या पिकासाठी योजना शोधा आणि पात्रता तपासा.</p>
				</Link>
				<Link to="/weather" className="rounded-2xl border border-green-100 p-5 shadow-card hover:shadow-lg transition bg-white text-left">
					<div className="text-2xl">🌤️</div>
					<div className="font-medium mt-2">स्थानिक हवामान</div>
					<p className="text-base text-slate-600 mt-1">आठवड्याचे नियोजन करण्यासाठी उपयुक्त माहिती मिळवा.</p>
				</Link>
			</div>
		</div>
	);
}

export default Home;

