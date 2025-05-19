package eventosweb.modelo.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import eventosweb.modelo.entities.Tipo;
import eventosweb.modelo.repository.TipoRepository;
@Service
public class TipolDaoImplDataJpa implements TipoDao{
	@Autowired
	private TipoRepository tipoRepo;
	@Override
	public List<Tipo> todos() {
		// TODO Auto-generated method stub
		return tipoRepo.findAll();
	}
	@Override
	public List<Tipo> porNombreContain(String cadena) {
		// TODO Auto-generated method stub
		return tipoRepo.findByNombreContaining(cadena);
	}
	@Override
	public Tipo insertOne(Tipo tipo) {
		try {
			return tipoRepo.save(tipo);
		}catch(Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	@Override
	public Tipo buscarUno(Integer idTipo) {
		// TODO Auto-generated method stub
		return tipoRepo.findById(idTipo).orElse(null);
	}

}

