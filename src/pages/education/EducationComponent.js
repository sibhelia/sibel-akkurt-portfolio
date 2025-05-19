import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
import EducationImg from "./EducationImg";
import "./EducationComponent.css";
import { Fade } from "react-reveal";

function Education(props) {
  const theme = props.theme;
  return (
    <div className="education-main">
      <Header theme={props.theme} setTheme={props.setTheme} />
      <div className="basic-education">
        <Fade bottom duration={2000} distance="40px">
          <div className="heading-div">
            <div className="heading-img-div">
              <EducationImg theme={theme} />
            </div>
            <div className="heading-text-div">
              <h1 className="heading-text" style={{ color: theme.text }}>
                Eğitim
              </h1>
              <h3 className="heading-sub-text" style={{ color: theme.text }}>
               Temel Yeterlilikler ve Sertifikalar
              </h3>
              <p
                className="experience-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
              Üniversite eğitimim boyunca özellikle web geliştirme alanına odaklandım; HTML5, CSS, JavaScript, React.js ve Node.js gibi teknolojilerle projeler geliştirerek tasarım ve işlevselliği bir araya getirme becerisi kazandım. Bunun yanında OOP, algoritmalar, zaman yönetimi ve iletişim gibi konularda da kendimi geliştirdim. Edindiğim bilgi ve becerileri pekiştirmek için çeşitli online platformlardan sertifikalı eğitimler tamamladım. Aşağıda bu eğitimlerin ve sertifikaların bir listesi yer almaktadır.
              </p>
            </div>
          </div>
        </Fade>
        <Educations theme={props.theme} />
        <Certifications theme={props.theme} />
      </div>
      <Footer theme={props.theme} />
    </div>
  );
}

export default Education;
