import logo from './logo.svg';
import './App.css';
import CardRCC from './components/CardRCC/CardRCC';
import CardRFC from './components/CardRFC/CardRFC';
import Homecomponent from './components/BTComponent/Homecomponent/Homecomponent';
import DataBinding from './components/DataBinding/DataBinding';
import HandleEvent from './components/HandleEvent/HandleEvent';
import DemoSTATE from './DemoSTATE/DemoSTATE';
import TangGiamFont from './DemoSTATE/TangGiamFont';
import DemoStyling from './DemoSTATE/DemoStyling';
import DoiMauXe from './DoiMauXe/DoiMauXe';
import DemoArray from './DemoArray/DemoArray';
import DemoProps from './DemoProps/DemoProps';
import ShoesShop from './DemoProps/ShoesShop/ShoesShop';
import BaiTapXemChiTiec from './BaiTapXemChiTiec/BaiTapXemChiTiec';
import BTGioHang from './BaiTapGioHang/BTGioHang';
import BTGioHangRedux from './BTGioHangRedux/BTGioHangRedux';
import GameTaiXiu from './GameTaiXiu/GameTaiXiu';
import BTQLND from './BTQLND/BTQLND';

// app là component chính của ứng dụng chưa các component con
function App() {
  return (
    //chỉ dk 1 thẻ bao bên ngoài
    // thẻ jsx
    <div className="App">

   
    
    {/* <Homecomponent/> */}
    {/* <DataBinding/> */}
    {/* <HandleEvent/> */}
    {/* <DemoSTATE/> */}
    {/* <TangGiamFont/> */}
    {/* <DoiMauXe/> */}
    {/* <DemoArray/> */}
    {/* <DemoProps/> */}
    {/* <ShoesShop/> */}

    {/* <BaiTapXemChiTiec/> */}
    {/* <BTGioHang/> */}
    
    {/* <BTGioHangRedux/> */}
    {/* <GameTaiXiu/> */}
    <BTQLND/>


    {/* <DemoStyling/>
    <p className='demoCSS'>123456app</p>
 */}



      {/* <CardRCC></CardRCC>
      
      <CardRFC/> */}
      
    </div>
  );
}

export default App;
