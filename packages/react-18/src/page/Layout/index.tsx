import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ width: 500, borderRight: "1px solid" }}>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/useTransition1">useTransition1</Link>
        </div>
        <div>
          <Link to="/UseTransition2">UseTransition2</Link>
        </div>
        <div>
          <Link to="/MyUseDeferredValue">MyUseDeferredValue</Link>
        </div>
        <div>
          <Link to="/AutomaticBatching">AutomaticBatching</Link>
        </div>
        <div>
          <Link to="/MySuspenseSwr">MySuspenseSwr</Link>
        </div>
        <div>
          <Link to="/MySuspense">MySuspense</Link>
        </div>
        <div>
          <Link to="/MyUseLayoutEffect">MyUseLayoutEffect</Link>
        </div>
        <div>
          <Link to="/Concurrency">Concurrency</Link>
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
