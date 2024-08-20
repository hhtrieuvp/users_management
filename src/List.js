import { useEffect, useState } from "react";
import MyTable from "./MyTable";
import CreatUser from "./CreatUsers";
import SubmitButton from "./SubmitButton";
import { Color } from "antd/es/color-picker";

export const List = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [inputData, setInputData] = useState({});
  const [isCreate, setIsCreate] = useState(true)
  const ENT_POINT = "http://localhost:8000/user";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(ENT_POINT);
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, [inputData]);

  const handleInputChange = (event, field) => {
    console.log("ok",event,field)
    const inputClone = { ...inputData };
    if (field == "createDate" || field == "role") {
    inputClone[field] = event;
    } else {
      inputClone[field] = event.target.value;
    }
    setInputData(inputClone);
  };

  const handleSubmit = async (isCreate) => {
    try {
      console.log({inputData, isCreate})
      const response = await fetch(`${ENT_POINT}/${isCreate ? "" : `${inputData.id}`}`, {
        method: `${isCreate ? "POST" : "PUT"}`,
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify({ ...inputData }),
      });
      const result = await response.json();
      setInputData({});
      if (!isCreate) setIsCreate(true)
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleEditUser = (user) => {
    setInputData(user)
    setIsCreate(oldState => !oldState)
  };

  const handleDeleteUser = async (user) => {
    try {
      const response = await fetch(`${ENT_POINT}/${user.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      setInputData({});
    } catch (error) {
      console.error("Error:", error);
    }
  
  };

  let roles = [
    {
      value: '1',
      label: 'Admin',
      color: 'red'
    },
    {
      value: '2',
      label: 'Super Admin',
      color: 'yellow'
    },
    {
      value: '3',
      label: 'HR Admin',
      color: 'green'
    },
  ]
  return (
    <div style={{ margin: "0 auto" }}>
      <CreatUser inputData={inputData} handleInputChange={handleInputChange} roles={roles}/>
      <SubmitButton handleSubmit={handleSubmit} isCreate={isCreate}/>
      {loading ? <p>Loading...</p> : (
        <MyTable 
          roles={roles}
          users={users} 
          onEdit={handleEditUser} 
          onDelete={handleDeleteUser} 
        />
      )}
    </div>
  );
};
