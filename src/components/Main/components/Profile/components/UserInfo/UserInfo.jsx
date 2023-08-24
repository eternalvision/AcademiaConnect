export const UserInfo = ({ Assets, Languages, Localization, useLanguage }) => {
    const { Logo, Images } = Assets;

    return (
        <section className="MainUserInfo">
            <ul className="MainUserInfo-list">
                <li className="MainUserInfo-item__Photo">
                    <img
                        width={250}
                        height={250}
                        src={Images.Author}
                        alt="Alexandr Priadchenko"
                    />
                </li>
                <li className="MainUserInfo-item__UserInfo">
                    <ul className="UserInfo">
                        <li className="UserInfo-Name">
                            Sasha Priadchenko{" "}
                            <span className="UserInfo-Status">
                                Happy Coding!
                            </span>
                        </li>
                        <li className="UserInfo-UserName">@deavision</li>

                        <li className="UserInfo-Academy">
                            DSEA | Automation of production processes
                        </li>
                        <li className="UserInfo-Age">29.05.2001</li>
                        <li className=""></li>
                    </ul>
                </li>
            </ul>
        </section>
    );
};
