import { memo, VFC } from 'react';
import { IconButton } from '@chakra-ui/react';
import { HamburgerIcon } from "@chakra-ui/icons";

type Props = {
    onOpen: () => void;
}

export const MenuIconButton: VFC<Props> = memo((Props) => {
    const {onOpen} = Props;
    return (
        <IconButton 
        aria-label="SPメニューボタン" 
        variant="unstyled" 
        size="sm" 
        display={{ base: "block", md: "none" }} 
        icon={<HamburgerIcon />} 
        onClick={onOpen} 
        />
    );
});