import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { login as loginApi } from "../../services/apiAuth";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      // Store user data directly in React Query cache for instant access
      queryClient.setQueryData(["user"], user.user);
      
      toast.success("Successfully logged in");
      
      // Redirect to dashboard (replace: true prevents back-button loop)
      navigate("/", { replace: true });
    },
    onError: (err) => {
      console.error("Login Error:", err);
      toast.error(err.message || "Provided email or password is incorrect");
    },
  });

  return { login, isLoading };
}