import data from "./data.json";

export const WorkExperience = ({
    Assets,
    Languages,
    Localization,
    useLanguage,
}) => {
    return (
        <section className="WorkExperience">
            <p>Work Experience</p>
            <ul className="WorkExperience-list">
                {[...data]
                    .sort((a, b) => new Date(b.dateFrom) - new Date(a.dateFrom))
                    .map(
                        ({
                            id,
                            dateFrom,
                            dateTo,
                            companyName,
                            logoLink,
                            job,
                            jobTitle,
                        }) => {
                            return (
                                <li
                                    className="WorkExperience-list__item"
                                    key={`${id}${companyName}`}>
                                    <img
                                        width={80}
                                        height={80}
                                        src={logoLink}
                                        alt={companyName}
                                    />
                                    <section className="WorkExperience-list__item-workInfo">
                                        <ul>
                                            <li className="CompanyName">
                                                {companyName}
                                            </li>
                                            <li className="Job">
                                                {job}
                                                <span>{" | "}</span>
                                                {jobTitle}
                                            </li>
                                            <li className="WorkDates">
                                                {dateFrom}
                                                <span>{" - "}</span>
                                                {dateTo}
                                            </li>
                                        </ul>
                                    </section>
                                </li>
                            );
                        }
                    )}
            </ul>
        </section>
    );
};
