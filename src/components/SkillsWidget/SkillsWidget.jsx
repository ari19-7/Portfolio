import PropTypes from "prop-types";
import "./SkillsWidget.css";
import Image from "next/image"; 

const skills = [
  { name: "HTML", proficiency: 50, icon: "/HTML.png" },
  { name: "CSS", proficiency: 50, icon: "/CSS.png" },
  { name: "JavaScript", proficiency: 50, icon: "/JavaScript.png" },
];

const SkillsWidget = ({ title, content }) => {
  return (
    <section data-testid="skillsWidget" className="skills-widget">
      <h2 data-testid="skillsWidgetTitle">{title}</h2>
      <p data-testid="skillsWidgetContent">{content}</p>
      <ul>
        {skills.map((item, index) => (
          <li key={index} data-testid={`skillsWidgetItem${index}`}>
            <div className="work-item">
              <div className="work-item-icon">
                <img
                  data-testid={`skillsWidgetItemLogo${index}`}
                  src={item.icon}
                  alt={`${item.name} Icon`}
                  width={52}
                  height={52}
                  unoptimized  
                />
              </div>
              <div className="setItemWork">
                <h3 data-testid={`skillsWidgetItemName${index}`} className="work-item-title">
                  {item.name}
                </h3>
                <div className="work-item-content-details">
                  <div className="work-item-proficiency">
                    <div
                      data-testid={`skillsWidgetItemProficiency${index}`}
                      className="proficiency-bar"
                      style={{ width: `${item.proficiency}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

SkillsWidget.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default SkillsWidget;

