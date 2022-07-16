import { VFC, memo } from "react";
import { Flex, Heading, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack, Text } from "@chakra-ui/react"

import { PrimaryButton } from "../../atoms/button/PrimaryButton";


type Props = {
  isOpen: boolean;
  onClose: () => void;
}

export const MypageEditModal: VFC<Props> = memo((props) => {
  const {isOpen, onClose} = props;
  return (
    <Modal size="xl" isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset="scale" >
    <ModalOverlay>
      <ModalContent pb={8} mx={8}>
        <ModalCloseButton></ModalCloseButton>
        <ModalHeader mx="auto">プロフィール</ModalHeader>
        <ModalBody mx={4}>
          <Image w="100%" src="https://source.unsplash.com/random/600x600" />
          <Stack w="80%" mx="auto" my="30px" spacing={6}>
            <Heading as="h2" size="md">詳細情報</Heading>
            <Flex>
              <Text fontSize="sm" color="gray" w="50%">ニックネーム</Text>
              <Text fontSize="sm" w="50%">hoge</Text>
            </Flex>
            <Flex>
              <Text fontSize="sm" color="gray" w="50%">年齢</Text>
              <Text fontSize="sm" w="50%">hgoe</Text>
            </Flex>
            <Flex>
              <Text fontSize="sm" color="gray" w="50%">性別</Text>
              <Text fontSize="sm" w="50%">hgoe</Text>
            </Flex>
            <Flex>
              <Text fontSize="sm" color="gray" w="50%">居住地</Text>
              <Text fontSize="sm" w="50%">hoge</Text>
            </Flex>
            <Flex justify="center" align="center">
              <PrimaryButton onclick={() => console.log("hoge")} mx={2}>保存</PrimaryButton>
            </Flex>
          </Stack>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  </Modal>
  );
})