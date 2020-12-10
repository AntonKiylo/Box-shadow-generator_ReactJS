import { useRef, useState } from 'react'
import './DemoBlock.css'

const DemoBlock = ({ shadowRange }) => {
  const [isCopied, setIsCopied] = useState(false)
  const boxShadowCss = useRef()
  const color = `rgba(${parseInt(shadowRange.color.slice(1, 3), 16)}, ${parseInt(shadowRange.color.slice(3, 5), 16)}, ${parseInt(shadowRange.color.slice(5, 7), 16)}, ${shadowRange.opacity})`

  const copyCss = () => {
    let range = new Range();

    range.setStart(boxShadowCss.current, 0)
    range.setEnd(boxShadowCss.current, 3)

    document.getSelection().addRange(range)
    document.execCommand('copy')
    document.getSelection().removeAllRanges()

    setIsCopied(true)

    setTimeout(() => {
      setIsCopied(false)
    }, 1000)
  }

  return (
    <div>
      <div
        className='demo-block'
        style={{
          boxShadow: `${shadowRange.horizontalShift}px ${shadowRange.verticalShift}px ${shadowRange.blur}px ${shadowRange.spread}px ${color}`,
          backgroundColor: `${shadowRange.backgroundColor}`
        }}
      ></div>
      <div>
        <div className='copyButtonBlock'>
          <div className={!isCopied ? 'isCopiedAlert' : 'isCopiedAlert active'}>Copied</div>
          <button className='copyButton' onClick={copyCss}>Copy</button>
        </div>
        <div ref={boxShadowCss} className='box-shadow-css'>
          <p>{`box-shadow: ${shadowRange.horizontalShift}px ${shadowRange.verticalShift}px ${shadowRange.blur}px ${shadowRange.spread}px ${color};`}</p>
          <p>{`-moz-box-shadow: ${shadowRange.horizontalShift}px ${shadowRange.verticalShift}px ${shadowRange.blur}px ${shadowRange.spread}px ${color};`}</p>
          <p>{`-webkit-box-shadow: ${shadowRange.horizontalShift}px ${shadowRange.verticalShift}px ${shadowRange.blur}px ${shadowRange.spread}px ${color};`}</p>
        </div>
      </div>
    </div>
  )
}

export default DemoBlock