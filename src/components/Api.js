import React, { useState } from 'react';
const token = process.env.TOKEN;

export const Api = (props) => {
    const [res, setRes] = useState('');
    const endpoint = 'https://api.openai.com/v1/engines/text-davinci-002/completions';
    const arr = props.pil;

    async function createRes(arr) {
        try {
        const requestOptions = {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
            prompt: arr,
            max_tokens: 500,
            }),
        };
        
        const res = await fetch(endpoint, requestOptions);
        const data = await res.json();
        setRes(data.choices[0]);
        console.log(data);
        } catch (error) {
        console.error('Error al generar respuesta:', error);
        }
    }
    
    const opnai = () => {
        createRes("Crea una receta con los siguientes ingredientes y explicame la receta como si fueras mi tia llamada RecetIA, hablame con cariño y amor. Ingredientes: " + arr);
    };

    return (
        <div className='pills'>
        <button className='sel' onClick={opnai}>Pedir receta a la tia</button>
        <div>
            <h1>Receta:</h1>
            <p>{res}</p>
        </div>
        </div>
    );
}