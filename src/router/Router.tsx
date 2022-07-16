// routing定義
// react-router-domのv6からSwitch, Routeのexactは使えなくなった
import { memo, VFC } from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "../components/pages/Home";
import { Login } from "../components/pages/Login";
import { Signup } from "../components/pages/Signup";
import { Users } from "../components/pages/Users";
import { Chats } from "../components/pages/Chats";
import { Mypage } from "../components/pages/Mypage";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/templates/HeaderLayout";

export const Router: VFC = memo(() => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Signup />} />
      <Route path="users" element={<HeaderLayout />} >
        <Route index element={<Users />}/>
        <Route path="chats" element={<Chats />}/>
        <Route path="edit" element={<Mypage />}/>
        <Route path="*" element={<Page404 />}/>
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
});