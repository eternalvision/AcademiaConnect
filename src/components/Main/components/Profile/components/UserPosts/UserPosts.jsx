import PostsData from "./data.json";
const shortId = require("short-uuid");

export const UserPosts = ({
    Assets,
    Languages,
    getIconNameWithTheme,
    useDarkMode,
    GetLogo,
    Posts,
}) => {
    const { PostPhoto, PostText, PostVideo } = Posts;

    return (
        <section className="Posts">
            <ul className="Posts-list">
                {PostsData.sort((a, b) => {
                    const formatDate = (date) =>
                        date.split(".").reverse().join("");
                    return formatDate(b.date) - formatDate(a.date);
                }).map((e) => {
                    if (e.imageLink != null) {
                        return (
                            <PostPhoto
                                key={shortId.generate()}
                                elements={e}
                                Assets={Assets}
                                Languages={Languages}
                                getIconNameWithTheme={getIconNameWithTheme}
                                useDarkMode={useDarkMode}
                                GetLogo={GetLogo}
                            />
                        );
                    } else if (e.imageLink === null) {
                        return (
                            <PostText
                                key={shortId.generate()}
                                elements={e}
                                Assets={Assets}
                                Languages={Languages}
                                getIconNameWithTheme={getIconNameWithTheme}
                                useDarkMode={useDarkMode}
                                GetLogo={GetLogo}
                            />
                        );
                    }
                    return "";
                })}
            </ul>
        </section>
    );
};
