import * as React from "react";
type Props = {
    onChange: (value: number) => void;
};

const Volume: React.FunctionComponent<Props> = function ({ onChange }) {
    return (
        <div className="volume">
            <div>Volume</div>
            <div>
                <input
                    type="range"
                    onChange={(el: React.ChangeEvent<HTMLInputElement>) =>
                        onChange(Number(el.target.value))
                    }
                />
            </div>
        </div>
    );
};

export default Volume;
