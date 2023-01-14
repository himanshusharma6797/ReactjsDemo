import { menuItems } from '../../NavbarItems';
import MenuItems from './MenuItems';

const Navbar = () => {
  return (
    <>
      <nav className='nav-bar-dropdown'>
        <ul className="menus">
          {menuItems.map((menu, index) => {
            const depthLevel = 0;
            return (
              <MenuItems
                items={menu}
                key={index}
                depthLevel={depthLevel}
              />
            );
          })}
        </ul>
      </nav>
      <div style={{height: '9rem'}}> </div>
    </>
  );
};

export default Navbar;
