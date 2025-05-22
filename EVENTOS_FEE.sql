CREATE DATABASE EVENTOS_FP_FEE;
USE EVENTOS_FP_FEE;

CREATE TABLE TIPOS
(ID_TIPO INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
NOMBRE VARCHAR(45) NOT NULL,
DESCRIPCION VARCHAR(200)
);
insert into TIPOS ( NOMBRE, DESCRIPCION)
		   values ( "Vinos", "Catas de vinos.");
insert into TIPOS ( NOMBRE, DESCRIPCION)
		   values ("Cervezas", "Catas de cerveza.");
insert into TIPOS ( NOMBRE, DESCRIPCION)
		   values ("Cócteles", "Catas de cócteles.");
CREATE TABLE PERFILES
(ID_PERFIL INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
NOMBRE VARCHAR(45) NOT NULL
);

insert into perfiles values(1,'ADMON'), (2,'CLIENTE');

CREATE TABLE USUARIOS
(ID_USUARIO INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
email VARCHAR(45) NOT NULL UNIQUE,
PASSWORD VARCHAR(250) NOT NULL,
NOMBRE VARCHAR(50),
APELLIDOS VARCHAR(100),
ENABLED INT NOT NULL DEFAULT 1,
FECHA_REGISTRO DATE,
ID_PERFIL INT NOT NULL,
foreign key(ID_PERFIL) REFERENCES PERFILES(ID_PERFIL)
);

insert into usuarios values
(1, 'ramon@fp.com', '12345', 'Ramon', 'Santaolaya Lopez',1,  '2024-03-15', 1),
(2, 'eva@fp.com', '12345', 'Eva', 'Goma Papel',1,  '2025-01-15', 2);



CREATE TABLE EVENTOS
(ID_EVENTO INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
nombre varchar(50) not null,
DESCRIPCION VARCHAR(200),
FECHA_INICIO DATE,
UNIDAD_DURACION ENUM('HORAS', 'DIAS'),
DURACION INT,
DIRECCION VARCHAR(100),
AFORO_MAXIMO INT,
ESTADO ENUM('ACTIVO', 'TERMINADO' ,'CANCELADO') default 'ACTIVO',
DESTACADO ENUM('S', 'N'),
PRECIO DOUBLE,
ID_TIPO INT NOT NULL,
FECHA_ALTA DATE,
FOREIGN KEY(ID_TIPO) REFERENCES TIPOS(ID_TIPO)
);

insert into EVENTOS (nombre, DESCRIPCION,FECHA_INICIO,UNIDAD_DURACION,DURACION,DIRECCION,AFORO_MAXIMO,ESTADO,DESTACADO,PRECIO,ID_TIPO,FECHA_ALTA) 
			 values ("Cata vinos Bodega Los Reyes",
             "Experiencia groumet en la bodega Los Reyes", 
             "2025-04-12","HORAS", 
             2,
             "Bodega de los reyes, calle de los reyes, 3", 
             30, 
             "ACTIVO", 
             "S", 
             28, 
             1, 
             "2025-05-19");
             
insert into EVENTOS (nombre, DESCRIPCION,FECHA_INICIO,UNIDAD_DURACION,DURACION,DIRECCION,AFORO_MAXIMO,ESTADO,DESTACADO,PRECIO,ID_TIPO,FECHA_ALTA) 
			 values ("Vinos y quesos italianos premium en cata",
             "Just Italia te ofrece un plan insuperable, relación calidad precio, una cata como si estuvieras en Italia, con 5 vinos, y una tabla con la mejor selección de 4 de los mejores quesos italianos.", 
             "2025-04-12",
             "HORAS", 
             2,
             "Just Italia, Calle de Castelló, 113", 
             30, 
             "ACTIVO", 
             "S", 
             28, 
             1, 
             "2025-05-19");
             
insert into EVENTOS (nombre, DESCRIPCION,FECHA_INICIO,UNIDAD_DURACION,DURACION,DIRECCION,AFORO_MAXIMO,ESTADO,DESTACADO,PRECIO,ID_TIPO,FECHA_ALTA) 
			 values ("Cata de vinos con un experto enólogo",
             "Disfruta y aprende sobre el vino en este curso de iniciación a la cata con el experto Jesús Flores Téllez, reconocido enólogo, sumiller y Premio Nacional de Gastronomía. ", 
             "2025-04-12",
             "HORAS", 
             3,
             "Aula Española del Vino Simancas, 5- C", 
             30, 
             "ACTIVO", 
             "N", 
             28, 
             1, 
             "2025-05-19");
             
insert into EVENTOS (nombre, DESCRIPCION,FECHA_INICIO,UNIDAD_DURACION,DURACION,DIRECCION,AFORO_MAXIMO,ESTADO,DESTACADO,PRECIO,ID_TIPO,FECHA_ALTA) 
			 values ("Mundo de la cerveza en este taller con cata",
             "Entre Cepas te propone experimentar y compartir unas sensaciones que quizá hayas notado alguna vez en los bares, pero que seguramente nunca te has parado a pensar en ellas.", 
             "2025-04-12",
             "HORAS", 
             4,
             "FITENI I Calle López de Hoyos, 42", 
             30, 
             "ACTIVO", 
             "S", 
             28, 
             2, 
             "2025-05-19");
             
insert into EVENTOS (nombre, DESCRIPCION,FECHA_INICIO,UNIDAD_DURACION,DURACION,DIRECCION,AFORO_MAXIMO,ESTADO,DESTACADO,PRECIO,ID_TIPO,FECHA_ALTA) 
			 values ("Cervezas artesanas y quesos eco",
             "Si eres de los que no puede pasar sin una buena cerveza bien fresca, conocerás las cervezas artesanas. ¿Aún no?", 
             "2025-04-12",
             "HORAS", 
             2,
             "C/ Francisco Silvela, 25", 
             30, 
             "ACTIVO", 
             "N", 
             28, 
             2, 
             "2025-05-19");
             
insert into EVENTOS (nombre, DESCRIPCION,FECHA_INICIO,UNIDAD_DURACION,DURACION,DIRECCION,AFORO_MAXIMO,ESTADO,DESTACADO,PRECIO,ID_TIPO,FECHA_ALTA) 
			 values ("Visita La Caníbal fábrica de cerveza con cata",
             "Sumérgete en el proceso cervecero, desde la magia de la elaboración hasta la cata de sus últimas creaciones.", 
             "2025-04-12",
             "HORAS", 
             3,
             "Julián Camarillo 19", 
             30, 
             "ACTIVO", 
             "S", 
             28, 
             2, 
             "2025-05-19");
             
insert into EVENTOS (nombre, DESCRIPCION,FECHA_INICIO,UNIDAD_DURACION,DURACION,DIRECCION,AFORO_MAXIMO,ESTADO,DESTACADO,PRECIO,ID_TIPO,FECHA_ALTA) 
			 values ("Taller de gin-tonic",
             "Camuflado en los bajos de un edificio de la Dreta de l’Eixample se encuentra el local de Cocktail Shop.", 
             "2025-04-12",
             "HORAS", 
             2,
             "Roger de Llúria, 46 Bajos", 
             30, 
             "ACTIVO", 
             "S", 
             28, 
             3, 
             "2025-05-19");
             
insert into EVENTOS (nombre, DESCRIPCION,FECHA_INICIO,UNIDAD_DURACION,DURACION,DIRECCION,AFORO_MAXIMO,ESTADO,DESTACADO,PRECIO,ID_TIPO,FECHA_ALTA) 
			 values ("Masterclass de coctelería, crea y disfruta",
             "La magia del Jardinet es de sobra conocida. Su decoración y su atmósfera evocan un oasis en mitad de la ciudad, que resalta sobre lo cotidiano.", 
             "2025-04-12",
             "HORAS", 
             3,
             "Carrer Mozart, 4", 
             30, 
             "ACTIVO", 
             "N", 
             28, 
             3, 
             "2025-05-19");

CREATE TABLE RESERVAS
(ID_RESERVA INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
ID_USUARIO INT NOT NULL,
ID_EVENTO INT NOT NULL,
PRECIO_VENTA DOUBLE,
OBSERVACIONES VARCHAR(200),
CANTIDAD INT not null default 1,
FOREIGN KEY(ID_USUARIO) REFERENCES USUARIOS(ID_USUARIO),
FOREIGN KEY(ID_EVENTO) REFERENCES EVENTOS(ID_EVENTO),
unique(id_usuario,id_evento),
CHECK(CANTIDAD BETWEEN 1 AND 10)
);

INSERT INTO RESERVAS (ID_RESERVA, ID_USUARIO, ID_EVENTO, PRECIO_VENTA, OBSERVACIONES, CANTIDAD)
VALUES 
(1, 2, 1, 20.5, 'Reserva para cata vinos Bodega los reyes', 2),  
(2, 2, 2, 15.0, 'Reserva para cata de vinos y quesos italianos premium', 1),  
(3, 2, 3, 30.0, 'Reserva para cata de vinos con un experto enólogo', 3);


