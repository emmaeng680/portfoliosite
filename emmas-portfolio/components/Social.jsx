import Link from "next/link";
import {FaGithub, FaLinkedin, FaTwitter, FaInstagram} from "react-icons/fa";

const socials = [
    {
        icons: <FaGithub/>,
        path: ''
    },
    {
        icons: <FaLinkedin/>,
        path: ''
    },
    {
        icons: <FaTwitter/>,
        path: ''
    },
    {
        icons: <FaInstagram/>,
        path: ''
    },
]

const Social = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            {socials.map((social, index) => {
                return (
                    <Link key={index} href={social.path} className={iconStyles}>
                        {social.icon}
                    </Link>
                )
            })}
        </div>
    );
};

export default Social;