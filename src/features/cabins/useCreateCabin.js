import React from 'react'
import toast from 'react-hot-toast';
import { createCabin } from '../../services/apiCabins';
import { useMutation, useQueryClient } from '@tanstack/react-query';

function useCreateCabin() {
  const queryClient = useQueryClient();
  const { isPending: isCreating, mutate: createCabinMutation } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success('cabin created successfully');
      queryClient.invalidateQueries({
        queryKey: ["cabins"]
      });
    },
    onError: (error) => {
      toast.error('cabin could not be created');
    }
  });

  return { isCreating, createCabinMutation };
}

export default useCreateCabin
