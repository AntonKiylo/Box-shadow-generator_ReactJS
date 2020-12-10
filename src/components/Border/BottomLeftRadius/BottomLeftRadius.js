const BottomLeftRadius = ({ isRadiusChecked, borderRange, onHandlerBorderChange }) => {
  return (
    <div>
      <label htmlFor='bottomLeftRadius'>
        <h3>Bottom left radius:</h3>
      </label>
      <input
        disabled={isRadiusChecked}
        type='range'
        name='bottomLeftRadius'
        min='0'
        max='200'
        step='1'
        value={borderRange.bottomLeftRadius}
        onChange={onHandlerBorderChange}
      />
    </div>
  )
}

export default BottomLeftRadius