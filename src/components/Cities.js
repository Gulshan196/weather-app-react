import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import Modal from './Modal'
import { useContext, useEffect, useState } from 'react';
import { citiesContext } from './CitiesContext';
import cityData from './data';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types'


const Cities = ({ modal, setModal }) => {

  const name = useContext(citiesContext);

  const [city, setCity] = useState([]);

  const [box, setBox] = useState(false);

  const [val, setVal] = useState(false);

  useEffect(() => {
    let cityArr = cityData.filter((el) => !name.city.includes(el));
    setCity(cityArr);
  }, [name.city]);

  function openModal() {
    setModal(true);
  }

  function openBox(val) {
    name.setInfo(val);
    setBox(true);
  }

  function changeIcon(city) {
    let map = name.icon;
    setVal((val) => { return !val });

    if (!map[city]){ 
      map[city] = true;

      toast.success('Added to favourites', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
    else {
      map[city] = false;
      toast.success('Removed from favourites', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      }

    name.setIcon(map);
  }
  return (
    <div className='cities-container'>
      <div className='cities-wrapper'>
        <div className='header'>
          <div>
            Cities
          </div>
          <FontAwesomeIcon icon={faCirclePlus} className='add-icon' onClick={openModal} />
        </div>
        <div>
          {city && city.map((el) => {
            return (<div key={el.city} className='city-details' tabIndex={0} onClick={() => openBox(el)}>
              <div>{el.city}</div>
              <div>{el.tempreture}<span>&#176;</span>C</div>
            </div>);
          })}
        </div>
      </div>
      {box && <div className='right-container'>
        <div className='header-container'>
          {name.info.city}
          {name.icon[name.info.city] ? <img alt='coloricon' onClick={() => changeIcon(name.info.city)} src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRkRBNDQ7IiBkPSJNMjc2LjAxNCwyMy44NjZsNjcuMDI3LDEzNS43OTlsMTQ5LjgyNSwyMS43ODVjMTguMzA2LDIuNjYyLDI1LjYxNSwyNS4xNTcsMTIuMzY5LDM4LjA3MQ0KCUwzOTYuODI1LDMyNS4yMDVsMjUuNTc4LDE0OS4yNGMzLjEyNSwxOC4yMzItMTYuMDEyLDMyLjEzNS0zMi4zODUsMjMuNTI4bC0xMzQuMDI1LTcwLjQ1MmwtMTM0LjAxNiw3MC40NTINCgljLTE2LjM3NCw4LjYwOC0zNS41MTEtNS4yOTQtMzIuMzg2LTIzLjUyOGwyNS41OC0xNDkuMjQxTDYuNzY0LDIxOS41MjFjLTEzLjI0Ni0xMi45MTItNS45MzctMzUuNDA5LDEyLjM2OS0zOC4wNzFsMTQ5LjgyNC0yMS43ODcNCglsNjcuMDI2LTEzNS43OThDMjQ0LjE3MSw3LjI3NywyNjcuODI3LDcuMjc3LDI3Ni4wMTQsMjMuODY2eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZGQUEwMDsiIGQ9Ik00OTIuODY3LDE4MS40NDhsLTE0OS44MjUtMjEuNzg1TDI3Ni4wMTQsMjMuODY2Yy00LjIxNS04LjU0MS0xMi41MjQtMTIuNjk1LTIwLjcxOC0xMi40NDF2NDE2LjQ2Mw0KCWwwLjY5OC0wLjM2NmwxMzQuMDI1LDcwLjQ1MWMxNi4zNzQsOC42MDcsMzUuNTEtNS4yOTYsMzIuMzg2LTIzLjUyOGwtMjUuNTc4LTE0OS4yNDFsMTA4LjQwOS0xMDUuNjg1DQoJQzUxOC40ODIsMjA2LjYwNSw1MTEuMTcyLDE4NC4xMSw0OTIuODY3LDE4MS40NDh6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==" />
            : <img alt='defaulticon' onClick={() => changeIcon(name.info.city)} src = {"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNTExLjE3NywxOTcuMTE5Yy0xLjk3NS02LjA3OS03LjIzLTEwLjUxLTEzLjU1NC0xMS40MjlsLTE1Ni41NC0yMi43NThMMjcxLjA1OSwyMS4wNjYNCgkJCWMtMi44MjktNS43MzEtOC42NjctOS4zNTktMTUuMDU5LTkuMzU5Yy02LjM5MSwwLTEyLjIzLDMuNjI4LTE1LjA1OSw5LjM1OWwtNzAuMDI0LDE0MS44NjZMMTQuMzc3LDE4NS42ODkNCgkJCWMtNi4zMjQsMC45MTktMTEuNTgsNS4zNS0xMy41NTQsMTEuNDI5Yy0xLjk3Niw2LjA3OS0wLjMyOCwxMi43NTMsNC4yNSwxNy4yMTRMMTE4LjMzOCwzMjQuNzRMOTEuNjE5LDQ4MC42NjQNCgkJCWMtMS4wOCw2LjMsMS41MSwxMi42NjUsNi42ODEsMTYuNDIyYzUuMTcsMy43NTYsMTIuMDI0LDQuMjUyLDE3LjY4MywxLjI3OWwxNDAuMDE2LTczLjU5M2wxNDAuMDE0LDczLjU5Mw0KCQkJYzUuNjg4LDIuOTksMTIuNTQsMi40NTcsMTcuNjgzLTEuMjc5YzUuMTcxLTMuNzU2LDcuNzYyLTEwLjEyMyw2LjY4MS0xNi40MjJMMzkzLjY2LDMyNC43NDFsMTEzLjI2Ny0xMTAuNDA5DQoJCQlDNTExLjUwNSwyMDkuODcsNTEzLjE1MywyMDMuMTk2LDUxMS4xNzcsMTk3LjExOXogTTM2My44OTcsMzA2Ljg1MWMtMy45NTgsMy44NTctNS43NjMsOS40MTQtNC44MywxNC44NjFsMjIuNDYzLDEzMS4wOTcNCgkJCWwtMTE3LjcxOC02MS44NzVjLTQuODktMi41NzItMTAuNzM1LTIuNTczLTE1LjYyNSwwbC0xMTcuNzE5LDYxLjg3NWwyMi40NjMtMTMxLjA5N2MwLjkzNC01LjQ0Ni0wLjg3Mi0xMS4wMDQtNC44My0xNC44NjENCgkJCUw1Mi44NzgsMjE0LjAzbDEzMS42MDctMTkuMTMzYzUuNDY5LTAuNzk1LDEwLjE5NS00LjIzLDEyLjY0My05LjE4NUwyNTYsNjYuNDM5bDU4Ljg3MiwxMTkuMjc0DQoJCQljMi40NDcsNC45NTUsNy4xNzQsOC4zOSwxMi42NDMsOS4xODVsMTMxLjYwNywxOS4xMzNMMzYzLjg5NywzMDYuODUxeiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"} />
          }
        </div>
      </div>}
      <ToastContainer 
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" />
      <Modal modal={modal} setModal={setModal} />
    </div>
  )
}

Cities.propTypes = {modal :PropTypes.bool, setModal :PropTypes.func}

export default Cities
