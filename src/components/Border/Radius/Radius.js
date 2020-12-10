const Radius = ({ isRadiusChecked, setIsRadiusChecked, borderRange, onHandlerBorderChange }) => {
  const setCheck = () => {
    setIsRadiusChecked(!isRadiusChecked)
  }

  return (
    <div>
      <label htmlFor='radius'>
        <h3>Radius (all borders):</h3>
      </label>
      <input type='checkbox' checked={isRadiusChecked} onChange={setCheck} />
      <input
        disabled={!isRadiusChecked}
        type='range'
        name='radius'
        min='0'
        max='200'
        step='1'
        value={borderRange.radius}
        onChange={onHandlerBorderChange}
      />
    </div>
  )
}

export default Radius