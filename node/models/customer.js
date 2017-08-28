module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define('customer', {
        id:{
            autoIncrement:true,
            type:DataTypes.INTEGER,
            primaryKey:true,
            field:'id'
        },
        customerNumber:{
            type:DataTypes.INTEGER,
            field:'customerNumber'
        },
        address:{
            type:DataTypes.STRING,
            field: 'address'
        },
        customerStatus:{   //active, not active, dead
            type:DataTypes.STRING,
            field:'customerStatus'
        },
        bio:{
            type:DataTypes.STRING,
            field:'bio'
        },
        photo:{
            type:DataTypes.BLOB,
            field:'photo'
        },
        adminNotes:{
            type:DataTypes.STRING,
            field:'adminNotes'
        },
        latitude:{
			type:DataTypes.DOUBLE,
            field:'latitude'
		},
        longitude:{
			type:DataTypes.DOUBLE,
            field:'longitude'
		}
    });

    return Customer;
}
