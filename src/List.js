import { useEffect, useState } from "react";
import MyTable from "./MyTable";

export const List = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [inputData, setInputData] = useState({});
  const ENT_POINT = "http://localhost:8000/user";

  useEffect(() => {
    // Call API
    const fetchData = async () => {
      try {
        const response = await fetch(ENT_POINT);
        const data = await response.json();
        setUsers(data);
        setLoading(false); // Đã tải xong dữ liệu
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, [inputData]);

  const handleInputChange = (event, field) => {
    console.log({ event, field });
    const inputClone = { ...inputData };
    inputClone[field] = event.target.value;
    setInputData(inputClone);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(ENT_POINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...inputData }),
        // body: JSON.stringify({ data: inputData }),
      });
      const result = await response.json();
      const inputClone = { ...inputData };
      inputClone.status = !inputClone.status;
      setInputData(inputClone);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div style={{ margin: "0 auto" }}>
      <input
        type="text"
        id="myInput"
        placeholder="Nhập thứ tự"
        value={inputData.id}
        onChange={(e) => handleInputChange(e, "id")}
      />
      <input
        type="text"
        id="myInput"
        placeholder="Nhập tên người dùng"
        value={inputData.name}
        onChange={(e) => handleInputChange(e, "name")}
      />
      <input
        type="text"
        id="myInput"
        placeholder="Nhập Tuổi"
        value={inputData.age}
        onChange={(e) => handleInputChange(e, "age")}
      />
      <input
        type="text"
        id="myInput"
        placeholder="Nhập giới tính"
        value={inputData.gender}
        onChange={(e) => handleInputChange(e, "gender")}
      />
      <button id="submitButton" onClick={handleSubmit}>
        Gửi
      </button>
      {loading ? <p>Loading...</p> : <MyTable users={users} />}
    </div>
  );
};
