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
        status: {
          type: DataTypes.ENUM('creado', 'procesado', 'enviado', 'aceptado', 'rechazado'), 
          default:'creado',
          unique: false
        },
        presupuesto: {
          type: DataTypes.STRING(40), 
          unique: false
        },
        proyectos_propuestos: {
          type: DataTypes.JSON, 
          unique: false
        },
        promotores: {
            type: DataTypes.JSON,
            unique: false
        },
        objetivos: { 
            type: DataTypes.JSON,
          
        },
        metas: {
            type: DataTypes.JSON,
         
        },
        descripcion_iniciativa:  {
          type: DataTypes.JSON,
          
        },
        descripcion:  {
            type: DataTypes.TEXT,
        
        },
        justificacion: {
            type: DataTypes.TEXT,
           
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
  