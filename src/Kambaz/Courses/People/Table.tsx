import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
export default function PeopleTable() {
 return (
  <div id="wd-people-table">
   <Table striped>
    <thead>
     <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
    </thead>
    <tbody>
     <tr><td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Tony</span>{" "}
          <span className="wd-last-name">Stark</span></td>
      <td className="wd-login-id">001234561S</td>
      <td className="wd-section">S101</td>
      <td className="wd-role">STUDENT</td>
      <td className="wd-last-activity">2020-10-01</td>
      <td className="wd-total-activity">10:21:32</td></tr>
     <tr><td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Bruce</span>{" "}
          <span className="wd-last-name">Wayne</span></td>
      <td className="wd-login-id">002345672B</td>
      <td className="wd-section">S102</td>
      <td className="wd-role">STUDENT</td>
      <td className="wd-last-activity">2020-10-02</td>
      <td className="wd-total-activity">12:15:45</td></tr>
     <tr><td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Steve</span>{" "}
          <span className="wd-last-name">Rogers</span></td>
      <td className="wd-login-id">003456783S</td>
      <td className="wd-section">S103</td>
      <td className="wd-role">STUDENT</td>
      <td className="wd-last-activity">2020-10-03</td>
      <td className="wd-total-activity">14:05:12</td></tr>
     <tr><td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Natasha</span>{" "}
          <span className="wd-last-name">Romanoff</span></td>
      <td className="wd-login-id">004567894N</td>
      <td className="wd-section">S104</td>
      <td className="wd-role">STUDENT</td>
      <td className="wd-last-activity">2020-10-04</td>
      <td className="wd-total-activity">16:45:30</td></tr>
     <tr><td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Mickey</span>{" "}
          <span className="wd-last-name">Haller</span></td>
      <td className="wd-login-id">005678905P</td>
      <td className="wd-section">S105</td>
      <td className="wd-role">TA</td>
      <td className="wd-last-activity">2020-10-05</td>
      <td className="wd-total-activity">09:30:10</td></tr>
     <tr><td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Arthur</span>{" "}
          <span className="wd-last-name">Morgan</span></td>
      <td className="wd-login-id">006789016C</td>
      <td className="wd-section">S106</td>
      <td className="wd-role">STUDENT</td>
      <td className="wd-last-activity">2020-10-06</td>
      <td className="wd-total-activity">18:22:40</td></tr>
     <tr><td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Harvey</span>{" "}
          <span className="wd-last-name">Specter</span></td>
      <td className="wd-login-id">007890127D</td>
      <td className="wd-section">S107</td>
      <td className="wd-role">TA</td>
      <td className="wd-last-activity">2020-10-07</td>
      <td className="wd-total-activity">20:10:55</td></tr>
    </tbody>
   </Table>
  </div> );}