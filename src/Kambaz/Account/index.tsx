import Signin from "./Signin";
import Signup from "./Signup";
import Profile from "./Profile";
import AccountNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router";

export default function Account() {
    return (
        <div id="wd-account-screen" style={{ display: 'flex', minHeight: '100vh', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ textAlign: 'center', marginTop: '-400px' }}>
                <AccountNavigation />
            </div>
            <div style={{ position: 'absolute', top: 0, right: 0, width: '60%', height: '100%', padding: '20px' }}>
                <Routes>
                    <Route path="/" element={<Navigate to="/Kambaz/Account/Signin" />} />
                    <Route path="/Signin" element={<Signin />} />
                    <Route path="/Profile" element={<Profile />} />
                    <Route path="/Signup" element={<Signup />} />
                </Routes>
            </div>
        </div>
    );
}
