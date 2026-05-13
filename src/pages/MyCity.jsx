 
import { useWeather, getEmoji } from "./weather-api";
 
export default function MyCity() {
  const { weather, loading, error } = useWeather("Shpola");
 
  return (
    <div style={{ padding: "30px", maxWidth: "600px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
 
      {}
      <h2 style={{ color: "#4f46e5", marginBottom: "8px" }}>Моє місто — Шпола</h2>
      <p style={{ color: "#475569", lineHeight: "1.7", marginBottom: "24px" }}>
        Шпола — місто у Черкаській області України, розташоване в центральній частині країни.
        Вважається географічним центром України. Місто засноване у 16 столітті, має спокійну
        атмосферу, мальовничу природу та привітних мешканців. Населення — близько 18 000 людей.
      </p>
 
      {}
      <h3 style={{ color: "#6366f1", marginBottom: "16px" }}>Поточна погода</h3>
 
      {loading && (
        <p style={{ color: "#6366f1" }}>Завантаження погоди...</p>
      )}
 
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
 
      {weather && (
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
            <span style={{ fontSize: "52px" }}>{getEmoji(weather.description)}</span>
            <div>
              <div style={{ fontSize: "48px", fontWeight: "bold", color: "#4f46e5", lineHeight: 1 }}>
                {weather.tempC}°C
              </div>
              <div style={{ color: "#64748b", marginTop: "4px" }}>{weather.description}</div>
            </div>
          </div>
 
          {}
          {[
            { label: "Місто",           value: weather.city },
            { label: "Країна",          value: weather.country },
            { label: "Координати",      value: `${weather.lat}, ${weather.lon}` },
            { label: "Відчувається як", value: `${weather.feelsLikeC}°C` },
            { label: "Вологість",       value: `${weather.humidity}%` },
            { label: "Вітер",           value: `${weather.windKmph} км/год` },
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