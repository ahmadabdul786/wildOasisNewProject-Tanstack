import React from 'react'
// import getCabins from '../../services/apiCabins';
import { useQuery} from '@tanstack/react-query';
import { getBooking } from '../../services/apiBookings';
import { useParams } from 'react-router-dom';

export function useGetSingleBooking() {
    
 const {bookingId} = useParams();

     const {data:booking,error,isLoading} =  useQuery({
     queryKey:['booking','bookingId'],
    queryFn:() => getBooking(bookingId)
   })
   
    return {booking,error,isLoading};
}

