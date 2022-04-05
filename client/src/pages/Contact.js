import "../App.css";
import { useState } from "react";
import Axios from "axios";


const Contact = () => {
  const [id, setId] = useState("");
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");

    const [newQuantity, setNewQuantity] = useState(0);

  const [productList, setProductList] = useState([]);
  
    

  const updateProduct = () => {
    Axios.put("http://localhost:3001/updateminus", {
      product: product,
       quantity: quantity,
        id: id, 
      }).then(() => {
      setProductList([
        ...productList,
        {
          id: id,
          product: product,
          quantity: quantity,
        },
      ]);
      alert('You have sold your item');
    });
  };
return(
    <div className="employee">
  <div className="information">
      <label>Id:</label>
      <select name="Id" style={{ width: 320, height: 50 }} type="number"
        onChange={(event) => {
          setId(event.target.value);
        }}>
             <option value="">--Please choose an option--</option>
             <option value="1">1</option>
             <option value="2">2</option>
         </select>
      <label>Product:</label>
      <select name="product" style={{ width: 320, height: 50 }} type="text"
        onChange={(event) => {
          setProduct(event.target.value);
        }}>
             <option value="">--Please choose an option--</option>
             <option value="Jeans">Jeans</option>
             <option value="Shirt">Shirt</option>
         </select>
      
      <label>Quantity:</label>
      <input
        type="number"
        onChange={(event) => {
          setQuantity(event.target.value);
        }}
      />
   
     
      <div>
        
              <button onClick={updateProduct}>
                Sell Item
              </button>

            </div>
          </div>
  </div>

);
  };
  
  export default Contact;