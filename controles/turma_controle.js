// Arquivo: controllers/turmaController.js
const Turma = require('../models/turma');

// Criação (Create)
exports.create = async (req, res) => {
try {
    const { codigo, professor, disciplina, sala, horario } = req.body;
    const turma = await Turma.create({ codigo, professor, disciplina, sala, horario });
    res.send(turma);
    } catch (error) {
    res.status(500).send(error);
    }
};

// Leitura (Read)
exports.read = async (req, res) => {
try {
    const turma = await Turma.findByPk(req.params.id);
    if (!turma) {
    return res.status(404).send('Turma não encontrada');
    }
    res.send(turma);
    } catch (error) {
    res.status(500).send(error);
    }
};

// Atualização (Update)
exports.update = async (req, res) => {
try {
    const turma = await Turma.findByPk(req.params.id);
    if (!turma) {
    return res.status(404).send('Turma não encontrada');
    }
    const { codigo, professor, disciplina, sala, horario } = req.body;
    await turma.update({ codigo, professor, disciplina, sala, horario });
    res.send(turma);
    } catch (error) {
    res.status(500).send(error);
}
};

// Exclusão (Delete)
exports.delete = async (req, res) => {
try {
    const turma = await Turma.findByPk(req.params.id);
    if (!turma) {
    return res.status(404).send('Turma não encontrada');
    }
    await turma.destroy();
    res.send('Turma excluída com sucesso');
    } catch (error) {
    res.status(500).send(error);
}
};