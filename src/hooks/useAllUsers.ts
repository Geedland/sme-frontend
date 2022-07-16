/**
 * apiを叩いて全てのユーザーを取得するカスタムフック
 *
 */

import { useCallback, useState } from 'react';
import axios from 'axios';

import { User } from '../types/api/user';
import { useMessage } from './useMessage';

export const useAllUsers = () => {
  const { showMessage } = useMessage();

  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<User>({ allCount: 0, list: [] });

  console.log('env', process.env.REACT_APP_BASE_URL);
  const $axios = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
  });

  // 一覧取得API
  const getUsers = useCallback(async () => {
    setLoading(true);
    // const response = await axios.get<User>('http://localhost:3001/api/users');

    const response = await $axios.get<User>('/users');
    setUsers(response.data);
    if (response.status !== 200) {
      console.log('失敗');
    }

    setLoading(false);
  }, []);

  return { loading, users, getUsers };
};
