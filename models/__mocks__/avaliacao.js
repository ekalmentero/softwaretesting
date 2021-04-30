
const avaliacao = jest.createMockFromModule('../avaliacao.js');

function getTodasAvaliacoesBD() {
    return new Promise((resolve, reject) => resolve([
        {id: 1, peso: 5, nota: 4.36, id_turma: 3, id_aluno: 17},
        {id: 2, peso: 1, nota: 5.43, id_turma: 5, id_aluno: 6},
        {id: 3, peso: 3, nota: 9.13, id_turma: 4, id_aluno: 20},
        {id: 4, peso: 2, nota: 4.08, id_turma: 2, id_aluno: 18},
        {id: 5, peso: 1, nota: 9.84, id_turma: 5, id_aluno: 20},
        {id: 6, peso: 4, nota: 3.72, id_turma: 2, id_aluno: 4},
        {id: 7, peso: 2, nota: 7.51, id_turma: 1, id_aluno: 9},
        {id: 8, peso: 5, nota: 1.85, id_turma: 1, id_aluno: 12},
        {id: 9, peso: 1, nota: 9.93, id_turma: 2, id_aluno: 1},
        {id: 10, peso: 1, nota: 5.72, id_turma: 1, id_aluno: 5},
        {id: 11, peso: 5, nota: 5.61, id_turma: 2, id_aluno: 12},
        {id: 12, peso: 4, nota: 3.07, id_turma: 3, id_aluno: 19},
        {id: 13, peso: 2, nota: 3.49, id_turma: 5, id_aluno: 9},
        {id: 14, peso: 2, nota: 7.94, id_turma: 5, id_aluno: 2},
        {id: 15, peso: 4, nota: 3.49, id_turma: 4, id_aluno: 15},
        {id: 16, peso: 5, nota: 9.86, id_turma: 3, id_aluno: 17},
        {id: 17, peso: 3, nota: 8.21, id_turma: 4, id_aluno: 19},
        {id: 18, peso: 3, nota: 7.30, id_turma: 3, id_aluno: 6},
        {id: 19, peso: 2, nota: 5.81, id_turma: 4, id_aluno: 10},
        {id: 20, peso: 1, nota: 2.38, id_turma: 1, id_aluno: 20},
        {id: 21, peso: 1, nota: 9.75, id_turma: 4, id_aluno: 8},
        {id: 22, peso: 3, nota: 4.33, id_turma: 2, id_aluno: 11},
        {id: 23, peso: 5, nota: 5.25, id_turma: 4, id_aluno: 6},
        {id: 24, peso: 5, nota: 3.34, id_turma: 4, id_aluno: 3},
        {id: 25, peso: 1, nota: 7.78, id_turma: 2, id_aluno: 6},
        {id: 26, peso: 2, nota: 8.33, id_turma: 5, id_aluno: 1},
        {id: 27, peso: 3, nota: 9.96, id_turma: 3, id_aluno: 2},
        {id: 28, peso: 5, nota: 3.57, id_turma: 4, id_aluno: 11},
        {id: 29, peso: 1, nota: 9.52, id_turma: 5, id_aluno: 5},
        {id: 30, peso: 5, nota: 5.77, id_turma: 4, id_aluno: 9},
        {id: 31, peso: 1, nota: 8.82, id_turma: 1, id_aluno: 13},
        {id: 32, peso: 2, nota: 1.54, id_turma: 5, id_aluno: 8},
        {id: 33, peso: 5, nota: 5.84, id_turma: 1, id_aluno: 8},
        {id: 34, peso: 1, nota: 5.11, id_turma: 1, id_aluno: 7},
        {id: 35, peso: 5, nota: 6.97, id_turma: 3, id_aluno: 17},
        {id: 36, peso: 5, nota: 3.87, id_turma: 4, id_aluno: 4},
        {id: 37, peso: 5, nota: 9.57, id_turma: 4, id_aluno: 16},
        {id: 38, peso: 5, nota: 3.03, id_turma: 1, id_aluno: 11},
        {id: 39, peso: 1, nota: 4.12, id_turma: 5, id_aluno: 19},
        {id: 40, peso: 3, nota: 1.32, id_turma: 4, id_aluno: 13},
        {id: 41, peso: 1, nota: 9.60, id_turma: 2, id_aluno: 1},
        {id: 42, peso: 4, nota: 4.88, id_turma: 2, id_aluno: 14},
        {id: 43, peso: 5, nota: 6.27, id_turma: 3, id_aluno: 17},
        {id: 44, peso: 1, nota: 5.01, id_turma: 5, id_aluno: 9},
        {id: 45, peso: 5, nota: 8.45, id_turma: 3, id_aluno: 10},
        {id: 46, peso: 1, nota: 4.93, id_turma: 2, id_aluno: 3},
        {id: 47, peso: 4, nota: 9.41, id_turma: 3, id_aluno: 19},
        {id: 48, peso: 4, nota: 4.15, id_turma: 1, id_aluno: 17},
        {id: 49, peso: 1, nota: 4.25, id_turma: 3, id_aluno: 7},
        {id: 50, peso: 2, nota: 3.20, id_turma: 3, id_aluno: 16},
        {id: 51, peso: 4, nota: 2.06, id_turma: 3, id_aluno: 14},
        {id: 52, peso: 5, nota: 1.71, id_turma: 4, id_aluno: 18},
        {id: 53, peso: 2, nota: 5.39, id_turma: 2, id_aluno: 11},
        {id: 54, peso: 1, nota: 2.40, id_turma: 3, id_aluno: 13},
        {id: 55, peso: 4, nota: 6.42, id_turma: 3, id_aluno: 16},
        {id: 56, peso: 1, nota: 9.02, id_turma: 2, id_aluno: 3},
        {id: 57, peso: 2, nota: 5.91, id_turma: 3, id_aluno: 1},
        {id: 58, peso: 2, nota: 4.42, id_turma: 4, id_aluno: 19},
        {id: 59, peso: 3, nota: 1.78, id_turma: 5, id_aluno: 11},
        {id: 60, peso: 2, nota: 7.97, id_turma: 4, id_aluno: 15},
        {id: 61, peso: 2, nota: 9.40, id_turma: 5, id_aluno: 20},
        {id: 62, peso: 4, nota: 9.37, id_turma: 5, id_aluno: 13},
        {id: 63, peso: 5, nota: 6.11, id_turma: 4, id_aluno: 2},
        {id: 64, peso: 5, nota: 9.02, id_turma: 1, id_aluno: 4},
        {id: 65, peso: 5, nota: 8.19, id_turma: 4, id_aluno: 6},
        {id: 66, peso: 1, nota: 8.11, id_turma: 3, id_aluno: 11},
        {id: 67, peso: 1, nota: 6.78, id_turma: 4, id_aluno: 13},
        {id: 68, peso: 4, nota: 9.52, id_turma: 4, id_aluno: 3},
        {id: 69, peso: 5, nota: 5.01, id_turma: 3, id_aluno: 10},
        {id: 70, peso: 4, nota: 2.71, id_turma: 3, id_aluno: 5},
        {id: 71, peso: 1, nota: 9.59, id_turma: 1, id_aluno: 10},
        {id: 72, peso: 4, nota: 7.32, id_turma: 5, id_aluno: 18},
        {id: 73, peso: 5, nota: 3.02, id_turma: 2, id_aluno: 16},
        {id: 74, peso: 3, nota: 1.77, id_turma: 5, id_aluno: 2},
        {id: 75, peso: 5, nota: 4.15, id_turma: 2, id_aluno: 1},
        {id: 76, peso: 2, nota: 4.48, id_turma: 4, id_aluno: 9},
        {id: 77, peso: 3, nota: 9.92, id_turma: 3, id_aluno: 14},
        {id: 78, peso: 2, nota: 8.78, id_turma: 3, id_aluno: 15},
        {id: 79, peso: 4, nota: 7.69, id_turma: 1, id_aluno: 18},
        {id: 80, peso: 2, nota: 6.48, id_turma: 3, id_aluno: 4},
        {id: 81, peso: 1, nota: 2.54, id_turma: 1, id_aluno: 6},
        {id: 82, peso: 4, nota: 9.29, id_turma: 3, id_aluno: 10},
        {id: 83, peso: 2, nota: 1.07, id_turma: 5, id_aluno: 9},
        {id: 84, peso: 3, nota: 7.94, id_turma: 2, id_aluno: 11},
        {id: 85, peso: 1, nota: 3.86, id_turma: 5, id_aluno: 20},
        {id: 86, peso: 3, nota: 9.70, id_turma: 2, id_aluno: 5},
        {id: 87, peso: 3, nota: 2.11, id_turma: 5, id_aluno: 19},
        {id: 88, peso: 1, nota: 6.28, id_turma: 1, id_aluno: 1},
        {id: 89, peso: 2, nota: 4.55, id_turma: 5, id_aluno: 9},
        {id: 90, peso: 5, nota: 3.43, id_turma: 4, id_aluno: 8},
        {id: 91, peso: 2, nota: 6.96, id_turma: 1, id_aluno: 20},
        {id: 92, peso: 3, nota: 6.23, id_turma: 3, id_aluno: 13},
        {id: 93, peso: 5, nota: 3.87, id_turma: 2, id_aluno: 10},
        {id: 94, peso: 2, nota: 8.29, id_turma: 4, id_aluno: 11},
        {id: 95, peso: 1, nota: 4.73, id_turma: 1, id_aluno: 4},
        {id: 96, peso: 3, nota: 5.75, id_turma: 1, id_aluno: 7},
        {id: 97, peso: 3, nota: 2.51, id_turma: 1, id_aluno: 11},
        {id: 98, peso: 4, nota: 9.49, id_turma: 3, id_aluno: 3},
        {id: 99, peso: 4, nota: 9.33, id_turma: 4, id_aluno: 17},
        {id: 100, peso: 1, nota: 2.50, id_turma: 1, id_aluno: 14},
        {id: 101, peso: 3, nota: 7.37, id_turma: 2, id_aluno: 2},
        {id: 102, peso: 1, nota: 6.66, id_turma: 2, id_aluno: 3},
        {id: 103, peso: 3, nota: 8.52, id_turma: 2, id_aluno: 8},
        {id: 104, peso: 4, nota: 2.76, id_turma: 2, id_aluno: 19},
        {id: 105, peso: 1, nota: 7.63, id_turma: 5, id_aluno: 15},
        {id: 106, peso: 4, nota: 9.37, id_turma: 1, id_aluno: 14},
        {id: 107, peso: 1, nota: 9.91, id_turma: 1, id_aluno: 16},
        {id: 108, peso: 2, nota: 4.44, id_turma: 3, id_aluno: 3},
        {id: 109, peso: 1, nota: 4.13, id_turma: 5, id_aluno: 10},
        {id: 110, peso: 4, nota: 4.67, id_turma: 5, id_aluno: 8},
        {id: 111, peso: 1, nota: 2.16, id_turma: 1, id_aluno: 10},
        {id: 112, peso: 3, nota: 7.92, id_turma: 5, id_aluno: 16},
        {id: 113, peso: 3, nota: 8.56, id_turma: 1, id_aluno: 17},
        {id: 114, peso: 2, nota: 8.58, id_turma: 3, id_aluno: 16},
        {id: 115, peso: 5, nota: 3.35, id_turma: 3, id_aluno: 3},
        {id: 116, peso: 2, nota: 8.85, id_turma: 4, id_aluno: 20},
        {id: 117, peso: 4, nota: 3.57, id_turma: 5, id_aluno: 18},
        {id: 118, peso: 5, nota: 9.35, id_turma: 4, id_aluno: 14},
        {id: 119, peso: 2, nota: 4.75, id_turma: 2, id_aluno: 7},
        {id: 120, peso: 2, nota: 8.99, id_turma: 3, id_aluno: 14},
        {id: 121, peso: 3, nota: 2.76, id_turma: 5, id_aluno: 13},
        {id: 122, peso: 5, nota: 1.24, id_turma: 2, id_aluno: 16},
        {id: 123, peso: 5, nota: 2.66, id_turma: 5, id_aluno: 19},
        {id: 124, peso: 3, nota: 5.31, id_turma: 5, id_aluno: 20},
        {id: 125, peso: 2, nota: 1.72, id_turma: 4, id_aluno: 6},
        {id: 126, peso: 5, nota: 1.23, id_turma: 2, id_aluno: 8},
        {id: 127, peso: 2, nota: 7.70, id_turma: 3, id_aluno: 13},
        {id: 128, peso: 5, nota: 1.59, id_turma: 1, id_aluno: 15},
        {id: 129, peso: 3, nota: 1.92, id_turma: 4, id_aluno: 20},
        {id: 130, peso: 5, nota: 5.60, id_turma: 5, id_aluno: 20},
        {id: 131, peso: 3, nota: 8.23, id_turma: 5, id_aluno: 1},
        {id: 132, peso: 1, nota: 9.34, id_turma: 4, id_aluno: 12},
        {id: 133, peso: 4, nota: 6.51, id_turma: 5, id_aluno: 5},
        {id: 134, peso: 3, nota: 1.20, id_turma: 5, id_aluno: 16},
        {id: 135, peso: 2, nota: 5.87, id_turma: 5, id_aluno: 6},
        {id: 136, peso: 5, nota: 6.97, id_turma: 1, id_aluno: 5},
        {id: 137, peso: 2, nota: 5.35, id_turma: 4, id_aluno: 18},
        {id: 138, peso: 5, nota: 6.54, id_turma: 5, id_aluno: 17},
        {id: 139, peso: 2, nota: 1.05, id_turma: 4, id_aluno: 15},
        {id: 140, peso: 1, nota: 9.37, id_turma: 3, id_aluno: 14},
        {id: 141, peso: 5, nota: 2.07, id_turma: 1, id_aluno: 11},
        {id: 142, peso: 5, nota: 2.45, id_turma: 2, id_aluno: 17},
        {id: 143, peso: 3, nota: 7.74, id_turma: 5, id_aluno: 12},
        {id: 144, peso: 5, nota: 2.27, id_turma: 2, id_aluno: 19},
        {id: 145, peso: 1, nota: 4.10, id_turma: 5, id_aluno: 15},
        {id: 146, peso: 5, nota: 7.86, id_turma: 5, id_aluno: 9},
        {id: 147, peso: 2, nota: 6.51, id_turma: 5, id_aluno: 4},
        {id: 148, peso: 1, nota: 7.80, id_turma: 5, id_aluno: 6},
        {id: 149, peso: 3, nota: 6.64, id_turma: 2, id_aluno: 19},
        {id: 150, peso: 4, nota: 9.19, id_turma: 4, id_aluno: 8},
        {id: 151, peso: 2, nota: 6.40, id_turma: 1, id_aluno: 12},
        {id: 152, peso: 4, nota: 4.17, id_turma: 4, id_aluno: 20},
        {id: 153, peso: 3, nota: 3.52, id_turma: 1, id_aluno: 20},
        {id: 154, peso: 2, nota: 8.86, id_turma: 1, id_aluno: 14},
        {id: 155, peso: 1, nota: 9.30, id_turma: 5, id_aluno: 7},
        {id: 156, peso: 3, nota: 1.98, id_turma: 1, id_aluno: 3},
        {id: 157, peso: 1, nota: 2.21, id_turma: 2, id_aluno: 1},
        {id: 158, peso: 4, nota: 6.11, id_turma: 2, id_aluno: 6},
        {id: 159, peso: 4, nota: 4.12, id_turma: 5, id_aluno: 6},
        {id: 160, peso: 2, nota: 4.42, id_turma: 4, id_aluno: 20},
        {id: 161, peso: 4, nota: 9.21, id_turma: 4, id_aluno: 13},
        {id: 162, peso: 3, nota: 4.84, id_turma: 1, id_aluno: 4},
        {id: 163, peso: 4, nota: 8.53, id_turma: 4, id_aluno: 2},
        {id: 164, peso: 3, nota: 4.47, id_turma: 3, id_aluno: 7},
        {id: 165, peso: 4, nota: 2.31, id_turma: 4, id_aluno: 15},
        {id: 166, peso: 1, nota: 6.49, id_turma: 4, id_aluno: 8},
        {id: 167, peso: 2, nota: 1.17, id_turma: 4, id_aluno: 2},
        {id: 168, peso: 2, nota: 1.69, id_turma: 1, id_aluno: 15},
        {id: 169, peso: 2, nota: 1.07, id_turma: 3, id_aluno: 15},
        {id: 170, peso: 4, nota: 4.25, id_turma: 4, id_aluno: 9},
        {id: 171, peso: 3, nota: 9.75, id_turma: 5, id_aluno: 17},
        {id: 172, peso: 5, nota: 5.83, id_turma: 3, id_aluno: 19},
        {id: 173, peso: 5, nota: 7.64, id_turma: 1, id_aluno: 6},
        {id: 174, peso: 4, nota: 4.62, id_turma: 3, id_aluno: 20},
        {id: 175, peso: 2, nota: 2.38, id_turma: 2, id_aluno: 17},
        {id: 176, peso: 5, nota: 6.77, id_turma: 5, id_aluno: 13},
        {id: 177, peso: 5, nota: 7.71, id_turma: 5, id_aluno: 20},
        {id: 178, peso: 4, nota: 9.01, id_turma: 5, id_aluno: 19},
        {id: 179, peso: 4, nota: 2.07, id_turma: 1, id_aluno: 18},
        {id: 180, peso: 5, nota: 8.99, id_turma: 1, id_aluno: 13},
        {id: 181, peso: 4, nota: 5.03, id_turma: 3, id_aluno: 19},
        {id: 182, peso: 1, nota: 4.21, id_turma: 4, id_aluno: 9},
        {id: 183, peso: 4, nota: 3.87, id_turma: 5, id_aluno: 2},
        {id: 184, peso: 1, nota: 8.88, id_turma: 4, id_aluno: 8},
        {id: 185, peso: 4, nota: 9.45, id_turma: 3, id_aluno: 4},
        {id: 186, peso: 4, nota: 3.51, id_turma: 1, id_aluno: 5},
        {id: 187, peso: 1, nota: 2.36, id_turma: 5, id_aluno: 9},
        {id: 188, peso: 3, nota: 3.92, id_turma: 3, id_aluno: 7},
        {id: 189, peso: 3, nota: 9.93, id_turma: 4, id_aluno: 9},
        {id: 190, peso: 3, nota: 8.90, id_turma: 3, id_aluno: 14},
        {id: 191, peso: 3, nota: 8.47, id_turma: 5, id_aluno: 11},
        {id: 192, peso: 1, nota: 7.92, id_turma: 1, id_aluno: 4},
        {id: 193, peso: 3, nota: 6.84, id_turma: 1, id_aluno: 13},
        {id: 194, peso: 1, nota: 9.36, id_turma: 1, id_aluno: 3},
        {id: 195, peso: 4, nota: 9.41, id_turma: 2, id_aluno: 4},
        {id: 196, peso: 5, nota: 4.77, id_turma: 2, id_aluno: 1},
        {id: 197, peso: 4, nota: 4.36, id_turma: 5, id_aluno: 12},
        {id: 198, peso: 2, nota: 3.46, id_turma: 4, id_aluno: 14},
        {id: 199, peso: 1, nota: 4.43, id_turma: 2, id_aluno: 2},
        {id: 200, peso: 1, nota: 2.64, id_turma: 5, id_aluno: 12},
        {id: 201, peso: 2, nota: 7.33, id_turma: 2, id_aluno: 13},
        {id: 202, peso: 3, nota: 1.99, id_turma: 3, id_aluno: 3},
        {id: 203, peso: 5, nota: 8.34, id_turma: 2, id_aluno: 13},
        {id: 204, peso: 1, nota: 1.57, id_turma: 3, id_aluno: 15},
        {id: 205, peso: 4, nota: 9.17, id_turma: 3, id_aluno: 18},
        {id: 206, peso: 3, nota: 4.33, id_turma: 1, id_aluno: 3},
        {id: 207, peso: 3, nota: 3.53, id_turma: 5, id_aluno: 18},
        {id: 208, peso: 3, nota: 7.99, id_turma: 2, id_aluno: 10},
        {id: 209, peso: 1, nota: 1.40, id_turma: 2, id_aluno: 11},
        {id: 210, peso: 1, nota: 6.21, id_turma: 2, id_aluno: 20},
        {id: 211, peso: 1, nota: 6.36, id_turma: 3, id_aluno: 1},
        {id: 212, peso: 4, nota: 2.16, id_turma: 3, id_aluno: 13},
        {id: 213, peso: 5, nota: 5.48, id_turma: 1, id_aluno: 16},
        {id: 214, peso: 3, nota: 4.02, id_turma: 4, id_aluno: 12},
        {id: 215, peso: 3, nota: 4.49, id_turma: 1, id_aluno: 3},
        {id: 216, peso: 1, nota: 5.76, id_turma: 3, id_aluno: 13},
        {id: 217, peso: 3, nota: 8.91, id_turma: 4, id_aluno: 7},
        {id: 218, peso: 4, nota: 4.56, id_turma: 5, id_aluno: 11},
        {id: 219, peso: 2, nota: 4.60, id_turma: 2, id_aluno: 20},
        {id: 220, peso: 4, nota: 4.19, id_turma: 5, id_aluno: 12},
        {id: 221, peso: 4, nota: 4.49, id_turma: 4, id_aluno: 5},
        {id: 222, peso: 3, nota: 9.50, id_turma: 2, id_aluno: 1},
        {id: 223, peso: 3, nota: 3.28, id_turma: 5, id_aluno: 8},
        {id: 224, peso: 3, nota: 2.51, id_turma: 4, id_aluno: 5},
        {id: 225, peso: 5, nota: 8.65, id_turma: 1, id_aluno: 11},
        {id: 226, peso: 1, nota: 6.57, id_turma: 5, id_aluno: 1},
        {id: 227, peso: 1, nota: 8.23, id_turma: 2, id_aluno: 1},
        {id: 228, peso: 4, nota: 9.36, id_turma: 1, id_aluno: 11},
        {id: 229, peso: 5, nota: 4.97, id_turma: 2, id_aluno: 12},
        {id: 230, peso: 1, nota: 1.14, id_turma: 1, id_aluno: 19},
        {id: 231, peso: 4, nota: 2.20, id_turma: 3, id_aluno: 7},
        {id: 232, peso: 5, nota: 8.11, id_turma: 5, id_aluno: 4},
        {id: 233, peso: 4, nota: 9.59, id_turma: 4, id_aluno: 13},
        {id: 234, peso: 3, nota: 1.44, id_turma: 1, id_aluno: 1},
        {id: 235, peso: 5, nota: 1.95, id_turma: 5, id_aluno: 16},
        {id: 236, peso: 4, nota: 7.83, id_turma: 3, id_aluno: 16},
        {id: 237, peso: 3, nota: 7.08, id_turma: 3, id_aluno: 19},
        {id: 238, peso: 3, nota: 3.08, id_turma: 2, id_aluno: 14},
        {id: 239, peso: 1, nota: 5.44, id_turma: 5, id_aluno: 17},
        {id: 240, peso: 3, nota: 4.54, id_turma: 3, id_aluno: 9},
        {id: 241, peso: 5, nota: 4.05, id_turma: 5, id_aluno: 14},
        {id: 242, peso: 1, nota: 7.47, id_turma: 2, id_aluno: 8},
        {id: 243, peso: 1, nota: 7.02, id_turma: 2, id_aluno: 20},
        {id: 244, peso: 1, nota: 2.68, id_turma: 3, id_aluno: 17},
        {id: 245, peso: 3, nota: 7.39, id_turma: 5, id_aluno: 4},
        {id: 246, peso: 2, nota: 2.09, id_turma: 4, id_aluno: 12},
        {id: 247, peso: 2, nota: 8.65, id_turma: 3, id_aluno: 5},
        {id: 248, peso: 4, nota: 9.80, id_turma: 5, id_aluno: 8},
        {id: 249, peso: 5, nota: 8.21, id_turma: 2, id_aluno: 6},
        {id: 250, peso: 4, nota: 1.52, id_turma: 1, id_aluno: 17},
        {id: 251, peso: 3, nota: 8.78, id_turma: 4, id_aluno: 18},
        {id: 252, peso: 2, nota: 6.06, id_turma: 5, id_aluno: 10},
        {id: 253, peso: 4, nota: 8.40, id_turma: 1, id_aluno: 10},
        {id: 254, peso: 3, nota: 2.18, id_turma: 3, id_aluno: 15},
        {id: 255, peso: 2, nota: 7.76, id_turma: 5, id_aluno: 16},
        {id: 256, peso: 4, nota: 5.93, id_turma: 2, id_aluno: 7},
        {id: 257, peso: 4, nota: 6.94, id_turma: 1, id_aluno: 16},
        {id: 258, peso: 4, nota: 7.82, id_turma: 3, id_aluno: 1},
        {id: 259, peso: 4, nota: 1.15, id_turma: 5, id_aluno: 19},
        {id: 260, peso: 1, nota: 7.46, id_turma: 3, id_aluno: 6},
        {id: 261, peso: 3, nota: 1.29, id_turma: 1, id_aluno: 12},
        {id: 262, peso: 5, nota: 7.43, id_turma: 4, id_aluno: 19},
        {id: 263, peso: 2, nota: 5.18, id_turma: 1, id_aluno: 1},
        {id: 264, peso: 2, nota: 3.39, id_turma: 4, id_aluno: 12},
        {id: 265, peso: 4, nota: 8.49, id_turma: 4, id_aluno: 17},
        {id: 266, peso: 3, nota: 4.35, id_turma: 2, id_aluno: 2},
        {id: 267, peso: 2, nota: 6.19, id_turma: 3, id_aluno: 11},
        {id: 268, peso: 2, nota: 6.43, id_turma: 4, id_aluno: 18},
        {id: 269, peso: 3, nota: 2.10, id_turma: 3, id_aluno: 5},
        {id: 270, peso: 5, nota: 9.50, id_turma: 4, id_aluno: 8},
        {id: 271, peso: 5, nota: 9.17, id_turma: 4, id_aluno: 6},
        {id: 272, peso: 2, nota: 9.13, id_turma: 1, id_aluno: 2},
        {id: 273, peso: 1, nota: 5.62, id_turma: 5, id_aluno: 17},
        {id: 274, peso: 4, nota: 2.40, id_turma: 2, id_aluno: 7},
        {id: 275, peso: 4, nota: 8.10, id_turma: 3, id_aluno: 3},
        {id: 276, peso: 5, nota: 5.89, id_turma: 1, id_aluno: 11},
        {id: 277, peso: 3, nota: 8.53, id_turma: 4, id_aluno: 3},
        {id: 278, peso: 3, nota: 7.41, id_turma: 4, id_aluno: 16},
        {id: 279, peso: 2, nota: 3.73, id_turma: 2, id_aluno: 8},
        {id: 280, peso: 1, nota: 8.65, id_turma: 1, id_aluno: 6},
        {id: 281, peso: 2, nota: 5.68, id_turma: 3, id_aluno: 16},
        {id: 282, peso: 4, nota: 8.33, id_turma: 2, id_aluno: 7},
        {id: 283, peso: 4, nota: 4.57, id_turma: 5, id_aluno: 7},
        {id: 284, peso: 3, nota: 3.97, id_turma: 3, id_aluno: 18},
        {id: 285, peso: 4, nota: 6.83, id_turma: 5, id_aluno: 10},
        {id: 286, peso: 3, nota: 7.85, id_turma: 3, id_aluno: 11},
        {id: 287, peso: 5, nota: 1.57, id_turma: 4, id_aluno: 2},
        {id: 288, peso: 3, nota: 3.72, id_turma: 2, id_aluno: 7},
        {id: 289, peso: 4, nota: 1.31, id_turma: 4, id_aluno: 18},
        {id: 290, peso: 5, nota: 5.44, id_turma: 3, id_aluno: 10},
        {id: 291, peso: 1, nota: 5.30, id_turma: 2, id_aluno: 9},
        {id: 292, peso: 5, nota: 5.66, id_turma: 1, id_aluno: 7},
        {id: 293, peso: 3, nota: 8.00, id_turma: 1, id_aluno: 4},
        {id: 294, peso: 2, nota: 3.30, id_turma: 4, id_aluno: 15},
        {id: 295, peso: 4, nota: 4.96, id_turma: 1, id_aluno: 10},
        {id: 296, peso: 5, nota: 1.25, id_turma: 5, id_aluno: 15},
        {id: 297, peso: 2, nota: 6.73, id_turma: 3, id_aluno: 1},
        {id: 298, peso: 4, nota: 4.15, id_turma: 5, id_aluno: 11},
        {id: 299, peso: 4, nota: 3.62, id_turma: 2, id_aluno: 7},
        {id: 300, peso: 3, nota: 6.35, id_turma: 4, id_aluno: 2},
    ]));
}

function getAvaliacaoBD(id) {
    return new Promise((resolve, reject) => resolve([{id: 296, peso: 5, nota: 1.25, id_turma: 5, id_aluno: 15}]));
}

function createAvaliacaoBD(avaliacao) {
    return new Promise((resolve, reject) => resolve({affectedRows: 1}));
}

function deleteAvaliacaoBD(id) {
    return new Promise((resolve, reject) => resolve({affectedRows: 1}));
}

function updateAvaliacaoBD(avaliacao) {
    return new Promise((resolve, reject) => resolve({affectedRows: 1}));
}

module.exports = {
    createAvaliacaoBD,
    deleteAvaliacaoBD,
    updateAvaliacaoBD,
    getAvaliacaoBD,
    getTodasAvaliacoesBD
}