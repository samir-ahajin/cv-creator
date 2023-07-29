export default function Skills({ skills, index, onDataChange, deleteTab }) {
  return (
    <>
      <div id="skill-list">
        <div className="grid-item">
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

        <div className="grid-item">
          <button
            className="delete "
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
