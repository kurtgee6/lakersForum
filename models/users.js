
module.exports = function(sequelize, Sequelize) {
    
    var Article = sequelize.define('article', {
    
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        name: {
            type: Sequelize.STRING
        },
        topic: {
            type: Sequelize.STRING
        },
        location: {
            type: Sequelize.STRING
        },
        image: {
            type: Sequelize.STRING
        }
    });
    
    return Article;
 }
