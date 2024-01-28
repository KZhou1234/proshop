import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@email.com',
        password: bcrypt.hashSync('123456', 10),//hash the password
        isAdmin: true,
    },
    {
        name: 'User2',
        email: 'user2@email.com',
        password: bcrypt.hashSync('123456', 10),//hash the password
        isAdmin: false,
    },
    {
        name: 'User3',
        email: 'user3@email.com',
        password: bcrypt.hashSync('123456', 10),//hash the password
        isAdmin: false,
    },
    {
        name: 'User4',
        email: 'user4@email.com',
        password: bcrypt.hashSync('123456', 10),//hash the password
        isAdmin: false,
    },
];
export default users;