import Link from 'next/link'
import navStyles from '../styles/Navbar.module.css'


const Navbar = () => {

  return (
      <div className={navStyles.navcontainer}>
          {/* <button className={navStyles.mobileNavToggle} aria-expanded={false}><span className={navStyles.srOnly}>Menu</span></button> */}
    <nav className={navStyles.nav}>
    <img className={navStyles.logo} src="/shared/logo.svg"></img>

        <ul>
            <li>
                <Link href='/'>
                <a><strong>00 </strong>Home</a>
                </Link>
            </li>
            <li>
                <Link href='/destination'>
                    <a><strong>01 </strong>Destination</a>
                    </Link>
            </li>
            <li>
                <Link href='/crew'>
                <a><strong>02 </strong>Crew</a>
                </Link>
            </li>
            <li>
                <Link href='/technology'>
                <a><strong>04 </strong>Technology</a>
                </Link>
            </li>
        </ul>
    </nav>
    </div>
  )
}

export default Navbar