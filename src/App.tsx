import { useEffect } from "react";
import { UserEntity } from "./entities/user-entity";
import { AppRouter } from "./routers"
import { setUser } from "./store/auth/auth-slice";
import { useAppDispatch } from "./store/hooks/global-hook"
import { apiV1 } from "./utils/api";
import Cookies from "js-cookie";

function App() {
  const dispatch = useAppDispatch();

  async function checkAuth() {
    const { data } = await apiV1.get<null, { data: UserEntity }>("/auth/check", {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`
      }
    });
    dispatch(setUser(data));
  }

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <>
      <AppRouter />
    </>
  )
}

export default App
