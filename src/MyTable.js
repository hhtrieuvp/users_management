import React from "react";
import { Space, Table, Tag } from "antd";

const MyTable = ({ users, onEdit, onDelete, roles }) => {
  // Nhận các props từ component cha
  console.log("roles", roles);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Create Date",
      dataIndex: "createDate",
      key: "createDate",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      render: (_, record) => {
        const role = roles.find((role) => role.value === record.role)
        return <Tag color={role?.color}>{role?.label}</Tag>;
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => onEdit(record)}>Edit</a>{" "}
          {/* Sử dụng props onEdit */}
          <a onClick={() => onDelete(record)}>Delete</a>{" "}
          {/* Sử dụng props onDelete */}
        </Space>
      ),
    },
  ];

  return <Table dataSource={users} columns={columns} />;
};

export default MyTable;
