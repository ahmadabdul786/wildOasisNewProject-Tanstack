import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export default function useDeleteCabin() {
    // Implementation for deleting a cabin
    const queryClient = useQueryClient();

    const  {isPending:isDeleting,mutate:deleteCabinMutation} = useMutation({
    
    mutationFn:(id)=>deleteCabin(id),

    onSuccess:()=>{
      toast.success('cabin deleted successfully');

      queryClient.invalidateQueries({
      queryKey:["cabins"]
    })
    },
    onError:(error)=>{
      toast.error(error.message || 'cabin could not be deleted');
    }
   })
   return {isDeleting,deleteCabinMutation};
}