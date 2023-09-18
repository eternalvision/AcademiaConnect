import Friends from "./data.json";
import { Link } from "react-router-dom";
const shortId = require("short-uuid");

export const UserFriends = ({ NetworkStatus }) => {
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
                            <li key={shortId.generate()}>
                                <Link
                                    to={`/friends/${username}`}
                                    rel={`${name} ${surName}`}>
                                    <NetworkStatus
                                        status={statusNetwork}
                                        imageUrl={imageUrl}
                                        name={name}
                                        surName={surName}
                                        imageWidth={70}
                                        imageHeight={70}
                                    />
                                </Link>
                            </li>
                        );
                    }
                )}
            </ul>
        </section>
    );
};
