import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const names = ["Masum", "Redoy", "Parvej", "Rakib"];
  const nayoks = ["Razzak", "Jasim", "Salman","Sakib"];
  const products = [
    { name: "Photshop", price: "$90.99" },
    { name: "Illustrator", price: "$69.99" },
    { name: "PDF", price: "$25.99" }
  ]

  const friends=[
    {name:"Selim",age:24},
    {name:"Palim",age:25},
    {name:"Dalim",age:26}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>

        {
          friends.map(fr=><Friends friend={fr}></Friends>)
        }
        <ul>
          {
            nayoks.map(nayok=><li>{nayok}</li>)
          }
        </ul>
          {
            products.map(pd=><Product product={pd}></Product>)
          }
        {/* <Product product={products[0]} ></Product>
        <Product product={products[1]} ></Product>
        <Product product={products[2]} ></Product> */}
        {/* <Product name={products[1].name} price={products[1].price} ></Product>
        <Product name={products[2].name} price={products[2].price} ></Product> */}
        <Person name={names[0]} job="Software Engineer"></Person>
        <Person name={names[1]} job="Professor"></Person>
        <Person name={names[2]} job="Teacher"></Person>
        <Person name={names[3]} job="Senior Software Engineer"></Person>
      </header>
    </div>

  );
}

function Product(props) {
  const {name,price}=props.product;


  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left',
    margin: '10px'
  }

  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h4>{price}</h4>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props) {
  
  const personStyle = {
    border: '2px solid red',
    color: 'cyan',
    margin: '10px'
  }
  return (
    <div style={{ color: 'cyan', border: '2px solid yellow', margin: '10px' }}>
      <h1>{props.name}</h1>
      <h3>He is a {props.job}</h3>
    </div>
  );
}

function Friends(props){
  const friendStyle={
    width:'100px',
    height:'150px',
    backgroundColor:'yellow',
    border:'5px solid gray',
    borderRadius:'10px',
    margin:'10px'
  }
  const {name,age}=props.friend;

  return (
    <div style={friendStyle}>
      <h3>{name}</h3>
      <h4>{age}</h4>
    </div>
  )
}

function Counter(){
  const [count,setCount]=useState(10);
  
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=>setCount(count+1)}>Increase</button>
      <button onMouseMove={()=>setCount(count-1)}>Decrease</button>
    </div>
  )
}

function Users(){
  const [users,setUsers]=useState([]);
  const [name,setName]=useState('');
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data))
  },[])
  return (
    <div>
    <h3>Dynamic Users: {users.length} </h3>
    <ul>
      {
        users.map(user=> <li>{user.phone}</li>)
      }
    </ul>
    </div>
  );
}

export default App;
