import { memo, VFC } from "react";
import { Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay } from "@chakra-ui/react";

type Props = {
    isOpen: boolean,
    onClose: () => void,
    onClickToUsers: () => void,
    onClickToChats: () => void
    // onClickToEdit: () => void,
}

export const MenuDrawer: VFC<Props> = memo((props) => {
    const {isOpen, onClose, onClickToUsers, onClickToChats} = props;
    return(
        <Drawer placement="right" size="xs" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody p={0}>
              <Button w="100%" bg="white" onClick={ () => {onClickToUsers(); onClose();}}>ユーザー一覧</Button>
              <Button w="100%" bg="white" onClick={ () => {onClickToChats(); onClose();}}>チャットルーム</Button>
              {/* <Button w="100%" bg="white">ユーザー設定</Button> */}
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
});