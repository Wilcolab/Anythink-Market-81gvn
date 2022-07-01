require("dotenv").config();
const _ = require('underscore')
const mongoose = require("mongoose");

require("../models/User");
require("../models/Item");
require("../models/Comment");

const Item = mongoose.model("Item");
const Comment = mongoose.model("Comment");
const User = mongoose.model("User");


/*
    This is a seed file that populates the database with data.
*/
/*
*/

const createItemImage = (num) =>
`https://image-charts.com/chart?chs=700x190&chd=t:${100-num},${num}&cht=p3&chl=Hello%7CWorld&chan&chf=ps0-0,lg,45,ffeb3b,0.2,f44336,1|ps0-1,lg,45,8bc34a,0.2,009688,1`

const createUser = (num) => {
    const username = `user${num}`;
    const user = new User({
        username,
        email: `${username}@acme.com`,
        bio: `${username} is a user`,
        image: `https://www.veryicon.com/icons/miscellaneous/myicon-1/user${(num % 6) + 1}-1.html`,
        role: 'user',
        favorites: [],
        following: [],
        hash: 'hash',
        salt: 'salt',
    });
    user.setPassword(`${username}123`);
    return user;
}

const createItem = (num, seller) => new Item({
    slug: `item${num}`,
    title: `Item ${num}`,
    description: `This is item ${num}`,
    image: createItemImage(num),
    favoritesCount: 0,
    comments: [],
    tagList: [],
    seller,
});

const createComment = (num, seller, item) => new Comment({
    body: `Comment ${num}`,
    seller,
    item,
});

const initMongo = async () => {
    await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
}

const seed = async () => {
    await initMongo();
    const users = [];
    const items = [];
    const comments = [];
    for (let i = 0; i < 100; i++) {
        users.push(createUser(i));
        items.push(createItem(i, users[i]._id));
        comments.push(createComment(i, users[i]._id, items[i]._id));
        items[i].comments.push(comments[i]._id);
    }
    await Promise.all(users.map(user => user.save()));
    await Promise.all(items.map(item => item.save()));
    await Promise.all(comments.map(comment => comment.save()));
    await mongoose.disconnect();
}

seed().then(() => {
    console.log('Seeded DB');
}).catch(err => {
    console.log('Failed to seed DB', err);
});
