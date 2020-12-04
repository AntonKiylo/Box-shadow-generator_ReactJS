const Color = ({ shadowRange, onHandlerChange }) => {
  return (
    <div>
      <label htmlFor='color'>
        <h3>Color:</h3>
      </label>
      <input
        type='color'
        name='color'
        value={shadowRange.color}
        onChange={onHandlerChange}
      />
    </div>
  )
}

export default Color