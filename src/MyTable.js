import React from 'react';
import { Space, Table } from 'antd';

 const MyTable = () => {
  const dataSource = [
    {
      key: '1',
      name: 'John Doe',
      age: 32,
      address: 'New York, USA',
    },
    {
      key: '2',
      name: 'Jane Smith',
      age: 28,
      address: 'London, UK',
    },
    {
      key: '3',
      name: 'Ha Huu Trieu',
      age: 30,
      address: 'Vinh Phuc, VN',
    }
  ];

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
      title: 'Địa chỉ',
      dataIndex: 'address',
      key: 'address',
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

  return <Table dataSource={dataSource} columns={columns} />;
};

export default MyTable;
