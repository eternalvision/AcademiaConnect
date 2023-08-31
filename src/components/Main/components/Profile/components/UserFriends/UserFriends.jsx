import Friends from "./data.json";
import { Link } from "react-router-dom";

export const UserFriends = ({
    Assets,
    Languages,
    Localization,
    useLanguage,
}) => {
    // const { Logo, Images } = UserFriends;
    return (
        <section className="UserFriends">
            <ul className="UserFriends-list">
                {Friends.map(
                    ({
                        id,
                        name,
                        surName,
                        username,
                        statusNetwork,
                        imageUrl,
                    }) => {
                        return (
                            <li key={`${id}${username}`}>
                                <Link
                                    to={`/friends/${username}`}
                                    rel={`${name} ${surName}`}>
                                    <section>
                                        <img
                                            src={imageUrl}
                                            alt={`${name} ${surName}`}
                                            width={70}
                                            height={70}
                                        />
                                        <span
                                            className={
                                                statusNetwork
                                                    ? "online"
                                                    : "offline"
                                            }></span>
                                    </section>
                                </Link>
                            </li>
                        );
                    }
                )}
            </ul>
        </section>
    );
};
