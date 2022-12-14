import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Profile from "routes/Profile";
import Navigation from "./Navigation";

const AppRouter = ({ isLoggedIn, userObj }) => {
    return(
        <Router>
            {isLoggedIn && <Navigation />}
            <Routes>
                {isLoggedIn ? (
                    <>
                        <Route exact path = "/" element = { <Home userObj={userObj} /> } /> 
                        <Route exact path = "/profile" element = { <Profile /> } /> 
                    </>
                ) : (
                    <Route exact path = "/"element = { <Auth /> } /> 
                )}
            </Routes>
        </Router>
    );
};

export default AppRouter;

// "react-router-dom" -v === switch -> Routes 관련 
// https://nakanara.tistory.com/288?category=1020032