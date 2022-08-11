import React from 'react';
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import Login from '../Login/Login';
import Success from '../Success/Success';
import { Flex } from '@chakra-ui/react';

function App() {

  const [ userEmail, setUserEmail ] = React.useState('');
  const [ userPassword, setUserPassword ] = React.useState('');
  const [ isLoggedIn, setIsLoggedIn ] = React.useState(false);
  const location = useLocation();
  let navigate = useNavigate();

  React.useEffect(() => {
      if (location.pathname === "/") {
        setIsLoggedIn(false);
      }
  }, [location]);

  const handleEmailChange = (event) => {
    setUserEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setUserPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const payload = { email: userEmail, password: userPassword };
  
    fetch("http://localhost:4200",
      {
        method: "POST",
        body: JSON.stringify(payload)
      })
      .then(res => res.json())
      .then((data) => {
        if (data.status === 401) {
          throw new Error(data.error);
        }
        setIsLoggedIn(true);
        navigate("success");
      })
      .catch(error => alert(error));
  };

  return (

    <Flex
      h="100vh"
      alignItems="center"
      justifyContent="center"
      style={{
        backgroundColor: isLoggedIn
        ? (location.pathname === "/success" ? "#FFF" : "#DCDCDC")
        : "#DCDCDC" }}
    >

      <Routes>
        <Route path="/"
          element={
            <Login
              onEmailChange={handleEmailChange}
              onPasswordChange={handlePasswordChange}
              onSubmit={handleSubmit}
            />
          }
        />
        <Route path="/success"
          element={
            isLoggedIn
            ? (<Success />)
            : (<Navigate replace to={"/"} />)
          }
        />
      </Routes>

    </Flex>
  );
}

export default App;
