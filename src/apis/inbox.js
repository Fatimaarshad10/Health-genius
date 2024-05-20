import {   getRequest } from "../config/axiosConfig";




//search accounts
export async function allInbox(id) {
    const result = await getRequest(`inbox/${id}`);
    return result;
  }
