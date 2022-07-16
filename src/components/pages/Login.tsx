// ログインページコンポーネント

import { ChangeEvent, memo, useState, VFC, useCallback } from "react";
import { Box, Divider, Flex, Heading, Input, Text, Stack, Link } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";


import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { useAuth } from "../../hooks/useAuth";

export const Login: VFC = memo( () => {
  const {login, loading} = useAuth();
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();

  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => setUserId(e.target.value);
  const onClickLogin = () => (login(userId)); 
  const onClickToSingUpPage = useCallback(() => navigate("/register"), []);

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" boxShadow="md">
        <Heading as="h1" size="lg" textAlign="center">ログイン</Heading>
        <Divider my="4"/>
        <Stack spacing={4} mx={8} mb={2}>
          <Box>
            <Text fontSize="sm">ユーザーID</Text>
            <Input placeholder="ユーザーID" value={userId} onChange={onChangeUserId}/>
          </Box>
          <Box pb={2}>
            <Text fontSize="sm">パスワード</Text>
            <Input placeholder="パスワード" />
          </Box>
          <Divider my="4"/>
          <Box display="flex" justifyContent="end">
            <Text fontSize="sm" color="gray.500">登録がまだの方は<Link color="blue.300" onClick={onClickToSingUpPage}>こちら</Link></Text>
          </Box>
          <PrimaryButton onclick={onClickLogin} disabled={userId === ""} loading={loading} >ログイン</PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  )
})