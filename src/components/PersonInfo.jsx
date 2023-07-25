let tmpImg;
export default function PersonalInfo({ onDataChange, personalInfoData }) {
  if (personalInfoData.image !== "") {
    tmpImg = personalInfoData.image;
  }
  if (personalInfoData.image === "") {
    personalInfoData.image = tmpImg;
  }

  return (
    <>
      <h1>Personal Information</h1>
      <div id="personal-info">
        <div>
          <input
            id="image"
            className="btn"
            type="file"
            onChange={(e) => {
              onDataChange(e, 1, "personal");
            }}
            required
          />
          <label htmlFor="image">Upload a Photo:</label>
          <img src={personalInfoData.image} width="50px" alt="face" />
        </div>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            id="firstName"
            placeholder="Samir"
            value={personalInfoData.firstName}
            type="text"
            onChange={(e) => {
              onDataChange(e, 1, "personal");
            }}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            id="lastName"
            placeholder="Ahajin"
            value={personalInfoData.lastName}
            type="text"
            onChange={(e) => {
              onDataChange(e, 1, "personal");
            }}
            required
          />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input
            id="age"
            placeholder="18"
            value={personalInfoData.age}
            type="number"
            min="18"
            onChange={(e) => {
              onDataChange(e, 1, "personal");
            }}
            required
          />
        </div>

        <div>
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            value={personalInfoData.gender}
            onChange={(e) => {
              onDataChange(e, 1, "personal");
            }}
            required
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            id="address"
            placeholder="Bluehomes, Zamora Drive, Cabatangan, Zamboanga City PH 3000"
            value={personalInfoData.address}
            type="text"
            onChange={(e) => {
              onDataChange(e, 1, "personal");
            }}
            required
          />
        </div>
        <div>
          <label htmlFor="contactNumber">Contact Number</label>
          <input
            id="contactNumber"
            placeholder="09123456789"
            value={personalInfoData.contactNumber}
            type="text"
            onChange={(e) => {
              onDataChange(e, 1, "personal");
            }}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            placeholder="samirahajin@gmail.com"
            value={personalInfoData.email}
            type="email"
            onChange={(e) => {
              onDataChange(e, 1, "personal");
            }}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            placeholder="Objective / About Yourself . . . "
            value={personalInfoData.description}
            rows={6}
            cols={50}
            onChange={(e) => {
              onDataChange(e, 1, "personal");
            }}
            required
          />
        </div>
      </div>
    </>
  );
}
