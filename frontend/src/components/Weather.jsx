import { useState } from "react";

function Weather() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const getWeather = async () => {
    if (!city) {
      alert("शहराचे नाव लिहा");
      return;
    }

    setLoading(true);

    try {
      const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";
      const res = await fetch(
        `${API_URL}/weather/${city}`
      );

      const result = await res.json();
      setData(result);
    } catch (err) {
      console.error(err);
      setData({ error: "Server error" });
    }

    setLoading(false);
  };

  return (
    <div>
      <h2 className="text-lg font-semibold">🌦️ हवामान आणि शेती टिप्स</h2>

      <div className="mt-3 flex flex-col gap-3">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="शहराचे नाव (उदा. पुणे)"
          style={{ padding: "12px", width: "100%" }}
          className="rounded-xl border border-green-200 bg-white text-base"
        />

        <button
          onClick={getWeather}
          className="w-full rounded-xl bg-primary text-white text-base font-medium px-4 py-3 hover:bg-primary/90 transition"
        >
          हवामान मिळवा
        </button>
      </div>

      {loading && <p>⏳ हवामान लोड होत आहे...</p>}

      {data && !data.error && (
        <div
          style={{
            border: "1px solid #d1fae5",
            borderRadius: "14px",
            padding: "15px",
            marginTop: "16px",
            backgroundColor: "#ffffff",
            textAlign: "left"
          }}
        >
          <p><b>📍 शहर:</b> {data.city}</p>
          <p><b>🌡️ तापमान:</b> {data.temp}°C</p>
          <p><b>☁️ हवामान:</b> {data.weather}</p>
          <p><b>💡 सल्ला:</b> {data.tips}</p>
        </div>
      )}

      {data && data.error && (
        <p>❌ हवामान माहिती मिळाली नाही</p>
      )}
    </div>
  );
}

export default Weather;