CREATE TABLE usuario
(
  id integer,
  nick varchar(255),
  passwd varchar(255),
  tipo varchar(255)
);

INSERT INTO usuario(id,nick,passwd,tipo) VALUES(1,'chucho123','droidex','A');
INSERT INTO usuario(id,nick,passwd,tipo) VALUES(2,'andre','chucho123','B');