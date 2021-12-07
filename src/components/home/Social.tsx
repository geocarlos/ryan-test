import './Social.scss';
import DiscordLogo from "../../assets/images/discord-logo.png";
import TwitterLogo from "../../assets/images/twitter_logo.png";
import MediumLogo from '../../assets/images/medium-logo.png';

const Social = () => {
    return (
        <div className="social">
            <img src={DiscordLogo} alt="Discord Logo" />
            <img src={TwitterLogo} alt="Discord Logo" />
            <img src={MediumLogo} alt="Discord Logo" />
        </div>
    );
}

export default Social;