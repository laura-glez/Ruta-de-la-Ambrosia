package eventosweb.modelo.dao;

import java.util.List;

import eventosweb.modelo.entities.Reserva;

public interface ReservaDao {
	List<Reserva> buscarPorEvento(int idEvento);
	List<Reserva> buscarPorIdUsuario(int idUsuario);
	List<Reserva> buscarPorEmail(String email);
	List<Reserva> todos();
	//List<Reserva> porNombreContain(String cadena);
	Reserva insertOne(Reserva reserva);
	Reserva buscarUno(Integer idReserva);
	int eliminar(Integer idReserva);
	int modificar(Reserva reserva);
}
