import NavLinks from './NavLinks'
import Logo from '../componenets/logo'
import Wrapper from '../assets/wrappers/BigSidebar'
import {  useSelector } from 'react-redux'


const BigSidebar = () => {
  const { isSiderbarOpen } = useSelector((store) => store.user)
  
  return (
    <Wrapper>
      <div
        className={
          isSiderbarOpen
            ? 'sidebar-container '
            : 'sidebar-container show-sidebar'
        }
      >
        <div className='content'>
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  )
}

export default BigSidebar;