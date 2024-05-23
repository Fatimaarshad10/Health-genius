import {  getRequest } from "../config/axiosConfig";


//get client
export async function getNotif(id) {
  const result = await getRequest(`notification/${id}`);
  return result;
}
