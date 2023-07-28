import { months } from "moment/moment";

export default function Preview({ showModal, closeModal, finalCVInfo }) {
  if (!showModal) return null;

  let personalInfo = finalCVInfo[0];
  const skills = finalCVInfo[1].map((skill) => (
    <li key={skill.id}>-{" " + skill.description}</li>
  ));
  const education = finalCVInfo[2].map((educ) => (
    <li key={educ.id}>
      <ul>
        <li>{educ.universityName}</li>
        <li>{educ.degree}</li>
        <li>{educ.educationAddress}</li>

        <li>{dateToString(educ.from) + " - " + dateToString(educ.to)}</li>
      </ul>
    </li>
  ));
  const experience = finalCVInfo[3].map((exp) => (
    <li key={exp.id}>
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
            <div>
              <ul>
                <li>
                  {personalInfo.firstName.toUpperCase() +
                    " " +
                    personalInfo.lastName.toUpperCase()}
                </li>
                <li>{personalInfo.email}</li>
                <li>{personalInfo.contactNumber}</li>

                <li>
                  {
                    <img
                      src={personalInfo.image}
                      width="100px"
                      alt="Profile Picture"
                    />
                  }
                </li>
              </ul>
              <hr />

              <h1>PERSONAL INFORMATION:</h1>
              <ul>
                <li>
                  <span>Gender:</span>
                  {" " + personalInfo.gender}
                </li>
                <li>
                  <span>Age:</span>
                  {" " + personalInfo.age}
                </li>
                <li>
                  <span>Permanent Address:</span>
                  {" " + personalInfo.address}
                </li>
              </ul>
              <h1>SKILLS:</h1>
              <ul>{skills}</ul>
              <h1>EDUCATION:</h1>
              <ul>{education}</ul>
              <h1>EXPERIENCE:</h1>
              <ul>{experience}</ul>
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
