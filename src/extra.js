//import React from 'react';
//import Layout from '../components/Layout';
//import { collection,addDoc,getDocs} from "firebase/firestore"; 
//import fireDB from '../fireConfig';
//import { fireProducts } from '../fireProducts';

export default function Homepage() {
 
  async function adddata(){
    try{
    await addDoc(collection(fireDB,"users"),{name:"kumar", Age:32} );
    }
    catch (error){
      console.log(error)
    }

  }
  async function getdata(){
    try{
    const users= await getDocs(collection(fireDB,"users"),{name:"praveen", Age:38} )
    const usersArray=[]
 users.forEach((doc) => {
  console.log(doc.id, " => ", doc.data());
  const obj={
    id:doc.id,
    ...doc.data(),
  }
usersArray.push(obj)
});
console.log(usersArray);
    }catch(error){
      console.log (error);
    }  
}
 function addproductsdata(){
     fireProducts.map(async(products)=>{
      try{
        await addDoc(collection(fireDB,"products"),products);
      }
        catch (error){
          console.log(error);
        }
       } );
}

  return (

  <Layout>

<h1>Home</h1>

<button onClick={adddata}>Add data to Firebase</button>
<button onClick={getdata}>get data from Firebase</button>
<button onClick={addproductsdata}>add data to Firebase</button>



  </Layout>
  )
}
