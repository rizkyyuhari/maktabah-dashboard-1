import styled from "styled-components";
import { Outlet, useNavigate } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import "./sidebar.css";
import { Link } from "react-router-dom";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../../features/authSlice";
import { useEffect, useState } from "react";

const SidebarNav = styled.nav`
  background: #15171c;
  overflow: auto;
  width: 250px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;
const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  transition: 0.3s;
  &:hover {
    background: #252831;
    border-left: 4px solid rgb(5, 150, 105);
    cursor: pointer;
    color: rgb(5, 150, 105);
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const filteredData = SidebarData.filter((side) => side.title !== "User");
  const [role, setRole] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    setRole(user && user.user.role);
  }, [user]);
  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };
  console.log(user && user.user.role);
  return (
    <div className="main">
      <IconContext.Provider value={{ color: "#fff" }}>
        <SidebarNav>
          <SidebarWrap>
            {user && user.user.role === "Super Admin"
              ? SidebarData.map((item, index) => {
                  return <SubMenu item={item} key={index} />;
                })
              : filteredData.map((item, index) => {
                  return <SubMenu item={item} key={index} />;
                })}
            {/* {role === "Super Admin" && (
              <SidebarLink>
                <div>
                  {<RiIcons.RiUserFill />}
                  <SidebarLabel>User</SidebarLabel>
                </div>
              </SidebarLink>
            )} */}
            <SidebarLink
              onClick={(e) => {
                e.preventDefault();
                logout();
              }}
            >
              <div>
                {<IoIcons.IoMdLogOut />}
                <SidebarLabel>Logout</SidebarLabel>
              </div>
            </SidebarLink>
          </SidebarWrap>
        </SidebarNav>
        <div className="mainn">
          <Outlet />
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default Sidebar;
