package eventosweb.modelo.dao;

import java.util.List;

import eventosweb.modelo.entities.Evento;

public interface EventoDao {

	List<Evento> todos();
	List<Evento> porNombreContain(String cadena);
	Evento insertOne(Evento evento);
	Evento buscarUno(Integer idEvento);
	int eliminar(Integer idEvento);
}

