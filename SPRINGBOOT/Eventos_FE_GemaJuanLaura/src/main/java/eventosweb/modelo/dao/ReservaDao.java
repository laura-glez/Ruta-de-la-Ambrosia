package eventosweb.modelo.dao;

import java.util.List;

import eventosweb.modelo.entities.Reserva;

public interface ReservaDao {
	List<Reserva> todos();
	//List<Reserva> porNombreContain(String cadena);
	Reserva insertOne(Reserva reserva);
	Reserva buscarUno(Integer idReserva);
	int eliminar(Integer idReserva);
	int modificar(Reserva reserva);
}
