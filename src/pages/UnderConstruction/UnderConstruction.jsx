import BeingBuilt from "../../components/BeingBuilt/BeingBuilt";
import Header from "../../components/Header/Header";
import "./UnderConstruction.scss";
function UnderConstruction() {
  return (
    <div className="under-construction">
      <Header />
      <div className="under-construction__container">
        <BeingBuilt />
      </div>
    </div>
  );
}

export default UnderConstruction;
