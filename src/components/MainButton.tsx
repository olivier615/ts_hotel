const MainButton = ({ buttonText, extending }) => {
  return (
    <button type="button" className="btn btn-primary fs-4 p-3 p-md-5"
    style={{
      width: extending ? '100%' :''
    }}
    >{ buttonText }</button>
  )
}

export default MainButton