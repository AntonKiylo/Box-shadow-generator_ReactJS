const Inset = ({ inset, setInset }) => {
  const changeInsetState = () => {
    setInset(!inset)
  }

  return (
    <div>
      <label htmlFor='inset'>
        <h3>Inset:</h3>
      </label>
      <input
        type='checkbox'
        checked={inset}
        name='inset'
        onChange={changeInsetState}
      />
    </div>
  )
}

export default Inset