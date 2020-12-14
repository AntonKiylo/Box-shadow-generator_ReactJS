import './Blur.css'

const Blur = ({ shadowRange, onHandlerChange }) => {
  return (
    <div>
      <label htmlFor='blur'>
        <h3>Blur:</h3>
        <p>{`${shadowRange.blur}px`}</p>
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