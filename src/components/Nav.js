import React, { children } from "react";
import "./Nav.css";
import { Link,useMatch,useResolvedPath } from "react-router-dom";

const Nav=()=>{
const path=window.location.pathname
    return(

        <section className="nav">
            <Link to="/" className="site-titel">Site Name</Link>
                <ul>
                    {/* <CustomLink to="/pricing">LeaderBoard</CustomLink> */}
                   <CustomLink to="/matches">Matches</CustomLink>
                   <CustomLink to="/about">About</CustomLink>
                   <CustomLink to="/next">Profile</CustomLink>
                </ul>
        </section>
    )
}

function CustomLink({to,children,...props}){
const resolvedPath= useResolvedPath(to)
const isActive = useMatch({path: resolvedPath.pathname,end:true})
    return (

        <li className={isActive ?"active":""}>
            <Link to={to}>{children}</Link>
        </li>
    )
}

export default Nav;