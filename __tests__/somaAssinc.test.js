const exemploAssincrono = require('../exemploAssincrono');
/*
test('Soma 7+4', () => {
    exemploAssincrono.somaAssinc([7,4]).toBe(11);
});
*/

test('Soma 12+10', () => {
    return exemploAssincrono.somaAssinc(10,12).then(data => {
      expect(data).toBe(22);
    });
  });

test('Soma 5+6', () => {
    return expect(exemploAssincrono.somaAssinc(5,6)).resolves.toBe(11);
});

test('Soma string', () => {
    return expect(exemploAssincrono.somaAssinc(5,"soma")).rejects.toMatch('erro');
});
