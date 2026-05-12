function AboutMe() {
  return (
    <div
      style={{
        padding: "30px",
        maxWidth: "600px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {}
      <h2 style={{ color: "#4f46e5" }}>Про мене</h2>
      <p style={{ color: "#475569", lineHeight: "1.7" }}>
        Мене звати Софія. Я студентка та початківець Frontend-розробник. Вивчаю
        React, JavaScript та створення веб-застосунків.
      </p>

      {}
      <h3 style={{ color: "#6366f1" }}>Мої цінності</h3>
      <ul style={{ color: "#475569", lineHeight: "2" }}>
        <li>Саморозвиток</li>
        <li>Креативність</li>
        <li>Навчання</li>
      </ul>

      {}
      <h3 style={{ 
        color: "#6366f1" 
        }}
        >Мої проєкти</h3>

      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        {}
        <div
          style={{
            border: "1px solid #e0e7ff",
            borderRadius: "12px",
            padding: "16px",
            background: "#ffffff",
          }}
        >
          <p
            style={{ fontSize: "12px", color: "#94a3b8", margin: "0 0 6px 0" }}
          >
            HTML + CSS
          </p>
          <a
            href="https://github.com/Sofiashk/html-css-shkarban-landing"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#4f46e5", fontWeight: "500" }}
          >
            Landing Page
          </a>
        </div>

        {}
        <div
          style={{
            border: "1px solid #e0e7ff",
            borderRadius: "12px",
            padding: "16px",
            background: "#ffffff",
          }}
        >
          <p
            style={{ fontSize: "12px", color: "#94a3b8", margin: "0 0 6px 0" }}
          >
            JavaScript
          </p>
          <a
            href="https://github.com/Sofiashk/js-easy-Shkarban"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#4f46e5", fontWeight: "500" }}
          >
            Todo App
          </a>
        </div>

        {}
        <div
          style={{
            border: "1px solid #e0e7ff",
            borderRadius: "12px",
            padding: "16px",
            background: "#ffffff",
          }}
        >
          <p
            style={{ fontSize: "12px", color: "#94a3b8", margin: "0 0 6px 0" }}
          >
            React
          </p>
          <a
            href="https://github.com/Sofiashk/react-14-shkarban"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#4f46e5", fontWeight: "500" }}
          >
            Portfolio
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
