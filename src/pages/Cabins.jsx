
// import getCabins, { deleteCabin } from "../services/apiCabins";
// import { data } from "react-router-dom";
import CabinTable from "../features/cabins/CabinTable";

// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// import toast from "react-hot-toast";
import { useState } from "react";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import useDeleteCabin from "../features/cabins/useDeleteCabin";
import useCabins from "../features/cabins/useCabins";
import cabinColumns from "../features/cabins/CabinColumns";


  
  

function Cabins() {
  const [showForm,setShowForm] = useState(false);
  const [showEditForm,setShowEditForm] = useState(false);
  const [editCabinData, setEditCabinData] = useState(null);
  const {data,error,isLoading} =  useCabins();
       const {isDeleting,deleteCabinMutation} = useDeleteCabin();
  const columns = cabinColumns(setEditCabinData,setShowEditForm,deleteCabinMutation,isDeleting);
  
 
 
     
  // console.log(error, 'error');
  //  const tableData = data || [];
     //console.log(data, 'data');
    //  console.log(editCabinData);

     
   
  
  //this use effect is used to set the params and this will set the params and fromthere
  //we can take the query and send it to backend req and we will again get the get 
  //and we will show the sorted array

  

    
     
  
   
  if(isLoading) return <p>loading...</p>
  return (
<>
 <div className="bg-red-200">
      <h1>All cabins</h1>
   <CabinTable data={data} columns={columns}/>
    <button onClick={()=>setShowForm((prev)=>!prev)}>
      {showForm ? 'Hide Form' : 'Add Cabin'}
    </button>
     {showForm && <CreateCabinForm setShowForm = {setShowForm} />}
     {showEditForm && <CreateCabinForm editCabinData = {editCabinData} setShowEditForm = {setShowEditForm} />}
       </div>
    
    </>
  );
}

export default Cabins;

//here the snapshot of very simple tanstack table 

//     const columnHelper = createColumnHelper();
    
//     const columns = [
//       columnHelper.accessor('discount',{
//         header:'Discount'
//       }),
//       columnHelper.accessor('name',{
//         header:'Name'
//       }),
//       columnHelper.accessor('regularPrice',{
//         header:'Pirce'
//       })

//     ]
//    const table = useReactTable({
//     data,
//     columns,
//     getCoreRowModel: getCoreRowModel()
//    })
//    console.log(table);
//   if(isLoading) return <p>loading...</p>
//   return (
// <>
// {/* <CabinTable/> */}
//     <div >
//       <h1>All cabins</h1>
      
//       <table>
//         <thead>
//           {table.getHeaderGroups().map((headerGroup)=>{
//           return <tr key={headerGroup.id}>
//             {headerGroup.headers.map((header)=><th key={header.id}>
//               {flexRender(header.column.columnDef.header,header.getContext())}
              
//             </th>)}
            
//           </tr>
//           })}
          
//         </thead>
//         <tbody>
//           {table.getRowModel().rows?.length? 
//           table.getRowModel().rows.map((row)=>{
//             return<tr key={row.id}>
             
//              {row.getVisibleCells().map((cell)=><td>{
//               flexRender(cell.column.columnDef.cell,cell.getContext())
//               }</td>)}
              
//             </tr>
//           }):<tr>no results</tr>}
          
//         </tbody>
//       </table> 
//     </div>
//     </>
//   );
// }

// export default Cabins;
   


//this code was written in your first assessment with sir tayyab 
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


