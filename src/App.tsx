import * as React from "react";
import Background from "./components/Background";
import Volume from "./components/Volume";
import data from "./data";

const audio: HTMLAudioElement = new Audio();

type MusicCategory = {
    id: number;
    name: string;
    "icon-class": string;
    "background-class": string;
    description: string;
    title: string;
    music: string[];
};

const App: React.FunctionComponent = function () {
    const [category, setCategory] = React.useState<MusicCategory>(data[0]);
    const [volume, setVolume] = React.useState<number>(0.5);
    const [playing, setPlaying] = React.useState<boolean>(false);
    const [paused, setPaused] = React.useState<boolean>(false);

    const getRamdomMusic = (array: string[]): string => {
        return array[Math.floor(Math.random() * array.length)];
    };

    const playRandomMusicFromCaregory = (
        musicCategory: MusicCategory
    ): void => {
        audio.pause();
        audio.src = getRamdomMusic(musicCategory.music);
    };

    const pause = (): void => {
        if (audio.paused) {
            audio.play();
            setPlaying(true);
            setPaused(false);
        } else {
            audio.pause();
            setPlaying(false);
            setPaused(true);
        }
    };

    const selectCategory = (musicCategory: MusicCategory): void => {
        setCategory(musicCategory);
        if (musicCategory.id === category.id && audio.readyState >= 2) {
            pause();
        } else {
            playRandomMusicFromCaregory(musicCategory);
            setPaused(false);
        }
    };

    React.useEffect(() => {
        audio.volume = volume;
    }, [volume]);

    React.useEffect(() => {
        const onEndPlay = () => {
            playRandomMusicFromCaregory(category);
        };
        const onCanPlay = () => {
            setPlaying(true);
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
                    {data.map((item) => {
                        return (
                            <div
                                key={item.id}
                                className={
                                    item["icon-class"] +
                                    " " +
                                    item["background-class"] +
                                    " " +
                                    (playing && item.id === category.id
                                        ? "playing"
                                        : "") +
                                    (paused && item.id === category.id
                                        ? "paused"
                                        : "")
                                }
                                onClick={() => selectCategory(item)}
                            ></div>
                        );
                    })}
                </div>
            </div>
            <Volume
                onChange={(value: number) => setVolume(value / 100)}
            ></Volume>
        </>
    );
};

export default App;
