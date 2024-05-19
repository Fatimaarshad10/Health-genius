import { postRequest, getRequest } from "../config/axiosConfig";
import { toast } from "react-toastify";

// Register user
export async function patientRegister(payload ,navigate, setLoading ) {
  let result;
  setLoading(true);
  try {
    result = await postRequest("patient", payload);
    setLoading(false);
    toast.success(result.message);
    navigate('/login')
  } catch (error) {
    setLoading(false);
    toast.error(error?.response?.data?.message);
  }
  return result;
}

//get client
export async function getClient() {
  const result = await getRequest(`patient`);
  return result;
}



