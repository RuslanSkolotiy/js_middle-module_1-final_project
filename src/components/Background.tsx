import * as React from "react";
type Props = {
    value: string;
};
const Background: React.FunctionComponent<Props> = function ({ value }) {
    return <div className={"main-app-bg " + value}></div>;
};

export default Background;
