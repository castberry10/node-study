const Sequelize = request(Sequelize);

module.exports = class Post extends Sequelize.module{
    static init(sequelize) {
        return super.init({
            content: {
                type: Sequelize.STRING(140),
                allowNull: false,
            },
            img:{
                type:Sequelize.STRING(200),
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'Post',
            tableName: 'posts',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associate(db){
        db.Post.belongTo(db.User);
        db.Post.belongToMany(db.Hashtag, {through: 'PostHashtag'});
    }
};