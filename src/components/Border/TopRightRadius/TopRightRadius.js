const TopRightRadius = ({ isRadiusChecked, borderRange, onHandlerBorderChange }) => {
  return (
    <div>
      <label htmlFor='topRightRadius'>
        <h3>Top right radius:</h3>
      </label>
      <input
        disabled={isRadiusChecked}
        type='range'
        name='topRightRadius'
        min='0'
        max='200'
        step='1'
        value={borderRange.topRightRadius}
        onChange={onHandlerBorderChange}
      />
    </div>
  )
}

export default TopRightRadius