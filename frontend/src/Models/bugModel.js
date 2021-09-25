export default function bug(bug){
    if(bug !== undefined) {
        this.title = bug.title;
        this.details = bug.details;
        this.steps = bug.steps;
        this.version = bug.version;
        this.priority = bug.priority;
        this.assigned = bug.assigned;
        this.creator = bug.creator;
        this.devResponse = bug.devResponse;
    } else {
        this.title = '';
        this.details = '';
        this.steps = '';
        this.version = '';
        this.priority = '';
        this.assigned = '';
        this.creator = '';
        this.devResponse = '';
    }
}