import MultipleItems from './MultipleItems'

const Foods = () => {
  return (
    <>
      <div className="bg-secondary">
        <div className="container foods">
          <div className="ps-4 ps-md-0">
            <p className="fs-1 text-primary">佳餚</p>
            <p className="fs-1 text-primary">美饌</p>
          </div>
          <div className="ps-4 ps-md-0">
            <div className="foodCards">
            <MultipleItems />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Foods