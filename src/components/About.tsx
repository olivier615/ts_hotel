const About = () => {
  return (
    <>
      <div className="position-relative about">
        <img className="position-absolute top-0 start-0" src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/about.png?raw=true" alt="" />
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-12 col-md-10">
              <div className="about_card">
                <div className="d-flex flex-column">
                  <p className="fs-1">關於</p>
                  <p className="fs-1">我們</p>
                </div>
                <div className="about_card_body d-flex flex-column gap-5">
                  <div className="">
                    <p>享樂酒店，位於美麗島高雄的心臟地帶，是這座城市的璀璨瑰寶與傲人地標。</p>
                    <p>我們的存在，不僅僅是為了提供奢華的住宿體驗，更是為了將高雄的美麗與活力，獻給每一位蒞臨的旅客。 </p>
                  </div>
                  <div className="">
                    <p>我們的酒店，擁有時尚典雅的裝潢，每一個細節都充滿著藝術與設計的精緻。</p>
                    <p>我們的員工，都以熱情的服務與專業的態度，讓每一位客人都能感受到賓至如歸的溫暖。 </p>
                  </div>
                  <p>在這裡，您可以遙望窗外，欣賞高雄的城市景色，感受這座城市的繁華與活力；您也可以舒適地坐在我們的餐廳，品嚐精緻的佳餚，體驗無與倫比的味覺盛宴。 </p>
                  <p>享樂酒店，不僅是您在高雄的住宿之選，更是您感受高雄魅力的最佳舞台。我們期待著您的蒞臨，讓我們共同編織一段難忘的高雄故事。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About