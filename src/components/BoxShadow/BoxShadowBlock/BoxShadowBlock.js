import { useState } from 'react'
import './BoxShadowBlock.css'
import HorizontalShift from '../HorizontalShift/HorizontalShift'
import VerticalShift from '../VerticalShift/VerticalShift'
import Blur from '../Blur/Blur'
import DemoBlock from '../DemoBlock/DemoBlock'
import Spread from '../Spread/Spread'
import Color from '../Color/Color'
import Opacity from '../Opacity/Opacity'
import BackgroundColor from '../BackgroundColor/BackgroundColor'

const BoxShadowBlock = () => {
  const [shadowRange, setShadowRange] = useState({
    horizontalShift: 15,
    verticalShift: 15,
    blur: 15,
    spread: 0,
    color: '#000000',
    backgroundColor: '#c2deff',
    opacity: 0.7
  })

  const onHandlerChange = e => {
    setShadowRange({ ...shadowRange, [e.target.name]: e.target.value })
  }

  return (
    <div className='box-shadow-block'>
      <div>
        <HorizontalShift shadowRange={shadowRange} onHandlerChange={onHandlerChange} />
        <VerticalShift shadowRange={shadowRange} onHandlerChange={onHandlerChange} />
        <Blur shadowRange={shadowRange} onHandlerChange={onHandlerChange} />
        <Spread shadowRange={shadowRange} onHandlerChange={onHandlerChange} />
        <Color shadowRange={shadowRange} onHandlerChange={onHandlerChange} />
        <Opacity shadowRange={shadowRange} onHandlerChange={onHandlerChange} />
        <BackgroundColor shadowRange={shadowRange} onHandlerChange={onHandlerChange} />
      </div>
      <DemoBlock shadowRange={shadowRange} />
    </div>
    
  )
}

export default BoxShadowBlock