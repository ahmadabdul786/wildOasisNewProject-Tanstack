import React from 'react'
import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateSetting } from '../../services/apiSettings';

function useUpdateSetting() {
  const queryClient = useQueryClient();

  const { isPending: isUpdating, mutate: updateSettingMutation } = useMutation({
    mutationFn: updateSetting,
    onSuccess: () => {
      toast.success('cabin updated successfully');
      queryClient.invalidateQueries({
        queryKey: ["settings"]
      })
    },
    onError: () => {
      toast.error('cabin could not be updated');
    }
  });

  return { isUpdating, updateSettingMutation };
}

export default useUpdateSetting
