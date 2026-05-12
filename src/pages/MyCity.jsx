import { useEffect, useState } from "react";

function MyCity() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://wttr.in/Shpola?format=j1")
      .then((res) => {
        if (!res.ok) throw new Error("Помилка");
        return res.json();
      })
      .then((data) => {
        setWeather(data); 
        setLoading(false);
      })
      .catch(() => {
        setError("Не вдалось завантажити погоду");
        setLoading(false);
      });
  }, []);

  const current = weather?.current_condition?.[0];
  const nearest = weather?.nearest_area?.[0];

  const cityName = nearest?.areaName?.[0]?.value || "Шпола";
  const country = nearest?.country?.[0]?.value || "Ukraine";

  const lat = nearest?.latitude || "49.00";
  const lon = nearest?.longitude || "31.45";

  const desc = current?.weatherDesc?.[0]?.value || "";

  function getEmoji(d = "") {
    d = d.toLowerCase();
    if (d.includes("sun") || d.includes("clear")) return "☀️";
    if (d.includes("cloud")) return "☁️";
    if (d.includes("rain")) return "🌧️";
    if (d.includes("snow")) return "❄️";
    if (d.includes("storm") || d.includes("thunder")) return "⛈️";
    if (d.includes("fog") || d.includes("mist")) return "🌫️";
    return "🌤️";
  }

  return (
    <div style={{ padding: "30px", maxWidth: "600px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>

      {}
      <h2 style={{ color: "#4f46e5", marginBottom: "8px" }}>Моє місто — Шпола</h2>
      <p style={{ color: "#475569", lineHeight: "1.7", marginBottom: "24px" }}>
        Шпола — місто у Черкаській області України, розташоване в центральній частині країни.
        Вважається географічним центром України. Місто засноване у 16 столітті, має спокійну
        атмосферу, мальовничу природу та привітних мешканців. Населення — близько 18 000 людей.
      </p>

      <h3 style={{ color: "#6366f1", marginBottom: "16px" }}>Поточна погода</h3>

      {loading && <p style={{ color: "#6366f1" }}>Завантаження погоди...</p>}

      {error && (
        <p style={{
          color: "#b91c1c",
          background: "#fef2f2",
          border: "1px solid #fecaca",
          borderRadius: "10px",
          padding: "12px 16px",
        }}>
          {error}
        </p>
      )}

      {current && (
        <div style={{
          background: "#ffffff",
          border: "1px solid #e0e7ff",
          borderRadius: "16px",
          padding: "24px",
          maxWidth: "360px",
          boxShadow: "0 4px 12px rgba(99, 102, 241, 0.1)",
        }}>

          {}
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
            <span style={{ fontSize: "52px" }}>{getEmoji(desc)}</span>
            <div>
              <div style={{ fontSize: "48px", fontWeight: "bold", color: "#4f46e5", lineHeight: 1 }}>
                {current.temp_C}°C
              </div>
              <div style={{ color: "#64748b", marginTop: "4px" }}>{desc}</div>
            </div>
          </div>

          {}
          {[
            { label: "Місто",            value: cityName },
            { label: "Країна",           value: country },
            { label: "Координати",       value: `${lat}, ${lon}` },
            { label: "Відчувається як",  value: `${current.FeelsLikeC}°C` },
            { label: "Вологість",        value: `${current.humidity}%` },
            { label: "Вітер",            value: `${current.windspeedKmph} км/год` },
          ].map(({ label, value }, i, arr) => (
            <div key={label} style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "8px 0",
              borderBottom: i < arr.length - 1 ? "1px solid #f1f5f9" : "none",
              fontSize: "14px",
            }}>
              <span style={{ color: "#64748b" }}>{label}</span>
              <span style={{ fontWeight: "500", color: "#1e293b" }}>{value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyCity;