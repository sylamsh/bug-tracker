import bugModel from "../Models/bugModel";

export function retrieveBugs() {
    let data = [];

    data.push({
        _id : 514065410614,
        name : "Crash on load",
        details : "Crashes after 3 seconds. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, sint? Dignissimos architecto quasi quas esse ad suscipit totam. Vero, fuga.",
        steps : "Open application and it crashes",
        version : "0.v2",
        priority : 1,
        assigned : "Sylamsh",
        creator : "John",
        time : "23:37",
    });
    data.push({
        _id : 514065410615,
        name : "Won't load",
        details : "Crashes after 3 seconds. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, sint? Dignissimos architecto quasi quas esse ad suscipit totam. Vero, fuga.",
        steps : "Open application and it crashes",
        version : "2.v4",
        priority : 3,
        assigned : "Samuel L.Jackson",
        creator : "Captain Hello World",
        time : "23:38",
    });

    let sorted = data.sort((a, b) => a.priority - b.priority);
    return sorted;
}

