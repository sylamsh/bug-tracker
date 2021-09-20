const Themecolor = ["rgba(137, 30, 10, 1)", "rgba(215, 78, 9, 1)", "rgba(242, 187, 5, 1)"];
const BGcolor = ["rgba(137, 30, 10, 0.8)", "rgba(215, 78, 9, 0.8)", "rgba(242, 187, 5, 0.8)"];
const Tcolor = ["rgba(240, 240, 201, 1)", "rgba(247, 247, 233, 1)", "rgba(18, 78, 120, 1)"];

export default function PriorityController(priority) {
    if(priority === null) 
        return ({
            level : null,
            Themecolor : "rgba(18, 78, 120, 1)",
            BGcolor : "rgba(18, 78, 120, 0.8)",
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
