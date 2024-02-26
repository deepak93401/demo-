import logo from './logo.svg';
import './Component/com.css';
import './Component/Media.css';
import Navbar from './Component/Navbar';
import { useEffect, useState } from 'react';
import Amazon from './Component/Amazon';
import Cart from './Component/Cart';
import { useCookies } from 'react-cookie';

function App() {
  const [show, setShow] = useState(true);
	const [cart , setCart] = useState([]);
  const [cookies,setCookies]=useCookies("item")
	const [warning , setWarning] = useState(false);
   const handleclick=(item)=>{
    console.log(item)
     let isPresent=false;
     cart.forEach((product)=>{
        if(item.id===product.id)
          isPresent=true;
      
     })
     if(isPresent){
        setWarning(true)
        setTimeout(()=>{
          setWarning(false)
        },2000)
        return;                         //Afer return not excute code in function
     }
     
      setCart([...cart,item])
      setCookies("item",[...cart,item],{path:"/"})
      
     
   }
  
   useEffect(()=>{
    const itemdata=cookies.item||[]
    setCart(itemdata)
   },[cookies.item])
 
 
 
   // 
   const handleChange = (item, d) =>{
    console.log(item,d)
		let ind = 0;
		cart.forEach((data, index)=>{
			if (data.id === item.id)
				ind = index;
		});
		const tempArr = cart;
		tempArr[ind].amount += d;
		
		if (tempArr[ind].amount === 0)
			tempArr[ind].amount = 1;
		setCart([...tempArr])
	}
 
  return (
     <>
       <Navbar size={cart.length} setShow={setShow}/>
       {
         show ?<Amazon handleclick={handleclick}/>:  <Cart cart={cart} setCart={setCart} handleChange={handleChange}/>
       }
       
     
       {
         warning&&<div className='warning'> item is already add to cart</div>
       }
       
     </>
  );
}

export default App;
