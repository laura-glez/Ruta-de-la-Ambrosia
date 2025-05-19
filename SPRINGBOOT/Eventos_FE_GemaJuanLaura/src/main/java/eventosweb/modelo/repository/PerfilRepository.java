package eventosweb.modelo.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import eventosweb.modelo.entities.Perfil;

public interface PerfilRepository extends JpaRepository<Perfil, Integer>{
	
	public List<Perfil> findByNombreContaining(String cadena);
	
	//@Query("from Perfil p where p.nombre like ?1")
	//public List<Perfil> findByPerfil(String cadena);
	
	

}
