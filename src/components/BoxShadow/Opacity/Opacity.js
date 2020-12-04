const Opacity = ({ shadowRange, onHandlerChange }) => {
  return (
    <div>
      <label htmlFor='opacity'>
        <h3>Opacity:</h3>
      </label>
      <input
        type='range'
        name='opacity'
        min='0'
        max='1'
        step='0.01'
        value={shadowRange.opacity}
        onChange={onHandlerChange}
      />
    </div>
  )
}

export default Opacity