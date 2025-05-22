package eventosweb.modelo.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.DeleteMapping;

import eventosweb.modelo.entities.Reserva;

public interface ReservaRepository extends JpaRepository<Reserva, Integer>{
	
}