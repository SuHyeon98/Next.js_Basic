import React from 'react';

type PageProps = {
  params: {
    id: string;
  };
};

const page = ({ params }: PageProps) => {
  const { id } = params;

  // 선수 이름 , 팀, 등 번호 포지션
  const {} = 'select * from player where id: = id';

  return <div>빵 번호 : {id}</div>;
};

export default page;
