export default function Preview({ showModal, closeModal, finalCVInfo }) {
  if (!showModal) return null;

  return (
    <>
      <div id="overlay"></div>
      <div id="final">
        <button
          onClick={(e) => {
            closeModal(e);
          }}
        >
          Cancel
        </button>
        <p>{JSON.stringify(finalCVInfo)}</p>
      </div>
    </>
  );
}
