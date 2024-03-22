import ModelTest from "./components/Custom-model/modelTest";
import QRCodeGenerator from "./components/QR-code-generator";
import GitProfileFinder from "./components/gitProfileFinder/GitProfileFinder";
import ImageSlider from "./components/image-slider";
import MoreProducts from "./components/more-products";
import ScrollIndicator from "./components/scroll-indicator/ScrollIndicator";
import SearchAutoComplete from "./components/searchAutoComplete/SearchAutoComplete";
import StarRating from "./components/star-rating";
import LightDarkMode from "./components/theme-switch/LightDarkMode";
import TicTacToe from "./components/tic-tac-toe-game/TicTacToe";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import TestUseFetch from "./components/use-Fetch/TestUseFetch";
import UseOnClickOutsideTest from "./components/use-outside-click/UseOnClickOutsideTest";


function App() {
  return (
    <div className="App">
      
        <div className="right-aside">
       <ScrollIndicator/>
        <ImageSlider url={"https://picsum.photos/v2/list?"}
        page={"1"}
        limit={"10"}/>
        <MoreProducts
        url={"https://dummyjson.com/products?"}
        skip={20}
        limit ={20}/>
        </div>
      <StarRating noOfStars={10}/>
      <div className="left-aside">
      <TreeView menu={menus}/>
      <QRCodeGenerator/>
      <LightDarkMode/>
      <ModelTest/>
     <GitProfileFinder/>
     <SearchAutoComplete/>
     <TicTacToe/>
     <TestUseFetch/>
     <UseOnClickOutsideTest/>
      </div>
    
    </div>
  );
}

export default App;
