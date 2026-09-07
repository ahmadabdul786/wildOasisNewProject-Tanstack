import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function useCheckIn(){
    const queryClient = useQueryClient();
    const navigate = useNavigate();
   const {mutate:checkin, isLoading: isCheckingIn} = useMutation({
        mutationFn:(bookingId)=> updateBooking(bookingId,{status:'checked-in',isPaid:true}),
        onSuccess: (data)=>{
            toast.success(`booking # ${data.id} successfully checked in`)
            queryClient.invalidateQueries({active:true});
            navigate('/');

        },
        onError: (error) => {
            toast.error(error.message || 'Failed to check in booking');
        }
    })


    return {checkin,isCheckingIn};
}