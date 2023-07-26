import moment from "moment";

export default function EducationSection({
  education,
  index,
  onDataChange,
  deleteTab,
}) {
  return (
    <>
      <div id="education">
        <div className="grid-item">
          <div>
            <label htmlFor="universityName">University/School</label>
          </div>
          <div>
            <input
              name="universityName"
              placeholder="STI-College"
              value={education.universityName}
              type="text"
              onChange={(e) => {
                onDataChange(e, index, "educ");
              }}
              required
            />
          </div>
        </div>
        <div className="grid-item">
          <div>
            <label htmlFor="educationAddress">Address</label>
          </div>
          <div>
            <input
              name="educationAddress"
              placeholder="Bluehomes Executive, Zamboanga City Philippines 7000"
              value={education.educationAddress}
              type="text"
              onChange={(e) => {
                onDataChange(e, index, "educ");
              }}
              required
            />
          </div>
        </div>
        <div className="grid-item">
          <div>
            <label htmlFor="degree">Degree</label>
          </div>
          <div>
            <input
              name="degree"
              placeholder="Bachelor of Science in Information Technology"
              value={education.degree}
              type="text"
              onChange={(e) => {
                onDataChange(e, index, "educ");
              }}
              required
            />
          </div>
        </div>
        <div className="grid-item">
          <div>
            <label htmlFor="from">Start Date</label>
          </div>
          <div>
            <input
              type="date"
              id="start"
              name="from"
              value={education.from}
              min="1996-01-01"
              max={moment().format("YYYY-MM-DD")}
              onChange={(e) => {
                onDataChange(e, index, "educ");
              }}
              required
            ></input>
          </div>
        </div>
        <div className="grid-item">
          <div>
            <label htmlFor="to">End Date</label>
          </div>
          <div>
            <input
              type="date"
              id="end"
              name="to"
              value={education.to}
              min="1996-01-01"
              max={moment().format("YYYY-MM-DD")}
              onChange={(e) => {
                onDataChange(e, index, "educ");
              }}
              required
            ></input>
          </div>
        </div>
        <div className="center">
          <button
            className="delete btn"
            onClick={() => {
              deleteTab(index, "educ");
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
