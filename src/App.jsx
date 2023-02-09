import * as React from "react";
import Background from "./components/Background";
import Volume from "./components/Volume";
import data from "./data";

const audio = new Audio();

const App = function () {
    const [category, setCategory] = React.useState(data[0]);
    const [volume, setVolume] = React.useState(0.5);

    const getRamdomMusic = (array) => {
        return array[Math.floor(Math.random() * array.length)];
    };

    const playRandomMusicFromCaregory = (musicCategory) => {
        console.log("musicCategory", musicCategory);
        audio.pause();
        audio.src = getRamdomMusic(musicCategory.music);
    };

    const selectCategory = (musicCategory) => {
        setCategory(musicCategory);
        playRandomMusicFromCaregory(musicCategory);
    };

    React.useEffect(() => {
        audio.volume = volume;
    }, [volume]);

    React.useEffect(() => {
        const onEndPlay = () => {
            console.log("onEndPlay");
            playRandomMusicFromCaregory(category);
        };
        const onCanPlay = () => {
            console.log("onCanPlay");
            audio.play();
        };
        audio.addEventListener("ended", onEndPlay);
        audio.addEventListener("canplay", onCanPlay);
        return () => {
            audio.removeEventListener("ended", onEndPlay);
            audio.removeEventListener("canplay", onCanPlay);
        };
    }, [category]);

    return (
        <>
            <Background value={category["background-class"]}></Background>
            <div className="menu">
                <h1>Weather sounds</h1>
                <div className="buttons">
                    {data.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className={
                                    item["icon-class"] +
                                    " " +
                                    item["background-class"]
                                }
                                onClick={() => selectCategory(item)}
                            ></div>
                        );
                    })}
                </div>
            </div>
            <Volume onChange={(value) => setVolume(value / 100)}></Volume>
        </>
    );
};

export default App;
