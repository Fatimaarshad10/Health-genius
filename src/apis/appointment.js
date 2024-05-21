import { postRequest, getRequest } from "../config/axiosConfig";
import { toast } from "react-toastify";

// Register user
export async function appointmentRegister(payload, navigate, setLoading) {
  let result;
  setLoading(true);
  try {
    result = await postRequest("appointment", payload);
    setLoading(false);
    toast.success(result.message);
    navigate('/')
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



