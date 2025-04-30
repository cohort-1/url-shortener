import { DataTypes, Sequelize } from 'sequelize';

export default (sequelize) => {
    const Url = sequelize.define('Url', { 
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
        expiry_date: {
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
        }
      },
      {
        tableName: 'urls',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    }
    )

      return Url
}