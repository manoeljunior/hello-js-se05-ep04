--select j.nomejogador, eq.nomeequipe from jogador as j, escalacao as es, equipe as eq
--where  es.idjogador = j.idjogador
--and es.idequipe = 2
--and eq.idequipe = es.idequipe


create table partida (
	idpartida integer not null primary key autoincrement,
	num_turno int not null,
	dt_partida timestamp,
	gols_mandante int not null,
	gols_visitante int not null,
	gols_pen_mandante int,
	gols_pen_visitante int,
	fl_encerrado boolean,
	idmandante integer not null,
	idvisitante integer not null,
	constraint kpartida unique (idmandante, idvisitante, num_turno),
	foreign key (idmandante) references equipe(idequipe),
	foreign key (idvisitante) references equipe(idequipe)
);
	
	