package eventosweb.modelo.dto;

import java.util.List;

public interface ReservaDtoDao {
	List<ReservaDto> todos();
	List<ReservaDto> porNombreContain(String cadena);
	ReservaDto insertOne(ReservaDto evento);
	ReservaDto buscarUno(Integer idEvento);
	int eliminar(Integer idEvento);
	int modificar(ReservaDto evento);
}
