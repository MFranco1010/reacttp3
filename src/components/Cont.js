import React, { useState } from 'react';
import { Api } from "./Api";

export const Cont = () => {
  const [cant, setCant] = useState(1);
  const [ing, setIng] = useState('');
  const [pills, setPills] = useState([]);

  const cantState = (a) => {
    setCant(a.target.value);
  };

  const ingState = (a) => {
    setIng(a.target.value);
    console.log(ing);
  };

  const btnSubmit = (i) => {
    i.preventDefault();
    if (ing !== '') {
      const newPill = {
        cant,
        ing,
      };
      console.log(...pills);
      setPills([...pills, newPill]);
      setCant(1);
      setIng('');
    }
  };

  const delPill = (i) => {
    const newPills = [...pills];
    newPills.splice(i, 1);
    setPills(newPills);
  };

  return (
    <>
      <div className='form'>
        <form onSubmit={btnSubmit}>
          <label className='sel'>Cantidad: </label>
          <select className='sel' value={cant} onChange={cantState}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
          <label className='sel'>Ingrediente: </label>
          <input
            className='sel'
            placeholder='Colocar aquí.'
            value={ing}
            onChange={ingState}
          />
          <button className='sel' type='submit'>
            Añadir
          </button>
        </form>
      </div>
      <div className='pills'>
        {pills.map((pill, a) => (
          <div key={a} className='pill'>
            <span>{pill.cant} {pill.ing}</span>
            <button className='xbtn' onClick={() => delPill(a)}>X</button>
          </div>
        ))}
      </div>
      <Api pil={pills} />
    </>
  );
};
