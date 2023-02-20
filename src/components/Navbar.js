import React from 'react';
import './Navbar3.css';
function Navbar() {
  return (
    <>
    <ul>
      <li><a class="active" href="/dashco">
             DASHCO <i className="fab fa-typo3"></i>
          </a>
      </li>
      <li className="menue"><a href="glass">شیشه</a></li>
      <li className="menue dropdown">
        <a href="production-process" className='dropbtn'>فرآیند تولید</a>
        <div className='dropdown-content product'>
          <a href='مواد-اولیه'>ورود مواد اولیه</a>
          <a href='batch-plant'>بچ پلنت</a>
          <a href='furnace'>کوره</a>
          <a href='runway'>runway</a>
          <a href='pull-machine'>ماشین کشش</a>
          <a href='glazing'>glazing</a>
          <a href='bundle'>بسته بندی</a>
        </div>
      </li>
      <li className="menue dropdown">
        <a href="units" className='dropbtn'>واحدها</a>
        <div className='dropdown-content units'>
          <a href='R&D'>R&D</a>
          <a href='HSE'>HSE</a>
          <a href='pruduct'>تولید</a>
          <a href='Technical'>فنی</a>
          <a href='PM'>PM</a>
          <a href='QG'>تضمین کیفیت</a>
          <a href='QC'>کنترل کیفیت</a>
          <a href='LAB'>آزمایشگاه</a>
          <a href='store'>انبار</a>
        </div>
      </li>
      <li className="menue"><a href="equipment">ابزارها</a></li>
      <li className="menue"><a href="Projects">پروژه ها</a></li>
      <li className="menue"><a href="cold-repairs">تعمیرات سرد</a></li>
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
