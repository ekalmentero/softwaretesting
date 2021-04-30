CREATE TABLE aluno (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    matricula VARCHAR(255) NOT NULL,
    ativo BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE professor (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    matricula VARCHAR(255) NOT NULL,
    ativo BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE disciplina (
    id INT AUTO_INCREMENT PRIMARY KEY,
    codigo VARCHAR(20) NOT NULL,
    nome VARCHAR(255) NOT NULL,
    ativo BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE periodo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ano INT NOT NULL,
    semestre INT NOT NULL,
    ativo BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE turma (
    id INT AUTO_INCREMENT PRIMARY KEY,
    codigo VARCHAR(20) NOT NULL,
    id_periodo INT NOT NULL,
    id_professor INT NOT NULL,
    id_disciplina INT NOT NULL,
    FOREIGN KEY(id_periodo) REFERENCES periodo(id),
    FOREIGN KEY(id_professor) REFERENCES professor(id),
    FOREIGN KEY(id_disciplina) REFERENCES disciplina(id),
    ativo BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE avaliacao (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nota DECIMAL(5, 2) NOT NULL,
    peso INT NOT NULL,
    id_turma INT NOT NULL,
    id_aluno INT NOT NULL,
    FOREIGN KEY(id_turma) REFERENCES turma(id),
    FOREIGN KEY(id_aluno) REFERENCES aluno(id),
    ativo BOOLEAN NOT NULL DEFAULT TRUE
);

----------------------------------------
-- INSERT DE ALUNOS
----------------------------------------

insert into aluno (nome, matricula) values ('Brendin Witul', '257389');
insert into aluno (nome, matricula) values ('Arlyn Lidgate', '598444');
insert into aluno (nome, matricula) values ('Janie Wornum', '300427');
insert into aluno (nome, matricula) values ('Pamelina Giovannilli', '611276');
insert into aluno (nome, matricula) values ('Alfy Craister', '508010');
insert into aluno (nome, matricula) values ('Quintina Ramelot', '707824');
insert into aluno (nome, matricula) values ('Arlana Crowth', '924847');
insert into aluno (nome, matricula) values ('Mar Bransdon', '880829');
insert into aluno (nome, matricula) values ('Kathlin Steed', '428208');
insert into aluno (nome, matricula) values ('Harbert Leahy', '816002');
insert into aluno (nome, matricula) values ('Lezlie Vreiberg', '607744');
insert into aluno (nome, matricula) values ('Norry Smeeton', '490081');
insert into aluno (nome, matricula) values ('Marjory Kurtis', '962555');
insert into aluno (nome, matricula) values ('Temple Hadlee', '326806');
insert into aluno (nome, matricula) values ('Mickey Behr', '132461');
insert into aluno (nome, matricula) values ('Bette-ann Hadye', '285769');
insert into aluno (nome, matricula) values ('Hermie Donavan', '393463');
insert into aluno (nome, matricula) values ('Sallyann Killingworth', '183752');
insert into aluno (nome, matricula) values ('Tanney Acaster', '686199');
insert into aluno (nome, matricula) values ('Valentia Tomson', '736945');

----------------------------------
-- Insert de professores
----------------------------------

insert into professor (nome, matricula) values ('Alphonso Landeg', '177631');
insert into professor (nome, matricula) values ('Cordelie Mateiko', '377427');

---------------------------------------------------
-- Insert de disciplinas
---------------------------------------------------

insert into disciplina (nome, codigo) values ('Analog Circuit Design', '744240');
insert into disciplina (nome, codigo) values ('Analyst Programming', '341681');
insert into disciplina (nome, codigo) values ('Quality Control', '487990');
insert into disciplina (nome, codigo) values ('Web Designing I', '260076');
insert into disciplina (nome, codigo) values ('Software Testing', '818982');

------------------------------------------
-- Insert de periodo
------------------------------------------

insert into periodo (ano, semestre) values (2020, 1);
insert into periodo (ano, semestre) values (2020, 2);
insert into periodo (ano, semestre) values (2021, 1);

------------------------------------------
-- Insert de turma
------------------------------------------

insert into turma (codigo, id_periodo, id_professor, id_disciplina) values ('7287', 2, 2, 2);
insert into turma (codigo, id_periodo, id_professor, id_disciplina) values ('6726', 3, 1, 5);
insert into turma (codigo, id_periodo, id_professor, id_disciplina) values ('3617', 2, 1, 4);
insert into turma (codigo, id_periodo, id_professor, id_disciplina) values ('9269', 1, 2, 2);
insert into turma (codigo, id_periodo, id_professor, id_disciplina) values ('9496', 2, 1, 5);

------------------------------------------
-- Insert de avaliacao
------------------------------------------

insert into avaliacao (peso, nota, id_turma, id_aluno) values (5, 4.36, 3, 17);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (1, 5.43, 5, 6);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (3, 9.13, 4, 20);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (2, 4.08, 2, 18);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (1, 9.84, 5, 20);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (4, 3.72, 2, 4);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (2, 7.51, 1, 9);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (5, 1.85, 1, 12);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (1, 9.93, 2, 1);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (1, 5.72, 1, 5);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (5, 5.61, 2, 12);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (4, 3.07, 3, 19);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (2, 3.49, 5, 9);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (2, 7.94, 5, 2);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (4, 3.49, 4, 15);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (5, 9.86, 3, 17);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (3, 8.21, 4, 19);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (3, 7.3, 3, 6);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (2, 5.81, 4, 10);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (1, 2.38, 1, 20);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (1, 9.75, 4, 8);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (3, 4.33, 2, 11);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (5, 5.25, 4, 6);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (5, 3.34, 4, 3);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (1, 7.78, 2, 6);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (2, 8.33, 5, 1);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (3, 9.96, 3, 2);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (5, 3.57, 4, 11);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (1, 9.52, 5, 5);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (5, 5.77, 4, 9);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (1, 8.82, 1, 13);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (2, 1.54, 5, 8);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (5, 5.84, 1, 8);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (1, 5.11, 1, 7);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (5, 6.97, 3, 17);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (5, 3.87, 4, 4);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (5, 9.57, 4, 16);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (5, 3.03, 1, 11);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (1, 4.12, 5, 19);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (3, 1.32, 4, 13);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (1, 9.6, 2, 1);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (4, 4.88, 2, 14);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (5, 6.27, 3, 17);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (1, 5.01, 5, 9);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (5, 8.45, 3, 10);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (1, 4.93, 2, 3);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (4, 9.41, 3, 19);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (4, 4.15, 1, 17);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (1, 4.25, 3, 7);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (2, 3.2, 3, 16);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (4, 2.06, 3, 14);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (5, 1.71, 4, 18);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (2, 5.39, 2, 11);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (1, 2.4, 3, 13);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (4, 6.42, 3, 16);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (1, 9.02, 2, 3);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (2, 5.91, 3, 1);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (2, 4.42, 4, 19);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (3, 1.78, 5, 11);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (2, 7.97, 4, 15);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (2, 9.4, 5, 20);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (4, 9.37, 5, 13);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (5, 6.11, 4, 2);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (5, 9.02, 1, 4);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (5, 8.19, 4, 6);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (1, 8.11, 3, 11);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (1, 6.78, 4, 13);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (4, 9.52, 4, 3);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (5, 5.01, 3, 10);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (4, 2.71, 3, 5);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (1, 9.59, 1, 10);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (4, 7.32, 5, 18);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (5, 3.02, 2, 16);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (3, 1.77, 5, 2);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (5, 4.15, 2, 1);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (2, 4.48, 4, 9);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (3, 9.92, 3, 14);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (2, 8.78, 3, 15);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (4, 7.69, 1, 18);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (2, 6.48, 3, 4);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (1, 2.54, 1, 6);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (4, 9.29, 3, 10);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (2, 1.07, 5, 9);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (3, 7.94, 2, 11);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (1, 3.86, 5, 20);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (3, 9.7, 2, 5);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (3, 2.11, 5, 19);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (1, 6.28, 1, 1);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (2, 4.55, 5, 9);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (5, 3.43, 4, 8);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (2, 6.96, 1, 20);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (3, 6.23, 3, 13);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (5, 3.87, 2, 10);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (2, 8.29, 4, 11);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (1, 4.73, 1, 4);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (3, 5.75, 1, 7);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (3, 2.51, 1, 11);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (4, 9.49, 3, 3);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (4, 9.33, 4, 17);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (1, 2.5, 1, 14);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (3, 7.37, 2, 2);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (1, 6.66, 2, 3);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (3, 8.52, 2, 8);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (4, 2.76, 2, 19);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (1, 7.63, 5, 15);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (4, 9.37, 1, 14);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (1, 9.91, 1, 16);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (2, 4.44, 3, 3);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (1, 4.13, 5, 10);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (4, 4.67, 5, 8);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (1, 2.16, 1, 10);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (3, 7.92, 5, 16);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (3, 8.56, 1, 17);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (2, 8.58, 3, 16);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (5, 3.35, 3, 3);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (2, 8.85, 4, 20);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (4, 3.57, 5, 18);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (5, 9.35, 4, 14);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (2, 4.75, 2, 7);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (2, 8.99, 3, 14);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (3, 2.76, 5, 13);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (5, 1.24, 2, 16);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (5, 2.66, 5, 19);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (3, 5.31, 5, 20);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (2, 1.72, 4, 6);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (5, 1.23, 2, 8);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (2, 7.7, 3, 13);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (5, 1.59, 1, 15);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (3, 1.92, 4, 20);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (5, 5.6, 5, 20);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (3, 8.23, 5, 1);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (1, 9.34, 4, 12);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (4, 6.51, 5, 5);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (3, 1.2, 5, 16);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (2, 5.87, 5, 6);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (5, 6.97, 1, 5);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (2, 5.35, 4, 18);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (5, 6.54, 5, 17);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (2, 1.05, 4, 15);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (1, 9.37, 3, 14);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (5, 2.07, 1, 11);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (5, 2.45, 2, 17);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (3, 7.74, 5, 12);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (5, 2.27, 2, 19);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (1, 4.1, 5, 15);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (5, 7.86, 5, 9);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (2, 6.51, 5, 4);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (1, 7.8, 5, 6);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (3, 6.64, 2, 19);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (4, 9.19, 4, 8);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (2, 6.4, 1, 12);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (4, 4.17, 4, 20);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (3, 3.52, 1, 20);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (2, 8.86, 1, 14);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (1, 9.3, 5, 7);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (3, 1.98, 1, 3);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (1, 2.21, 2, 1);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (4, 6.11, 2, 6);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (4, 4.12, 5, 6);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (2, 4.42, 4, 20);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (4, 9.21, 4, 13);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (3, 4.84, 1, 4);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (4, 8.53, 4, 2);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (3, 4.47, 3, 7);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (4, 2.31, 4, 15);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (1, 6.49, 4, 8);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (2, 1.17, 4, 2);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (2, 1.69, 1, 15);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (2, 1.07, 3, 15);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (4, 4.25, 4, 9);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (3, 9.75, 5, 17);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (5, 5.83, 3, 19);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (5, 7.64, 1, 6);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (4, 4.62, 3, 20);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (2, 2.38, 2, 17);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (5, 6.77, 5, 13);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (5, 7.71, 5, 20);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (4, 9.01, 5, 19);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (4, 2.07, 1, 18);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (5, 8.99, 1, 13);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (4, 5.03, 3, 19);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (1, 4.21, 4, 9);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (4, 3.87, 5, 2);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (1, 8.88, 4, 8);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (4, 9.45, 3, 4);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (4, 3.51, 1, 5);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (1, 2.36, 5, 9);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (3, 3.92, 3, 7);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (3, 9.93, 4, 9);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (3, 8.9, 3, 14);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (3, 8.47, 5, 11);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (1, 7.92, 1, 4);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (3, 6.84, 1, 13);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (1, 9.36, 1, 3);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (4, 9.41, 2, 4);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (5, 4.77, 2, 1);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (4, 4.36, 5, 12);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (2, 3.46, 4, 14);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (1, 4.43, 2, 2);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (1, 2.64, 5, 12);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (2, 7.33, 2, 13);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (3, 1.99, 3, 3);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (5, 8.34, 2, 13);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (1, 1.57, 3, 15);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (4, 9.17, 3, 18);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (3, 4.33, 1, 3);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (3, 3.53, 5, 18);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (3, 7.99, 2, 10);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (1, 1.4, 2, 11);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (1, 6.21, 2, 20);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (1, 6.36, 3, 1);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (4, 2.16, 3, 13);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (5, 5.48, 1, 16);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (3, 4.02, 4, 12);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (3, 4.49, 1, 3);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (1, 5.76, 3, 13);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (3, 8.91, 4, 7);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (4, 4.56, 5, 11);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (2, 4.6, 2, 20);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (4, 4.19, 5, 12);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (4, 4.49, 4, 5);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (3, 9.5, 2, 1);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (3, 3.28, 5, 8);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (3, 2.51, 4, 5);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (5, 8.65, 1, 11);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (1, 6.57, 5, 1);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (1, 8.23, 2, 1);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (4, 9.36, 1, 11);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (5, 4.97, 2, 12);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (1, 1.14, 1, 19);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (4, 2.2, 3, 7);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (5, 8.11, 5, 4);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (4, 9.59, 4, 13);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (3, 1.44, 1, 1);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (5, 1.95, 5, 16);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (4, 7.83, 3, 16);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (3, 7.08, 3, 19);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (3, 3.08, 2, 14);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (1, 5.44, 5, 17);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (3, 4.54, 3, 9);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (5, 4.05, 5, 14);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (1, 7.47, 2, 8);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (1, 7.02, 2, 20);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (1, 2.68, 3, 17);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (3, 7.39, 5, 4);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (2, 2.09, 4, 12);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (2, 8.65, 3, 5);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (4, 9.8, 5, 8);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (5, 8.21, 2, 6);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (4, 1.52, 1, 17);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (3, 8.78, 4, 18);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (2, 6.06, 5, 10);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (4, 8.4, 1, 10);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (3, 2.18, 3, 15);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (2, 7.76, 5, 16);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (4, 5.93, 2, 7);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (4, 6.94, 1, 16);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (4, 7.82, 3, 1);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (4, 1.15, 5, 19);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (1, 7.46, 3, 6);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (3, 1.29, 1, 12);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (5, 7.43, 4, 19);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (2, 5.18, 1, 1);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (2, 3.39, 4, 12);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (4, 8.49, 4, 17);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (3, 4.35, 2, 2);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (2, 6.19, 3, 11);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (2, 6.43, 4, 18);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (3, 2.1, 3, 5);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (5, 9.5, 4, 8);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (5, 9.17, 4, 6);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (2, 9.13, 1, 2);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (1, 5.62, 5, 17);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (4, 2.4, 2, 7);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (4, 8.1, 3, 3);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (5, 5.89, 1, 11);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (3, 8.53, 4, 3);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (3, 7.41, 4, 16);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (2, 3.73, 2, 8);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (1, 8.65, 1, 6);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (2, 5.68, 3, 16);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (4, 8.33, 2, 7);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (4, 4.57, 5, 7);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (3, 3.97, 3, 18);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (4, 6.83, 5, 10);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (3, 7.85, 3, 11);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (5, 1.57, 4, 2);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (3, 3.72, 2, 7);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (4, 1.31, 4, 18);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (5, 5.44, 3, 10);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (1, 5.3, 2, 9);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (5, 5.66, 1, 7);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (3, 8.0, 1, 4);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (2, 3.3, 4, 15);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (4, 4.96, 1, 10);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (5, 1.25, 5, 15);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (2, 6.73, 3, 1);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (4, 4.15, 5, 11);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (4, 3.62, 2, 7);
insert into avaliacao (peso, nota, id_turma, id_aluno) values (3, 6.35, 4, 2);