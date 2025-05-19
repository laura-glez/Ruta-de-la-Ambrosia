package eventosweb.modelo.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import eventosweb.modelo.entities.Evento;
import eventosweb.modelo.repository.EventoRepository;
@Service

public class EventoDaoImplDataJpa implements EventoDao{
	@Autowired
	private EventoRepository prepo;
	@Override
	public List<Evento> todos() {
		// TODO Auto-generated method stub
		return prepo.findAll();
	}

	@Override
	public List<Evento> porNombreContain(String cadena) {
		// TODO Auto-generated method stub
		return prepo.findByNombreContaining(cadena);
	}

	@Override
	public Evento insertOne(Evento evento) {
		try {
			return prepo.save(evento);
		}catch(Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public Evento buscarUno(Integer idEvento) {
		// TODO Auto-generated method stub
		return prepo.findById(idEvento).orElse(null);
	}

}
