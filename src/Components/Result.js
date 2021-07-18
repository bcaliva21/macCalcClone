import React from 'react';
import './Result.css'

function Result({ value, queue }) {
  return(
    <div className='result-contain'>
      <h1 id='int-queue'> { queue }</h1>
      <h1 id='value'>{ value }</h1>

    </div>
  )
}

export default Result;