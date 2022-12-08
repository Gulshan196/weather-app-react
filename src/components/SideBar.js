import { useNavigate } from 'react-router-dom'

const SideBar = ({active}) => {
    const navigate = useNavigate();

    function navtoHome() {
        navigate('/');
    }

    function navtoCities() {
        navigate('/cities');
    }
  return (
       <div className='side-bar'>
        <div onClick={navtoHome} className = {active ? 'active' : ''}>
        home
        </div>
        <div onClick={navtoCities} className = {active ? '' : 'active'}>
            cities
        </div>
       </div>
  )
}

export default SideBar
