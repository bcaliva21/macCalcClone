import React from 'react';
import Result from './Result';
import Keypad from './Keypad';
import { useState, useEffect } from 'react';
import './Container.css'
import './Keypad.css'

function Container () {

  const operations = ['+', '÷', '-', 'x'];
  const [ answer, setAnswer ] = useState(0);
  const [ intQueue, setIntQueue ] = useState(null);
  const [ operator, setOperator ] = useState('');

  const displayValues = (e) => {
    const input = e.target.innerText;

    if (input === '.' && answer.indexOf('.') > 0) {
      return;
    }

    if (answer === 0) {
      setAnswer(input);
    } else {
      setAnswer(answer + input);
    }
  }

  const handleClear = () => {
    setAnswer(0);
    setIntQueue(null);
    setOperator('');
  }

  const handleSign = (e) => {
    const isPositive = (parseInt(answer) > 0) ? true : false;

    if (answer === 0) {
      return;
    }

    if (isPositive) {
      setAnswer('-' + answer);
    }

    if (!isPositive) {
      const removeNeg = answer.slice(1);
      setAnswer(removeNeg);
    }
  }

  const handleEquals = (e) => {
    if (intQueue !== null) {
      if (operator === '+') {
        const sum = Number(intQueue) + Number(answer)
        setAnswer(sum);
        setIntQueue(null);
      }
      if (operator === 'x') {
        const product = Number(intQueue) * Number(answer)
        setAnswer(product);
        setIntQueue(null);
      }
      if (operator === '-') {
        const difference = Number(intQueue) - Number(answer)
        setAnswer(difference);
        setIntQueue(null);
      }
      if (operator === '÷') {
        const quotient = Number(intQueue) / Number(answer)
        setAnswer(quotient);
        setIntQueue(null);
      }
    }
  }

  const handleCompute = (e) => {
    if (intQueue !== null) {
      if (operator === '+') {
        const sum = Number(intQueue) + Number(answer)
        setAnswer('');
        setIntQueue(sum);
      }
      if (operator === 'x') {
        const product = Number(intQueue) * Number(answer)
        setAnswer('');
        setIntQueue(product);
      }
      if (operator === '-') {
        const difference = Number(intQueue) - Number(answer)
        setAnswer('');
        setIntQueue(difference);
      }
      if (operator === '÷') {
        const quotient = Number(intQueue) / Number(answer)
        setAnswer('');
        setIntQueue(quotient);
      }
  }
}

// need to figure out how to handle multiple operations chained together
// getting some weird results right now
  const handleOperations = (e) => {
    // if (operator !== null) {
    //   setOperator(null);
    // }
    operations.forEach((operand) => {
      if(e.target.innerText === operand) {
        setOperator(operand);
        setIntQueue(answer);
        setAnswer('');
      }
    })

    handleCompute();
    }

  useEffect(() => {
    console.log(intQueue);
    console.log(operator);
    console.log(answer);
  })

  // only store two values at a time...
  // operators will act like equals in a way
    // they will calculate the value
    // update the result screen to reflect that value
    // then disappear
  // if an operator is pressed...
    // I can take answer and store it somewhere
    // clear out the answer
    // take the next value that is clicked
    // I should make an array with the operators
    // when the operator is pressed I can run a forEach
    // find the matching operator in the array
      // create the equation that needs to be performed
      // return that value to update the result screen
  // if equals || another operator is pressed
    // take the first value that is clicked
    // perform the operation with the second value
  return (
    <div>
      <Result className='result' value={ answer } queue={ intQueue }/>
      <Keypad displayValues = { displayValues }
      handleOperations = { handleOperations }
      handleClear = { handleClear }
      handleCompute = { handleCompute }
      handleEquals = { handleEquals }
      handleSign = { handleSign }/>
    </div>
  )
}


export default Container;