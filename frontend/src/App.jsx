import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppShell from "./layout/AppShell.jsx";
import Home from "./routes/Home.jsx";
import Detect from "./routes/Detect.jsx";
import Schemes from "./routes/Schemes.jsx";
import Weather from "./routes/Weather.jsx";
import Assistant from "./routes/Assistant.jsx";
import Contact from "./routes/Contact.jsx";
import Market from "./routes/Market.jsx";
import Calendar from "./routes/Calendar.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <AppShell />,
		children: [
			{ index: true, element: <Home /> },
			{ path: "detect", element: <Detect /> },
			{ path: "schemes", element: <Schemes /> },
			{ path: "weather", element: <Weather /> },
			{ path: "assistant", element: <Assistant /> },
			{ path: "contact", element: <Contact /> },
			{ path: "market", element: <Market /> },
			{ path: "calendar", element: <Calendar /> }
		]
	}
]);

function App() {
	return (
		<div className="h-[100dvh] bg-green-50 sm:py-3 sm:px-2 flex justify-center">
			<div className="w-full max-w-[400px] h-full relative">
				<RouterProvider router={router} />
			</div>
		</div>
	);
}

export default App;