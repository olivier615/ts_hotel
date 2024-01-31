import { Component } from "react";
import Slider from "react-slick";

import FoodCard from './FoodCard'

export default class MultipleItems extends Component {
  render() {
    const screenWidth = window.innerWidth;
    const defaultSettings  = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    const settings = screenWidth < 768
      ? { ...defaultSettings, slidesToShow: 1, slidesToScroll: 1 , arrows: false }
      : { ...defaultSettings };
    return (
      <div>
        <Slider {...settings}>
          <div>
          <FoodCard
              title="海霸"
              imgUrl="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/food1.png?raw=true"
              date="SUN-MON  11:00 - 20:30"
              content="以新鮮海產料理聞名，我們的專業廚師選用高雄當地的海鮮，每一道菜都充滿海洋的鮮美與清甜。無論是烤魚、蒸蝦還是煮蛤蜊，都能讓您品嚐到最新鮮的海洋風味。"
              />
          </div>
          <div>
          <FoodCard
              title="日食"
              imgUrl="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/food2.png?raw=true"
              date="SUN-MON  17:00 - 22:00"
              content="為您提供優質的牛排，每一塊肉都來自頂級的牛肉，經過專業廚師的巧手烹調，口感豐滿、風味絕佳。搭配我們的特製醬料，讓您的味蕾享受一場美味的盛宴。"
              />
          </div>
          <div>
          <FoodCard
              title="山臻"
              imgUrl="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/food3.png?raw=true"
              date="SUN-MON  11:30 - 20:30"
              content="帶您進入一次辣味與鮮香兼具的川菜美食之旅。我們的廚師掌握正宗的川菜烹調技巧，從麻辣鍋到口水雞，每一道菜都有其獨特的風味，讓您回味無窮。"
              />
          </div>
          <div>
          <FoodCard
              title="月永"
              imgUrl="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/food4.png?raw=true"
              date="SUN-MON  11:30 - 20:00"
              content="從鮮美的海鮮、經典的牛排，到各國的特色美食，我們都一應俱全。在這裡，您可以品嚐到世界各地的美食，每一道菜都由專業廚師用心製作，讓您在享受美食的同時，也能感受到我們的熱情與用心。"
              />
          </div>
          <div>
          <FoodCard
              title="天潮"
              imgUrl="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/food5.png?raw=true"
              date="SUN-MON  14:00 - 19:30"
              content="我們提供各種精緻甜點與糕點，無論您喜歡的是巧克力蛋糕、法式馬卡龍，還是台灣傳統的糕點，都能在這裡找到。讓我們的甜點帶您進入一場繽紛的甜蜜旅程。"
              />
          </div>
        </Slider>
      </div>
    );
  }
}