import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col min-h-[100vh]">
        <Outlet />
      </div>
      <Footer />
      <ToastContainer/>
    </>
  );
}

export default App;
