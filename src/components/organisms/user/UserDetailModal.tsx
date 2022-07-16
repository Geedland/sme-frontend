import { memo, useCallback, VFC } from "react";
import { Flex, Heading, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack, Text } from "@chakra-ui/react"
import { useMessage } from "../../../hooks/useMessage"

import { PrimaryButton } from "../../atoms/button/PrimaryButton"
import { User, UserDetail } from "../../../types/api/user";

type Props = {
  user: UserDetail | null;
  isOpen: boolean;
  onClose: () => void;
}

export const UserDetailModal: VFC<Props> = memo((props) => {
  const {user, isOpen, onClose} = props;
  const { showMessage } = useMessage();
  const judgeSex = (sexId: number | undefined ): string => {
    if(sexId === 1){
      return "男性";
    } else if(sexId === 2) {
      return "女性";
    } else {
      return "不明";
    }
  }
  const onClickLikeButton = useCallback(() => {showMessage({title: "いいねしました!", status: "success"})}, [])
  const onClickDisLikeButton = useCallback(() => {showMessage({title: "あなたの一覧から消し飛ばしました", status: "info"})}, [])
  return(
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
              <Text fontSize="sm" w="50%">{user?.userName}</Text>
            </Flex>
            <Flex>
              <Text fontSize="sm" color="gray" w="50%">年齢</Text>
              <Text fontSize="sm" w="50%">{user?.age}</Text>
            </Flex>
            <Flex>
              <Text fontSize="sm" color="gray" w="50%">性別</Text>
              <Text fontSize="sm" w="50%">{judgeSex(user?.sex)}</Text>
            </Flex>
            <Flex>
              <Text fontSize="sm" color="gray" w="50%">居住地</Text>
              <Text fontSize="sm" w="50%">{`${user?.prefecture.name} ${user?.area.name}`}</Text>
            </Flex>
            <Flex justify="center" align="center">
              <PrimaryButton onclick={onClickLikeButton} mx={2}>いいねする!</PrimaryButton>
              <PrimaryButton onclick={onClickDisLikeButton} bg="gray.400" mx={2}>好みではない</PrimaryButton>
            </Flex>
          </Stack>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  </Modal>
  )
})