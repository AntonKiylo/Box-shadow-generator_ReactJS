import './TopLeftRadius.css'

const TopLeftRadius = ({ isRadiusChecked, borderRange, onHandlerBorderChange }) => {
  return (
    <div>
      <label htmlFor='topLeftRadius'>
        <h3>Top left radius:</h3>
        <p>{`${borderRange.topLeftRadius}px`}</p>
      </label>
      <input
        disabled={isRadiusChecked}
        type='range'
        name='topLeftRadius'
        min='0'
        max='200'
        step='1'
        value={borderRange.topLeftRadius}
        onChange={onHandlerBorderChange}
      />
    </div>
  )
}

export default TopLeftRadius