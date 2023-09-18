import { Link } from "react-router-dom";
import UserList from "./data.json";

export const ChatList = () => {
    return (
        <section className="ChatList-container">
            <ul className="ChatList-container__list">
                {UserList.map(
                    ({
                        id,
                        name,
                        surName,
                        username,
                        imageUrl,
                        statusNetwork,
                    }) => {
                        return;
                    }
                )}
            </ul>
        </section>
    );
};
