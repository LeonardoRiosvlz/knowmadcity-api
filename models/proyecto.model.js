module.exports = (sequelize, Sequelize, DataTypes) => {
    const Proyectos = sequelize.define(
      "proyecto", // Model name
      {
        // Attributes
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true 
        },  
        numero: {
          type: DataTypes.STRING(10), 
          unique: false
        },
        titulo: {
            type: DataTypes.STRING(40), 
            unique: false
        },
        promotores: {
            type: DataTypes.JSON,
            unique: false
        },
        obejetivos: {
            type: DataTypes.JSON,
            unique: false
        },
        metas: {
            type: DataTypes.JSON,
            unique: false
        },
        descripcion_iniciativa: {
            type: DataTypes.TEXT,
            unique: false
        },
        justificacion: {
            type: DataTypes.TEXT,
            unique: false
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
  
    return Proyectos;
  };
  