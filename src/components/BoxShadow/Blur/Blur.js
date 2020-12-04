const Blur = ({ shadowRange, onHandlerChange }) => {
  return (
    <div>
      <label htmlFor='Blur'>
        <h3>Blur:</h3>
      </label>
      <input
        type='range'
        name='blur'
        min='0'
        max='50'
        step='1'
        value={shadowRange.blur}
        onChange={onHandlerChange}
      />
    </div>
  )
}

export default Blur