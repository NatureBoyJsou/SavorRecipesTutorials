import { Link, useLocation } from 'react-router-dom';

const Header = ({ restaurantName, menuItems }) => {
  const location = useLocation();

  return (
    <header>
      <div className="logo">{restaurantName}</div>
      <nav>
        <div className="NavBar">
          {menuItems?.map((item, index) => {
            const isActive = location.pathname === item.link;

            return (
              <p key={index}>
                <Link
                  className={item.type === "button" ? "order-button" : ""}
                  to={item.link}
                  style={{
                    color: isActive ? "orange" : "white",
                    borderBottom: isActive ? "2px solid orange" : "none"
                  }}
                >
                  {item.name}
                </Link>
              </p>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default Header;
