const Menu = () => {
    return {
        en: [
            {
                id: 0,
                linkTo: "/profile",
                text: "Profile",
                img: "User3",
            },
            {
                id: 1,
                linkTo: "/feed",
                text: "Feed",
                img: "Newspaper",
            },
            {
                id: 2,
                linkTo: "/messenger",
                text: "Messenger",
                img: "Chat3",
            },
            {
                id: 3,
                linkTo: "/friends",
                text: "Friends",
                img: "Team",
            },
            {
                id: 4,
                linkTo: "/groups",
                text: "Communities",
                img: "Cup",
            },
            {
                id: 5,
                linkTo: "/settings",
                text: "Settings",
                img: "Settings5",
            },
        ],
        ua: [
            {
                id: 0,
                linkTo: "/profile",
                text: "Моя сторiнка",
                img: "User3",
            },
            {
                id: 1,
                linkTo: "/feed",
                text: "Новини",
                img: "Newspaper",
            },
            {
                id: 2,
                linkTo: "/messenger",
                text: "Месенджер",
                img: "Chat3",
            },
            {
                id: 3,
                linkTo: "/friends",
                text: "Друзi",
                img: "Team",
            },
            {
                id: 4,
                linkTo: "/groups",
                text: "Спільноти",
                img: "Cup",
            },
            {
                id: 5,
                linkTo: "/settings",
                text: "Налаштування",
                img: "Settings5",
            },
        ],
    };
};

const LocalizationButtons = () => {
    return [
        { id: 1, text: "UA", textId: "ua" },
        { id: 2, text: "EN", textId: "en" },
    ];
};

const ThemeSwitcherButtons = () => {
    return [
        { id: 1, text: "light", img: "Sun" },
        { id: 2, text: "dark", img: "Moon" },
    ];
};

const PostElements = () => {
    return [
        { id: 1, img: "ThumbUp" },
        { id: 2, img: "ThumbDown" },
        { id: 3, img: "Bookmark" },
    ];
};

export const Languages = {
    Menu,
    LocalizationButtons,
    ThemeSwitcherButtons,
    PostElements,
};
