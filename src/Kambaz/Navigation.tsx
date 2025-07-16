import { Link } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";
import { FaInbox, FaGithub, FaUser, FaHome } from "react-icons/fa";
import { ListGroup } from "react-bootstrap";
import { FaRegCircleUser } from "react-icons/fa6";
export default function KambazNavigation() {
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, height: '100vh', width: 120, overflowY: 'auto', background: '#000', zIndex: 1000 }}>
            <ListGroup id="wd-kambaz-navigation" style={{ width: 120 }}
                className="rounded-0 d-none d-md-block bg-black">
                <ListGroup.Item id="wd-neu-link" target="_blank" action
                    href="https://www.northeastern.edu/"
                    className="bg-black border-0 text-center">
                    <img src="/images/neu.jpg" width="75px" />
                </ListGroup.Item>
                <ListGroup.Item
                    to="/Kambaz/Account"
                    as={Link}
                    className="text-center border-0 bg-white text-danger"
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', padding: '16px 0' }}
                >
                    <FaUser size={28} style={{ marginBottom: 4, color: '#d41b2c' }} />
                    <span>Account</span>
                </ListGroup.Item>
                <ListGroup.Item to="/Kambaz/Dashboard" as={Link}
                    className="text-center border-0 bg-black text-white">
                    <AiOutlineDashboard className="fs-1" style={{ color: '#d41b2c' }} /><br />
                    Dashboard
                </ListGroup.Item>
                <ListGroup.Item to="/Kambaz/Dashboard" as={Link}
                    className="text-center border-0 bg-black text-white">
                    <LiaBookSolid className="fs-1" style={{ color: '#d41b2c' }} /><br />
                    Courses
                </ListGroup.Item>
                <ListGroup.Item to="/Kambaz/Calendar" as={Link}
                    className="text-center border-0 bg-black text-white">
                    <IoCalendarOutline className="fs-1" style={{ color: '#d41b2c' }} /><br />
                    Calendar
                </ListGroup.Item>
                <ListGroup.Item to="/Kambaz/Inbox" as={Link}
                    className="text-center border-0 bg-black text-white">
                    <FaInbox className="fs-1" style={{ color: '#d41b2c' }} /><br />
                    Inbox
                </ListGroup.Item>
                <ListGroup.Item to="/Labs" as={Link}
                    className="text-center border-0 bg-black text-white">
                    <FaRegCircleUser className="fs-1" style={{ color: '#d41b2c' }} /><br />
                    Labs
                </ListGroup.Item>
                <ListGroup.Item
                    href="https://github.com/ShashidharGadepalli?tab=repositories"
                    target="_blank"
                    action
                    className="text-center border-0 bg-black text-white">
                    <FaGithub className="fs-1" style={{ color: '#d41b2c' }} /><br />
                    GitHub
                </ListGroup.Item>
                <ListGroup.Item to="/" as={Link}
                    className="text-center border-0 bg-black text-white">
                    <FaHome size={28} style={{ marginBottom: 4, color: '#d41b2c' }} /><br />
                    Landing Page
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
}
