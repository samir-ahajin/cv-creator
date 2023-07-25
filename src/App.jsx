import { useState } from "react";
import PersonalInfo from "./components/PersonInfo";
import exampleImage from "./assets/exampleImage.jpg";
import "./App.css";

function App() {
  const [personalInfoData, setPersonalInfoData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    address: "",
    contactNumber: "",
    email: "",
    image: exampleImage,
    description: "",
  });

  const onDataChange = (e, i, dataInfo) => {
    let tmpStorage, data;
    switch (dataInfo) {
      case "personal":
        tmpStorage = personalInfoData;

        if (e.target.files && e.target.files[0]) {
          console.log(e.target.files[0]);
          data = URL.createObjectURL(e.target.files[0]);
        } else {
          data = e.target.value;
        }
        tmpStorage[e.target.id] = data;
        setPersonalInfoData({ ...tmpStorage });

        break;

      default:
        break;
    }
  };

  return (
    <>
      <form action="">
        {/* Personal information section*/}
        <PersonalInfo
          onDataChange={onDataChange}
          personalInfoData={personalInfoData}
        />
        <hr />
      </form>
    </>
  );
}

export default App;
