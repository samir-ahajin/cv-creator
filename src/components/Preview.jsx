export default function Preview({ showModal, closeModal, finalCVInfo }) {
  if (!showModal) return null;

  let personalInfo = finalCVInfo[0];
  const skills = finalCVInfo[1].map((skill) => (
    <li key={skill.id}>{skill.description}</li>
  ));
  const education = finalCVInfo[2].map((educ) => (
    <li key={educ.id} className="space-bottom">
      <ul>
        <li>{educ.universityName}</li>
        <li>{educ.degree}</li>
        <li>{educ.educationAddress}</li>

        <li>{dateToString(educ.from) + " - " + dateToString(educ.to)}</li>
      </ul>
    </li>
  ));
  const experience = finalCVInfo[3].map((exp) => (
    <li key={exp.id} className="space-bottom">
      <ul>
        <li>{exp.companyName}</li>
        <li>{exp.position}</li>
        <li>{exp.experienceAddress}</li>
        <li>{dateToString(exp.from) + " - " + dateToString(exp.to)}</li>

        <li>
          <span>Job Description:</span>
          {" " + exp.experienceDescription}
        </li>
      </ul>
    </li>
  ));
  const trainings = finalCVInfo[4].map((training) => (
    <li key={training.id} className="space-bottom">
      <ul>
        <li>{training.trainingName}</li>
        <li>
          {dateToString(training.from) + " - " + dateToString(training.to)}
        </li>

        <li>{training.trainingDescription}</li>
      </ul>
    </li>
  ));
  return (
    <>
      <div id="modal">
        <div id="overlay"></div>
        <div id="page">
          <div id="buttons">
            <button
              onClick={(e) => {
                closeModal(e);
              }}
            >
              Cancel
            </button>
            <button
              onClick={() => {
                window.print();
              }}
            >
              Print
            </button>
          </div>

          <div className="subpage">
            <div className="upper-side">
              <ul>
                <div>
                  <li className="name">
                    {personalInfo.firstName.toUpperCase() +
                      " " +
                      personalInfo.lastName.toUpperCase()}
                  </li>
                  <li>{personalInfo.email}</li>
                  <li>{personalInfo.contactNumber}</li>
                </div>

                <div>
                  <li>
                    {
                      <img
                        src={personalInfo.image}
                        width="100px"
                        alt="Profile Picture"
                      />
                    }
                  </li>
                </div>
              </ul>
            </div>
            <hr />

            <h1>PERSONAL INFORMATION:</h1>

            <div className="personal-section indentation">
              <ul>
                <li>
                  <span>Gender</span>
                  {": " + personalInfo.gender}
                </li>
                <li>
                  <span>Age</span>
                  {": " + personalInfo.age}
                </li>
                <li>
                  <span>Permanent Address</span>
                  {": " + personalInfo.address}
                </li>
              </ul>
            </div>
            <h1>SKILLS:</h1>

            <div className="skills-section indentation">
              <ul>{skills}</ul>
            </div>
            <h1>EDUCATION:</h1>
            <div className="education-section indentation">
              <ul>{education}</ul>
            </div>
            <h1>WORK EXPERIENCE:</h1>
            <div className="exp-section indentation">
              <ul>{experience}</ul>
            </div>
            <h1>TRAININGS/SEMINARS ATTENDED:</h1>
            <div className="exp-section indentation">
              <ul>{trainings}</ul>
            </div>

            <br />
          </div>
        </div>
      </div>
    </>
  );
}

function dateToString(value) {
  let date = new Date(value);
  const full = date.toLocaleString("default", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  });
  return full;
}
