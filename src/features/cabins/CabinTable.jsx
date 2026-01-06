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

import { flexRender, getCoreRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function CabinTable({ data, columns }) {
  const [sorting, setSorting] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (sorting.length > 0) {
      const { id, desc } = sorting[0];
      setSearchParams({ sort: `${id}:${desc ? 'desc' : 'asc'}` });
    } else {
      const obj = Object.fromEntries(searchParams);
      delete obj.sort;
      setSearchParams(obj);
    }
  }, [sorting]);

  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(), // Required for sorting to actually move rows
  });

  return (
    <div className="overflow-x-auto border border-gray-200 rounded-lg">
      <table className="w-full text-left border-collapse">
        <thead className="bg-amber-500 text-white">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-4 py-3 font-semibold cursor-pointer select-none border-b border-amber-600"
                  onClick={header.column.getToggleSortingHandler()}
                >
                  <div className="flex items-center gap-2">
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                    
                    {/* Sort Icons */}
                    <span className="w-4">
                      {{
                        asc: ' 👆',
                        desc: ' 👇',
                      }[header.column.getIsSorted()] ?? ' ↕️'}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody className="divide-y divide-gray-200">
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-amber-50 transition-colors">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-4 py-3 text-sm text-gray-700">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="px-4 py-10 text-center text-gray-500">
                No results found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CabinTable;