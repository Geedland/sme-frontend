// userオブジェクトの方を指定

// ユーザー一覧
export type User = {
  allCount: number;
  list: UserDetail[];
};

// user詳細
export type UserDetail = {
  smeId: string;
  userName: string;
  sex: number;
  age: number;
  prefecture: {
    id: string;
    name: string;
  };
  area: {
    id: string;
    name: string;
  };
  profileText: string;
};
