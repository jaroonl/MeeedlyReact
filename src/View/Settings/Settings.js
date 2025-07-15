import Navigation from "../../Components/Navigation/Navigation";
import Footer from '../../Components/Footer/Footer';
import '../../Style/Settings/Settings.css';
const Settings = () => {
  return (
    <div className="page-wrapper">
      <Navigation />
      <main className="main-content settings-content">
        <div className="settings-container">
          <h1>Settings Page</h1>
          <p>Settings will go here.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Settings;
