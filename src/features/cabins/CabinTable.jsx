// // 
// import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
// import React, { useEffect, useState } from 'react'
// import { useSearchParams } from 'react-router-dom';

// function CabinTable({data,columns}) {
  
//     const [sorting,setSorting] = useState([]);
//     const [seachParams,setSearchParams] = useSearchParams();
//   useEffect(()=>{
//      if(sorting.length>0){
//       const {id,desc} = sorting[0];
//       setSearchParams({sort:`${id}:${desc?'desc':'asc'}`});
      
//      }
//      else{
//         const obj = Object.fromEntries(seachParams);
//         delete obj.sort;
//         setSearchParams(obj);
//       }
//     },[sorting])

//   const table = useReactTable({
//     data,
//     columns,
//     getCoreRowModel: getCoreRowModel(),
    
//     onSortingChange:setSorting,
//     state:{
//       sorting
//     }
//    })
//    console.log(table);

//   return (
    
//       <table className='w-full'>
//         <thead className='w-full ' >
//           {table.getHeaderGroups().map((headerGroup)=>{
//           return <tr className=' bg-amber-500 w-full ' key={headerGroup.id}>
//             {headerGroup.headers.map((header)=><th key={header.id} onClick={header.column.getToggleSortingHandler()}>
//               {header.isPlaceholder? null:
//                flexRender(header.column.columnDef.header,
//                 header.getContext())
//                 }
//                 {{asc:'👆',desc:'👇'}[header.column.getIsSorted()]}

              
//             </th>)}
            
//           </tr>
//           })}
          
//         </thead>
//         <tbody className='w-full pl-4'>
//           {table.getRowModel().rows?.length? 
//           table.getRowModel().rows.map((row)=>{
//             return<tr className=' w-full bg-amber-100' key={row.id}>
             
//              {row.getVisibleCells().map((cell)=><td>{
//               flexRender(cell.column.columnDef.cell,cell.getContext())
//               }</td>)}
              
//             </tr>
//           }):<tr>no results</tr>}
          
//         </tbody>
//       </table>
    
//   )
// }

// export default CabinTable

import React from 'react'
import Table from '../../ui/Table'

function CabinTable({data,columns}) {
  return (
    <Table data={data} columns={columns} />
  )
}

export default CabinTable
