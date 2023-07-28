export default function Skills({ skills, index, onDataChange, deleteTab }) {
  return (
    <>
      <div id="skills" className="padd">
        <div className="grid-item">
          <div>
            <label htmlFor={"description"}>Skill</label>
          </div>
          <div>
            <input
              name={"description"}
              placeholder="Web design"
              value={skills.description}
              type="text"
              onChange={(e) => {
                onDataChange(e, index, "skills");
              }}
              required
            />
          </div>
        </div>
        <div className="center">
          <button
            className="delete btn"
            onClick={() => {
              deleteTab(index, "skills");
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
