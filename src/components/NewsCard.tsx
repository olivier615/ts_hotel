const NewsCard = ({ imgUrl, title, content }) => {
  return (
    <>
      <div className="row align-items-center mb-4 mb-md-0">
        <div className="col-12 col-md-5">
          <img src={imgUrl} alt={title} />
        </div>
        <div className="col-12 col-md-6">
          <p className="fs-2 fw-bold text-dark mb-3">{title}</p>
          <p className="text-dark">{content}</p>
        </div>
      </div>
        </>
  )
      }  

export default NewsCard