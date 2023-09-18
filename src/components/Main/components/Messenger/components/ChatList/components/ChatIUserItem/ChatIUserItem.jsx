export const ChatUserItem = ({ data }) => {
    const { name, surname, imageUrl, statusNetwork } = data;
    return (
        <li>
            <ul>
                <li>{statusNetwork}</li>
                <li>{name}</li>
                <li></li>
            </ul>
        </li>
    );
};
