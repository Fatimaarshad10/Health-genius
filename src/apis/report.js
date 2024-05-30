import { postRequest, getRequest , deleteRequest } from "../config/axiosConfig";
import { toast } from "react-toastify";

// Register report
export async function reportRegister(payload, setLoading) {
  let result;
  setLoading(true);
  try {
    result = await postRequest("report", payload);
    setLoading(false);
    toast.success(result.message);
  } catch (error) {
    setLoading(false);
    toast.error(error?.response?.data?.message);
  }
  return result;
}

//get report
export async function getReport() {
  const result = await getRequest(`report`);
  return result;
}

//delete report
export async function deleteReport(id) {
  const result = await deleteRequest(`report/${id}`);
  return result;
}




