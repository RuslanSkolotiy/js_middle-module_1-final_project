import * as React from "react";
const Volume = function ({ onChange }: { onChange: (value: number) => void }) {
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
