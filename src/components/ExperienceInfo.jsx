import moment from "moment";

export default function ExperienceSection({
  experience,
  i,
  onDataChange,
  deleteTab,
}) {
  return (
    <>
      <div className="experience shadow padd">
        <div className="grid-item">
          <div>
            <label htmlFor="companyName">Company Name</label>
          </div>
          <div>
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
        <div className="grid-item">
          <div>
            <label htmlFor="experienceAddress">Address</label>
          </div>
          <div>
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
        </div>
        <div className="grid-item">
          <div>
            <label htmlFor="position">Position</label>
          </div>
          <div>
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
        </div>
        <div className="grid-item ">
          <div>
            <label htmlFor="experienceDescription">Description</label>
          </div>
          <div>
            <textarea
              name="experienceDescription"
              placeholder="Brief Description of Job"
              value={experience.experienceDescription}
              rows={3}
              cols={50}
              onChange={(e) => {
                onDataChange(e, i, "exp");
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
              value={experience.from}
              min="1996-01-01"
              max={moment().format("YYYY-MM-DD")}
              onChange={(e) => {
                onDataChange(e, i, "exp");
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
              value={experience.to}
              min="1996-01-01"
              max={moment().format("YYYY-MM-DD")}
              onChange={(e) => {
                onDataChange(e, i, "exp");
              }}
              required
            ></input>
          </div>
        </div>
        <div className="center">
          <button
            className="delete"
            onClick={() => {
              deleteTab(i, "exp");
            }}
          >
            Delete
          </button>
        </div>
        <br />
      </div>
    </>
  );
}
