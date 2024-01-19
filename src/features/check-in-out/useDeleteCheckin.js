import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteBooking } from "../../services/apiBookings";

export default function useDeleteCheckin() {
  const queryClient = useQueryClient();
  const { mutate: deleteCheckinData, isPending: isDeletingCheckin } =
    useMutation({
      // mutationFn: (id) => deleteCabin(id),
      mutationFn: deleteBooking,
      onSuccess: () => {
        toast.success("check in data is deleted");
        queryClient.invalidateQueries({ active: true }); //insted  querykeys{ queryKey: ["cabins"] }
      },
      onError: (err) => {
        toast.error(err.message);
      },
    });
  return { deleteCheckinData, isDeletingCheckin };
}
