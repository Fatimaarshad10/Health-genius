import { postRequest , getRequest} from "../config/axiosConfig";
import { toast } from "react-toastify";

// Register user
export async function doctorRegister(payload) {
  let result;
  // setLoading(true);
  console.log('payload data' , payload)

  try {
    result = await postRequest("doctor", payload);
    // setLoading(false);
    toast.success(result?.message);
  } catch (error) {
    // setLoading(false);
    toast.error(error?.response?.data?.message);
  }
  return result;
}

//get client
export async function getClient() {
  const result = await getRequest(`doctor`);
  return result;
}



