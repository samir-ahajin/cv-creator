import moment from "moment";

export default function ExperienceSection({
  experience,
  i,
  onDataChange,
  deleteTab,
}) {
  return (
    <>
      <div className="grid-con">
        <div className="grid-item">
          <label htmlFor="companyName">Company Name:</label>
        </div>
        <div className="grid-item">
          <input
            name="companyName"
            placeholder="SM Mall of Asia"
            value={experience.companyName}
            type="text"
            onChange={(e) => {
              onDataChange(e, i, "exp");
            }}
            required
          />
        </div>
      </div>
      <div>
        <label htmlFor="experienceAddress">Address:</label>
        <input
          name="experienceAddress"
          placeholder="Manila City Philippines 7000"
          value={experience.experienceAddress}
          type="text"
          onChange={(e) => {
            onDataChange(e, i, "exp");
          }}
          required
        />
      </div>
      <div>
        <label htmlFor="position">Position:</label>
        <input
          name="position"
          placeholder="Manager"
          value={experience.position}
          type="text"
          onChange={(e) => {
            onDataChange(e, i, "exp");
          }}
          required
        />
      </div>
      <div>
        <label htmlFor="from">Start Date:</label>
        <input
          type="date"
          id="start"
          name="from"
          value={experience.from}
          min="1996-01-01"
          max={moment().format("YYYY-MM-DD")}
          onChange={(e) => {
            onDataChange(e, i, "exp");
          }}
          required
        ></input>
      </div>
      <div>
        <label htmlFor="to">End Date:</label>
        <input
          type="date"
          id="end"
          name="to"
          value={experience.to}
          min="1996-01-01"
          max={moment().format("YYYY-MM-DD")}
          onChange={(e) => {
            onDataChange(e, i, "exp");
          }}
          required
        ></input>
      </div>
      <div>
        <button
          className="btn"
          onClick={() => {
            deleteTab(i, "exp");
          }}
        >
          Delete
        </button>
      </div>
      <br />
    </>
  );
}
