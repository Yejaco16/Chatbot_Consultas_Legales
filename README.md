# ⚖️Chatbot de Consultas Legales Básicas⚖️
Este proyecto es un chatbot sencillo diseñado para proporcionar información básica y clara sobre principios y conceptos legales fundamentales. Actúa como un asistente que puede responder a tus preguntas jurídicas generales de manera accesible y fácil de entender.

## 📝Características📝
Interfaz de Chat Intuitiva: Un diseño limpio y moderno que facilita la interacción.
Respuestas Basadas en IA: Utiliza el modelo mistralai/mistral-7b-instruct a través de la API de OpenRouter para generar respuestas.
Asistente Legal Especializado: Configuradp para centrarse en consultas legales básicas, proporcionando información precisa y evitando invenciones.
Desplazamiento Automático: El área de chat se desplaza automáticamente para mostrar los mensajes más recientes.
Tecnologías Utilizadas
HTML: Estructura básica de la página web.
CSS: Estilos para una interfaz de usuario atractiva y responsiva.
JavaScript: Lógica del chatbot, comunicación con la API y manipulación del DOM.
OpenRouter API: Plataforma para acceder a modelos de lenguaje avanzados.

### ⚙️Cómo Usar⚙️
Clona el Repositorio (o guarda los archivos):
Guarda los archivos index.html, styles.css y script.js en una misma carpeta en tu computadora.

Obtén tu API Key de OpenRouter:

Visita OpenRouter.ai.
Regístrate o inicia sesión.
Ve a tu panel de control o configuración para generar una nueva clave API. Debería verse similar a sk-or-v1-....
Configura tu API Key:

Abre el archivo script.js.
Busca la línea:
JavaScript

const apiKey = "TU_API_KEY_AQUI";
Reemplaza "TU_API_KEY_AQUI" con la clave API que obtuviste de OpenRouter.
Abre el Archivo HTML:

Simplemente abre index.html en tu navegador web. Puedes hacerlo haciendo doble clic en el archivo.
¡Empieza a Chatear!:

Escribe tus preguntas en el campo de texto y haz clic en "Enviar" o presiona Enter.
El chatbot responderá con información legal básica.

## 🔧Estructura del Proyecto🔧
.
├── index.html
├── styles.css
└── script.js

index.html: Contiene la estructura principal de la aplicación, incluyendo el contenedor del chat, el título, el área de mensajes, el campo de entrada y el botón de envío.
styles.css: Define la apariencia visual de la interfaz del chatbot, incluyendo colores, fuentes, espaciado y disposición.
script.js: Contiene la lógica del chatbot. Maneja el envío de mensajes, la interacción con la API de OpenRouter, la adición de mensajes al DOM y el desplazamiento automático del chat.