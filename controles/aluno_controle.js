const Aluno = require('../models/aluno');

// Criação (Create)
exports.create = async (req, res) => {
try {
    const { matricula, nome, data_nascimento, email } = req.body;
    const aluno = await Aluno.create({ matricula, nome, data_nascimento, email });
    res.send(aluno);
    } catch (error) {
    res.status(500).send(error);
}
};

// Leitura (Read)
exports.read = async (req, res) => {
try {
    const aluno = await Aluno.findByPk(req.params.id);
    if (!aluno) {
    return res.status(404).send('Aluno não encontrado');
    }
    res.send(aluno);
    } catch (error) {
    res.status(500).send(error);
    }
};

// Atualização (Update)
exports.update = async (req, res) => {
try {
    const aluno = await Aluno.findByPk(req.params.id);
    if (!aluno) {
    return res.status(404).send('Aluno não encontrado');
    }
    const { matricula, nome, data_nascimento, email } = req.body;
    await aluno.update({ matricula, nome, data_nascimento, email });
    res.send(aluno);
    } catch (error) {
    res.status(500).send(error);
}
};

// Exclusão (Delete)
exports.delete = async (req, res) => {
try {
    const aluno = await Aluno.findByPk(req.params.id);
    if (!aluno) {
    return res.status(404).send('Aluno não encontrado');
    }
    await aluno.destroy();
    res.send('Aluno excluído com sucesso');
    } catch (error) {
    res.status(500).send(error);
}
};