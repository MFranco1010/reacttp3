import React from 'react'
import 'select2';

export const Cont = () => {
  return (
    <>
      <div className='form'>            
        <label className='sel'>Cantidad: </label>
        <select className='sel'>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
        <label className='sel'>Ingrediente: </label>
        <input className='sel' placeholder='Colocar aquí.'></input>
        <button className='sel'>Submit</button>
      </div>
      <div className='pills'>
      </div>
    </>
  )
}
