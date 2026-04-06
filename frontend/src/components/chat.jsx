import { useState } from "react";

function Chat() {
  const [text, setText] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔥 SEND QUERY
  const sendQuery = async () => {
    setLoading(true);

    const formData = new FormData();
    formData.append("text", text);

    try {
      const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";
      const res = await fetch(`${API_URL}/ask`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setResponse(data.response || JSON.stringify(data));
    } catch (err) {
      console.error(err);
      setResponse("सर्व्हरशी संपर्क होत नाही");
    }

    setLoading(false);
  };

  // 🎤 VOICE FUNCTION (OUTSIDE)
  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("कृपया Chrome ब्राउझर वापरा");
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "mr-IN"; // Marathi
    recognition.continuous = false;
    recognition.interimResults = false;

    // 🔥 give time before speech starts
    setTimeout(() => {
      recognition.start();
    }, 300);

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setText(transcript);
    };

    recognition.onerror = (event) => {
      console.log("Error:", event.error);

      if (event.error === "no-speech") {
        alert("🎤 आवाज ऐकू आला नाही, कृपया पुन्हा प्रयत्न करा");
      }

    };
  };

  return (
    <div>
      <h2 className="text-lg font-semibold">💬 शेतीविषयक प्रश्न विचारा</h2>

      <div className="mt-3 flex flex-col gap-3">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="प्रश्न विचारा..."
          style={{ width: "100%", padding: "12px" }}
          className="rounded-xl border border-green-200 bg-white text-base"
        />

        <div className="flex flex-col gap-3">
          <button
            onClick={sendQuery}
            className="w-full rounded-xl bg-primary text-white text-base font-medium px-4 py-3 hover:bg-primary/90 transition"
          >
            पाठवा
          </button>

          <button
            onClick={startListening}
            className="w-full rounded-xl border border-green-200 bg-white text-base px-4 py-3 hover:bg-slate-50 transition"
          >
            🎤 आवाज
          </button>
        </div>
      </div>

      {loading && <p>⏳ उत्तर तयार होत आहे...</p>}

      {response && (
        <div style={{ marginTop: "20px" }}>
          <p><b>🤖 उत्तर:</b></p>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}

export default Chat;