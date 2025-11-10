
/*********************
        PASO 2 (MODIFICADO)
       Se agregan validaciones al esquema de Mongoose para reforzar la integridad de datos.
*********************/

import mongoose from 'mongoose';

// Definir el esquema con validaciones detalladas
const superheroSchema = new mongoose.Schema({
  nombreSuperHeroe: { 
    type: String, 
    required: [true, 'El nombre del superhéroe es obligatorio'],
    trim: true, // elimina espacios en blanco
    minlength: [3, 'El nombre del superhéroe debe tener al menos 3 caracteres'],
    maxlength: [60, 'El nombre del superhéroe no puede superar los 60 caracteres']
  },
  nombreReal: { 
    type: String, 
    required: [true, 'El nombre real es obligatorio'],
    trim: true,
    minlength: [3, 'El nombre real debe tener al menos 3 caracteres'],
    maxlength: [60, 'El nombre real no puede superar los 60 caracteres']
  },
  edad: { 
    type: Number, 
    required: [true, 'La edad es obligatoria'],
    min: [0, 'La edad no puede ser negativa'],
    validate: {
      validator: Number.isInteger, // asegura que sea número entero
      message: 'La edad debe ser un número entero'
    }
  },
  planetaOrigen: { 
    type: String, 
    default: 'Desconocido' 
  },
  debilidad: String,
  
  //  Validación avanzada para el array de poderes
  poderes: { 
    type: [String],
    required: [true, 'Debe tener al menos un poder'],
    validate: {
      validator: function (arr) {
        // Verifica que el array no esté vacío y cada elemento cumpla las condiciones
        return Array.isArray(arr) && arr.length > 0 && arr.every(p => 
          typeof p === 'string' &&
          p.trim().length >= 3 &&
          p.trim().length <= 60
        );
      },
      message: 'Cada poder debe ser una cadena de texto entre 3 y 60 caracteres'
    }
  },

  aliados: [String],
  enemigos: [String],
  creador: String,
  createdAt: { type: Date, default: Date.now }
});

const SuperHero = mongoose.model('SuperHero', superheroSchema, 'Grupo-XX');

export default SuperHero;
