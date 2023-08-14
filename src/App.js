import { Components } from "./components/Components";
import { Assets } from "./assets/Assets";

export const App = () => {
    return (
        <>
            <Components.Header Assets={Assets} />
            <Components.Main Assets={Assets} />
            <Components.Footer Assets={Assets} />
        </>
    );
};
