export default function user(user){
    if(user !== undefined) {
        this.userName = user.userName;
        this.email = user.email;
        this.password = user.password;
        this.role = user.role;
    } else {
        this.userName = '';
        this.email = '';
        this.password = '';
        this.role = '';
    }
}