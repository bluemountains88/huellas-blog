import Image from 'next/image';
import Link from 'next/link';
//import LoginBar from '../LoginBar';
import './navigation.css';

const links = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'Posts',
    route: '/posts',
  },
  {
    label: 'Nosotros',
    route: '/nosotros',
  },
  {
    label: 'Contacto',
    route: '/contacto',
  },
];

export default function Navigation() {
  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" className="nav_check" />
      <div className="nav_header">
        <div className="nav_title">
          Somos <span>Huella</span>
        </div>
      </div>
      <div className="nav_btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div className="nav_links">
        {links.map((link) => {
          return (
            <Link key={link.route} href={link.route}>
              <div className="responsive_item">{link.label}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
