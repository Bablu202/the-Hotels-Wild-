import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export default function useCreateCabin() {
  const queryClient = useQueryClient();
  const { mutate: createCabin, isPending: isCreating } = useMutation({
    //mutationFn: (newCabin) => createCabin(newCabin),
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success("new Cabin is Created");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => toast.error("create *" + err.message),
  });
  return { isCreating, createCabin };
}
