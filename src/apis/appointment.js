import { postRequest, getRequest } from "../config/axiosConfig";
import { toast } from "react-toastify";

// Register user
export async function appointmentRegister(payload, setLoading) {
  let result;
  setLoading(true);
  try {
    result = await postRequest("payment", payload);
    window.location.href = result;
    setLoading(false);
    toast.success(result.message);
  } catch (error) {
    setLoading(false);
    toast.error(error?.response?.data?.message);
  }
  return result;
}

//get client
export async function getAppointment() {
  const result = await getRequest(`appointment`);
  return result;
}



