import React, { Children } from "react";
import { Link,useMatch,useResolvedPath } from "react-router-dom";

const Mini=()=>{

const path=window.location.pathname
return(

    <section className="nav">
        <Link to="/" className="site-titel">Site Name</Link>
            <ul>
                {/* <CustomLink to="/pricing">LeaderBoard</CustomLink> */}
               <CustomLink to="/match1">Matches</CustomLink>
               <CustomLink to="/match2">About</CustomLink>
               <CustomLink to="/match3">Profile</CustomLink>
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
    
    export default Mini;