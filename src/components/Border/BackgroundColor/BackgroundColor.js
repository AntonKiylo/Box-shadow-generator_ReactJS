const BackgroundColor = ({ borderRange, onHandlerBorderChange }) => {
  return (
    <div>
      <label htmlFor='backgroundColor'>
        <h3>Background color:</h3>
      </label>
      <input
        type='color'
        name='backgroundColor'
        value={borderRange.backgroundColor}
        onChange={onHandlerBorderChange}
      />
    </div>
  )
}

export default BackgroundColor