module.exports = (sequelize, Sequelize, DataTypes) => {
    const Procesos = sequelize.define(
      "proceso", // Model name
      {
        // Model attributes
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        nombre: {
          type: DataTypes.STRING(40)
        },
        version: {
          type: DataTypes.STRING(25)
        },
        codigo_prefijo: {
          type: DataTypes.STRING(25)
        },
        tiene_sp: {
          type: DataTypes.ENUM('Si', 'No'),
          unique: false
        },
        objetivos: {
          type: DataTypes.STRING
        },
        alcance: {
          type: DataTypes.STRING
        },
        estado: {
          type: DataTypes.ENUM('Borrador', 'Habilitado'), 
          unique: false
        },
        actividades: {
          type: DataTypes.JSON
        },
        recursos: {
          type: DataTypes.JSON
        },
        created_at: {
          allowNull: false,
          type: DataTypes.DATE
        },
        updated_at: {
          allowNull: false,
          type: DataTypes.DATE
        }
      },
      {
        // Options
        timestamps: true,
        underscrored: true,
        createdAt: "created_at",
        updatedAt: "updated_at"
      }
    );
  
    return Procesos;
  };