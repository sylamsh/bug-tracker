import bugModel from "../Models/bugModel";

export function retrieveBugs() {
    let data = {};

    data.push(new bugModel({
        _id : 514065410614,
        name : "Crash on load",
        details : "Crashes after 3 seconds",
        steps : "Open application and it crashes",
        assigned : "Sylamsh",
        creator : "John",
        priority : 1,
        time : "23:37",
    }));
    data.push(new bugModel({
        _id : 514065410615,
        name : "Won't load",
        details : "Crashes after 3 seconds",
        steps : "Open application and it crashes",
        assigned : "Samuel L.Jackson",
        creator : "Captain Hello World",
        priority : 3,
        time : "23:38",
    }));

    let sorted = data.sort((a, b) => a.priority - b.priority);
    return sorted;
}