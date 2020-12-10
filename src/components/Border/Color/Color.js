const Color = ({ borderRange, onHandlerBorderChange }) => {
  return (
    <div>
      <label htmlFor='color'>
        <h3>Border color:</h3>
      </label>
      <input
        type='color'
        name='color'
        value={borderRange.color}
        onChange={onHandlerBorderChange}
      />
    </div>
  )
}

export default Color