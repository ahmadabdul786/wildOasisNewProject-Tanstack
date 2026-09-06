import { createColumnHelper } from '@tanstack/react-table';
import React from 'react'

function cabinColumns(setEditCabinData,setShowEditForm,deleteCabinMutation,isDeleting) {
  
    const columnHelper = createColumnHelper();
    
    const columns = [
      columnHelper.accessor('image',{
        header:'Image',
        cell:({row})=><div className="flex items-center gap-4">
      <img 
        src={row.original.image||null} 
        alt={row.original.name} 
        className="h-12 w-12 object-cover"
      />
      {/* <span>{row.original.name}</span> */}
    </div>
      }),
      columnHelper.accessor('discount',{
        header:'Discount'
      }),
      columnHelper.accessor('name',{
        header:'Name'
      }),
      columnHelper.accessor('regularPrice',{
        header:'Pirce'
      }),
      columnHelper.display({
      id: 'user_id',
      header: 'Actions',
      cell: ({ row }) => (
        <button 
          onClick={() => {
           console.log(row.original.id);
             deleteCabinMutation(row.original.id)
           
          }} // Call the mutation with the cabin's ID
          disabled={isDeleting}
        >
          {'Delete'}
        </button>
      ),
    }),
columnHelper.display({
      id: 'id',
      header: 'Actions',
      cell: ({ row }) => (
        <button 
          onClick={() => {
           console.log(row.original);
            //  mutate(row.original.id)
            setEditCabinData(row.original);
           setShowEditForm(true);
          }} // Call the mutation with the cabin's ID
          // disabled={isPending}
        >
          {'Edit'}
        </button>
      ),
    }),
    ]
    return columns;
}

export default cabinColumns
