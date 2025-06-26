const apiKey = "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";


document.getElementById("send").addEventListener("click", async () => {
  const input = document.getElementById("message");
  const message = input.value;
  if (!message.trim()) return;

  addMessage("Tú", message);
  input.value = "";

  
  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost",
        "X-Title": "MotivationalBuddy"
      },
      body: JSON.stringify({
        model: "mistralai/mistral-7b-instruct",
        messages: [
          {
            role: "system",
            
            content: "Eres un asistente especializado en consultas legales básicas, tu propósito es brindar información clara, precisa y fácil de entender sobre principios y conceptos legales fundamentales,reglas; solo puedes ofrecer informacion relacionada a temas legales cualquier otra pregunta sobre un tema que no este relacionado a eso no puedes responder por lo tanto debes decir que esa pregunta esta fuera de tus limites, que por favor pregunte solo sobre consultas legales, tambien no debes ofrecer ninguna informacion o link relacionado o tro tema que no sea consulta legal y por nada del mundo repondas cosas diferentes a las leyes."
          },
          {
            role: "user",
            content: message
          }
        ]
      })
    });

    const data = await response.json();
    console.log("Respuesta completa:", data);

    if (data.choices && data.choices.length > 0) {
      const reply = data.choices[0].message.content;
      addMessage("Shun", reply);
    } else {
      addMessage("Shun", "Ups, algo anda mal por favor intente en otro momento. ");
    }

  } catch (error) {
    console.error("Error al conectar con OpenRouter:", error);
    addMessage("Shun", "No se pudo conectar con el servidor. ");
  }
  
});


function addMessage(sender, text) {
  const chat = document.getElementById("chat");
  const msg = document.createElement("p");
  msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;

}