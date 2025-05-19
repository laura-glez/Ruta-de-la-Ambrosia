package eventosweb.restcontroller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import eventosweb.modelo.dao.TipoDao;
import eventosweb.modelo.entities.Tipo;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/tipo")
public class TipoRestController {
	@Autowired
	private TipoDao tdao;
	
	@GetMapping("/todos")
	public List<Tipo> todos(){
		return tdao.todos();
	}
	
	@GetMapping("/nombre/{cadena}")
	public List<Tipo> subcadena(@PathVariable String cadena){
		return tdao.porNombreContain(cadena);
	}
	
	@GetMapping("/uno/{idTipo}")
	public Tipo uno(@PathVariable Integer idTipo){
		return tdao.buscarUno(idTipo);
	}
	
	@PostMapping("/alta")
	public Tipo alta(@RequestBody Tipo tipo){
		return tdao.insertOne(tipo);
	}

}


