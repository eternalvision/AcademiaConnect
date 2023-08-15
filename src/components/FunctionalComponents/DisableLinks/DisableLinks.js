import { useEffect, useCallback } from "react";

export const DisableLinks = () => {
    const handleClick = useCallback((event) => {
        const { classList } = event.target;
        if (
            classList.contains("activeLanguage") ||
            classList.contains("activeMenu")
        ) {
            event.preventDefault();
        }
    }, []);

    useEffect(() => {
        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, [handleClick]);

    return null;
};
