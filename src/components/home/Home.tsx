import Content from '../content/Content';
import './Home.scss';
import SideMenu from '../side-menu/SideMenu';
import Social from './Social';
import ContentBlock from './ContentBlock';

const Home = () => {
    return (
        <div className="home">
            <SideMenu />
            <Content />
            <ContentBlock />
            <Social />
        </div>
    )
}

export default Home;