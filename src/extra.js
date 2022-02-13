// import React from 'react';
// import Layout from '../components/Layout';
// import { collection, addDoc, getDocs } from "firebase/firestore"; 
// import fireDB from '../fireConfig'
// import { fireproducts } from '../fireProducts';


// // async function adddata(){
// //   try{
// //   await addDoc (collection (fireDB,"users"), {name:"",age:"36"})
// // } catch(error){
// //   console.log(error)
// // }
// // }
// async function getData(){
//   try{
//   const users =await getDocs(collection (fireDB,"products"));
//   const productsArray=[]

//   users.forEach ((doc)=>{
//     const obj={
//       id:doc.id,
//       ... doc.data(),
//     };
//     productsArray.push(obj)
//   });
//    console.log(productsArray);
// } catch(error){
//   console.log(error)
// }
// }
// //  function addProductsData(){
// //    fireproducts.map (async (product)=>{
// //   try{
// //   await addDoc (collection (fireDB,"products"),product);
// // } catch(error){
// //   console.log(error)
// // }
// // });
// // }

// export default function Homepage() {
//   return (
//   <Layout>
//     <h1>Homepage</h1>
//     <button onClick={adddata}> add data to firebase</button>
//     <button onClick={getData}> get data from firebase</button>
//     {/* <button onClick={addProductsData}> add productdata</button> */}


//     </Layout>
//   )
// }
