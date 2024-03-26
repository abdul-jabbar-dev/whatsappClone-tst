 
import AuthContextHook from './context/auth/AuthContextHook';
import Home from './page/Home';
import Login from './page/Login'; 
function App() { 


  const {user} = AuthContextHook()
  console.log(user)
  return (
    <>
      {Object.keys(user).length > 0 ? <Home user={user} /> :
        <Login />}
    </>
  )
}

export default App
