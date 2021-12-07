import Content from '../content/Content';
import './Home.scss';
import SideMenu from '../side-menu/SideMenu';
import Footer from './Social';

const Home = () => {
    return (
        <div className="home">
            <SideMenu />
            <Content />
            <Footer />
        </div>
    )
}

export default Home;