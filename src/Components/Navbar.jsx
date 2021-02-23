import '../Css/Navbar.css';
export function Navbar(props) {
  return (
    <div>
      <ul className="User-Navbar">
        <li className="logo">
          <img
            src="https://th.bing.com/th/id/Rda6733251d6ed7d58358446c0c5ae037?rik=982VbYW4HE09lQ&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2017%2f08%2fSpotify-Logo.png&ehk=Gcl8lyv0FdI4gDVyKLmVCVfNf8yc1xDmAvEDyPzt8Bk%3d&risl=&pid=ImgRaw"
            alt="Logo"
            style={{ maxWidth: '100%' }}
          />
        </li>
        <li className="User-Navbar-Tag" style={{ textAlign: 'left', width: '60%' }}>
          Spotifry
        </li>
        <li className="User-Navbar-Tag">Hi, {props.user}</li>
        <li className="User-Navbar-Tag">
          <button
            style={{
              border: 'none',
              color: 'white',
              background: 'black',
              fontSize: '2rem',
              fontWeight: 'bold',
              outline: 'none',
              cursor: 'pointer',
            }}
            onClick={() => {
              localStorage.removeItem('username');
              window.location.pathname = '/';
            }}
          >
            Log out
          </button>
        </li>
      </ul>
    </div>
  );
}
