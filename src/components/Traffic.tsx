import { FaCar, FaCarSide } from 'react-icons/fa';
import { FaTrainSubway } from "react-icons/fa6";

const Traffic = () => {
  const screenWidth = window.innerWidth;
  const defaultMap = 'https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/map.png?raw=true'
  const mobileMap = 'https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E8%A1%8C%E5%8B%95%E7%89%88/map.png?raw=true'
  const iconSize = screenWidth > 768 ? 80 : 48
  return (
    <>
      <div className="container">
        <div className="traffic">
          <div className="ps-4 ps-md-0">
            <p className="fs-1 text-primary">交通</p>
            <p className="fs-1 text-primary">方式</p>
          </div>
          <div className="row">
            <div className="traffic_map col-12">
              <p>台灣高雄市新興區六角路123號</p>
              <img className="mt-2" src={screenWidth > 768 ? defaultMap : mobileMap} alt="" />
            </div>
            <div className="col-12 col-md-4 mb-3">
              <FaCar size={iconSize} style={{ color: '#BF9D7D' }} />
              <p className="fs-4 my-2">自行開車</p>
              <p>如果您選擇自行開車，可以透過國道一號下高雄交流道，往市區方向行駛，並依路標指示即可抵達「享樂酒店」。飯店內設有停車場，讓您停車方便。</p>
            </div>
            <div className="col-12 col-md-4 mb-3">
              <FaTrainSubway size={iconSize} style={{ color: '#BF9D7D' }} />
              <p className="fs-4 my-2">高鐵/火車</p>
              <p>如果您是搭乘高鐵或火車，可於左營站下車，外頭有計程車站，搭乘計程車約20分鐘即可抵達。或者您也可以轉乘捷運紅線至中央公園站下車，步行約10分鐘便可抵達。</p>
            </div>
            <div className="col-12 col-md-4 mb-3">
              <FaCarSide size={iconSize} style={{ color: '#BF9D7D' }} />
              <p className="fs-4 my-2">禮賓車服務</p>
              <p>承億酒店提供禮賓專車接送服務，但因目的地遠近會有不同的收費，請撥打電話將由專人為您服務洽詢專線：(07)123-4567</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Traffic