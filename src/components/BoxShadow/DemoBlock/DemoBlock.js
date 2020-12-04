import './DemoBlock.css'

const DemoBlock = ({shadowRange}) => {
  const color = `rgba(${parseInt(shadowRange.color.slice(1, 3), 16)}, ${parseInt(shadowRange.color.slice(3, 5), 16)}, ${parseInt(shadowRange.color.slice(5, 7), 16)}, ${shadowRange.opacity})`

  return (
    <div
      className='demo-block'
      style={{ boxShadow: `${shadowRange.horizontalShift}px ${shadowRange.verticalShift}px ${shadowRange.blur}px ${shadowRange.spread}px ${color}` }}
    ></div>
  )
}

export default DemoBlock