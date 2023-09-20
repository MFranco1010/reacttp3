import React from 'react'
import $ from 'jquery';
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
        </select>
        <label className='sel'>Descripción: </label>
        <input className='sel'></input>
        <button className='sel'>Submit</button>
      </div>
      <div className='pills'>

      </div>
    </>
  )
}
