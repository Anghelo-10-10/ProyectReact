import { useAuth } from "./AuthContext"; 
import "../styles/login.css";

const Login = () => {
  const { user, login, logout } = useAuth();

  return (
    <div className="login-container">
      {user ? (
        <>
          <h2>Bienvenido, {user.displayName}</h2>
          <img src={user.photoURL} alt="Avatar" className="avatar" />
          <button onClick={logout} className="logout-btn">Cerrar sesión</button>
        </>
      ) : (
        <>
          <h2>Iniciar sesión</h2>
          <button onClick={login} className="login-btn">Acceder con Google</button>
        </>
      )}
    </div>
  );
};

export default Login;
