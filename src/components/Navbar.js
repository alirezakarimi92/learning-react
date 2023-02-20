import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar3.css';
function Navbar() {
  return (
    <>
    <ul>
      <li><Link class="active" to="/dashco">
             DASHCO <i className="fab fa-typo3"></i>
          </Link>
      </li>
      <li className="menue"><Link to="/glass">شیشه</Link></li>
      <li className="menue dropdown">
        <Link to="/production-process" className='dropbtn'>فرآیند تولید</Link>
        <div className='dropdown-content product'>
          <Link to='/primary'>ورود مواد اولیه</Link>
          <Link to='/batch-plant'>بچ پلنت</Link>
          <Link to='/furnace'>کوره</Link>
          <Link to='/runway'>runway</Link>
          <Link to='/pull-machine'>ماشین کشش</Link>
          <Link to='/glazing'>glazing</Link>
          <Link to='/bundle'>بسته بندی</Link>
        </div>
      </li>
      <li className="menue dropdown">
        <Link to="/units" className='dropbtn'>واحدها</Link>
        <div className='dropdown-content units'>
          <Link to='/R&D'>R&D</Link>
          <Link to='/HSE'>HSE</Link>
          <Link to='/pruduct'>تولید</Link>
          <Link to='/Technical'>فنی</Link>
          <Link to='/PM'>PM</Link>
          <Link to='/QG'>تضمین کیفیت</Link>
          <Link to='/QC'>کنترل کیفیت</Link>
          <Link to='/LAB'>آزمایشگاه</Link>
          <Link to='/store'>انبار</Link>
        </div>
      </li>
      <li className="menue"><Link to="/equipment">ابزارها</Link></li>
      <li className="menue"><Link to="/Projects">پروژه ها</Link></li>
      <li className="menue"><Link to="/cold-repairs">تعمیرات سرد</Link></li>
    </ul>
    {//<nav className='navbar'>
    //   <div className='Logo-container'>
    //     <Link to="/" className='Logo link'>
    //       DASHCO <i className="fab fa-typo3"></i>
    //     </Link>
    //   </div>
    //   <div className='item'>ابزارها</div>
    //   <div className='item'>واحدها</div>
    //   <div className='item'>فرآیند تولید</div>
    //   <Link to='/glass' className='item link'>شیشه</Link>
    // </nav>
    }
    
    </>
  )
}

export default Navbar
