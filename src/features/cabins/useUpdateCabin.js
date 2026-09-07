  import React from 'react'
import toast from 'react-hot-toast';
import { updateCabin } from '../../services/apiCabins';
import { useMutation, useQueryClient } from '@tanstack/react-query';

function useUpdateCabin() {
  const queryClient = useQueryClient();

  const { isPending: isUpdating, mutate: updateCabinMutation } = useMutation({
    mutationFn: (updatedCabin) => updateCabin(updatedCabin),
    onSuccess: () => {
      toast.success('cabin updated successfully');
      queryClient.invalidateQueries({
        queryKey: ["cabins"]
      })
    },
    onError: () => {
      toast.error('cabin could not be updated');
    }
  });

  return { isUpdating, updateCabinMutation };
}

export default useUpdateCabin
