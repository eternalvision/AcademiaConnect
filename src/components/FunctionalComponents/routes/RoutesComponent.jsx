import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

export const RoutesComponent = ({
    MainComponents,
    Assets,
    Languages,
    Localization,
    useLanguage,
}) => {
    const { Profile, Feed, Messenger, Friends, Groups, Settings } =
        MainComponents;

    return (
        <Routes>
            <Route path="*" element={<Navigate to="/feed" />} />
            <Route path="/" element={<Navigate to="/feed" />} />
            <Route
                path="/feed"
                element={
                    <Feed
                        Assets={Assets}
                        Languages={Languages}
                        Localization={Localization}
                        useLanguage={useLanguage}
                    />
                }
            />
            <Route
                path="/profile"
                element={
                    <Profile
                        Assets={Assets}
                        Languages={Languages}
                        Localization={Localization}
                        useLanguage={useLanguage}
                    />
                }
            />
            <Route
                path="/messenger"
                element={
                    <Messenger
                        Assets={Assets}
                        Languages={Languages}
                        Localization={Localization}
                        useLanguage={useLanguage}
                    />
                }
            />
            <Route
                path="/friends"
                element={
                    <Friends
                        Assets={Assets}
                        Languages={Languages}
                        Localization={Localization}
                        useLanguage={useLanguage}
                    />
                }
            />
            <Route
                path="/groups"
                element={
                    <Groups
                        Assets={Assets}
                        Languages={Languages}
                        Localization={Localization}
                        useLanguage={useLanguage}
                    />
                }
            />
            <Route
                path="/settings"
                element={
                    <Settings
                        Assets={Assets}
                        Languages={Languages}
                        Localization={Localization}
                        useLanguage={useLanguage}
                    />
                }
            />
        </Routes>
    );
};
