 import { useState, useEffect } from "react";
 
async function fetchWeather(city) {
  const res = await fetch(`https://wttr.in/${encodeURIComponent(city)}?format=j1`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}
export function parseWeather(raw) {
  const current = raw?.current_condition?.[0];
  const area    = raw?.nearest_area?.[0];
 
  if (!current || !area) throw new Error("Невірна структура даних");
 
  return {
    city:        area.areaName?.[0]?.value ?? "Шпола",
    country:     area.country?.[0]?.value  ?? "Ukraine",
    lat:         area.latitude             ?? "49.00",
    lon:         area.longitude            ?? "31.45",
    tempC:       current.temp_C,
    feelsLikeC:  current.FeelsLikeC,
    humidity:    current.humidity,
    windKmph:    current.windspeedKmph,
    description: current.weatherDesc?.[0]?.value ?? "",
  };
}
 
export function useWeather(city) {
  const [weather, setWeather] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error,   setError]   = useState(null);  
 
  useEffect(() => {
    let cancelled = false;
 
    setLoading(true);
    setError(null);
    setWeather(null);
 
    fetchWeather(city)
      .then((raw) => {
        if (cancelled) return;
        setWeather(parseWeather(raw));
      })
      .catch((err) => {
        if (cancelled) return;
        setError("Не вдалось завантажити погоду: " + err.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
 
    return () => { cancelled = true; };
  }, [city]);
 
  return { weather, loading, error };
} 
export function getEmoji(desc = "") {
  const d = desc.toLowerCase();
  if (d.includes("sun") || d.includes("clear"))     return "☀️";
  if (d.includes("cloud"))                          return "☁️";
  if (d.includes("rain"))                           return "🌧️";
  if (d.includes("snow"))                           return "❄️";
  if (d.includes("storm") || d.includes("thunder")) return "⛈️";
  if (d.includes("fog")   || d.includes("mist"))    return "🌫️";
  return "🌤️";
}