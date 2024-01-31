import MainButton from './MainButton'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';
const RoomPeekCard = () => {
  return (
    <>
      <div className="container roomPeekCard">
        <div className="row align-items-end">
          <div className="col-12 col-md-6 position-relative">
            <img className="roomImg" src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room1.png?raw=true" alt="尊爵雙人房" />
          </div>
          <div className="col-12 col-md-6 d-flex flex-column mt-3 mt-md-0">
            <div className="">
              <p className="fs-2 mb-3">尊爵雙人房</p>
              <p className="fs-6 mb-4">享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。</p>
            </div>
            <p className="fs-2 mb-4">NT$ 10,000</p>
            <div className="d-flex">
              <MainButton buttonText="查看更多" extending={true} />
            </div>
            <div className="d-flex gap-5 justify-content-end mt-4">
              <FaLongArrowAltLeft size={30} style={{ color: '#BF9D7D' }} />
              <FaLongArrowAltRight size={30} style={{ color: '#BF9D7D' }} />
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default RoomPeekCard