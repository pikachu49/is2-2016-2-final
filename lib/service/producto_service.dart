import '../repository/producto_repository.dart';
import '../model/producto.dart';
import 'dart:async';

class ProductoService {
  ProductoRepository productoRepository;
  ProductoService(this.productoRepository);

  Future<Producto> get(int id) {
    return productoRepository.find(id);
  }

  Future<List<Producto>> getAll() {
    return productoRepository.findAll();
  }
}