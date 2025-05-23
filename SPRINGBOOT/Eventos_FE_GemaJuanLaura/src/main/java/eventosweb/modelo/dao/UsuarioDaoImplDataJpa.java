package eventosweb.modelo.dao;

import java.util.List;
import eventosweb.restcontroller.UsuarioRestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import eventosweb.modelo.entities.Usuario;
import eventosweb.modelo.repository.ReservaRepository;
import eventosweb.modelo.repository.UsuarioRepository;

@Service
public class UsuarioDaoImplDataJpa implements UsuarioDao{

    private final UsuarioRestController usuarioRestController;
	
	private final PerfilDaoImplDataJpa perfilDaoImplDataJpa;
	@Autowired
	private UsuarioRepository urepo;

	UsuarioDaoImplDataJpa(PerfilDaoImplDataJpa perfilDaoImplDataJpa, UsuarioRestController usuarioRestController){
		this.perfilDaoImplDataJpa = perfilDaoImplDataJpa;
		this.usuarioRestController = usuarioRestController;}
	
	@Override
	public List<Usuario> todos() {
		// TODO Auto-generated method stub
		return urepo.findAll();
	}

	@Override
	public List<Usuario> porNombreContain(String cadena) {
		// TODO Auto-generated method stub
		return urepo.findByNombreContaining(cadena);
	}

	@Override
	public Usuario insertOne(Usuario usuario) {
		// TODO Auto-generated method stub
		try {
			return urepo.save(usuario);
		}catch(Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public Usuario buscarUno(Integer idUsuario) {
		// TODO Auto-generated method stub
		return urepo.findById(idUsuario).orElse(null);
	}

	@Override
	public int eliminar(Integer idUsuario) {
		// TODO Auto-generated method stub
		int filas=0;
		if(urepo.existsById(idUsuario)) {
			try {
				urepo.deleteById(idUsuario);
				filas = 1;
				;
			}catch (Exception e) {
				System.out.println(e.getMessage());
				filas=-1;
			}
		}else
			filas = 0;
		
		return filas;
	}

	@Override
	public int modificar(Usuario usuario) {
		int filas=0;
		if(urepo.existsById(usuario.getIdUsuario())) {
			try {
				urepo.save(usuario);
				 filas = 1;
			}catch(Exception e) {
				System.err.println(e.getMessage());
				filas= -1;
		}
			}else 
				filas= 0;
		
		return filas;
	}


}
