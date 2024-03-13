import QRCodeGenerator from "./components/QR-code-generator";
import ImageSlider from "./components/image-slider";
import MoreProducts from "./components/more-products";
import StarRating from "./components/star-rating";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";


function App() {
  return (
    <div className="App">
      
        <div className="right-aside">
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
      </div>
    </div>
  );
}

export default App;
