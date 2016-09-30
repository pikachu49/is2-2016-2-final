import 'dart:async';
import 'package:rpc/rpc.dart';

import '../service/usuario_service.dart';
import '../model/usuario.dart';

@ApiClass(name: 'usuario', version: 'v1', description: 'User server side API')
class UsuarioRest {
  UsuarioService usuarioService;

  UsuarioRest(this.usuarioService);

  @ApiMethod(path: 'usuario/{id}')
  Future<Usuario> getUsuario(String id) {
    return usuarioService.get(int.parse(id));
  }

  @ApiMethod(path: 'all')
  Future<List<Usuario>> getUsuarios() {
    return usuarioService.getAll();
  }
}
