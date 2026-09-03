import React from 'react'
import getCabins from '../../services/apiCabins';
import { useQuery} from '@tanstack/react-query';

function useCabins() {
    
 
     const {data,error,isLoading} =  useQuery({
     queryKey:['cabins'],
    queryFn:getCabins
   })
   
    return {data,error,isLoading};
}

export default useCabins
