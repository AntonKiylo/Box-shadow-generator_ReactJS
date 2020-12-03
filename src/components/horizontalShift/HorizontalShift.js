const HorizontalShift = ({shadowRange, changeHorizontalShift}) => {
  return (
    <>
      <label htmlFor='horizontal-shift'>Horizontal shift</label>
      <input
        type='range'
        name='horizontal-shift'
        min='-50'
        max='50'
        step='1'
        value={shadowRange.horizontalShift}
        onChange={changeHorizontalShift}
      />
    </>
  )
}

export default HorizontalShift