// src/components/LogoutButton.jsx
import { useNavigate } from "react-router-dom";

const Logout = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false); 
    navigate('/login');
  };

  return (
    <button className="block px-4 py-2 hover:bg-gray-100" onClick={handleLogout}>
      Log OUt
    </button>
  );
};

export default Logout;
