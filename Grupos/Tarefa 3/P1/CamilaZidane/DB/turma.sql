-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 31-Mar-2021 às 21:39
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
-- Banco de dados: `rural`
--

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
-- Índices para tabela `turma`
--
ALTER TABLE `turma`
  ADD PRIMARY KEY (`codigo`),
  ADD KEY `fk_disciplina` (`disciplina`),
  ADD KEY `fk_professor` (`professor`),
  ADD KEY `codigo` (`codigo`),
  ADD KEY `fk_periodo` (`periodo`);

--
-- Restrições para despejos de tabelas
--

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
