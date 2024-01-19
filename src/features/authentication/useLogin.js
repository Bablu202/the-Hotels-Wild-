import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isPending: isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }), //here Login is from page
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      console.log(user.user);
      navigate("/dashboard", { replace: true });
    },
    onError: (err) => {
      console.log("Error -- ", err);
      toast.error("Check email and password again");
    },
  });
  return { login, isLoading };
}
