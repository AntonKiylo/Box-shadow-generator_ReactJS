import { useRef } from 'react'
import './DemoBlock.css'

const DemoBlock = ({shadowRange}) => {
  const boxShadowCss = useRef()
  const color = `rgba(${parseInt(shadowRange.color.slice(1, 3), 16)}, ${parseInt(shadowRange.color.slice(3, 5), 16)}, ${parseInt(shadowRange.color.slice(5, 7), 16)}, ${shadowRange.opacity})`
  const copyCss = () => {
    let range = new Range();

    range.setStart(boxShadowCss.current, 0)
    range.setEnd(boxShadowCss.current, 3)

    document.getSelection().addRange(range)
    document.execCommand('copy')
    document.getSelection().removeAllRanges()
  } 

  return (
    <div
      className='demo-block'
      style={{ boxShadow: `${shadowRange.horizontalShift}px ${shadowRange.verticalShift}px ${shadowRange.blur}px ${shadowRange.spread}px ${color}` }}
    >
      <div ref={boxShadowCss} className='box-shadow-css'>
        <p>{`box-shadow: ${shadowRange.horizontalShift}px ${shadowRange.verticalShift}px ${shadowRange.blur}px ${shadowRange.spread}px ${color};`}</p>
        <p>{`-moz-box-shadow: ${shadowRange.horizontalShift}px ${shadowRange.verticalShift}px ${shadowRange.blur}px ${shadowRange.spread}px ${color};`}</p>
        <p>{`-webkit-box-shadow: ${shadowRange.horizontalShift}px ${shadowRange.verticalShift}px ${shadowRange.blur}px ${shadowRange.spread}px ${color};`}</p>
      </div>
      <button onClick={copyCss}>Copy</button>
    </div>
  )
}

export default DemoBlock