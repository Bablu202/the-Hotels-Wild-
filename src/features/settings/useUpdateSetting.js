import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";

export default function useUpdateSetting() {
  const queryClient = useQueryClient();

  const { mutate: updateSetting, isPending: isUpdating } = useMutation({
    //mutationFn: (newCabin) => createCabin(newCabin),
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success("settings Updated");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },
    onError: (err) => toast.error("update settings*" + err.message),
  });
  return { isUpdating, updateSetting };
}
