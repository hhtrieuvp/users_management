import React from 'react';
import { Space, Table } from 'antd';

 const MyTable = ({users}) => {

  const columns = [
    {
      title: 'Tên',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Tuổi',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Giới tính',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'Hành động',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Sửa</a>
          <a>Xóa</a>
        </Space>
      )
    }
  ];

  return <Table dataSource={users} columns={columns} />;
};

export default MyTable;
