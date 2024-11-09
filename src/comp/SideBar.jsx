
const Sidebar = ({ handleButtonClick }) => {
  return (
    <div className="sidebar">
      <div className="sideTop">
        <a href="#">
          <img
            src="src/assets/icons/Sidebar/dashboard_FILL0_wght400_GRAD0_opsz24.svg"
            alt=""
            className="dash"
          />
          DashBoard
        </a>
      </div>
      <div className="sideElements1">
        <a href="#" onClick={() => handleButtonClick(0)}>
          <img
            src="src/assets/icons/Sidebar/home_FILL0_wght400_GRAD0_opsz24.svg"
            alt=""
            className="ico1"
          />
          Home
        </a>
        <a href="#" onClick={() => handleButtonClick(1)}>
          <img
            src="src/assets/icons/Sidebar/person_FILL0_wght400_GRAD0_opsz24.svg"
            alt=""
            className="ico2"
          />
          Profile
        </a>
        <a href="#" onClick={() => handleButtonClick(2)}>
          <img
            src="src/assets/icons/Sidebar/mode_comment_FILL0_wght400_GRAD0_opsz24.svg"
            alt=""
            className="ico3"
          />
          Projects
        </a>
        <a href="#" onClick={() => handleButtonClick(3)}>
          <img
            src="src/assets/icons/Sidebar/history_FILL0_wght400_GRAD0_opsz24.svg"
            alt=""
            className="ico4"
          />
          Skills
        </a>
        <a href="#" onClick={() => handleButtonClick(4)}>
          <img
            src="src/assets/icons/Sidebar/task_FILL0_wght400_GRAD0_opsz24.svg"
            alt=""
            className="ico5"
          />
          Courses
        </a>
        <a href="#" onClick={() => handleButtonClick(5)}>
          <img
            src="src/assets/icons/Sidebar/groups_FILL0_wght400_GRAD0_opsz24.svg"
            alt=""
            className="ico6"
          />
          Communities
        </a>
      </div>
      <div className="sideElements2">
        <a href="#">
          <img
            src="src/assets/icons/Sidebar/settings_FILL0_wght400_GRAD0_opsz24.svg"
            alt=""
            className="icoBottom1"
          />
          Setting
        </a>
        <a href="#">
          <img
            src="src/assets/icons/Sidebar/help_FILL0_wght400_GRAD0_opsz24.svg"
            alt=""
            className="icoBottom2"
          />
          Support
        </a>
        <a href="#">
          <img
            src="src/assets/icons/Sidebar/verified_user_FILL0_wght400_GRAD0_opsz24.svg"
            alt=""
            className="icoBottom3"
          />
          Privacy
        </a>
      </div>
    </div>
  );
};

export default Sidebar;