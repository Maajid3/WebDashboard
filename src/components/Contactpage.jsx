import contactprofile from "../assets/contactprofile.svg";
import "./contact.css";

export default function Contact() {
  const contactData = [
    {
      id: 1,
      userName: "Santosh Sharma",
      phone: "+91 9876543210",
      place: "Hyderabad",
      email: "sshatmal123@kcoverseas.com",
    },
    {
      id: 2,
      userName: "Santosh Sharma",
      phone: "+91 9876543210",
      place: "Hyderabad",
      email: "sshatmal123@kcoverseas.com",
    },
    {
      id: 3,
      userName: "Santosh Sharma",
      phone: "+91 9876543210",
      place: "Hyderabad",
      email: "sshatmal123@kcoverseas.com",
    },
  ];

  return (
    <div className="contact-sidebar">
      <h3 className="contact-title">Contact Regional Manager</h3>
      <div className="contact-list">
        {contactData.map((item) => (
          <div className="contact-card" key={item.id}>
            <div className="contact-top-section">
              <div className="userprofile">
                <img src={contactprofile} alt="userprofile" />
              </div>
              <div className="user-details">
                <p className="user-name">{item.userName}</p>
                <div className="user-meta">
                  <span className="phone">{item.phone}</span>
                  <span className="separator">|</span>
                  <span className="place">{item.place}</span>
                </div>
              </div>
            </div>
            <div className="contact-email-section">
              <span>{item.email}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}