import '../repository/administrador_repository.dart';
import '../model/administrador.dart';
import 'dart:async';

class AdministradorService {
  AdministradorRepository administradorRepository;
  AdministradorService(this.administradorRepository);

  Future<Administrador> get(int id) {
    return administradorRepository.find(id);
  }

  Future<List<Administrador>> getAll() {
    return administradorRepository.findAll();
  }
}