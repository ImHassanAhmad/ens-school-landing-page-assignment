import "./style.css";
import Logo from "../../assets/logo.png";

function Footer() {
  return (
    <div className="footer">
      <div className="center">
        <img src={Logo} alt="Emirates National School" className="mainLogo" />

        <p className="headerDescription">
          Emirates National School is UAE’s top Schooling system for over 5
          years.
        </p>
      </div>
      <div className="grid">
        {[
          {
            title: "About Us",
            msg: [
              "Welcome Message",
              "Mission and Vission",
              "School Board Members",
              "Management Team",
              "Duck Work",
              "Tankless Waterheater",
              "High Velocity System",
              "Indoor Air Quality Product",
              "Wifi Thermostats",
            ],
          },
          {
            title: "Academics",
            msg: [
              "Curriculum",
              "Graduation Requirements",
              "Accreditations",
              "Assesmenmt and Reporting",
            ],
          },
          {
            title: "Admissions",
            msg: [
              "Admission Process",
              "Admission Policy",
              "Tuition Policies & Procedures",
              "School Fees",
              "Bus,Canteen & Uniform",
              "Registration Offices",
              "Registration  2022",
              "Virtual Tour",
            ],
          },
          {
            title: "Campuses",
            msg: [
              "Abu Dhabni City Campus",
              "Al Ain City Campus",
              "MBZ City Campus",
              "Sharjah Campus",
              "Ras Al Khaimah Campus",
              "Dubai Campus",
            ],
          },
        ].map((e) => (
          <div>
            <p className="headerTitle">{e.title}</p>
            {e.msg.map((g, i) => (
              <div className="padFoot" key={i}>
                <p className="headerDescription">{g}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Footer;
