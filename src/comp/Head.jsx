

const Header = () => {
  return (
    <div className="head">
      <div className="row1">
        <a href="#">
          <img
            alt="barra busqueda"
            className="lupa"
            src="/assets/icons/Others/search_FILL0_wght400_GRAD0_opsz24.svg"
          />
        </a>
        <input type="search" />
        <div></div>
        <div className="row1-right">
          <a href="#">
            <img
              className="campana"
              src="/assets/icons/Others/notifications_active_FILL0_wght400_GRAD0_opsz24.svg"
              alt="notification"
            />
          </a>
          <a href="#">
            <img
              className="cat"
              src="/assets/icons/Reds/7345910_black cat_pet_cat_animal_feline_icon.svg"
              alt="web icon main"
            />
          </a>
          <p>Joel David Cabrera Vivas</p>
        </div>
      </div>
      <div className="row2">
        <a className="heroUser" href="">
          <img
            src="/assets/icons/Reds/7345910_black cat_pet_cat_animal_feline_icon.svg"
            alt=""
            className="catBig"
          />
        </a>
        <div className="row2-left">
          <p className="p1">Hi user</p>
          <p className="p2">Joel David Cabrera (@lorem)</p>
        </div>
        <div className="row2-right">
          <button type="button">New</button>
          <button type="button">Upload</button>
          <button type="button">Share</button>
        </div>
      </div>
    </div>
  );
};

export default Header;