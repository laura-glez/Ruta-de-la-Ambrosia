package eventosweb.modelo.dto;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import eventosweb.modelo.dao.ReservaDao;
import eventosweb.modelo.dao.TipolDaoImplDataJpa;
import eventosweb.modelo.entities.Reserva;
import eventosweb.modelo.repository.EventoRepository;

public class ReservaDtoDaoImplJpa implements ReservaDtoDao{
	private ReservaDtoRepository prepo;
	@Override
	public List<ReservaDto> todos() {
		// TODO Auto-generated method stub
		return prepo.findAll();
	}

	@Override
	public List<ReservaDto> porNombreContain(String cadena) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ReservaDto insertOne(ReservaDto reservaDto) {
		try {
			return prepo.save(reservaDto);
		}catch(Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public ReservaDto buscarUno(Integer idReservaDto) {
		// TODO Auto-generated method stub
				return prepo.findById(idReservaDto).orElse(null);
			}


	@Override
	public int eliminar(Integer idReservaDto) {
		int filas=0;
		if(prepo.existsById(idReservaDto)) {
			try {
				prepo.deleteById(idReservaDto);
				filas = 1;
				;
			}catch (Exception e) {
				System.out.println(e.getMessage());
				filas=-1;
			}
		}else
			filas = 0;
		
		return filas;
	}
	

	@Override
	public int modificar(ReservaDto reservaDto) {
		int filas=0;
		if(prepo.existsById(reservaDto.getIdEvento())) {
			try {
				 prepo.save(reservaDto);
				 filas = 1;
			}catch(Exception e) {
				System.err.println(e.getMessage());
				filas= -1;
		}
			}else 
				filas= 0;
		
		return filas;
	}
}
