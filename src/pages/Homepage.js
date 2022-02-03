import React, { useEffect,useState} from 'react';
import Layout from '../components/Layout';
import { collection,addDoc,getDocs} from "firebase/firestore"; 
import fireDB from '../fireConfig';
import { fireProducts } from '../fireProducts';

export default function Homepage() {

  const[products, setproducts]=useState({})
 
  useEffect(()=>{
    getdata()
  },[]);

  async function getdata(){
    try{
    const users= await getDocs(collection(fireDB,"products"));
    const productsArray=[];
 users.forEach((doc) => {
  const obj={
    id:doc.id,
    ...doc.data(),
  };
productsArray.push(obj);
}); setproducts(productsArray);
    }catch(error){
      console.log (error);
    }  
}
  return (

  <Layout>
<h1>Home</h1>

  </Layout>
  )
}
