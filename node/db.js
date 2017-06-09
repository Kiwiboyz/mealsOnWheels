const Sequelize = require('sequelize');
const mysql = require('mysql');

//initialising javascript - http://docs.sequelizejs.com/en/v3/docs/getting-started/
<<<<<<< HEAD

var sequelize = new Sequelize('mow', 'root', '1234', { //change the second
	host: 'localhost',
=======
var sequelize = new Sequelize('mow', 'root', '1234', { // MySQL login credentials, change the third string from "1234" to root
	host: '127.0.0.1',
>>>>>>> 173a2df6c6946f1b059a6a08b6727060a0f77ab1
	dialect: 'mysql',

	pool: {
		max: 5,
		min: 0,
		idle: 10000
	}
});

const db = {};
// This is the class definition that is being required
db.Sequelize = Sequelize;
// This is the instance being created
db.sequelize = sequelize;

//Models/tables
db.customer = require('./models/customer.js')(sequelize, Sequelize);
db.customerDay = require('./models/customerDay.js')(sequelize, Sequelize);
db.mealRequirement = require('./models/mealRequirement.js')(sequelize, Sequelize);
db.mealRequirementCategory = require('./models/mealRequirementCategory.js')(sequelize, Sequelize);
db.user = require('./models/user.js')(sequelize, Sequelize);
db.driver = require('./models/driver.js')(sequelize, Sequelize);

//Relationships
db.mealRequirement.belongsTo(db.mealRequirementCategory);
db.mealRequirementCategory.hasMany(db.mealRequirement);

db.mealRequirement.belongsToMany(db.customer, {through: "customerMealRequirement"});
db.customer.belongsToMany(db.mealRequirement, {through: "customerMealRequirement"});

db.customerDay.belongsTo(db.customer);
db.customer.hasMany(db.customerDay);

db.user.hasOne(db.customer); 
db.user.hasOne(db.driver);
db.customer.belongsTo(db.user);
db.driver.belongsTo(db.user);

<<<<<<< HEAD
=======

>>>>>>> 173a2df6c6946f1b059a6a08b6727060a0f77ab1
db.driver.belongsToMany(db.customer, {through: "customerDriver"});
db.customer.belongsToMany(db.driver, {through: "customerDriver"});

//create if not exists
db.sequelize.sync();

module.exports = db;
