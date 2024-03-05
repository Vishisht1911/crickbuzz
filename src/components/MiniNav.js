import React, { children } from "react";
import "./MiniNav.css"; 
import { Link,useMatch,useResolvedPath } from "react-router-dom";


const MiniNav=()=>{
const path=window.location.pathname     
    return(
        <section className="MiniNav">
               <div className="navigate"><ul>
                    <Link to="/"></Link>
                   <CustomLink to="/match1">Match1</CustomLink>
                   <CustomLink to="/match2">Match2</CustomLink>
                   <CustomLink to="/match3">Match3</CustomLink>
                </ul></div> 
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
export default MiniNav;