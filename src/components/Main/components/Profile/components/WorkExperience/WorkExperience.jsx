import data from "./data.json";
import { WorkExperienceCard } from "./WorkExperienceCard";
const shortId = require("short-uuid");

export const WorkExperience = () => {
    return (
        <section className="WorkExperience">
            <p>Work Experience</p>
            <ul className="WorkExperience-list">
                {[...data]
                    .sort((a, b) => new Date(b.dateFrom) - new Date(a.dateFrom))
                    .map((values) => {
                        return (
                            <WorkExperienceCard
                                values={values}
                                key={shortId.generate()}
                            />
                        );
                    })}
            </ul>
        </section>
    );
};
