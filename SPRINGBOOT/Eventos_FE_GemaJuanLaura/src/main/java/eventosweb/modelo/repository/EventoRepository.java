package eventosweb.modelo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


import eventosweb.modelo.entities.Evento;

public interface EventoRepository extends JpaRepository<Evento, Integer>{
	public List<Evento> findByNombreContaining(String cadena);
}
