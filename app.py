from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

@app.route('/api/chat', methods=['POST'])
def chat():
    input_text = request.json.get('input')

    # Realizar la solicitud a la API de OpenAI
    response = requests.post(
        'https://api.openai.com/v1/chat/completions',
        headers={
            'Authorization': 'Bearer tu_clave_de_api',
            'Content-Type': 'application/json',
        },
        json={
            'messages': [{'role': 'system', 'content': 'You are a helpful assistant.'},
                         {'role': 'user', 'content': input_text}]
        }
    )

    data = response.json()
    assistant_reply = data['choices'][0]['message']['content']

    return jsonify({'message': assistant_reply})

if __name__ == '__main__':
    app.run(debug=True)