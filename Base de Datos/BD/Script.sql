DROP DATABASE IF EXISTS taller_pi;
CREATE DATABASE taller_pi;

USE taller_pi;

CREATE TABLE Editorial(
    id varchar(5) primary key,
    nombre varchar(150) not null ,
    pais varchar(70) not null ,
    ciudad varchar(70) not null
);

CREATE TABLE Autor(
    id int primary key,
    nombres varchar(150) not null ,
    apellidos varchar(70) not null
);

CREATE TABLE Cliente(
    dpi numeric primary key,
    nombres varchar(150) not null ,
    apellidos varchar(70) not null ,
    telefono varchar(9) not null
);

CREATE TABLE Libro(
    codigo varchar(5) primary key,
    nombre varchar(150) not null ,
    edicion int not null ,
    stock int not null,
    editorial_id varchar(5) not null
);

ALTER TABLE Libro
    ADD  FOREIGN KEY (editorial_id) REFERENCES Editorial(id);

CREATE TABLE Reserva(
    libro_codigo varchar(5) not null,
    cliente_dpi numeric not null
);

ALTER TABLE Reserva
    ADD  FOREIGN KEY (libro_codigo) REFERENCES Libro(codigo);

ALTER TABLE Reserva
    ADD  FOREIGN KEY (cliente_dpi) REFERENCES Cliente(dpi);

CREATE TABLE Autoria(
    libro_codigo varchar(5) not null,
    autor_id int not null
);

ALTER TABLE Autoria
    ADD  FOREIGN KEY (libro_codigo) REFERENCES Libro(codigo);

ALTER TABLE Autoria
    ADD  FOREIGN KEY (autor_id) REFERENCES Autor(id);

