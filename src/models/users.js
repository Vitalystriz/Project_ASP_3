let countID = 0;
const users = [];

const createUser = (name, password, phone, address) => {
    const user = {id: countID++, name, password, phone, address};
    users.push(user);
    return user;
};

const getUserByID = (id) => {
    return users.find(user => user.id === id);
}

const authentication = (name, password) => {
    return users.find(user => user.name === name && user.password === password);
}

module.exports = {
    createUser,
    getUserByID,
    authentication
};