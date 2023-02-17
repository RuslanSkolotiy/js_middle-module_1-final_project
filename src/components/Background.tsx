import * as React from "react";
const Background = function ({ value }: { value: string }) {
    return <div className={"main-app-bg " + value}></div>;
};

export default Background;
