import ImageSlider from "./components/image-slider";
import StarRating from "./components/star-rating";


function App() {
  return (
    <div className="App">
      
      <ImageSlider url={"https://picsum.photos/v2/list?"}
        page={"1"}
        limit={"10"}/>
        <StarRating noOfStars={10}/>
    </div>
  );
}

export default App;
