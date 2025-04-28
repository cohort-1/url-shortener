import {DataTypes, Sequelize} from 'sequelize';

export default (sequelize) => {
    const Url = sequelize.define(
        'Url',
        { 
            id: {
              type: DataTypes.INTEGER,
              primaryKey: true,
              autoIncrement: true,
              allowNull: false,
            },
            og_url: {
              type: DataTypes.STRING(100),
              allowNull: false,
            },
            url: {
              type: DataTypes.STRING(100),
              allowNull: false,
            },
            expiry_data: {
              type: DataTypes.DATE,
              allowNull: false,
            },
            user_id: {
              type: DataTypes.INTEGER,
              allowNull: false,
              references: {
                model: 'users',
                key: 'id',
              
              }
            },
            visits: {
              type: DataTypes.INTEGER,
              allowNull: false,
              defaultValue: 0,
            }
        },
        {
            tableName: 'urls',
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        }
    );

    return Url;

}