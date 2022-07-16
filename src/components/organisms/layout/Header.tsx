// ヘッダーコンポーネント
import { memo, useCallback, VFC } from "react";
import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";

// useHistoryはreact-router-dom:v6からuseNavigateにreplaced
import { useNavigate } from "react-router-dom";

// <Outlet>の挙動はネストされたコンポーネントがわたってくる

export const Header: VFC = memo( () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const onClickToUsers = useCallback(() => navigate("/users"), []);
  const onClickToChats = useCallback(() => navigate("/users/chats"), []);
  const onClickToEdit = useCallback(() => navigate("/users/edit"), []);
  return (
    <>
      <Flex as="nav" bg="teal.500" color="gray.50" align="center" justify="space-between" padding="3">
        <Heading as="h1" px={4}>sme</Heading>
        <Flex px={4} align="center" fontSize="sm" flexGrow={2} display={{ base: "none", md: "flex" }}>
          <Box>
            <Link pr={4} onClick={onClickToUsers} >ユーザー一覧</Link>
          </Box>
            <Link pr={4} onClick={onClickToChats}>チャットルーム</Link>
          <Link onClick={onClickToEdit}>ユーザー設定</Link>
        </Flex>
        <MenuIconButton onOpen={onOpen}/>
      </Flex>
      <MenuDrawer isOpen={isOpen} onClose={onClose} onClickToUsers={onClickToUsers} onClickToChats={onClickToChats}/>
    </>
  );
})