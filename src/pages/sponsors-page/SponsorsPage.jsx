import React, { useState, useEffect } from "react";
import "./SponsorsPage.css";
import { LoaderData } from "../../context/loaderContext";
import Loader from "../../components/Loader/Loader";
import img1 from "../../assets/Sponsors/spon11.jpg";
import img2 from "../../assets/Sponsors/appian.png";
import img3 from "../../assets/Sponsors/tmb.png";
import img4 from "../../assets/Sponsors/rootquotient.png";
import img5 from "../../assets/Sponsors/e2w.png";
import img6 from "../../assets/Sponsors/valor.png";
const sponsors = [
  {
    name: "MOTORQ - Title Sponsor",
    logo: img1,
    description:
      "Headquartered in the San Francisco Bay Area, Motorq is an analytics software platform company that was created for the sole purpose of realizing the potential of connected-car data. The possibilities are virtually endless. They’re committed to leveraging this data to help businesses unlock the power of raw data by deciphering and creating actionable insights from a variety of disparate connected-car systems. Their cloud-based system allows them to deliver better, faster and more cost-effective insights so the clients can focus on what they do best.",
    website: "https://motorq.com/",
  },
  {
    name: "APPIAN - Events Sponsor",
    logo: img2,
    description:
      "Appian is a software company that automates business processes. The Appian AI Process Platform includes everything you need to design, automate, and optimize even the most complex processes, from start to finish. The world's most innovative organizations trust Appian to improve their workflows, unify data, and optimize operations—resulting in better growth and superior customer experiences.",
    website: "https://www.tmbnet.in/",
  },
  {
    name: "TMB - Reach'25 Sponsor",
    logo: img3,
    description:
      "Tamilnad Mercantile Bank Limited (TMB) is an Indian bank headquartered at Thoothukudi, Tamil Nadu. The bank currently has 509 full branches throughout India, 12 regional offices and two link offices, two central processing centres, one service branch, four currency chests, 48 eLobby centres, 262 cash recycler machines (cash deposit machines) and 1151 automated teller machines (ATM).",
    website: "https://companyC.com",
  },
  {
    name: "ROOTQUOTIENT - Technology Partner",
    logo: img4,
    description:
      "RootQuotient is a product engineering company that provides custom software development services. The company was founded in 2019 and has offices in Toronto, Canada, Chennai, India, and London, UK. RootQuotient specializes in web and mobile app development for enterprises and startups across industries. The company focuses on innovation, quality, and client success.",
    website: "https://www.rootquotient.com/",
  },
  {
    name: "E2W STUDY - Educational Sponsor",
    logo: img5,
    description:
      "E2W STUDY was founded with a mission to bring world-class education closer to our students. Since our inception, we have helped more than 2700+ students and professionals realize their dreams of studying abroad and settling in overseas countries. We are here to help students to realize their dream of studying in UK , Europe , Canada , Australia and Singapore.",
    website: "https://e2wstudy.com/",
  },
  {
    name: "VALOR PAY - Intern Partner",
    logo: img6,
    description:
      "Valor offers innovative, advanced, and secure all-in-one payment technology solutions for ISOs, merchants, and new business owners. Their commitment to excellence means continually improving software systems and payment devices to provide us with the gold standard for intelligent, hassle-free transactions. In addition to being cost-efficient and intelligent, their value-added features and reliable service support ensure that they are the ideal partner for business growth.",
    website: "https://valorpaytech.com/",
  },
];

const SponsorsPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isLoading } = LoaderData();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    if (isLoading) {
      return <Loader />;
    }

  return (
    <div className="sptotal">
      <div>
        <div className="sphead">
          <h1 style={{ textAlign: "center", color: "#fff", marginTop: "50px" }}>
            Sponsors
          </h1>
        </div>
        <div className="spout">
          {sponsors.map((sponsor, index) => (
            <div key={index} className={`spcontent-container `}>
              <img src={sponsor.logo} alt={sponsor.name} />
              <div className="sptext-container">
                <h1 className="sptitle">{sponsor.name}</h1>
                <p>{sponsor.description}</p>
                <div className="spnaive" />
                <a
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="spread"
                >
                  Visit Website
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsorsPage;

