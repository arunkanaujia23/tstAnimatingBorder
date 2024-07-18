import React, { useState } from 'react'
import styles from './testComponent.module.css'

const TestComponent = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <div className={`${styles?.container} `}>
      <div className={`${styles?.inputContainer} ${isFocused ? styles?.focused : ''}`}>

        <input type="text" className={styles?.input}  onFocus={handleFocus}
        onBlur={handleBlur}/>
        <input type="button" value="Hello" className={styles?.inputButton}/>

      </div>
    </div>
  )
}

export default TestComponent