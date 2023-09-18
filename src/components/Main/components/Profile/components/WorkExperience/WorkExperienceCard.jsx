export const WorkExperienceCard = ({ values }) => {
    const { dateFrom, dateTo, companyName, logoLink, job, jobTitle } = values;
    return (
        <li className="WorkExperience-list__item">
            <img width={80} height={80} src={logoLink} alt={companyName} />
            <section className="WorkExperience-list__item-workInfo">
                <ul>
                    <li className="CompanyName">{companyName}</li>
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
};
