import Wrapper from '../assets/wrappers/SmallSidebar'
import { FaExternalLinkSquareAlt, FaTimes } from 'react-icons/fa'
import Logo from './logo'
import { useSelector, useDispatch } from 'react-redux'
import { toggleSiderbar } from '../features/user/userSlice'
import NavLinks from './NavLinks'

const SmallSidebar = () => {
  const {isSiderbarOpen} = useSelector((state)=>state.user);
  const dispatch = useDispatch();

const toggle = ()=>{
  dispatch(toggleSiderbar());
}
  return <Wrapper>
    <div className={isSiderbarOpen? "sidebar-container show-sidebar" : "sidebar-container"}>
      <div className="content">
        
      <button className='close-btn' onClick={()=>toggle()}>
        <FaTimes/>
        </button>
      <header>
        <Logo/>
      </header>
        <NavLinks toggleSidebar={toggle}/>
        </div>
      </div>
  </Wrapper>
}

export default SmallSidebar