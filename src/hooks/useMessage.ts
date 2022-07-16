/**
 * ログイン完了後やエラーの際にポップアップでメッセージを表示するためのカスタムフック
 * propsとして受け取るのはmessage内容とstatus
 * 
 * @return showMessage: () => viod;
 */

import { useToast } from "@chakra-ui/react";
import { useCallback } from "react";

type Props = {
  title: string;
  status: "info" | "warning" | "success" | "error";
}

export const useMessage =  () => {
  const toast = useToast();
  const showMessage = useCallback((props: Props) => {
    const {title, status} = props;
    toast({
      title,
      status,
      position: "bottom",
      duration: 2500,
      isClosable: true,
      })
  }, []);
  return {showMessage};
}