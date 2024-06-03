import { useSelector } from "react-redux";
import { selectToken, selectUser } from "../store/selectors";

export default function useAuth() {
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);

  return {
    token: token,
    path: "/login",
    user: user,
  };
}
