const VerticalShift = ({ shadowRange, onHandlerChange }) => {
  return (
    <div>
      <label htmlFor='verticalShift'>
        <h3>Vertical shift:</h3>
      </label>
      <input
        type='range'
        name='verticalShift'
        min='-50'
        max='50'
        step='1'
        value={shadowRange.verticalShift}
        onChange={onHandlerChange}
      />
    </div>
  )
}

export default VerticalShift