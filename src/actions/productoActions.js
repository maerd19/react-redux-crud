import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  GUARDAR_PRODUCTO_ERROR,
} from "./../types";

// Crear nuevos productod
export function crearNuevoProductoAction(producto) {
  return () => {
    console.log(producto);
  };
}
