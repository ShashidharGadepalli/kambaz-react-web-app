import Account from "./Account";
import Dashboard from "./Dashboard";
import Navigation from "./Navigation";
import Courses from "./Courses";
import { Routes, Route, Navigate } from "react-router";
import { Link } from "react-router-dom";
export default function Kambaz() {
    return (
        <div id="wd-kambaz">
            <Link to="/">Landing Page</Link>
            <table>
                <tr>
                    <td valign="top">
                        <Navigation />
                    </td>
                    <td valign="top">
                        <Routes>
                            <Route path="/" element={<Navigate to="Account" />} />
                            <Route path="/Account/*" element={<Account />} />
                            <Route path="/Dashboard/*" element={<Dashboard />} />
                            <Route path="/Courses/:cid/*" element={<Courses />} />
                            <Route path="/Calendar" element={<h1>Calendar</h1>} />
                            <Route path="/Inbox" element={<h1>Inbox</h1>} />
                        </Routes>
                    </td>
                </tr>
            </table>
        </div >
    );
}
