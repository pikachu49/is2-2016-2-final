import '../repository/usuario_repository.dart';
import '../model/usuario.dart';
import 'dart:async';

class UsuarioService {
  UsuarioRepository usuarioRepository;
  UsuarioService(this.usuarioRepository);

  Future<Usuario> get(int id) {
    return usuarioRepository.find(id);
  }

  Future<List<Usuario>> getAll() {
    return usuarioRepository.findAll();
  }
}