import './Spread.css'

const Spread = ({ shadowRange, onHandlerChange }) => {
  return (
    <div>
      <label htmlFor='spread'>
        <h3>Spread:</h3>
        <p>{`${shadowRange.spread}px`}</p>
      </label>
      <input
        type='range'
        name='spread'
        min='-30'
        max='30'
        step='1'
        value={shadowRange.spread}
        onChange={onHandlerChange}
      />
    </div>
  )
}

export default Spread