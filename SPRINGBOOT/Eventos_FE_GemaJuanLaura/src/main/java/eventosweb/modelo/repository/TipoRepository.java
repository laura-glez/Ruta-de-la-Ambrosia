package eventosweb.modelo.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import eventosweb.modelo.entities.Tipo;

public interface TipoRepository extends JpaRepository<Tipo, Integer>{
	
	public List<Tipo> findByNombreContaining(String cadena);
	


}
