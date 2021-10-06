-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 01-Maio-2021 às 04:32
-- Versão do servidor: 10.4.18-MariaDB
-- versão do PHP: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
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
-- Estrutura da tabela `aluno`
--

CREATE TABLE `aluno` (
  `aluno_ID` int(11) NOT NULL,
  `nome` varchar(40) NOT NULL,
  `matricula` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `aluno`
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
(12, 'Tory', 702409),
(14, 'teste update', 45678),
(41, 'teste', 123456456);

-- --------------------------------------------------------

--
-- Estrutura da tabela `avaliacao`
--

CREATE TABLE `avaliacao` (
  `avaliacao_ID` int(11) NOT NULL,
  `turma_ID` int(11) NOT NULL,
  `aluno_ID` int(11) NOT NULL,
  `nota` float NOT NULL,
  `peso` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `avaliacao`
--

INSERT INTO `avaliacao` (`avaliacao_ID`, `turma_ID`, `aluno_ID`, `nota`, `peso`) VALUES
(1, 1, 1, 10, 1),
(3, 1, 1, 10, 1),
(4, 1, 2, 4, 2),
(5, 3, 1, 5, 2),
(6, 3, 1, 6, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `disciplina`
--

CREATE TABLE `disciplina` (
  `disciplina_ID` int(11) NOT NULL,
  `codigo` int(11) NOT NULL,
  `nome` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `disciplina`
--

INSERT INTO `disciplina` (`disciplina_ID`, `codigo`, `nome`) VALUES
(1, 2147483647, 'teste update'),
(3, 12345, 'disciplina'),
(4, 34567, 'Calculo'),
(30, 2147483647, 'teste'),
(31, 123456456, 'teste'),
(32, 2147483647, 'teste');

-- --------------------------------------------------------

--
-- Estrutura da tabela `periodo`
--

CREATE TABLE `periodo` (
  `periodo_ID` int(11) NOT NULL,
  `ano` int(11) NOT NULL,
  `semestre` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `periodo`
--

INSERT INTO `periodo` (`periodo_ID`, `ano`, `semestre`) VALUES
(1, 2021, 1),
(2, 2021, 2),
(3, 2024, 3),
(4, 2023, 1),
(5, 2023, 1),
(6, 2023, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `professor`
--

CREATE TABLE `professor` (
  `professor_ID` int(11) NOT NULL,
  `nome` varchar(40) NOT NULL,
  `matricula` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `professor`
--

INSERT INTO `professor` (`professor_ID`, `nome`, `matricula`) VALUES
(1, 'Luciano', 222222),
(2, 'Juliana', 212121),
(3, 'Kinder', 202020);

-- --------------------------------------------------------

--
-- Estrutura da tabela `turma`
--

CREATE TABLE `turma` (
  `turma_ID` int(11) NOT NULL,
  `codigo` int(11) NOT NULL,
  `disciplina_ID` int(11) NOT NULL,
  `professor_ID` int(11) NOT NULL,
  `periodo_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `turma`
--

INSERT INTO `turma` (`turma_ID`, `codigo`, `disciplina_ID`, `professor_ID`, `periodo_ID`) VALUES
(1, 123456, 1, 1, 1),
(2, 2093, 3, 1, 1),
(3, 654321, 1, 1, 3),
(4, 8456, 4, 2, 6);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `aluno`
--
ALTER TABLE `aluno`
  ADD PRIMARY KEY (`aluno_ID`);

--
-- Índices para tabela `avaliacao`
--
ALTER TABLE `avaliacao`
  ADD PRIMARY KEY (`avaliacao_ID`),
  ADD KEY `aluno_ID` (`aluno_ID`),
  ADD KEY `turma_ID` (`turma_ID`);

--
-- Índices para tabela `disciplina`
--
ALTER TABLE `disciplina`
  ADD PRIMARY KEY (`disciplina_ID`);

--
-- Índices para tabela `periodo`
--
ALTER TABLE `periodo`
  ADD PRIMARY KEY (`periodo_ID`);

--
-- Índices para tabela `professor`
--
ALTER TABLE `professor`
  ADD PRIMARY KEY (`professor_ID`);

--
-- Índices para tabela `turma`
--
ALTER TABLE `turma`
  ADD PRIMARY KEY (`turma_ID`),
  ADD KEY `professor_ID` (`professor_ID`),
  ADD KEY `disciplina_ID` (`disciplina_ID`),
  ADD KEY `periodo_ID` (`periodo_ID`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `aluno`
--
ALTER TABLE `aluno`
  MODIFY `aluno_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- AUTO_INCREMENT de tabela `avaliacao`
--
ALTER TABLE `avaliacao`
  MODIFY `avaliacao_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de tabela `disciplina`
--
ALTER TABLE `disciplina`
  MODIFY `disciplina_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT de tabela `periodo`
--
ALTER TABLE `periodo`
  MODIFY `periodo_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de tabela `professor`
--
ALTER TABLE `professor`
  MODIFY `professor_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de tabela `turma`
--
ALTER TABLE `turma`
  MODIFY `turma_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `avaliacao`
--
ALTER TABLE `avaliacao`
  ADD CONSTRAINT `avaliacao_ibfk_1` FOREIGN KEY (`aluno_ID`) REFERENCES `aluno` (`aluno_ID`),
  ADD CONSTRAINT `avaliacao_ibfk_2` FOREIGN KEY (`turma_ID`) REFERENCES `turma` (`turma_ID`);

--
-- Limitadores para a tabela `turma`
--
ALTER TABLE `turma`
  ADD CONSTRAINT `turma_ibfk_1` FOREIGN KEY (`professor_ID`) REFERENCES `professor` (`professor_ID`),
  ADD CONSTRAINT `turma_ibfk_2` FOREIGN KEY (`disciplina_ID`) REFERENCES `disciplina` (`disciplina_ID`),
  ADD CONSTRAINT `turma_ibfk_3` FOREIGN KEY (`periodo_ID`) REFERENCES `periodo` (`periodo_ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
