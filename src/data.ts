import rainSound from "./assets/sounds/rain.mp3";
import summerSound from "./assets/sounds/summer.mp3";
import winterSound from "./assets/sounds/winter.mp3";

export default [
    {
        id: 1,
        name: "Rain",
        "icon-class": "icon-rain",
        "background-class": "bg-rainy",
        description: "",
        title: "",
        music: [rainSound],
    },
    {
        id: 2,
        name: "Summer",
        "icon-class": "icon-sun",
        "background-class": "bg-summer",
        description: "",
        title: "",
        music: [summerSound],
    },
    {
        id: 3,
        name: "Winter",
        "icon-class": "icon-snow",
        "background-class": "bg-winter",
        description: "",
        title: "",
        music: [winterSound],
    },
];
