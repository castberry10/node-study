const Sequelize = require('sequelize');

module.exports = class Hash extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            title:{
                type: Sequelize.STRING(15),
                allowNull: false,
                unique: true,
            },

        },{
            sequelize,
            timestamps: true,
            underscored:false,
            modelName: 'Post',
            tableName: 'posts',
            paranoid: false,
            charset: 'utf8mb4',
            collate: 'utfmb4_general_ci',

        });
    }
    static associate(db){}
    
};