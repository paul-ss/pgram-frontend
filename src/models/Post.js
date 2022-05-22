import User from './User.js'

export default class Post {
    constructor(post, user) {
        this.id = post.id;
        this.user = new User(user);
        this.group = post.group;
        this.content = post.content;
        this.created = post.created;
        this.image = post.image;

        this.likesNum = post.likesNum;
        this.commentsNum = post.commentsNum;
    }
}

export class PostFull extends Post {
    constructor(data) {
        super(data);
        this.comments = data.comments;
    }
}