const Disciplina = require('../models/disciplina');

// Criação (Create)
exports.create = async (req, res) => {
  try {
    const { codigo, departamento, nome, carga_horaria } = req.body;
    const disciplina = await Disciplina.create({ codigo, departamento, nome, carga_horaria });
    res.send(disciplina);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Leitura (Read)
exports.read = async (req, res) => {
  try {
    const disciplina = await Disciplina.findByPk(req.params.id);
    if (!disciplina) {
      return res.status(404).send('Disciplina não encontrada');
    }
    res.send(disciplina);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Atualização (Update)
exports.update = async (req, res) => {
    try {
    const disciplina = await Disciplina.findByPk(req.params.id);
    if (!disciplina) {
    return res.status(404).send('Disciplina não encontrada');
    }
    const { codigo, departamento, nome, carga_horaria } = req.body;
    await disciplina.update({ codigo, departamento, nome, carga_horaria });
    res.send(disciplina);
    } catch (error) {
    res.status(500).send(error);
    }
    };
    
    // Exclusão (Delete)
    exports.delete = async (req, res) => {
    try {
    const disciplina = await Disciplina.findByPk(req.params.id);
    if (!disciplina) {
    return res.status(404).send('Disciplina não encontrada');
    }
    await disciplina.destroy();
    res.send('Disciplina excluída com sucesso');
    } catch (error) {
    res.status(500).send(error);
    }
    };