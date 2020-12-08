const BackgroundColor = ({ shadowRange, onHandlerChange }) => {
  return (
    <div>
      <label htmlFor='backgroundColor'>
        <h3>Background color:</h3>
      </label>
      <input
        type='color'
        name='backgroundColor'
        value={shadowRange.backgroundColor}
        onChange={onHandlerChange}
      />
    </div>
  )
}

export default BackgroundColor