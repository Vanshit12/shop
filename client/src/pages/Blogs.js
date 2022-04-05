import "../App.css";
import { useState } from "react";
import Axios from "axios";



const Blogs = () => {
    const [id, setId] = useState("");
    const [product, setProduct] = useState("");
    const [quantity, setQuantity] = useState("");
  
      const [newQuantity, setNewQuantity] = useState(0);
  
    const [productList, setProductList] = useState([]);
    
    
    const getProducts = () => {
      // Axios.get("http://localhost:3001/products").then((response) => {    
        Axios.get("http://192.168.18.39:3001/products").then((response) => {    
      setProductList(response.data); 
    });
    };
  
   
  return(
      <div className="employee">
          <div className="information">
                
                  <div className="employees">
                  <button onClick={getProducts}>Show Products</button>  
                  {productList.map((val, key) => {
    return (
      <div className="employee">
        <div>
          <h3>Id: {val.id}</h3>
          <h3>Product: {val.product}</h3>
          <h3>Quantity: {val.quantity}</h3>
          </div>
          
        </div>
    );
  })}

        </div>  
            </div>
    </div>

  );

};
  
  export default Blogs;