package eventosweb.modelo.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import eventosweb.modelo.entities.Reserva;
import eventosweb.modelo.repository.ReservaRepository;
@Service
public class ReservaDaoImplDataJpa implements ReservaDao{
	private final EventoDaoImplDataJpa eventoDaoImplDataJpa;
    private final UsuarioDaoImplDataJpa usuarioDaoImplDataJpa;
	@Autowired
	private ReservaRepository rrepo;

	public ReservaDaoImplDataJpa(EventoDaoImplDataJpa eventoDaoImplDataJpa, UsuarioDaoImplDataJpa usuarioDaoImplDataJpa) {
	    this.eventoDaoImplDataJpa = eventoDaoImplDataJpa;
	    this.usuarioDaoImplDataJpa = usuarioDaoImplDataJpa;
	}
	 
	@Override
	public List<Reserva> todos() {
		// TODO Auto-generated method stub
		return rrepo.findAll();
	}

//	@Override
//	public List<Reserva> porNombreContain(String cadena) {
//		// TODO Auto-generated method stub
//		return rrepo.findByNombreContaining(cadena);
//	}

	@Override
	public Reserva insertOne(Reserva reserva) {
		try {
			return rrepo.save(reserva);
		}catch(Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public Reserva buscarUno(Integer idReserva) {
		// TODO Auto-generated method stub
		return rrepo.findById(idReserva).orElse(null);
	}

	@Override
	public int eliminar(Integer idReserva) {
		// TODO Auto-generated method stub
		int filas=0;
		if(rrepo.existsById(idReserva)) {
			try {
				rrepo.deleteById(idReserva);
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
	public int modificar(Reserva reserva) {
		int filas=0;
		if(rrepo.existsById(reserva.getIdReserva())) {
			try {
				rrepo.save(reserva);
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
