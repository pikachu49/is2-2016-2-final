import '../repository/proveedor_repository.dart';
import '../model/proveedor.dart';
import 'dart:async';

class ProveedorService {
  ProveedorRepository proveedorRepository;
  ProveedorService(this.proveedorRepository);

  Future<Proveedor> get(int id) {
    return proveedorRepository.find(id);
  }

  Future<List<Proveedor>> getAll() {
    return proveedorRepository.findAll();
  }
}