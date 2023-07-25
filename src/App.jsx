import { useState } from "react";
import PersonalInfoSection from "./components/PersonInfo";
import EducationSection from "./components/EducationInfo";
import ExperienceSection from "./components/ExperienceInfo";
import exampleImage from "./assets/exampleImage.jpg";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
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
  const [educationData, setEducationData] = useState([
    {
      id: uuidv4(),
      universityName: "",
      educationAddress: "",
      degree: "",
      from: "2000-01-01",
      to: moment().format("YYYY-MM-DD"),
    },
  ]);

  const [experienceData, setExperienceData] = useState([
    {
      id: uuidv4(),
      companyName: "",
      experienceAddress: "",
      position: "",
      from: "2000-01-01",
      to: moment().format("YYYY-MM-DD"),
    },
  ]);

  //updating the personal,education or experience info
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

      case "educ":
        tmpStorage = [...educationData];
        tmpStorage[i][e.target.name] = e.target.value;
        setEducationData(tmpStorage);
        console.log(educationData);
        break;

      case "exp":
        tmpStorage = [...experienceData];
        tmpStorage[i][e.target.name] = e.target.value;
        setExperienceData(tmpStorage);
        console.log(experienceData);
        break;
      default:
        break;
    }
  };
  //insert another input tab for education or experience
  let addTab = (e, tabData) => {
    e.preventDefault();

    if (tabData === "educ") {
      setEducationData([
        ...educationData,
        {
          id: uuidv4(),
          universityName: "",
          educationAddress: "",
          degree: "",
          from: "2000-01-01",
          to: moment().format("YYYY-MM-DD"),
        },
      ]);
    } else if (tabData === "exp") {
      setExperienceData([
        ...experienceData,
        {
          id: uuidv4(),
          companyName: "",
          experienceAddress: "",
          position: "",
          from: "2000-01-01",
          to: moment().format("YYYY-MM-DD"),
        },
      ]);
    }
  };
  //Deletes data from either of education or experience tab
  const deleteTab = (i, dataInfo) => {
    let tmpStorage;
    if (dataInfo === "educ") {
      tmpStorage = [...educationData];
      tmpStorage.splice(i, 1);
      setEducationData(tmpStorage);
    } else if (dataInfo === "exp") {
      tmpStorage = [...experienceData];
      tmpStorage.splice(i, 1);
      setExperienceData(tmpStorage);
    }
  };

  return (
    <>
      <form action="">
        {/* Personal information section*/}
        <PersonalInfoSection
          onDataChange={onDataChange}
          personalInfoData={personalInfoData}
        />
        <hr />
        {/* Education section addTab educStorage ondataChange deleteData*/}
        <h1>Education</h1>
        <div>
          <button
            className="btn"
            onClick={(e) => {
              addTab(e, "educ");
            }}
          >
            {" "}
            Add Education
          </button>
        </div>
        <ul>
          {educationData.map((education, index) => (
            <li key={education.id}>
              <EducationSection
                education={education}
                index={index}
                onDataChange={onDataChange}
                deleteTab={deleteTab}
              />
            </li>
          ))}
        </ul>
        <hr />
        {/* Experience section*/}
        <h1>Experience</h1>
        <div>
          <button
            className="btn"
            onClick={(e) => {
              addTab(e, "exp");
            }}
          >
            {" "}
            Add Experience
          </button>
        </div>
        <ul>
          {experienceData.map((experience, i) => (
            <li key={experience.id}>
              <ExperienceSection
                experience={experience}
                i={i}
                onDataChange={onDataChange}
                deleteTab={deleteTab}
              />
            </li>
          ))}
        </ul>
      </form>
    </>
  );
}

export default App;
