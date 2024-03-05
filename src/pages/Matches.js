
import MiniNav from '../components/MiniNav';
import Match1 from './match1';
import Match2 from './match2';
import Match3 from './match3';
import {Route,Routes} from 'react-router-dom';
function Matches(){

    return (
        
        <>
        <MiniNav/>
        
        <div className="MiniNav">
        <Routes>
        <Route path="/" element={<Match1/>}/>
        <Route path="/match1" element={<Match1/>}/>
        <Route path="/match2" element={<Match2/>}/>
        <Route path="/match3" element={<Match3/>}/>
        </Routes>
        </div>
        
        </>

    )
}

export default Matches;