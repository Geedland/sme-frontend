// メインのボタンコンポーネント
// ボタンの子要素、クリック語の処理、非活性、ローディングを受け取る

import { memo, ReactNode, VFC } from 'react';
import { Button } from '@chakra-ui/react';

type Props = {
    children: ReactNode;
    onclick: () => void;
    disabled?: boolean;
    loading?: boolean;
    bg?: string;
    mx?: number;
}

export const PrimaryButton: VFC<Props> = memo((props) => {
    const { children, onclick, disabled = false, loading = false, bg="teal.400", mx=0 } = props;
    return (
        <Button bg={bg} color="white" _hover={{opacity: 0.8}} onClick={onclick} disabled={disabled} isLoading={loading} mx={mx}>{children}</Button>
    );
});