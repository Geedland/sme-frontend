// ヘッダーレイアウトコンポーネント
import { memo, VFC } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../organisms/layout/Header";

// Headerとネストされたコンポーネントが表示されるだけレイアウト用コンポーネント
export const HeaderLayout: VFC = memo( () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
})