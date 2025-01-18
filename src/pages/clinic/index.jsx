import "./Clinic.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Main from "../../components/main/Main";

const Clinic = () => {
  return (
    <main className="main-div flex">
      <Sidebar />
      <Main />
    </main>
  );
};

export default Clinic;
