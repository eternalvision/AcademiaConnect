import Posts from "./data.json";

export const UserPosts = ({ Assets, Languages, Localization, useLanguage }) => {
    return (
        <section className="Posts">
            <ul className="Posts-list">
                {Posts.map(
                    ({
                        id,
                        image,
                        postTitle,
                        text,
                        likes,
                        username,
                        authorImageUrl,
                    }) => {
                        return (
                            <li
                                className="Posts-list__item-block"
                                key={`${id}${postTitle}`}>
                                {image ? (
                                    <img width={500} src={image} alt="" />
                                ) : (
                                    ""
                                )}
                                <p>
                                    <b>{postTitle}</b>
                                </p>
                                <p>{text}</p>
                            </li>
                        );
                    }
                )}
            </ul>
        </section>
    );
};
