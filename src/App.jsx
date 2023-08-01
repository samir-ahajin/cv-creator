import { useState } from "react";
import { createPortal } from "react-dom";
import PersonalInfoSection from "./components/PersonInfo";
import Skills from "./components/Skills";
import EducationSection from "./components/EducationInfo";
import ExperienceSection from "./components/ExperienceInfo";
import TrainingSection from "./components/Trainings";
import Preview from "./components/Preview";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import exampleImage1 from "./assets/exampleImage1.jpg";

function App() {
  const [showModal, setShowModal] = useState(false);

  const [personalInfoData, setPersonalInfoData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    address: "",
    contactNumber: "",
    email: "",
    image: "",
  });
  const [skillsData, setSkillsData] = useState([
    { id: uuidv4(), description: "" },
  ]);
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
      experienceDescription: "",
    },
  ]);
  const [trainingData, setTrainingData] = useState([
    {
      id: uuidv4(),
      trainingName: "",
      trainingDescription: "",
      from: "2000-01-01",
      to: moment().format("YYYY-MM-DD"),
    },
  ]);
  const [finalCVInfo, setfinalCVInfo] = useState([]);

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
          console.log("hello");
        }
        tmpStorage[e.target.id] = data;
        setPersonalInfoData({ ...tmpStorage });

        break;
      case "skills":
        tmpStorage = [...skillsData];
        tmpStorage[i][e.target.name] = e.target.value;
        setSkillsData(tmpStorage);
        console.log(skillsData);
        break;
      case "educ":
        tmpStorage = [...educationData];
        tmpStorage[i][e.target.name] = e.target.value;
        setEducationData(tmpStorage);

        break;

      case "exp":
        tmpStorage = [...experienceData];
        tmpStorage[i][e.target.name] = e.target.value;
        setExperienceData(tmpStorage);

        break;
      case "training":
        tmpStorage = [...trainingData];
        tmpStorage[i][e.target.name] = e.target.value;
        setTrainingData(tmpStorage);

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
    } else if (tabData === "skills") {
      setSkillsData([...skillsData, { id: uuidv4(), description: "" }]);
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
    } else if (tabData === "training") {
      setTrainingData([
        ...trainingData,
        {
          id: uuidv4(),
          trainingName: "",
          trainingDescription: "",
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
    } else if (dataInfo === "skills") {
      console.log("hello");
      tmpStorage = [...skillsData];
      tmpStorage.splice(i, 1);
      setSkillsData(tmpStorage);
    } else if (dataInfo === "exp") {
      tmpStorage = [...experienceData];
      tmpStorage.splice(i, 1);
      setExperienceData(tmpStorage);
    } else if (dataInfo === "training") {
      tmpStorage = [...trainingData];
      tmpStorage.splice(i, 1);
      setTrainingData(tmpStorage);
    }
  };
  //show the final output data and modal
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.id);
    setfinalCVInfo([
      {
        ...personalInfoData,
      },
      [...skillsData],
      [...educationData],
      [...experienceData],
      [...trainingData],
    ]);
    setShowModal(true);
  };
  //close active modal
  const closeModal = (e) => {
    e.preventDefault();
    setShowModal(false);
  };

  //Add a sample cv
  const generateCV = () => {
    setShowModal(false);

    setPersonalInfoData({
      firstName: "Samir",
      lastName: "ahajin",
      age: "27",
      gender: "Male",
      address: "Bluehomes, Zamora Drive, Cabatangan, Zamboanga City, PH 3000",
      contactNumber: "+639603208784",
      email: "samirahajin@gmail.com",
      image: exampleImage1,
    });
    setSkillsData([
      {
        id: uuidv4(),
        description:
          "Web Design using the following tools: REACT.js, CSS/SaSS, Javascript, and Node.js",
      },
      {
        id: uuidv4(),
        description: "Can create a intermediate 3D Design using Blender",
      },
      { id: uuidv4(), description: "Logo Design using Adobe Illustrator." },
      { id: uuidv4(), description: "Graphic Design using Adobe Phosotoshop" },
    ]);
    setEducationData([
      {
        id: uuidv4(),
        universityName: "STI College-Zamboanga",
        educationAddress: "Gov. Lim Avenue, Zamboanga City",
        degree: "Bachelor of Science in Information Technology",
        from: "2012-04-27",
        to: "2016-04-27",
      },
    ]);
    setExperienceData([
      {
        id: uuidv4(),
        companyName: "Bureau of Customs",
        experienceAddress: "Port of Zamboanga, Zamboanga City",
        position: "Administrative Services Assistant",
        experienceDescription:
          "File management and create a weekly-basis report",
        from: "2020-04-20",
        to: "2020-10-20",
      },
    ]);
    setTrainingData([
      {
        id: uuidv4(),
        trainingName: "TESDA Course Training",
        trainingDescription: "NCII - Computer Hardware Servicing",
        from: "2015-05-06",
        to: "2015-04-20",
      },
      {
        id: uuidv4(),
        trainingName: "TESDA Course Training",
        trainingDescription: "NCIII - 3D Animation",
        from: "2016-04-05",
        to: "2016-10-21",
      },
    ]);
  };

  //RETURN START HERE ! ! !
  return (
    <>
      <div id="main">
        <div>
          <h1 id="title">CV-CREATOR</h1>{" "}
        </div>

        {/*Start of form*/}
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          {/* Personal information section*/}
          <h1>PERSONAL INFORMATION</h1>

          <PersonalInfoSection
            onDataChange={onDataChange}
            personalInfoData={personalInfoData}
          />

          {/* Education section addTab educStorage ondataChange deleteData*/}
          {/*Skills Section*/}
          <div className="header">
            <div>
              <h1>SKILLS</h1>
            </div>
            <div>
              <button
                className="btn add"
                onClick={(e) => {
                  addTab(e, "skills");
                }}
              >
                {" "}
                Add Education Tab
              </button>
            </div>
          </div>

          <div id="skills" className="shadow padd">
            <ul>
              {skillsData.map((skill, index) => (
                <li key={skill.id}>
                  <Skills
                    skills={skill}
                    index={index}
                    onDataChange={onDataChange}
                    deleteTab={deleteTab}
                  />
                </li>
              ))}
            </ul>
          </div>

          {/*Education Section*/}

          <div className="header">
            <div>
              <h1>EDUCATION</h1>
            </div>
            <div>
              <button
                className="btn add"
                onClick={(e) => {
                  addTab(e, "educ");
                }}
              >
                {" "}
                Add Education Tab
              </button>
            </div>
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

          {/* Experience section*/}

          <div className="header">
            <div>
              <h1>EXPERIENCE</h1>
            </div>
            <div>
              <button
                className="btn add"
                onClick={(e) => {
                  addTab(e, "exp");
                }}
              >
                {" "}
                Add Experience Tab
              </button>
            </div>
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

          {/* Training section*/}

          <div className="header">
            <div>
              <h1>TRAINING</h1>
            </div>
            <div>
              <button
                className="btn add"
                onClick={(e) => {
                  addTab(e, "training");
                }}
              >
                {" "}
                Add Training Tab
              </button>
            </div>
          </div>
          <ul>
            {trainingData.map((training, i) => (
              <li key={training.id}>
                <TrainingSection
                  training={training}
                  i={i}
                  onDataChange={onDataChange}
                  deleteTab={deleteTab}
                />
              </li>
            ))}
          </ul>

          {/* Submitting the form after fill up*/}
          <div id="preview">
            <div className="center">
              <button
                className="btn"
                onClick={() => {
                  generateCV();
                }}
                type="button"
              >
                Sample
              </button>
              <button id="show" className="btn" type="submit">
                Preview
              </button>
            </div>
          </div>
        </form>
        {/* End of form*/}

        {/*Modal con*/}
        {showModal &&
          createPortal(
            <Preview
              closeModal={closeModal}
              showModal={showModal}
              finalCVInfo={finalCVInfo}
            />,
            document.body
          )}
      </div>
    </>
  );
}

export default App;
