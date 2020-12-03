import { useState } from 'react';
import './App.css'
import HorizontalShift from './components/horizontalShift/HorizontalShift'

// box-shadow: 33px 5px 10px 2px rgba(34, 60, 80, 0.2);


const App = () => {
  const [shadowRange, setShadowRange] = useState({
    horizontalShift: 0,
    verticalShift: 0,
    blur: 0,
    spread: 0,
    color: '#000000'
  })

  const changeHorizontalShift = e => {
    setShadowRange({...shadowRange, horizontalShift: e.target.value})
  }
  
  const changeVerticalShift = e => {
    setShadowRange({...shadowRange, verticalShift: e.target.value})
  }
  
  const changeBlur = e => {
    setShadowRange({...shadowRange, blur: e.target.value})
  }

  const changeSpread = e => {
    setShadowRange({...shadowRange, spread: e.target.value})
  }

  return (
    <div className="App">
      <HorizontalShift shadowRange={shadowRange} changeHorizontalShift={changeHorizontalShift} />

      <label htmlFor='vertical-shift'>Vertical shift</label>
      <input
        type='range'
        name='vertical-shift'
        min='-50'
        max='50'
        step='1'
        value={shadowRange.verticalShift}
        onChange={changeVerticalShift}
      />
      <label htmlFor='spread'>Spread</label>
      <input
        type='range'
        name='spread'
        min='-30'
        max='30'
        step='1'
        value={shadowRange.spread}
        onChange={changeSpread}
      />
      <label htmlFor='Blur'>Blur</label>
      <input
        type='range'
        name='blur'
        min='0'
        max='50'
        step='1'
        value={shadowRange.blur}
        onChange={changeBlur}
      />

      <input type='color' value={shadowRange.color} />

      <div
        className='demo-block'
        style={{boxShadow: `${shadowRange.horizontalShift}px ${shadowRange.verticalShift}px ${shadowRange.blur}px ${shadowRange.spread}px rgba(34, 60, 80, 0.2)`}}
      ></div>
    </div>
  )
}

export default App