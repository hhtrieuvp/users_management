import React from "react";
import { DatePicker } from "antd";
import { Select, Input } from "antd";

const CreatUsser = ({ inputData, handleInputChange, roles }) => {
  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <Input
          type="number"
          placeholder="User ID *"
          value={inputData.id || ""}
          onChange={(e) => handleInputChange(e, "id")}
        />
      </div>
      <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <Input
          type="text"
          placeholder="First Name *"
          value={inputData.firstName || ""}
          onChange={(e) => handleInputChange(e, "firstName")}
        />
        <Input
          type="text"
          placeholder="Last Name *"
          value={inputData.lastName || ""}
          onChange={(e) => handleInputChange(e, "lastName")}
        />
      </div>
      <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <Input
          type="email"
          placeholder="Email ID *"
          value={inputData.email || ""}
          onChange={(e) => handleInputChange(e, "email")}
        />
        <Input
          type="text"
          placeholder="Mobile No"
          value={inputData.phone || ""}
          onChange={(e) => handleInputChange(e, "phone")}
        />
        <Select
          style={{width: "500px"}}
          placeholder="Select Role Type"
          value={inputData.role || "1"}
          // defaultValue="1"
          onChange={(e) => handleInputChange(e, "role")}
          options={roles}
        />
      </div>
      <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <Input
          type="text"
          placeholder="Username *"
          value={inputData.userName || ""}
          onChange={(e) => handleInputChange(e, "userName")}
        />
        <Input
          type="text"
          placeholder="Password *"
          value={inputData.passWord || ""}
          onChange={(e) => handleInputChange(e, "passWord")}
        />
        <Input
          type="text"
          placeholder="Confirm Password *"
          value={inputData.confirmPassword || ""}
          onChange={(e) => handleInputChange(e, "confirmPassword")}
        />
      </div>
      <DatePicker 
          value={inputData.createDate || ""}
          onChange={(e) => handleInputChange(e, "createDate")}

      />
    </div>
  );
};

export default CreatUsser;
