/**
 * 認証周りのカスタムフック
 * apiを叩いて、idがあったら/usersに遷移
 * idがなかったら、ユーザーが見つかりませんを表示
 * 取得に失敗したらログインできませんでしたを表示
 * Loading中はloadingのstateをtrueにして、axios.getが終わったら強制的にfalseにする
 * 
 * @returns login: () => viod, loading: boolean
 */

import { useCallback, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";

import { User } from "../types/api/user";
import { useMessage } from "./useMessage";

export const useAuth = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { showMessage } = useMessage();
  const login = useCallback((id: string) => {
    setLoading(true);
    axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
      if(res.data){
        showMessage({ title: "ログインしました", status: "success" })
        navigate("/users");
      } else {
        showMessage({ title: "ユーザーが見つかりませんでした", status: "error" })
      }
    }).catch(() => showMessage({ title: "ログインできません", status: "error" })).finally(() => setLoading(false));
  }, []);
  return {login, loading};
};