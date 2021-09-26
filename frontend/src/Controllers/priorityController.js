const Themecolor = ["rgba(246, 114, 128, 1)", "rgba(226, 62, 87, 1)", "rgba(82, 37, 70, 1)",
                    "rgba(87, 204, 153, 1)", "rgba(56, 163, 165, 1)", "rgba(34, 87, 122, 1)"];
const BGcolor = ["rgba(246, 114, 128, 0.8)", "rgba(226, 62, 87, 0.8)", "rgba(82, 37, 70, 0.8)",
                 "rgba(87, 204, 153, 0.8)", "rgba(56, 163, 165, 0.8)", "rgba(34, 87, 122, 0.8)"];
const Tcolor = ["white", "white", "white", "black", "black", "black"];
//rgba(18, 78, 120, 1)
// ["rgba(226, 62, 87, 1)", "rgba(136, 48, 78, 1)", "rgba(82, 37, 70, 1)",
// with BLUE - ["rgba(246, 114, 128, 1)", "rgba(192, 108, 132, 1)", "rgba(108, 91, 123, 1)",
export default function PriorityController(priority) {
    if(priority === null) 
        return ({
            level : null,
            Themecolor : "rgba(0, 0, 0, 1)",
            BGcolor : "rgba(0, 0, 0, 0.8)",
            Tcolor : "white",
        });
    const level = ["High", "Moderate", "Low", "High", "Moderate", "Low"];
    return ({
        level : level[priority - 1],
        Themecolor : Themecolor[priority - 1],
        BGcolor : BGcolor[priority - 1],
        Tcolor : Tcolor[priority - 1],
    })
}
