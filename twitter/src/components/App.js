import { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggendIn] = useState(false);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggendIn(user);
      } else {
        setIsLoggendIn(false);
      }
      setInit(true);
    });
  });

  return (
    <>
      {init ? <AppRouter isLoggedIn = {isLoggedIn} /> : "Initilaizing..."}
      <footer>&copy; {new Date().getFullYear()} Twitter</footer>
    </>
  )
}

export default App;
