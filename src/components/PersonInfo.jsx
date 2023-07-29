import exampleImage from "../assets/exampleImage.jpg";

export default function PersonalInfo({ onDataChange, personalInfoData }) {
  if (personalInfoData.image === "") {
    personalInfoData.image = exampleImage;
  }

  return (
    <>
      <div id="personal-info" className="shadow padd">
        <div className="picture pgrid-1">
          <input
            id="image"
            className="btn"
            type="file"
            onChange={(e) => {
              onDataChange(e, 1, "personal");
            }}
          />

          <label htmlFor="image">Upload a Photo</label>
          <img src={personalInfoData.image} alt="face" />
        </div>
        <div className="grid-item pgrid-2">
          <div>
            <label htmlFor="firstName">First Name:</label>
          </div>
          <div>
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
        </div>
        <div className="grid-item pgrid-3">
          <div>
            <label htmlFor="lastName">Last Name:</label>
          </div>
          <div>
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
        </div>
        <div className="grid-item pgrid-4">
          <div>
            <label htmlFor="age">Age</label>
          </div>
          <div>
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
        </div>
        <div className="grid-item pgrid-5">
          <div>
            <label htmlFor="gender">Gender</label>
          </div>
          <div>
            <select
              id="gender"
              value={personalInfoData.gender}
              onChange={(e) => {
                onDataChange(e, 1, "personal");
              }}
              required
            >
              <option value="" disabled="disabled">
                Select Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>
        <div className="grid-item pgrid-6">
          <div>
            <label htmlFor="contactNumber">Contact Number</label>
          </div>
          <div>
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
        </div>
        <div className="grid-item pgrid-7">
          <div>
            <label htmlFor="email">Email</label>
          </div>
          <div>
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
        </div>
        <div className="grid-item pgrid-8">
          <div>
            <label htmlFor="address">Address</label>
          </div>
          <div>
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
        </div>
      </div>
    </>
  );
}
