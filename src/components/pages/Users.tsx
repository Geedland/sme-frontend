// ユーザー一覧コンポーネント
import { memo, useCallback, useEffect, VFC } from "react";
import { Box, Center, Flex, Image, Spinner, Stack, Text, useDisclosure, Wrap, WrapItem } from "@chakra-ui/react";

import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import { useSelectUser } from "../../hooks/useSelectUser";
import { UserDetailModal } from "../organisms/user/UserDetailModal";


export const Users: VFC = memo( () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { loading, users, getUsers } = useAllUsers();
  const { selectedUser, onSelectUser } = useSelectUser();
  
  // 初回マウント時に一回だけ呼び出す
  useEffect(() => {
    getUsers();
  }, [])
  
  const onClickUser = useCallback((smeId: string) => {
    onSelectUser({smeId, users, onOpen});
  }, [users, onSelectUser, onOpen]);

  return (
    <>
      {loading ? (
        <Center h='100vh'>
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 8 }} spacing='40px' justify='center'>
          <WrapItem>
            <Flex w="320px" h="400px" align="end" justify="center" _hover={{ cursor: "pointer", opacity: "0.7" }}>
              <Box w="320px" h="320px" bg="white" p="2" borderRadius="10px" shadow="md" justifyContent="bottom">
                <Stack textAlign="center">
                  <Image m="auto" mt="-80px" borderRadius="full" boxSize="240px" src="https://eiga.k-img.com/images/person/91143/9c67fb61c74929e5/320.jpg?1544430675" />
                  <Text pt="2" fontSize="xl" fontWeight="bold">浜辺みなみ</Text>
                  <Flex justify="center" align="center">
                    <Text mx={3}>21歳</Text>
                    <Text mx={3}>東京都</Text>
                  </Flex>
                  <Text fontSize="sm" color="gray">こんにちは、浜辺美波です</Text>
                </Stack>
              </Box>
            </Flex>
          </WrapItem>
          <WrapItem>
            <Flex w="320px" h="400px" align="end" justify="center" _hover={{ cursor: "pointer", opacity: "0.7" }}>
              <Box w="320px" h="320px" bg="white" p="2" borderRadius="10px" shadow="md" justifyContent="bottom">
                <Stack textAlign="center">
                  <Image m="auto" mt="-80px" borderRadius="full" boxSize="240px" src="http://www.littlesoze.com/wp-content/uploads/2013/10/ac6753ad05269a81311b9bb069997050.jpg" />
                  <Text pt="2" fontSize="xl" fontWeight="bold">ファッキン竹城</Text>
                  <Flex justify="center" align="center">
                    <Text mx={3}>100歳</Text>
                    <Text mx={3}>東京都</Text>
                  </Flex>
                  <Text fontSize="sm" color="gray">こんにちは、あき竹城です</Text>
                </Stack>
              </Box>
            </Flex>
          </WrapItem>
        {users.list.map((user) => (
          <WrapItem key={user.smeId}>
            <UserCard
              smeId={user.smeId}
              imageUrl='https://source.unsplash.com/random/600x600'
              userName={user.userName}
              age={user.age}
              liveIn={user.prefecture.name}
              sex={String(user.sex)}
              desc={user.profileText}
              onClick={onClickUser}
            />
          </WrapItem>
          ))
        }
        </Wrap>
      )}
      <UserDetailModal user={selectedUser} isOpen={isOpen} onClose={onClose} />
    </>
  );
});

