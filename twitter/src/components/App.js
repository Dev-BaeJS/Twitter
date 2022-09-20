import { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggendIn] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggendIn(user);
        setUserObj(user);
      } else {
        setIsLoggendIn(false);
      }
      setInit(true);
    });
  });

  return (
    <>
      {init ? (
        <AppRouter isLoggedIn = {isLoggedIn} userObj = {userObj}/> 
        ) : (
          "Initilaizing..."
        )}
      <footer>&copy; {new Date().getFullYear()} Twitter</footer>
    </>
  )
}

export default App;
