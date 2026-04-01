import { useState } from "react";

function Upload() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const sendImage = async () => {
    if (!file) {
      alert("कृपया आधी फोटो निवडा");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("http://127.0.0.1:8000/predict-disease", {
        method: "POST",
        body: formData
      });

      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error(err);
      setResult({ error: "Error connecting to server" });
    }

    setLoading(false);
  };

  return (
    <div>
      <h2 className="text-lg font-semibold">🌿 पीक रोग ओळख</h2>

      <div className="mt-3 flex flex-col gap-3">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
          className="block w-full text-base rounded-lg border border-green-200 bg-white p-2"
        />

        <button
          onClick={sendImage}
          className="w-full rounded-xl bg-primary text-white text-base font-medium px-4 py-3 hover:bg-primary/90 transition"
        >
        विश्लेषण करा
        </button>
      </div>

      {loading && <p>⏳ विश्लेषण चालू आहे...</p>}

      {result && (
        <div style={{ marginTop: "16px" }}>
          {result.error ? (
            <p>{result.error}</p>
          ) : (
            <>
              <p><b>🌾 पिक:</b> {result.crop}</p>
              <p><b>🦠 रोग:</b> {result.disease}</p>
              <p><b>📊 खात्री:</b> {result.confidence}</p>
              <p><b>💡 सूचना:</b> {result.tips}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Upload;