import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function useCheckOut(){
    const queryClient = useQueryClient();
    const navigate = useNavigate();
   const {mutate:checkout, isLoading: isCheckingOut} = useMutation({
        mutationFn:(bookingId)=> updateBooking(bookingId,{status:'checked-out'}),
        onSuccess: (data)=>{
            toast.success(`booking # ${data.id} successfully checked out`)
            queryClient.invalidateQueries({active:true});
            navigate('/');

        },
        onError: (error) => {
            toast.error(error.message || 'Failed to check out booking');
        }
    })


    return {checkout,isCheckingOut};
}
