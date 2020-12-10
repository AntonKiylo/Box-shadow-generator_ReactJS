import { useRef, useState } from 'react'
import './DemoBlock.css'

const DemoBlock = ({ borderRange, isRadiusChecked }) => {
  const [isCopied, setIsCopied] = useState(false)
  const borderCss = useRef()

  const copyCss = () => {
    let range = new Range();

    range.setStart(borderCss.current, 0)
    range.setEnd(borderCss.current, 3)

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
        className='demo-block'
        style={isRadiusChecked ? commonRadius : individualRadius}
      ></div>

      <div>
        <div className='copyButtonBlock'>
          <div className={!isCopied ? 'isCopiedAlert' : 'isCopiedAlert active'}>Copied</div>
          <button className='copyButton' onClick={copyCss}>Copy</button>
        </div>
        <div ref={borderCss} className='border-css'>

        </div>
      </div>
    </div>
  )
}

export default DemoBlock