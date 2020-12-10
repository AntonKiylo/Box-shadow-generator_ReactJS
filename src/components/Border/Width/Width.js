const Width = ({ borderRange, onHandlerBorderChange }) => {
  return (
    <div>
      <label htmlFor='width'>
        <h3>Width:</h3>
      </label>
      <input
        type='range'
        name='width'
        min='1'
        max='40'
        step='1'
        value={borderRange.width}
        onChange={onHandlerBorderChange}
      />
    </div>
  )
}

export default Width