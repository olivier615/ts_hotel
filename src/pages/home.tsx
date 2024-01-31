import { 
  News,
  About,
  RoomPeek,
  MainButton,
  Foods,
  Traffic,
  Footer
} from '../components'
const Home = () => {
  return (
    <>
      <div className="home">
        <div className="position-relative p-0 px-md-5">
          <img className="position-absolute top-0 start-0" src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/banner.png?raw=true" alt="" />
          <div className="container-fluid">
            <div className="row align-items-center flex-column flex-md-row">
              <div className="col-12 col-md-5">
                <p className="fs-1 text-primary mt_model_1 text-md-start text-center">享樂酒店</p>
                <p className="fs-4 text-primary text-md-start text-center">Enjoyment Luxury Hotel</p>
              </div>
              <div className="col-9 col-md-6 offset-1">
                <div className="blur_box mt_model_2">
                  <div className="blur_box_pe_200 blur_box_move">
                    <p className="fs_title">高雄</p>
                    <p className="fs_title">豪華住宿之選</p>
                    <p className="fs-4 fs-md-2 mt-3">我們致力於為您提供無與倫比的奢華體驗與優質服務</p>
                    <MainButton buttonText="立即訂房" extending={false} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <News />
      <About />
      <RoomPeek />
      <Foods />
      <Traffic />
      <Footer />
    </>
  )
}

export default Home