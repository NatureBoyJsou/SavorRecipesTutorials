import { Link } from 'react-router-dom';

const Header = ({ restaurantName, menuItems }) => (
  <header>
    <div className="logo">{restaurantName}</div>
    <nav>
      <div className="NavBar">
        {menuItems?.map((item, index) => (
          <p key={index}>
            <Link
              className={item.type === "button" ? "order-button" : ""}
              to={item.link}
            >
              {item.name}
            </Link>
          </p>
        ))}
      </div>
    </nav>
  </header>
);

export default Header;
