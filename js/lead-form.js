    (() => {
      const WORKER_URL = "https://odd-voice-2543.aybek-metis.workers.dev";
      const form = document.getElementById("lead");
      const statusEl = document.getElementById("status");
      const submitBtn = form.querySelector('button[type="submit"]');

      const setErr = (field, msg) => {
        const el = form.querySelector(`.err[data-for="${field}"]`);
        if (el) el.textContent = msg || "";
      };

      form.addEventListener("submit", async (e) => {
        e.preventDefault();
        setErr("name", "");
        setErr("phone", "");
        setErr("service", "");
        statusEl.textContent = "";

        const name = form.name.value.trim();
        const phone = form.phone.value.trim();
        const service = form.service.value.trim();
        const website = form.website?.value.trim() || "";

        let valid = true;
        if (name.length < 2) { setErr("name", "Введите имя"); valid = false; }
        if (!phone) { setErr("phone", "Введите телефон"); valid = false; }
        if (!service) { setErr("service", "Выберите услугу"); valid = false; }
        if (!valid) return;

        submitBtn.disabled = true;
        statusEl.textContent = "Отправка...";

        try {
          const res = await fetch(WORKER_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, phone, service, website }),
          });
          const data = await res.json();

          if (data.ok) {
            statusEl.textContent = "Заявка отправлена";
            form.reset();
          } else {
            statusEl.textContent = data.error || "Ошибка отправки";
          }
        } catch {
          statusEl.textContent = "Ошибка сети";
        } finally {
          submitBtn.disabled = false;
        }
      });
    })();