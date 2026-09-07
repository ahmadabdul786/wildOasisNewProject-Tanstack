import React from 'react'
import Table from '../../ui/Table'
import { useNavigate } from 'react-router-dom'

function BookingsTable({data,columns}) {



 const navigate = useNavigate();
    // const tagColor = statusToTagName[data.status];
function handleRowClick(booking){
  navigate(`/bookings/${booking.id}`);
  console.log('clicked');
}

  return (
     <Table data={data} columns={columns}    />
    
    
  )
}

export default BookingsTable
