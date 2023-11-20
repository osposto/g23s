        async function sendMessage() {
            const userInput = document.getElementById('user-input').value;

            // Realizar la solicitud a la función sin servidor
            const response = await fetch('/.netlify/functions/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ input: userInput }),
            });

            const data = await response.json();

            // Actualizar la interfaz de usuario con la respuesta
            const chatContainer = document.getElementById('chat-container');
            chatContainer.innerHTML += `<div>${data.message}</div>`;
        }
    