import "../App.css";
import Axios from "axios";
import React ,{useState,useEffect} from 'react'

function Card() {
    const [user,setUser] = useState([]);

    const fetchData =()=>{
        Axios.fetch("http://localhost:3001/products")
        .then((response) =>{
            return response.json();
        }).then((data)=>{
            let gagan = data.results
            console.log(gagan);
            setUser(gagan)
        })
    }
    useEffect(()=>{
        fetchData();
    },[])
    return (
        <div className="clearfix">
            alert('ok');
        </div>
    )
};

export default Card;

// fetch("http://localhost:3001/products")
// .then((response)=>{
//         return response.json();
// }).then((data)=>{
//     console.log(data);
// });

// const Home = () => {

//     const addData = () => {
//         Axios.put("http://localhost:3001/updateplus", {
//           id: id,
//           product: product,
//           quantity: quantity,
//         }).then(() => {
//           setProductList([
//             ...productList,
//             {
//               id: id,
//               product: product,
//               quantity: quantity,
//             },
//           ]);
//           alert('You have added your products');
//         });
//       };

// }