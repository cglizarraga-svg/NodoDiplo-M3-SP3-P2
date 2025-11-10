/*********************
        PASO 5 (MODIFICADO)
        Agregar validaciones previas en el controlador POST para complementar
         las validaciones del modelo.
********************/

export async function crearSuperheroeController(req, res) {
  try {
    const datos = req.body;

    // Validaciones manuales adicionales 
    const errores = [];

    // Validar nombreSuperHeroe
    if (!datos.nombreSuperHeroe || typeof datos.nombreSuperHeroe !== 'string') {
      errores.push('El nombre del superhéroe es obligatorio y debe ser texto.');
    } else if (datos.nombreSuperHeroe.trim().length < 3 || datos.nombreSuperHeroe.trim().length > 60) {
      errores.push('El nombre del superhéroe debe tener entre 3 y 60 caracteres.');
    }

    // Validar nombreReal
    if (!datos.nombreReal || typeof datos.nombreReal !== 'string') {
      errores.push('El nombre real es obligatorio y debe ser texto.');
    } else if (datos.nombreReal.trim().length < 3 || datos.nombreReal.trim().length > 60) {
      errores.push('El nombre real debe tener entre 3 y 60 caracteres.');
    }

    // Validar edad
    if (datos.edad === undefined || datos.edad === null) {
      errores.push('La edad es obligatoria.');
    } else if (isNaN(datos.edad) || datos.edad < 0) {
      errores.push('La edad debe ser un número mayor o igual a 0.');
    }

    // Validar poderes
    if (!Array.isArray(datos.poderes) || datos.poderes.length === 0) {
      errores.push('Debe incluir al menos un poder.');
    } else {
      const poderesInvalidos = datos.poderes.filter(p => 
        typeof p !== 'string' ||
        p.trim().length < 3 ||
        p.trim().length > 60
      );
      if (poderesInvalidos.length > 0) {
        errores.push('Cada poder debe ser texto entre 3 y 60 caracteres.');
      }
    }

    // Si hay errores, se devuelven sin intentar guardar
    if (errores.length > 0) {
      return res.status(400).json({
        mensaje: 'Datos inválidos en la solicitud',
        errores
      });
    }

    // Si todo está bien, se crea el superhéroe
    const creado = await crearSuperheroe(datos);
    const creadoFormateado = renderizarSuperheroe(creado);
    res.status(201).json(creadoFormateado);

  } catch (error) {
    // Captura errores de validación de Mongoose
    res.status(500).send({
      mensaje: 'Error al crear el superhéroe',
      error: error.message
    });
  }
}