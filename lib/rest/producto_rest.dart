import 'dart:async';
import 'package:rpc/rpc.dart';

import '../service/producto_service.dart';
import '../model/producto.dart';

@ApiClass(name: 'producto', version: 'v1', description: 'User server side API')
class ProductoRest {
  ProductoService productoService;

  ProductoRest(this.userService);

  @ApiMethod(path: 'producto/{id}')
  Future<Producto> getProducto(String id) {
    return productoService.get(int.parse(id));
  }

  @ApiMethod(path: 'all')
  Future<List<Producto>> getProductos() {
    return productoService.getAll();
  }
}
