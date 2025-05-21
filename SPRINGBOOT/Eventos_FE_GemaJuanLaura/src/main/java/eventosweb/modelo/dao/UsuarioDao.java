package eventosweb.modelo.dao;

import java.util.List;

import eventosweb.modelo.entities.Usuario;

public interface UsuarioDao {
	List<Usuario> todos();
	List<Usuario> porNombreContain(String cadena);
	Usuario insertOne(Usuario usuario);
	Usuario buscarUno(Integer idUsuario);
	int eliminar(Integer idUsuario);
	int modificar(Usuario usuario);
}