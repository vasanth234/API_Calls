import React from 'react'
import {useEffect} from 'react'
const App = () => {
useEffect(
  ()=>{
    postproducts()
  }
)

//instead of using the then method we are using the async and await methods 
//because it returns the promise object so it should be converted into json data
//when we fetch any data from the url Automatically it takes the get method 
//when we are giving the post we are sending the data to the server
//if we want to update one product we will be use PATCH method and if we want to update all products we will use PUT
//For delete there is no body
/*async function getproducts(){
  let data=await fetch('https://fakestoreapi.com/products');
  let res= await data.json();
  console.log(res)

}*/

/*async function postproducts(){
  let data=await fetch('https://fakestoreapi.com/products/10',
  {
            method:"PATCH",
            body:JSON.stringify(
                {
                    title: 'test product',
                    price: 13,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'Mobile'
                }
            )
        })
        let provide=await data.json();
        console.log(provide)
}*/
async function postproducts(){
  let data=await fetch('https://fakestoreapi.com/products/10',
  {
            method:"DELETE",
            
        })
        let provide=await data.json();
        console.log(provide)
}
  return (
    <div>
      <h2>API integration now</h2>
    </div>
  )
}

export default App