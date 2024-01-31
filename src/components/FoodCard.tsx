const FoodCard = ({ title, imgUrl, date, content }) => {
  return (
    <>
      <div className="food d-flex align-items-end" style={{backgroundImage: `url(${imgUrl})`}}>
        <div className="p-3 food_bg_blur">
          <div className="d-flex justify-content-between mb-4">
            <p className="fs-4">{title}</p>
            <p className="fs-5">{date}</p>
          </div>
          <p>{content}</p>
        </div>
      </div>
    </>
  )
}

export default FoodCard