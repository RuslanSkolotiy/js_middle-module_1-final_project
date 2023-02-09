import * as React from "react";
const Volume = function ({ onChange }) {
    return (
        <div className="volume">
            <div>Volume</div>
            <div>
                <input
                    type="range"
                    onChange={(el) => onChange(el.target.value)}
                />
            </div>
        </div>
    );
};

export default Volume;
