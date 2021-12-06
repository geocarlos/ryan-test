import Content from './content/Content';
import './Home.scss';
import SideMenu from './side-menu/SideMenu';

const Home = () => {
    return (
        <div className="home">
            <SideMenu />
            <Content />
        </div>
    )
}

export default Home;