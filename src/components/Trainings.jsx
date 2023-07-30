import moment from "moment/moment";
export default function TrainingSection({
  training,
  i,
  onDataChange,
  deleteTab,
}) {
  return (
    <>
      <div className="training shadow padd">
        <div className="grid-item">
          <div>
            <label htmlFor="trainingName">Company Name</label>
          </div>
          <div>
            <input
              name="trainingName"
              placeholder="TESDA Training Course"
              value={training.trainingName}
              type="text"
              onChange={(e) => {
                onDataChange(e, i, "training");
              }}
              required
            />
          </div>
        </div>

        <div className="grid-item ">
          <div>
            <label htmlFor="trainingDescription">Description</label>
          </div>
          <div>
            <textarea
              name="trainingDescription"
              placeholder="Brief Description of Training"
              value={training.trainingDescription}
              rows={3}
              cols={50}
              onChange={(e) => {
                onDataChange(e, i, "training");
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
              name="from"
              value={training.from}
              min="1996-01-01"
              max={moment().format("YYYY-MM-DD")}
              onChange={(e) => {
                onDataChange(e, i, "training");
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
              name="to"
              value={training.to}
              min="1996-01-01"
              max={moment().format("YYYY-MM-DD")}
              onChange={(e) => {
                onDataChange(e, i, "training");
              }}
              required
            ></input>
          </div>
        </div>

        <div className="center">
          <button
            className="delete"
            onClick={() => {
              deleteTab(i, "training");
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
