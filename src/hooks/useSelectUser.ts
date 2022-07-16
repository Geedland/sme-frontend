import { useCallback, useState } from "react"
import { User } from "../types/api/user"
import { UserDetail } from "../types/api/user"

/**
 * 
 * クリックされたユーザーをidをもとに取得、一致したユーザーの情報を返すカスタムフック
 * ついでにonOpenでモーダルも表示しとこ
 * 
 * @params {number} id
 * @params {Array<User>} users
 * @params {() => void} onOpen
 * @returns { object } selectedUser, onSelectUser
 */

type Props = {
  smeId: string;
  users: User;
  onOpen: () => void;
}

export const useSelectUser = () => {
  const [ selectedUser, setSelectedUser ] = useState< UserDetail | null >(null);

  const onSelectUser = useCallback((props: Props) => {
    const {smeId, users, onOpen} = props;
    // よくわからんから一旦anyでお願いします
    const targetUser =users.list.find( user => user.smeId === smeId);
    // console.log(targetUser);
    setSelectedUser(targetUser!);
    onOpen();
  }, []);

  return { selectedUser, onSelectUser };
};