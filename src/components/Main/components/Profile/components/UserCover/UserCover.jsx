export const UserCover = ({ Assets, Languages, Localization, useLanguage }) => {
    const { Logo, Images } = Assets;
    return (
        <section className="MainCover">
            <img src={Images.Cover} alt="Logo" />
        </section>
    );
};
