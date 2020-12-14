import './Opacity.css'

const Opacity = ({ shadowRange, onHandlerChange }) => {
  return (
    <div>
      <label htmlFor='opacity'>
        <h3>Opacity:</h3>
        <p>{`${shadowRange.opacity}`}</p>
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