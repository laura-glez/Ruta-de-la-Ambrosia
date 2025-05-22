package eventosweb.modelo.dto;

import eventosweb.modelo.entities.Reserva;

public class ReservaDto {

	private Integer id;
	private Integer idUsuario;
	private String nombre;
	private String apellidos;
	private Integer idEvento;
	private String nombreEvento;
	private Integer aforoMaximo;
	private Double precio;
	private Integer cantidad;
	private Double precioAplicado;

	public ReservaDto() {
		super();
	}

	public ReservaDto(Integer id, Integer idUsuario, String nombre, String apellidos, Integer idEvento,
			String nombreEvento, Integer aforoMaximo, Double precio, Integer cantidad, Double precioAplicado) {
		super();
		this.id = id;
		this.idUsuario = idUsuario;
		this.nombre = nombre;
		this.apellidos = apellidos;
		this.idEvento = idEvento;
		this.nombreEvento = nombreEvento;
		this.aforoMaximo = aforoMaximo;
		this.precio = precio;
		this.cantidad = cantidad;
		this.precioAplicado = precioAplicado;
	}
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getIdUsuario() {
		return idUsuario;
	}

	public void setIdUsuario(Integer idUsuario) {
		this.idUsuario = idUsuario;
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

	public Double getPrecio() {
		return precio;
	}

	public void setPrecio(Double precio) {
		this.precio = precio;
	}

	public Integer getCantidad() {
		return cantidad;
	}

	public void setCantidad(Integer cantidad) {
		this.cantidad = cantidad;
	}

	public Double getPrecioAplicado() {
		return precioAplicado;
	}

	public void setPrecioAplicado(Double precioAplicado) {
		this.precioAplicado = precioAplicado;
	}






	public void convertirReservaDto (Reserva reserva) {
		
		setId(reserva.getIdReserva());
		setIdUsuario(reserva.getUsuario().getIdUsuario());
		setNombre(reserva.getUsuario().getNombre());
		setApellidos(reserva.getUsuario().getApellidos());
		setIdEvento(reserva.getEvento().getIdEvento());
		setNombreEvento(reserva.getEvento().getNombre());
		setAforoMaximo(reserva.getEvento().getAforoMaximo());
		setPrecio(reserva.getEvento().getPrecio());
		setCantidad(reserva.getCantidad());
		setPrecioAplicado(reserva.getPrecioVenta());
	}
}