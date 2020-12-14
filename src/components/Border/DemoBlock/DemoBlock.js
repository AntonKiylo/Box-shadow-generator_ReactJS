import { useRef, useState } from 'react'
import './DemoBlock.css'

const DemoBlock = ({ borderRange, isRadiusChecked }) => {
  const [isCopied, setIsCopied] = useState(false)
  const borderCss = useRef()

  const copyBorderCss = () => {
    let range = new Range()

    range.setStart(borderCss.current, 0)
    range.setEnd(borderCss.current, 2)

    document.getSelection().addRange(range)
    document.execCommand('copy')
    document.getSelection().removeAllRanges()

    setIsCopied(true)

    setTimeout(() => {
      setIsCopied(false)
    }, 1000)
  }

  const individualRadius = {
    borderTopLeftRadius: `${borderRange.topLeftRadius}px`,
    borderTopRightRadius: `${borderRange.topRightRadius}px`,
    borderBottomLeftRadius: `${borderRange.bottomLeftRadius}px`,
    borderBottomRightRadius: `${borderRange.bottomRightRadius}px`,
    border: `${borderRange.width}px ${borderRange.style} ${borderRange.color}`,
    backgroundColor: `${borderRange.backgroundColor}`
  }

  const commonRadius = {
    borderRadius: `${borderRange.radius}px`,
    border: `${borderRange.width}px ${borderRange.style} ${borderRange.color}`,
    backgroundColor: `${borderRange.backgroundColor}`
  }

  return (
    <div>
      <div
        className='border-demo-block' 
        style={isRadiusChecked ? commonRadius : individualRadius}
      ></div>

      <div className='border-css-code'>
        <div className='copyButtonBlock'>
          <div className={!isCopied ? 'isCopiedAlert' : 'isCopiedAlert active'}>Copied</div>
          <button className='copyButton' onClick={copyBorderCss}>Copy</button>
        </div>
        <div ref={borderCss} className='border-css'>
          <p>{`border: ${borderRange.width}px ${borderRange.style} ${borderRange.color};`}</p>
          <p>{isRadiusChecked ? `border-radius: ${borderRange.radius}px` : `border-radius: ${borderRange.topLeftRadius}px ${borderRange.topRightRadius}px ${borderRange.bottomRightRadius}px ${borderRange.bottomLeftRadius}px`}</p>
          <p>{`-moz-border: ${borderRange.width}px ${borderRange.style} ${borderRange.color};`}</p>
          <p>{isRadiusChecked ? `-moz-border-radius: ${borderRange.radius}px` : `-moz-border-radius: ${borderRange.topLeftRadius}px ${borderRange.topRightRadius}px ${borderRange.bottomRightRadius}px ${borderRange.bottomLeftRadius}px`}</p>
          <p>{`-webkit-border: ${borderRange.width}px ${borderRange.style} ${borderRange.color};`}</p>
          <p>{isRadiusChecked ? `-webkit-border-radius: ${borderRange.radius}px` : `-webkit-border-radius: ${borderRange.topLeftRadius}px ${borderRange.topRightRadius}px ${borderRange.bottomRightRadius}px ${borderRange.bottomLeftRadius}px`}</p>
        </div>
      </div>
    </div>
  )
}

export default DemoBlock