const HorizontalShift = ({ shadowRange, onHandlerChange }) => {
  return (
    <div>
      <label htmlFor='horizontalShift'>
        <h3>Horizontal shift:</h3>
      </label>
      <input
        type='range'
        name='horizontalShift'
        min='-50'
        max='50'
        step='1'
        value={shadowRange.horizontalShift}
        onChange={onHandlerChange}
      />
    </div>
  )
}

export default HorizontalShift