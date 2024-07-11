require('dotenv').config();
const {Sequelize, DataTypes, Model, Op} = require('sequelize');
const sequelize = new Sequelize(process.env.POSTGRES_URL);

/*
we can also pass separate params
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle'
});
*/

//here we are defining a model
//calling sequelize.define(modelName, attributes, options)
const aUser = sequelize.define(
    'auser',
    {
        firstName:{ type: DataTypes.STRING, allowNull: false},
        lastName: {type: DataTypes.STRING},
    }
    //{ other options would go here like tabelName: `name` }
);
console.log(aUser === sequelize.models.aUser); //this line just says if a user is a model
//the models should be stores in a separate file with all of the models in the real project

(async ()=>{

    //await sequelize.sync({force: true});

    /*const person = aUser.build({firstName: 'michael', lastName: 'jackson'});
    await person.save()
    */
    //instead of instance an obj we can use a shortcurt, the create method

    /*
    const person = await aUser.create({firstName: 'michael', lastName: 'jackson'});
    const personA = await aUser.create({firstName: 'sandra', lastName: 'rosa madalena'});
    await personA.reload();
    */

    /* a simpels select * query
    const everyone = await aUser.findAll();
    console.log(everyone[0].firstName); or: JSON.stringfy(everyone, null, 2)
    */

    const everyone = await aUser.findAll({
        attributes: ['firstName', 'lastName'],
        where: {
            [Op.and]: [{firstName: 'Ana'}, {id: 12}]
        }
    });
    console.log(JSON.stringify(everyone, null, 2));

})()
//module.exports = { };