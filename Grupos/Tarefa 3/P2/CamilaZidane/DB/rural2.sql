-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 28-Abr-2021 às 00:51
-- Versão do servidor: 10.4.17-MariaDB
-- versão do PHP: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `rural2`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `aluno`
--

CREATE TABLE `aluno` (
  `nome` varchar(50) NOT NULL,
  `matricula` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `aluno`
--

INSERT INTO `aluno` (`nome`, `matricula`) VALUES
('Zidane', '2017390077'),
('Cristovão', '2017390078'),
('Camila', '2017390214'),
('Alexia', '2017390895');

-- --------------------------------------------------------

--
-- Estrutura da tabela `avaliacao`
--

CREATE TABLE `avaliacao` (
  `id` int(11) NOT NULL,
  `turma` varchar(50) NOT NULL,
  `aluno` varchar(50) NOT NULL,
  `peso` float NOT NULL,
  `peso2` float NOT NULL,
  `nota` float NOT NULL,
  `nota2` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `avaliacao`
--

INSERT INTO `avaliacao` (`id`, `turma`, `aluno`, `peso`, `peso2`, `nota`, `nota2`) VALUES
(1, '04', '2017390895', 1, 2, 6, 5),
(2, '05', '2017390078', 1, 2, 7, 6),
(3, '07', '2017390077', 1, 2, 6, 8),
(4, '09', '2017390214', 1, 2, 8, 9),
(9, '05', '2017390895', 2, 2, 6, 8),
(10, '05', '2017390895', 1, 1, 10, 10);

-- --------------------------------------------------------

--
-- Estrutura da tabela `disciplina`
--

CREATE TABLE `disciplina` (
  `codigo` varchar(50) NOT NULL,
  `nome` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `disciplina`
--

INSERT INTO `disciplina` (`codigo`, `nome`) VALUES
('001', 'BD1'),
('002', 'LP2'),
('003', 'AED1'),
('004', 'SO'),
('benzema', '00001');

-- --------------------------------------------------------

--
-- Estrutura da tabela `periodo`
--

CREATE TABLE `periodo` (
  `id` int(11) NOT NULL,
  `ano` int(11) NOT NULL,
  `semestre` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `periodo`
--

INSERT INTO `periodo` (`id`, `ano`, `semestre`) VALUES
(1, 2020, 1),
(2, 2020, 2),
(3, 2021, 1),
(4, 2021, 2);

-- --------------------------------------------------------

--
-- Estrutura da tabela `professor`
--

CREATE TABLE `professor` (
  `nome` varchar(50) NOT NULL,
  `matricula` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `professor`
--

INSERT INTO `professor` (`nome`, `matricula`) VALUES
('benzema', '00001'),
('Kinder', '2017290051'),
('Rizzo', '2017290078'),
('Juliana', '2017290456'),
('Serra', '2017290789');

-- --------------------------------------------------------

--
-- Estrutura da tabela `turma`
--

CREATE TABLE `turma` (
  `codigo` varchar(50) NOT NULL,
  `professor` varchar(50) NOT NULL,
  `disciplina` varchar(50) NOT NULL,
  `periodo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `turma`
--

INSERT INTO `turma` (`codigo`, `professor`, `disciplina`, `periodo`) VALUES
('04', '2017290789', '004', 4),
('05', '2017290051', '002', 1),
('07', '2017290456', '001', 3),
('09', '2017290078', '003', 2),
('benzema', '00001', 'benzema', 1);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `aluno`
--
ALTER TABLE `aluno`
  ADD UNIQUE KEY `matricula` (`matricula`);

--
-- Índices para tabela `avaliacao`
--
ALTER TABLE `avaliacao`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_turma` (`turma`),
  ADD KEY `fk_aluno` (`aluno`);

--
-- Índices para tabela `disciplina`
--
ALTER TABLE `disciplina`
  ADD UNIQUE KEY `codigo` (`codigo`) USING BTREE;

--
-- Índices para tabela `periodo`
--
ALTER TABLE `periodo`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `professor`
--
ALTER TABLE `professor`
  ADD UNIQUE KEY `matricula` (`matricula`) USING BTREE;

--
-- Índices para tabela `turma`
--
ALTER TABLE `turma`
  ADD PRIMARY KEY (`codigo`),
  ADD KEY `fk_disciplina` (`disciplina`),
  ADD KEY `fk_professor` (`professor`),
  ADD KEY `codigo` (`codigo`),
  ADD KEY `fk_periodo` (`periodo`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `avaliacao`
--
ALTER TABLE `avaliacao`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de tabela `periodo`
--
ALTER TABLE `periodo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `avaliacao`
--
ALTER TABLE `avaliacao`
  ADD CONSTRAINT `fk_aluno` FOREIGN KEY (`aluno`) REFERENCES `aluno` (`matricula`),
  ADD CONSTRAINT `fk_turma` FOREIGN KEY (`turma`) REFERENCES `turma` (`codigo`);

--
-- Limitadores para a tabela `turma`
--
ALTER TABLE `turma`
  ADD CONSTRAINT `fk_disciplina` FOREIGN KEY (`disciplina`) REFERENCES `disciplina` (`codigo`),
  ADD CONSTRAINT `fk_periodo` FOREIGN KEY (`periodo`) REFERENCES `periodo` (`id`),
  ADD CONSTRAINT `fk_professor` FOREIGN KEY (`professor`) REFERENCES `professor` (`matricula`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
