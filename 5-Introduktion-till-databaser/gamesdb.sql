CREATE DATABASE gamesdb;

USE gamesdb;

CREATE TABLE game (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  genre VARCHAR(50) NOT NULL,
  release_date DATE NOT NULL,
  publisher VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
) DEFAULT CHARACTER SET utf8mb4 ENGINE=InnoDB;

INSERT INTO games (name, genre, release_date, publisher)
VALUES
  ('The Legend of Zelda: Breath of the Wild', 'Action-adventure', '2017-03-03', 'Nintendo'),
  ('Red Dead Redemption 2', 'Action-adventure', '2018-10-26', 'Rockstar Games'),
  ('Minecraft', 'Sandbox', '2011-11-18', 'Mojang Studios'),
  ('The Witcher 3: Wild Hunt', 'Action role-playing', '2015-05-19', 'CD Projekt'),
  ('Fortnite', 'Battle royale', '2017-07-25', 'Epic Games'),
  ('Overwatch', 'First-person shooter', '2016-05-24', 'Blizzard Entertainment'),
  ('Dark Souls III', 'Action role-playing', '2016-04-12', 'FromSoftware'),
  ('Hollow Knight', 'Action-adventure', '2017-02-24', 'Team Cherry'),
  ('Fallout 4', 'Action role-playing', '2015-11-10', 'Bethesda Game Studios'),
  ('Grand Theft Auto V', 'Action-adventure', '2013-09-17', 'Rockstar Games'),
  ('Counter-Strike: Global Offensive', 'First-person shooter', '2012-08-21', 'Valve Corporation'),
  ('League of Legends', 'Multiplayer online battle arena', '2009-10-27', 'Riot Games'),
  ('Among Us', 'Social deduction', '2018-06-15', 'InnerSloth'),
  ('Resident Evil Village', 'Survival horror', '2021-05-07', 'Capcom'),
  ('Super Mario Odyssey', 'Platformer', '2017-10-27', 'Nintendo'),
  ('Cyberpunk 2077', 'Action role-playing', '2020-12-10', 'CD Projekt'),
  ('Bioshock Infinite', 'First-person shooter', '2013-03-26', 'Irrational Games'),
  ('Stardew Valley', 'Simulation', '2016-02-26', 'ConcernedApe'),
  ('Persona 5', 'Role-playing', '2016-09-15', 'Atlus'),
  ('The Last of Us Part II', 'Action-adventure', '2020-06-19', 'Naughty Dog'),
  ('Horizon Zero Dawn', 'Action role-playing', '2017-02-28', 'Guerrilla Games');