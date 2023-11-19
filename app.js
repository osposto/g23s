async function sendMessage() {
    const userInput = document.getElementById('user-input').value;

    // Realizar la solicitud a la API de OpenAI
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer tu_clave_de_api',  // Reemplaza con tu clave de API
        },
        body: JSON.stringify({
            'messages': [
                {'role': 'system', 'content': 'You are a helpful assistant.'},
                {'role': 'user', 'content': userInput}
            ]
        })
    });

    const data = await response.json();

    // Actualizar la interfaz de usuario con la respuesta
    const chatContainer = document.getElementById('chat-container');
    chatContainer.innerHTML += `<div>${data.choices[0].message.content}</div>`;
}