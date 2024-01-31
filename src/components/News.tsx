import NewsCard from './NewsCard'
const News = () => {
  return (
    <div className="bg-secondary news">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-2 mb-3 mb-md-0">
            <p className="fs-1 text-primary">最新</p>
            <p className="fs-1 text-primary">消息</p>
          </div>
          <div className="col-12 col-md-10">
            <div className="d-flex flex-column gap-4">
            <NewsCard
            imgUrl="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/news1.png?raw=true"
            title="秋季旅遊，豪華享受方案"
            content="秋天就是要來場豪華的旅遊！我們為您準備了一系列的秋季特別方案，包括舒適的住宿、美食饗宴，以及精彩的活動。不論您是想來一趟浪漫之旅，還是想和家人共度美好時光，都能在這裡找到最適合的方案。"
            />
            <NewsCard 
            imgUrl="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/news2.png?raw=true"
            title="輕鬆住房專案"
            content="我們知道，有時候您只是需要一個舒適的地方放鬆心情。因此，我們推出了「輕鬆住房專案」，讓您無壓力地享受住宿。不管是短期的休息，還是長期的住宿，我們都會以最貼心的服務，讓您感到賓至如歸。"
            />
            <NewsCard
            imgUrl="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/news3.png?raw=true"
            title="耶誕快樂，住房送禮"
            content="聖誕節來臨，我們為您準備了特別的禮物！在聖誕期間訂房，不僅有特別優惠，還會送上我們精心準備的聖誕禮物。讓我們一起慶祝這個溫馨的節日吧！"
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News