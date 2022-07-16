import { memo, useCallback, VFC } from "react";
import { Box, Center, Flex, Image, Heading, Stack, Text, useDisclosure, Wrap, WrapItem, Divider } from "@chakra-ui/react";

import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { MypageEditModal } from "../organisms/mypage/MypageEditModal";

// ユーザー情報、

type Props = {

}

export const Mypage: VFC<Props> = memo((props) => {
  const {} = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const onClickEditProfileButton = useCallback(() => {onOpen()}, [])
  return (
    <>
      <Box w="100%" h="100%" overflow="hidden" p={{ base: 10, md: 32}}>
        <Flex w="100%" h="100%">
          <Box h="100%" flex="1" p="8">
            <Image m="auto" borderRadius="full" boxSize="300px" src="https://source.unsplash.com/random/600x600" alt="hoge" />
            <Stack>
              <Center my="6">
                <Text fontSize="xl" fontWeight="bold">hoge太郎</Text>
              </Center>
              <Center>
                <PrimaryButton onclick={onClickEditProfileButton} mx={2}>プロフィール編集</PrimaryButton>
              </Center>
            </Stack>
          </Box>
          <Box bg="white" h="100%" flex="2" borderRadius="xl" boxShadow="md">
            <Stack w="80%" mx="auto" my="60px" spacing={6}>
              <Heading as="h2" size="md">詳細情報</Heading>
              <Flex>
                <Text fontSize="sm" color="gray" w="40%">ニックネーム</Text>
                <Text fontSize="sm" w="60%">ピカ中</Text>
              </Flex>
              <Flex>
                <Text fontSize="sm" color="gray" w="40%">年齢</Text>
                <Text fontSize="sm" w="60%">32際</Text>
              </Flex>
              <Flex>
                <Text fontSize="sm" color="gray" w="40%">性別</Text>
                <Text fontSize="sm" w="60%">不明</Text>
              </Flex>
              <Flex>
                <Text fontSize="sm" color="gray" w="40%">居住地</Text>
                <Text fontSize="sm" w="60%">常盤の森</Text>
              </Flex>
              <Divider my="4" />
              <Flex>
                <Text fontSize="sm" color="gray" w="40%">自己紹介</Text>
                <Text fontSize="sm" w="60%">自己紹介ですわ〜自己紹介ですわ〜自己紹介ですわ〜自己紹介ですわ〜自己紹介ですわ〜自己紹介ですわ〜自己紹介ですわ〜</Text>
              </Flex>
            </Stack>
          </Box>
        </Flex>
      </Box>
    <MypageEditModal isOpen={isOpen} onClose={onClose} />
    </>
  );
})