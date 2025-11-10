/*********************
        PASO 3-B (MODIFICADO)
        
        - Implementa los métodos del repositorio usando el modelo Mongoose SuperHero.
        - Añadimos métodos CRUD para satisfacer los endpoints requeridos.
*********************/

import SuperHero from '../models/SuperHero.mjs';
import IRepository from './IRepository.mjs';

class SuperHeroRepository extends IRepository {
  // Buscar por ID 
  async obtenerPorId(id) {
    return await SuperHero.findById(id);
  }

  // Obtener todos 
  async obtenerTodos() {
    return await SuperHero.find({});
  }

  // Buscar por atributo dinámico (por ejemplo: 'nombreReal' o 'planetaOrigen')
  async buscarPorAtributo(atributo, valor) {
    // Construimos un filtro dinámico. Usamos regex para búsquedas no exactas (insensible a mayúsculas)
    const filtro = {};
    filtro[atributo] = { $regex: new RegExp(valor, 'i') };
    return await SuperHero.find(filtro);
  }

  // Obtener superhéroes mayores de 30 años
  async obtenerMayoresDe30() {
    return await SuperHero.find({ edad: { $gt: 30 } });
  }

  // Crear un nuevo superhéroe
  async crear(documento) {
    const nuevo = new SuperHero(documento);
    return await nuevo.save();
  }

  // Actualizar superhéroe por id y devolver el documento actualizado
  async actualizar(id, datosActualizados) {
    // { new: true } devuelve el documento actualizado
    return await SuperHero.findByIdAndUpdate(id, datosActualizados, { new: true });
  }

  // Borrar por id y devolver el documento borrado
  async borrarPorId(id) {
    return await SuperHero.findByIdAndDelete(id);
  }

  // Borrar por nombre del superhéroe (nombreSuperHeroe) y devolver el documento borrado
  async borrarPorNombre(nombre) {
    // findOneAndDelete para borrar la primera coincidencia exacta (insensible a mayúsculas)
    return await SuperHero.findOneAndDelete({ nombreSuperHeroe: { $regex: new RegExp(`^${nombre}$`, 'i') } });
  }
}

export default new SuperHeroRepository(); 
