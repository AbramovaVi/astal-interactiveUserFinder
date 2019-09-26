
getUsers = (data, firstName) => data.filter(item => item.firstName.includes(firstName));

module.exports = {
    getUsers
};
