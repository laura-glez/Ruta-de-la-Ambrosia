package eventosweb.modelo.dao;

import java.util.List;
import eventosweb.modelo.entities.Tipo;

public interface TipoDao {
	
	List<Tipo> todos();
	List<Tipo> porNombreContain(String cadena);
	Tipo insertOne(Tipo tipo);
	Tipo buscarUno(Integer idTipo);
	

}
