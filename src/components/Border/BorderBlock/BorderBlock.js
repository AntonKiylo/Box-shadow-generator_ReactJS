import { useState } from 'react'
import './BorderBlock.css'
import Radius from '../Radius/Radius'
import TopLeftRadius from '../TopLeftRadius/TopLeftRadius'
import TopRightRadius from '../TopRightRadius/TopRightRadius'
import BottomLeftRadius from '../BottomLeftRadius/BottomLeftRadius'
import BottomRightRadius from '../BottomRightRadius/BottomRightRadius'
import Width from '../Width/Width'
import Style from '../Style/Style'
import Color from '../Color/Color'
import BackgroundColor from '../BackgroundColor/BackgroundColor'
import DemoBlock from '../DemoBlock/DemoBlock'

const BorderBlock = () => {
  const [isRadiusChecked, setIsRadiusChecked] = useState(true)
  const [borderRange, setBorderRange] = useState({
    topLeftRadius: 12,
    topRightRadius: 12,
    bottomLeftRadius: 12,
    bottomRightRadius: 12,
    color: '#000000',
    width: 4,
    style: 'solid',
    radius: 12,
    backgroundColor: '#c2deff',
  })

  const onHandlerBorderChange = e => {
    setBorderRange({ ...borderRange, [e.target.name]: e.target.value })
  }

  return (
    <div className='border-block'>
      <div className='border-range'>
        <Radius isRadiusChecked={isRadiusChecked} setIsRadiusChecked={setIsRadiusChecked} borderRange={borderRange} onHandlerBorderChange={onHandlerBorderChange} />
        <br />
        <TopLeftRadius borderRange={borderRange} onHandlerBorderChange={onHandlerBorderChange} isRadiusChecked={isRadiusChecked} />
        <TopRightRadius borderRange={borderRange} onHandlerBorderChange={onHandlerBorderChange} isRadiusChecked={isRadiusChecked} />
        <BottomLeftRadius borderRange={borderRange} onHandlerBorderChange={onHandlerBorderChange} isRadiusChecked={isRadiusChecked} />
        <BottomRightRadius borderRange={borderRange} onHandlerBorderChange={onHandlerBorderChange} isRadiusChecked={isRadiusChecked} />
        <br />
        <Width borderRange={borderRange} onHandlerBorderChange={onHandlerBorderChange} />
        <br />
        <Style borderRange={borderRange} onHandlerBorderChange={onHandlerBorderChange} />
        <Color borderRange={borderRange} onHandlerBorderChange={onHandlerBorderChange} />
        <BackgroundColor borderRange={borderRange} onHandlerBorderChange={onHandlerBorderChange} />
      </div>
      <DemoBlock borderRange={borderRange} isRadiusChecked={isRadiusChecked} />
    </div>
    
  )
}

export default BorderBlock