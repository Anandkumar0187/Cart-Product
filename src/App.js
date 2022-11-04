
import React,{useState} from 'react'
import './App.css';


function App() {
    const Products = [

        {id: 1, name: "Product-1",price:100},
        
        {id: 2, name: "Product-2",price:200},
        
        {id: 3, name: "Product-3",price:300},
        
        ];
  const [p1, setP1] = useState(0);
  const [p2, setP2] = useState(0);
  const [p3, setP3] = useState(0);
  const [product1 , setProduct1] = useState(false);
  const [product2 , setProduct2] = useState(false);
  const [product3 , setProduct3] = useState(false);

  function productCountNegative(id){
    if(id === 1 ){
        if(p1 > 0){
            setP1(p1 - 1);
            setProduct1(true)
        }
        else{
            setProduct1(false)
        }
    }else if(id === 2 ){
        if(p2 > 0){
            setP2(p2 - 1);
            setProduct2(true)
        }
        else{
            setProduct2(false)
        }
    }else if(id === 3 ){
        if(p3 > 0){
            setP3(p3 - 1);
            setProduct3(true)
        }
        else{
            setProduct3(false)
        }
    }
  }
  function productCountPositive(id){
    if(id === 1){
        setP1(p1 + 1);
        setProduct1(true)
    }else if(id === 2){
        setP2(p2 + 1);
        setProduct2(true)
    }else if(id === 3){
        setP3(p3 + 1);
        setProduct3(true)
    }

  }

  return (
    <>
      <div className='container'>
        <div className='product-list'>
            <h1>Products</h1>
            {Products.map((item)=>
            <div className='products'>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <button onClick={()=>productCountNegative(item.id)}>-</button>
            {item.id === 1 && (<p>{p1}</p>)}
            {item.id === 2 && (<p>{p2}</p>)}
            {item.id === 3 && (<p>{p3}</p>)}
            <button onClick={()=>productCountPositive(item.id)}>+</button>
            </div>
            )}
        </div>
        <div className='prod-amount'>
          <div className='prices'>
            <h1>Cart</h1>
            {!product1 && !product2 && !product3 && (<h4>No Product added to the cart</h4>)}
            {product1 && (<Product1 prod1 = {p1}/>)}
            {product2 && (<Product2 prod2 = {p2}/>)}
            {product3 && (<Product3 prod3 = {p3}/>)}
          </div>
          <div className='total'>
            Total : {p1*100 + p2 *200 +p3 * 300}
          </div>
        </div>
      </div>
    </>
  )
    
}
function Product1({prod1}){

  return (
    <>
      <div className='prod-data'>
        <p>Product-1</p>
        <p>{prod1}</p>
        <p>x</p>
        <p>100</p>
      </div>
    </>
  )

}
function Product2({prod2}){

  return (
    <>
      <div className='prod-data'>
        <p>Product-2</p>
        <p>{prod2}</p>
        <p>x</p>
        <p>200</p>
      </div>
    </>
  )
}
function Product3({prod3}){

  return (
    <>
      <div className='prod-data'>
        <p>Product-3</p>
        <p>{prod3}</p>
        <p>x</p>
        <p>300</p>
      </div>
    </>
  )
}

export default App;
