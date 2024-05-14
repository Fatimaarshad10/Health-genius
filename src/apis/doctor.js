import { postRequest } from "../config/axiosConfig";
import { toast } from "react-toastify";

// Register user
export async function doctorRegister(payload, navigate, setLoading) {
  let result;
  setLoading(true);
  try {
    result = await postRequest("/doctor", payload);
    setLoading(false);
    toast.success(result?.message);
    navigate("/login");
  } catch (error) {
    setLoading(false);
    toast.error(error?.response?.data?.message);
  }
  return result;
}





