package eventosweb.restcontroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import eventosweb.modelo.dao.UsuarioDao;
import eventosweb.modelo.entities.Evento;
import eventosweb.modelo.entities.Perfil;
import eventosweb.modelo.entities.Usuario;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/usuario")
public class UsuarioRestController {
//	@Autowired
//	private UsuarioDao userdao;
//	@GetMapping("/todos")
//	public List<Usuario> todos(){
//		return userdao.todos();
//	}
//	
//	@GetMapping("/nombre/{cadena}")
//	public List<Usuario> subcadena(@PathVariable String cadena){
//		return userdao.porNombreContain(cadena);
//	}
//
//	@GetMapping("/uno/{idUsuario}")
//	public Usuario uno(@PathVariable Integer idUsuario){
//		return userdao.buscarUno(idUsuario);
//	}
//	
//	@PostMapping("/alta")
//	public Usuario alta(@RequestBody Usuario usuario) {
//	  return userdao.insertOne(usuario);
//	}
//	
//	 @DeleteMapping("/eliminar/{idUsuario}")
//	 public Integer Eliminar (@PathVariable Integer idUsuario) {
//		 return userdao.eliminar(idUsuario);
//	 }
//	 
//	 @PutMapping("/modificar")
//		public Integer modificar(@RequestBody Usuario usuario) {
//		 return userdao.modificar(usuario);
//		  
//		}
	 
}
