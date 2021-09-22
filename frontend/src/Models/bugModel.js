export default function bug(bug){
    if(bug !== undefined) {
        // this._id = bug._id;
        this.name = bug.name;
        this.details = bug.details;
        this.steps = bug.steps;
        this.version = bug.version;
        this.priority = bug.priority;
        this.assigned = bug.assigned;
        this.creator = bug.creator;
    } else {
        // this._id = Math.floor(Math.random()*900000000000);
        this.name = '';
        this.details = '';
        this.steps = '';
        this.version = '';
        this.priority = '';
        this.assigned = '';
        this.creator = '';
    }
}