import { useState } from "react";

function Schemes() {
  const [crop, setCrop] = useState("");
  const [schemes, setSchemes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchSchemes = async () => {
    if (!crop) {
      alert("पिकाचे नाव लिहा");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(
        `http://127.0.0.1:8000/schemes/${crop.toLowerCase()}`
      );

      const data = await res.json();
      setSchemes(data);
    } catch (err) {
      console.error(err);
      setSchemes([]);
    }

    setLoading(false);
  };

  return (
    <div>
      <h2 className="text-lg font-semibold">🏛️ शासकीय योजना</h2>

      <div className="mt-3 flex flex-col gap-3">
        <input
          value={crop}
          onChange={(e) => setCrop(e.target.value)}
          placeholder="पिकाचे नाव (उदा. तांदूळ, गहू...)"
          style={{ padding: "12px", width: "100%" }}
          className="rounded-xl border border-green-200 bg-white text-base"
        />

        <button
          onClick={fetchSchemes}
          className="w-full rounded-xl bg-primary text-white text-base font-medium px-4 py-3 hover:bg-primary/90 transition"
        >
          योजना शोधा
        </button>
      </div>

      {loading && <p>⏳ योजना लोड होत आहेत...</p>}

      {schemes.length > 0 && (
        <div style={{ marginTop: "16px" }}>
          {schemes.map((scheme) => (
            <div
              key={scheme.id}
              style={{
                border: "1px solid #d1fae5",
                borderRadius: "14px",
                padding: "15px",
                marginBottom: "12px",
                backgroundColor: "#ffffff",
                textAlign: "left"
              }}
            >
              <p><b>🌾 योजना:</b> {scheme.scheme_name}</p>
              <p><b>📝 वर्णन:</b> {scheme.description}</p>
              <p><b>💰 फायदा:</b> {scheme.benefits}</p>
              <p><b>✅ पात्रता:</b> {scheme.eligibility}</p>
              <p><b>📍 राज्य:</b> {scheme.state}</p>
              <a href={scheme.link} target="_blank" >
                🔗 अधिक माहिती
              </a>
            </div>
          ))}
        </div>
      )}

      {!loading && schemes.length === 0 && <p style={{ marginTop: "10px" }}>कोणतीही योजना सापडली नाही</p>}
    </div>
  );
}

export default Schemes;