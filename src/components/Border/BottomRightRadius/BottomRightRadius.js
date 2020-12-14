import './BottomRightRadius.css'

const BottomRightRadius = ({ isRadiusChecked, borderRange, onHandlerBorderChange }) => {
  return (
    <div>
      <label htmlFor='bottomRightRadius'>
        <h3>Bottom right radius:</h3>
        <p>{`${borderRange.bottomRightRadius}px`}</p>
      </label>
      <input
        disabled={isRadiusChecked}
        type='range'
        name='bottomRightRadius'
        min='0'
        max='200'
        step='1'
        value={borderRange.bottomRightRadius}
        onChange={onHandlerBorderChange}
      />
    </div>
  )
}

export default BottomRightRadius