import React, { useEffect, useState } from "react";
import "./styles.css";

export const MoreProducts = ({ url, skip = 20, limit = 20 }) => {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButtor] = useState(false);

  async function fetchProducts(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(
        `${getUrl}limit=${limit}&skip=${count === 0 ? 0 : skip * count}`
      );
      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }
  useEffect(() => {
    if (url !== "") fetchProducts(url);
  }, [count]);

  useEffect(()=>{
    if(products && products.length==100) setDisableButtor(true);
  })

  if (loading) {
    return <div>Loading Products! Please wait!</div>;
  }
  return (
    <div className="moreProductsContainer">
      <div className="products-container">
        {products && products.length
          ? products.map((item) => (
              <div className="product" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            ))
          : null}
      </div>
      <div className="loadMoreProduct">
        <button disabled={disableButton} onClick={() => setCount(count + 1)}>Load More</button>
        {
            disableButton? <p>You have reached the end of Products!</p>:null
        }
      </div>
    </div>
  );
};
export default MoreProducts;
