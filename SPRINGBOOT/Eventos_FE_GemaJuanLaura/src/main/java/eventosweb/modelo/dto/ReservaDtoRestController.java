package eventosweb.modelo.dto;

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

import eventosweb.modelo.entities.Evento;
import eventosweb.modelo.entities.Reserva;

	@RestController
	@CrossOrigin(origins = "*")
	@RequestMapping("/reserva")
public class ReservaDtoRestController {
		@Autowired
		private ReservaDtoDao rDtodao;
		
		@GetMapping("/todos")
		public List<ReservaDto> todos(){
			return rDtodao.todos();
		}
		
		@GetMapping("/nombre/{cadena}")
		public List<ReservaDto> subcadena(@PathVariable String cadena){
			return rDtodao.porNombreContain(cadena);
		}
		
		@GetMapping("/uno/{idEvento}")
		public ReservaDto uno(@PathVariable Integer idReservaDto){
			return rDtodao.buscarUno(idReservaDto);
		}
		
		@PostMapping("/alta")
		public ReservaDto alta(@RequestBody ReservaDto reservaDto) {
		  return rDtodao.insertOne(reservaDto);
		}
		
		 @DeleteMapping("/eliminar/{idEvento}")
		 public Integer Eliminar (@PathVariable int idReservaDto) {
			 return rDtodao.eliminar(idReservaDto);
		 }
		 
		 @PutMapping("/modificar")
			public Integer modificar(@RequestBody ReservaDto reservaDto) {
			 return rDtodao.modificar(reservaDto);
			  
			}
	}		    

