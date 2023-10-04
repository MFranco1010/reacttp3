import React, { useState } from 'react';
const token = process.env.TOKEN;

export const Api = () => {
    const [res, setres] = useState('');
    const endpoint = 'https://api.openai.com/v1/engines/text-davinci-002/completions';
    const arr = ;

    async function createRes(arr) {
        try {
        const requestOptions = {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
            prompt: "Crea una receta con los siguientes ingredientes y explicame la receta como si fueras mi tia llamada RecetIA, hablame con cariño y amor. Ingredientes:" + arr,
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
    
    const opnai = () => {
        createRes(arr);

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