-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Tempo de geração: 08/04/2021 às 22:37
-- Versão do servidor: 8.0.23-0ubuntu0.20.04.1
-- Versão do PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `universidade`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `aluno`
--

CREATE TABLE `aluno` (
  `aluno_ID` int NOT NULL,
  `nome` varchar(40) NOT NULL,
  `matricula` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `aluno`
--

INSERT INTO `aluno` (`aluno_ID`, `nome`, `matricula`) VALUES
(1, 'Renan', 2017390222),
(2, 'Sidney', 2017390281),
(3, 'Lana', 715752),
(4, 'Lanita', 684958),
(5, 'Barbabra', 695665),
(6, 'Abba', 701677),
(7, 'Lurleen', 665444),
(8, 'Melli', 654384),
(9, 'Margot', 721653),
(10, 'Arlee', 733699),
(11, 'Findley', 727993),
(12, 'Tory', 702409);

-- --------------------------------------------------------

--
-- Estrutura para tabela `avaliacao`
--

CREATE TABLE `avaliacao` (
  `avaliacao_ID` int NOT NULL,
  `turma_ID` int NOT NULL,
  `aluno_ID` int NOT NULL,
  `nota` float NOT NULL,
  `peso` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `avaliacao`
--

INSERT INTO `avaliacao` (`avaliacao_ID`, `turma_ID`, `aluno_ID`, `nota`, `peso`) VALUES
(1, 1, 1, 10, 1),
(3, 1, 1, 6, 2),
(4, 1, 2, 4, 2),
(5, 3, 1, 5, 2),
(6, 3, 1, 6, 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `disciplina`
--

CREATE TABLE `disciplina` (
  `disciplina_ID` int NOT NULL,
  `codigo` varchar(20) NOT NULL,
  `nome` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `disciplina`
--

INSERT INTO `disciplina` (`disciplina_ID`, `codigo`, `nome`) VALUES
(1, '172839', 'disciplina top top');

-- --------------------------------------------------------

--
-- Estrutura para tabela `periodo`
--

CREATE TABLE `periodo` (
  `periodo_ID` int NOT NULL,
  `ano` int NOT NULL,
  `semestre` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `periodo`
--

INSERT INTO `periodo` (`periodo_ID`, `ano`, `semestre`) VALUES
(1, 2021, 1),
(3, 2022, 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `professor`
--

CREATE TABLE `professor` (
  `professor_ID` int NOT NULL,
  `nome` varchar(40) NOT NULL,
  `matricula` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `professor`
--

INSERT INTO `professor` (`professor_ID`, `nome`, `matricula`) VALUES
(1, 'teste 6', 123654);

-- --------------------------------------------------------

--
-- Estrutura para tabela `turma`
--

CREATE TABLE `turma` (
  `turma_ID` int NOT NULL,
  `codigo` varchar(20) NOT NULL,
  `disciplina_ID` int NOT NULL,
  `professor_ID` int NOT NULL,
  `periodo_ID` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `turma`
--

INSERT INTO `turma` (`turma_ID`, `codigo`, `disciplina_ID`, `professor_ID`, `periodo_ID`) VALUES
(1, '123456', 1, 1, 1),
(3, '654321', 1, 1, 3);

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `aluno`
--
ALTER TABLE `aluno`
  ADD PRIMARY KEY (`aluno_ID`);

--
-- Índices de tabela `avaliacao`
--
ALTER TABLE `avaliacao`
  ADD PRIMARY KEY (`avaliacao_ID`),
  ADD KEY `aluno_ID` (`aluno_ID`),
  ADD KEY `turma_ID` (`turma_ID`);

--
-- Índices de tabela `disciplina`
--
ALTER TABLE `disciplina`
  ADD PRIMARY KEY (`disciplina_ID`);

--
-- Índices de tabela `periodo`
--
ALTER TABLE `periodo`
  ADD PRIMARY KEY (`periodo_ID`);

--
-- Índices de tabela `professor`
--
ALTER TABLE `professor`
  ADD PRIMARY KEY (`professor_ID`);

--
-- Índices de tabela `turma`
--
ALTER TABLE `turma`
  ADD PRIMARY KEY (`turma_ID`),
  ADD KEY `professor_ID` (`professor_ID`),
  ADD KEY `disciplina_ID` (`disciplina_ID`),
  ADD KEY `periodo_ID` (`periodo_ID`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `aluno`
--
ALTER TABLE `aluno`
  MODIFY `aluno_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de tabela `avaliacao`
--
ALTER TABLE `avaliacao`
  MODIFY `avaliacao_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de tabela `disciplina`
--
ALTER TABLE `disciplina`
  MODIFY `disciplina_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `periodo`
--
ALTER TABLE `periodo`
  MODIFY `periodo_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `professor`
--
ALTER TABLE `professor`
  MODIFY `professor_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `turma`
--
ALTER TABLE `turma`
  MODIFY `turma_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restrições para dumps de tabelas
--

--
-- Restrições para tabelas `avaliacao`
--
ALTER TABLE `avaliacao`
  ADD CONSTRAINT `avaliacao_ibfk_1` FOREIGN KEY (`aluno_ID`) REFERENCES `aluno` (`aluno_ID`),
  ADD CONSTRAINT `avaliacao_ibfk_2` FOREIGN KEY (`turma_ID`) REFERENCES `turma` (`turma_ID`);

--
-- Restrições para tabelas `turma`
--
ALTER TABLE `turma`
  ADD CONSTRAINT `turma_ibfk_1` FOREIGN KEY (`professor_ID`) REFERENCES `professor` (`professor_ID`),
  ADD CONSTRAINT `turma_ibfk_2` FOREIGN KEY (`disciplina_ID`) REFERENCES `disciplina` (`disciplina_ID`),
  ADD CONSTRAINT `turma_ibfk_3` FOREIGN KEY (`periodo_ID`) REFERENCES `periodo` (`periodo_ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;