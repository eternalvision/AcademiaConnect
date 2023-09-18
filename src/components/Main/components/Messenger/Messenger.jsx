import { MessengerComponents } from "./components/Components";
const { MessagePanel, ChatList } = MessengerComponents;

export { MessagePanel };

export const Messenger = ({ Assets, Languages, Localization, useLanguage }) => {
    return (
        <section className="Messenger">
            <ul className="MessengerList">
                <li>
                    <MessagePanel />
                </li>
                <li>
                    <ChatList />
                </li>
            </ul>
        </section>
    );
};
