const Themecolor = ["rgba(137, 30, 10, 1)", "rgba(215, 78, 9, 1)", "rgba(232, 181, 14, 1)"];
const BGcolor = ["rgba(137, 30, 10, 0.8)", "rgba(215, 78, 9, 0.8)", "rgba(232, 181, 14, 0.8)"];
const Tcolor = ["white", "white", "rgba(18, 78, 120, 1)"];

export default function PriorityController(priority) {
    if(priority === null) 
        return ({
            level : null,
            Themecolor : "rgba(24, 154, 180, 1)",
            BGcolor : "rgba(24, 154, 180, 0.8)",
            Tcolor : "white",
        });
    const level = ["High", "Moderate", "Low"];
    return ({
        level : level[priority - 1],
        Themecolor : Themecolor[priority - 1],
        BGcolor : BGcolor[priority - 1],
        Tcolor : Tcolor[priority - 1],
    })
}
