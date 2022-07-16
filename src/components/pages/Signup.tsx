// ユーザー登録ページコンポーネント

import { memo, VFC, useState, useCallback } from "react";
import { Box, Button, Divider, Flex, Heading, Input, Stack, Text, Radio, RadioGroup, Link } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";


export const Signup: VFC = memo( () => {
  const [radioValue, setRadioValue] = useState('1');
  const navigate = useNavigate();
  const onClickToLoginPage = useCallback(() => navigate("/login"), []);

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="xl" boxShadow="md">
        <Heading as="h1" size="lg" textAlign="center">ユーザー登録</Heading>
        <Divider my="4"/>
        <Stack spacing={4} mx={8}>
          <Box>
            <Text fontSize="sm">Eメール</Text>
            <Input placeholder="メールアドレス" />
          </Box>
          <Box>
            <Text fontSize="sm">パスワード</Text>
            <Input placeholder="パスワード" />
          </Box>
          <Box>
            <Text fontSize="sm">ユーザーID</Text>
            <Input placeholder="ユーザーID" />
          </Box>
          <Box>
            <Text fontSize="sm">ニックネーム</Text>
            <Input placeholder="ニックネーム" />
          </Box>
          <Box>
            <Text fontSize="sm">性別</Text>
            <RadioGroup onChange={setRadioValue} value={radioValue}>
              <Stack direction='row'>
                <Radio value='1'>男性</Radio>
                <Radio value='2'>女性</Radio>
                <Radio value='3'>不明</Radio>
              </Stack>
            </RadioGroup>
          </Box>
          <Box>
            <Text fontSize="sm" color="gray.500">アカウントの作成で利用規約に同意したことになります。</Text>
          </Box>
          <Divider my="4"/>
          <Box display="flex" justifyContent="end">
            <Text fontSize="sm" color="gray.500">ログインは<Link color="blue.300" onClick={onClickToLoginPage}>こちら</Link></Text>
          </Box>
          <Button bg="teal.400" color="white" _hover={{opacity: 0.8}}>登録</Button>
        </Stack>
      </Box>
    </Flex>
  );
})