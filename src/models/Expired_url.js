import {DataTypes, Sequelize} from 'sequelize';

export default (sequelize) => {
    const Expired_url = sequelize.define(
        'Expired_url',
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
      expired_at: {
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
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      }
    },
        {
            tableName: 'expired_urls',
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        }
    );
    return Expired_url;
}
