import { useEffect, useState } from "react";
import getCabins from "../services/apiCabins";
import { data } from "react-router-dom";
import CabinTable from "../features/cabins/CabinTable";

function Cabins() {
  
  
  // useEffect(()=>{
  //   getCabins().then((data=>console.log(data)));  
  // },[])
 

  useEffect(()=>{
    async function fetchData() {
    const res=  await fetch(`https://transit.land/api/v2/rest/operators?api_key=HGgNd0mYjI1l70NRbi0tXdH0eqGHpnhx`)
  const data = await res.json();
  console.log(data);  
  
  }
fetchData();
  },[])
    

  return (

    <div >
      <h1>All cabins</h1>
      
      <CabinTable/>
    </div>
  );
}

export default Cabins;



        
      {/*
        
<form onSubmit={handleSubmit}> 
        <input className="border border-2" onChange={(e)=>setInput(e.target.value)} type="text " placeholder="search books"  />
      </form>
      {isLoading && <p>loading books ...</p>}
      
      {dataToShow.map((book)=>{
       const {
author_key,
        author_name
} = book;
       return<div className=" flex gap-1.5 hover:bg-stone-100">
          <p>
            {author_key}

          </p>
          <p>
            {author_name}
          </p>
        </div>
      })} */}





 {/* const [input,setInput] = useState('');
const [query,setQuery] = useState('interstellar');
const [isLoading,setIsLoading]  = useState(false);
const [data, setData] = useState([]);
const [sortBy,setSortBy] = useState('reverseOrder');
function handleSubmit(e){
e.preventDefault();
setQuery(input);
}

  useEffect(()=>{

async function  fetchData() {
  setIsLoading(true);
 try{

  const res =  await fetch(`https://openlibrary.org/search.json?q=${query}`);
 console.log(res);
 if(!res.ok){
throw new Error('res not ok');
 }
 const data = await res.json();
 if(data.docs.length ===0){
  console.log('try with another query');
  throw new Error('check your query string');
 }
 console.log(data);
 setData(data.docs);
 console.log(data.docs);


 }
 catch(err){
   console.error(err);
 }
 finally{
  setIsLoading(false);
 }
    
}
fetchData();


  },[query])

  const dataToShow = data.slice(0,10);
  // const dataShowAble = dataToShow.map((book)=>{
  
  // })
  let sortedData ;
  console.log(dataToShow);
  if(sortBy ==='order'){
   sortedData = dataToShow;
  }
  else if(sortBy ==='reverseOrder'){
    sortedData = dataToShow.sort((a,b)=> b.
author_name -a.
author_name

)
console.log(sortedData);
  } */}


