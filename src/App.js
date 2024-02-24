import {Route, Routes} from "react-router";

import Home from "./pages/home/home";
import Game from "./pages/game/game";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/game" element={<Game/>}/>
            </Routes>
        </div>
    );


}

export default App