import { NavLink } from "react-router-dom";
import { FaSignInAlt, FaUserPlus, FaUser } from "react-icons/fa";

export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation" className="nav flex-column fs-4 text-center">
      <NavLink
        to="/Kambaz/Account/Signin"
        className={({ isActive }) =>
          `btn ${isActive ? "btn-primary" : "btn-outline-primary"} mb-3`
        }
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
      >
        <FaSignInAlt />
        Sign In
      </NavLink>
      <NavLink
        to="/Kambaz/Account/Signup"
        className={({ isActive }) =>
          `btn ${isActive ? "btn-primary" : "btn-outline-primary"} mb-3`
        }
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
      >
        <FaUserPlus />
        Sign Up
      </NavLink>
      <NavLink
        to="/Kambaz/Account/Profile"
        className={({ isActive }) =>
          `btn ${isActive ? "btn-primary" : "btn-outline-primary"}`
        }
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
      >
        <FaUser />
        Profile
      </NavLink>
    </div>
  );
}
