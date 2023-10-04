import React, { useState } from 'react';
const token = process.env.TOKEN;

function Api() {
const [res, setres] = useState('');

const endpoint = 'https://api.openai.com/v1/engines/text-davinci-002/completions';

async function createRes(arr) {
    try {
    const requestOptions = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
        prompt: "Crea una receta con los siguientes ingredientes y porfavor, explicame la receta como si fueras mi tia llamada RecetIA, hablame con cariño y amor. Ingredientes:" + arr,
        max_tokens: 500,
        }),
    };

    const res = await fetch(endpoint, requestOptions);
    const data = await res.json();
    setres(data.choices[0].text);
    } catch (error) {
    console.error('Error al generar respuesta:', error);
    }
}

// Llamar a la función con un evento o en algún lugar apropiado
const opnai = () => {
    createRes('Traduce la siguiente frase al francés: "Hola, ¿cómo estás?"');
};

return (
    <div>
    <button onClick={opnai}>Pedir receta a la tia</button>
    <div>
        <p>Respuesta de ChatGPT:</p>
        <p>{res}</p>
    </div>
    </div>
    );
}

export default Api;