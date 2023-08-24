import { ProfileComponents } from "./components/Components";

export const Profile = ({ Assets, Languages, Localization, useLanguage }) => {
    const { Cover, UserInfo, PostFeed } = ProfileComponents;

    return (
        <ul className="MainList">
            <li>
                <Cover
                    Assets={Assets}
                    Languages={Languages}
                    Localization={Localization}
                    useLanguage={useLanguage}
                />
            </li>
            <li>
                <UserInfo
                    Assets={Assets}
                    Languages={Languages}
                    Localization={Localization}
                    useLanguage={useLanguage}
                />
            </li>
            <li>
                <PostFeed
                    Assets={Assets}
                    Languages={Languages}
                    Localization={Localization}
                    useLanguage={useLanguage}
                />
            </li>
        </ul>
    );
};
