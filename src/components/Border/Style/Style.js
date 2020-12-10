const Style = ({ onHandlerBorderChange }) => {
  return (
    <div>
      <label htmlFor='style'>
        <h3>Style:</h3>
      </label>
      <select name='style' onChange={onHandlerBorderChange}>
        <option value='solid'>solid</option>
        <option value='dotted'>dotted</option>
        <option value='dashed'>dashed</option>
        <option value='double'>double</option>
        <option value='groove'>groove</option>
        <option value='ridge'>ridge</option>
        <option value='inset'>inset</option>
        <option value='outset'>outset</option>
        <option value='none'>none</option>
        <option value='hidden'>hidden</option>
      </select>
    </div>
  )
}

export default Style