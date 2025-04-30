import { DataTypes, Sequelize } from 'sequelize';

export default (sequelize) => {
	const ExpiredUrl = sequelize.define('ExpiredUrl', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        og_url: {
          type: DataTypes.STRING(200),
          allowNull: false,
        },
        url: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        expired_at: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          unique: true,
          references: {
            model: `users`,
            key: `id`,
          }
        },
        visits: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 0,
        },
      },
    {
        tableName: 'expired_urls',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    })

    return ExpiredUrl
}
