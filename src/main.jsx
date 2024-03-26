
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SocketProvider from './context/socket/socket.jsx'
import AuthProvider from './context/auth/auth.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <AuthProvider>
      <SocketProvider>
        <App />
      </SocketProvider>
    </AuthProvider>
  </>,
)
