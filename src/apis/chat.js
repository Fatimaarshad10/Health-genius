import {  postRequest , getRequest } from "../config/axiosConfig";
import { toast } from "react-toastify";

// Register user
export async function chat(payload) {
  let result;
  try {
    result = await postRequest("chat", payload);
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
  return result;
}


//search accounts
export async function allChat(id) {
    const result = await getRequest(`chat/${id}`);
    return result;
  }
