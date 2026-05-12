function MyFuture() {
  return (
    <div style={{ 
        padding: "30px" 
        }}>

      <h2>Мій розвиток</h2>

      <p>
        Я прагну стати Frontend Developer і створювати красиві, зручні сайти.
        Моя мета — працювати в IT-компанії над реальними проєктами.
      </p>

      <h3>Робота мрії</h3>

      <p>
        Frontend Developer в продуктовій IT-компанії. Хочу створювати інтерфейси,
        якими користуються тисячі людей, та постійно вдосконалювати свої навички.
      </p>

      <h3>3 кроки в майбутнє</h3>

      <div style={{ 
        display: "flex", 
        gap: "20px", 
        flexWrap: "wrap" 
        }}>

        <div style={{ 
            border: "1px solid gray", 
            padding: "20px", 
            borderRadius: "10px" 
            }}>
          <h4>1. Опанувати React та JavaScript</h4>
          <p>Вивчити хуки, компоненти, роботу з API.</p>
        </div>

        <div style={{ 
            border: "1px solid gray", 
            padding: "20px", 
            borderRadius: "10px" 
            }}>
          <h4>2. Отримати першу роботу</h4>
          <p>Зібрати портфоліо та влаштуватися Junior Frontend Developer.</p>
        </div>

        <div style={{ 
            border: "1px solid gray", 
            padding: "20px", 
            borderRadius: "10px" 
            }}>
          <h4>3. Вирости до Middle розробника</h4>
          <p>Вивчити TypeScript, Next.js та брати участь у великих проєктах.</p>
        </div>

      </div>

      <blockquote style={{ 
        marginTop: "30px", 
        fontSize: "20px" 
        }}>
        "Кожен експерт колись був початківцем. Головне — не зупинятись."
      </blockquote>

    </div>
  );
}

export default MyFuture;