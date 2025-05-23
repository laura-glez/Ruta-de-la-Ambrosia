package eventosweb.modelo.dto;

import java.io.Serializable;
import java.util.List;

import eventosweb.modelo.entities.Reserva;

public class ReservaDto implements Serializable{

	private static final long serialVersionUID = 1L;
	
	private Integer idReserva;
	private Integer idUsuario;
	private String email;
	private String nombre;
	private String apellidos;
	private Integer idEvento;
	private String nombreEvento;
	private Integer aforoMaximo;
	private Double precioEvento;
	private Integer cantidad;
	private Double precioVenta;
	
	


	public ReservaDto() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	public ReservaDto(Integer idReserva, Integer idUsuario, String email, String nombre, String apellidos,
			Integer idEvento, String nombreEvento, Integer aforoMaximo, Double precioEvento, Integer cantidad,
			Double precioVenta) {
		super();
		this.idReserva = idReserva;
		this.idUsuario = idUsuario;
		this.email = email;
		this.nombre = nombre;
		this.apellidos = apellidos;
		this.idEvento = idEvento;
		this.nombreEvento = nombreEvento;
		this.aforoMaximo = aforoMaximo;
		this.precioEvento = precioEvento;
		this.cantidad = cantidad;
		this.precioVenta = precioVenta;
	}



	public Integer getIdReserva() {
		return idReserva;
	}

	public void setIdReserva(Integer idReserva) {
		this.idReserva = idReserva;
	}


	public Integer getIdUsuario() {
		return idUsuario;
	}


	public void setIdUsuario(Integer idUsuario) {
		this.idUsuario = idUsuario;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}


	public String getApellidos() {
		return apellidos;
	}


	public void setApellidos(String apellidos) {
		this.apellidos = apellidos;
	}


	public Integer getIdEvento() {
		return idEvento;
	}


	public void setIdEvento(Integer idEvento) {
		this.idEvento = idEvento;
	}



	public String getNombreEvento() {
		return nombreEvento;
	}


	public void setNombreEvento(String nombreEvento) {
		this.nombreEvento = nombreEvento;
	}


	public Integer getAforoMaximo() {
		return aforoMaximo;
	}


	public void setAforoMaximo(Integer aforoMaximo) {
		this.aforoMaximo = aforoMaximo;
	}


	public Double getPrecioEvento() {
		return precioEvento;
	}


	public void setPrecioEvento(Double precioEvento) {
		this.precioEvento = precioEvento;
	}


	public Integer getCantidad() {
		return cantidad;
	}

	public void setCantidad(Integer cantidad) {
		this.cantidad = cantidad;
	}


	public Double getPrecioVenta() {
		return precioVenta;
	}


	public void setPrecioVenta(Double precioVenta) {
		this.precioVenta = precioVenta;
	}


	public static ReservaDto convert(Reserva reserva) {
		ReservaDto rdto = new ReservaDto();
		
		rdto.setIdReserva(reserva.getIdReserva());
		rdto.setIdUsuario(reserva.getUsuario().getIdUsuario());
		rdto.setEmail(reserva.getUsuario().getEmail());
		rdto.setNombre(reserva.getUsuario().getNombre());
		rdto.setApellidos(reserva.getUsuario().getApellidos());
		rdto.setIdEvento(reserva.getEvento().getIdEvento());
		rdto.setNombreEvento(reserva.getEvento().getNombre());
		rdto.setAforoMaximo(reserva.getEvento().getAforoMaximo());
		rdto.setPrecioEvento(reserva.getEvento().getPrecio());
		rdto.setCantidad(reserva.getCantidad());
		rdto.setPrecioVenta(reserva.getPrecioVenta());
				
		return rdto;
	}
	
	public static List<ReservaDto> converList (List<Reserva> reservas){
		return reservas.stream()
				.map(ele -> ReservaDto.convert(ele))
				.toList();
	}
}
