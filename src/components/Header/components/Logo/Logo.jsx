import React, { useState } from "react";

export const Logo = () => {
    const [noneClass, setNoneClass] = useState("none");
    return (
        <section className="HeaderLogo">
            <button>AcademiaConnect</button>
        </section>
    );
};
