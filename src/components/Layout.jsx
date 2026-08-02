import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div className="site-wrapper">
    <a href="#main-content" className="skip-link">Skip to main content</a>
    <Navbar />
    {children}
    <Footer />
  </div>
);

export default Layout;
