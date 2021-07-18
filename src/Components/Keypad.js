import React from 'react'
import './Keypad.css';

function Keypad({ displayValues, handleOperations, handleClear, handleCompute, handleEquals, handleSign }) {
  return (
    <div>
      <div className='keypad'>
        <div className='top-row'>
          <label onClick={handleClear}>AC</label>
          <label className='pos-neg' onClick={handleSign}>⁺∕₋</label>
          <label>%</label>
          <label className='operator' onClick={handleOperations}>÷</label>
        </div>
        <div className='break'></div>
        <div className='row'>
          <label className='integer' id='seven' onClick={displayValues}>7</label>
          <label className='integer' id='eight' onClick={displayValues}>8</label>
          <label className='integer' id='nine' onClick={displayValues}>9</label>
          <label className='operator' onClick={handleOperations}>×</label>
        </div>
        <div className='break'></div>
        <div className='row'>
          <label className='integer' id='four' onClick={displayValues}>4</label>
          <label className='integer' onClick={displayValues}>5</label>
          <label className='integer' onClick={displayValues}>6</label>
          <label className='operator' onClick={handleOperations}>-</label>
        </div>
        <div className='break'></div>
        <div className='row'>
          <label className='integer' id='one' onClick={displayValues}>1</label>
          <label className='integer' onClick={displayValues}>2</label>
          <label className='integer' onClick={displayValues}>3</label>
          <label className='operator' onClick={handleOperations}>+</label>
        </div>
        <div className='break'></div>
        <div className='bottom-row'>
          <label className='integer' id='zero' onClick={displayValues}>0</label>
          <label className='integer' id='decimal' onClick={displayValues} >.</label>
          <label className='operator' id='equals' onClick={handleEquals}>=</label>
        </div>
      </div>
    </div>
  )
}

export default Keypad;