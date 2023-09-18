const shortId = require("short-uuid");

export const PostText = ({
    elements,
    Assets,
    Languages,
    getIconNameWithTheme,
    useDarkMode,
    GetLogo,
}) => {
    const PostValues = Languages.PostElements();
    const { postTitle, text, likes, dislikes, username, authorImageUrl, date } =
        elements;

    return (
        <li className="Posts-list__item-block" key={shortId.generate()}>
            <ul className="Posts-list__item-block-list">
                <li className="Posts-list__item-block-list_item-author">
                    <img
                        className="author-image"
                        src={authorImageUrl}
                        alt={`${username}`}
                    />
                    <p className="author-username">{username}</p>
                    <p className="post-photo-date">{date}</p>
                </li>
                <li className="Posts-list__item-block-list_item-text">
                    <p className="text-title">{postTitle}</p>
                    <p className="text-body">{text}</p>
                </li>
                <li className="Posts-list__item-block-list_item-actions">
                    {PostValues.map(({ img }) => {
                        return (
                            <li key={shortId.generate()}>
                                <GetLogo
                                    Assets={Assets}
                                    useDarkMode={useDarkMode}
                                    getIconNameWithTheme={getIconNameWithTheme}
                                    img={img}
                                />
                            </li>
                        );
                    })}
                    <p className="like-counter">{likes}</p>
                    <p className="dislike-counter">{dislikes}</p>
                </li>
            </ul>
        </li>
    );
};
