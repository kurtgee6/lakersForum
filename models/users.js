
module.exports = function(sequelize, Sequelize) {
    
    var Users = sequelize.define('users', {
    
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        name: {
            type: Sequelize.STRING
        },
        position: {
            type: Sequelize.STRING
        },
        location: {
            type: Sequelize.STRING
        },
        image: {
            type: Sequelize.STRING
        }
    });
    
    return Users;
 }
