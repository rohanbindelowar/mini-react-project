import ImageSlider from "./components/image-slider";
import MoreProducts from "./components/more-products";
import StarRating from "./components/star-rating";


function App() {
  return (
    <div className="App">
      
      <ImageSlider url={"https://picsum.photos/v2/list?"}
        page={"1"}
        limit={"10"}/>
        <MoreProducts
        url={"https://dummyjson.com/products?"}
        skip={20}
        limit ={20}/>
        <StarRating noOfStars={10}/>
    </div>
  );
}

export default App;
