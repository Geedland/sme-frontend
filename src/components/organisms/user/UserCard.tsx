// ユーザーカードコンポーネント

import { VFC, memo } from 'react';
import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react';

type Props = {
  smeId: string;
  imageUrl: string;
  userName: string;
  age: number;
  liveIn: string;
  sex?: string;
  desc: string;
  onClick: (smeId: string) => void;
}

export const UserCard: VFC<Props> = memo((props) => {
    const { smeId, imageUrl, userName, age, liveIn, sex, desc, onClick } = props;
    return (
      <Flex w="320px" h="400px" align="end" justify="center" _hover={{ cursor: "pointer", opacity: "0.7" }} onClick={() => onClick(smeId)}>
        <Box w="320px" h="320px" bg="white" p="2" borderRadius="10px" shadow="md" justifyContent="bottom">
          <Stack textAlign="center">
            <Image m="auto" mt="-80px" borderRadius="full" boxSize="240px" src={ imageUrl } alt={ userName } />
            <Text pt="2" fontSize="xl" fontWeight="bold">{ userName }</Text>
            <Flex justify="center" align="center">
              <Text mx={3}>{ age }歳</Text>
              <Text mx={3}>{ liveIn }</Text>
            </Flex>
            <Text fontSize="sm" color="gray">{ desc }</Text>
          </Stack>
        </Box>
      </Flex>
    );
});