import { Outlet, Link } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <nav>
        
        <ul>
          <li>
            <img className = "logo"src="https://meiquer.mx/static/logo-meiquer-72606e65ccfae2d8a7a43745ac48a593.svg" alt = "EstacionMeiquer404"></img><Link to="/">Imaginantes</Link>
          </li>
          <li>
            <Link to="/Update">Actualizar</Link>
          </li>
          <li>
            <Link to="/actividades">Actividades</Link>
          </li>
          <li>
            <Link to="/UpdateAct">Actualizar actividades</Link>
          </li>
          <li>
            <Link to="/Asignar">Asignaciones</Link>
          </li>
          <li>
            <Link to="/UpdateA">Actualizar Asignaciones</Link>
          </li>
          <li>
            <Link to="/Request">Solicitudes de cambio</Link>
          </li>
        </ul> 
      </nav>
      <Outlet />
    </>
  )
};
export default Layout;