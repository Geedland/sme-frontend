// ルートコンポーネント
import { Image, Stack, Box, Flex, VStack, Spacer } from "@chakra-ui/react";
import { memo, VFC, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { PrimaryButton } from "../atoms/button/PrimaryButton";

export const Home: VFC = memo( () => {
  const navigate = useNavigate();
  const onClickToLoginPage = useCallback(() => navigate("/login"), []);
  const onClickToSignUpPage = useCallback(() => navigate("/register"), []);
  return (
    <>
      <Flex justifyContent="space-between" m="20">
        <Box>
          <Image src="../../main-visual.png" alt="mv" />
        </Box>
        <Flex direction="column" my={20}>
          <Image src="../../no1.png" alt="no1" />
          <Spacer />
          <Stack spacing={6}>
            <PrimaryButton bg="red.400" onclick={onClickToSignUpPage}>アカウント新規作成</PrimaryButton>
            <PrimaryButton bg="teal.400" onclick={onClickToLoginPage}>ログイン</PrimaryButton>
          </Stack>
        </Flex>
      </Flex>
    </>
  );
});