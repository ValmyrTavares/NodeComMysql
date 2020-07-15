const Sequelize = require('sequelize')

//Conexão com o banco de dados Mysql
const sequelize = new Sequelize('postapp', 'root', 'Amanda@230406',{
    host:'localhost' ,
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize:sequelize
}