/*********************
        PASO 3-A (MODIFICADO)
   
*********************/

class IRepository {
  obtenerPorId(id) {
    throw new Error("Método 'obtenerPorId()' no implementado");
  }

  obtenerTodos() {
    throw new Error("Método 'obtenerTodos()' no implementado");
  }

  buscarPorAtributo(atributo, valor) {
    throw new Error("Método 'buscarPorAtributo()' no implementado");
  }

  obtenerMayoresDe30() {
    throw new Error("Método 'obtenerMayoresDe30()' no implementado");
  }

  // Nuevos métodos añadidos para CRUD completo
  crear(documento) {
    throw new Error("Método 'crear()' no implementado");
  }

  actualizar(id, datosActualizados) {
    throw new Error("Método 'actualizar()' no implementado");
  }

  borrarPorId(id) {
    throw new Error("Método 'borrarPorId()' no implementado");
  }

  borrarPorNombre(nombre) {
    throw new Error("Método 'borrarPorNombre()' no implementado");
  }
}

export default IRepository;

