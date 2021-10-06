const funcoes = require('./funcoes');

let casos = [{
  "email": "nnaylor0@sciencedirect.com",
  "saida": "nna****@sciencedirect.com"
}, {
  "email": "giwanicki1@amazon.co.uk",
  "saida": "giw****@amazon.co.uk"
}, {
  "email": "123456",
  "saida": "Entrada invalida"
}, {
  "email": "vwoolnough3@sina.com.cn",
  "saida": "vwo****@sina.com.cn"
}, {
  "email": "bbasham4@mail.ru",
  "saida": "bba****@mail.ru"
}, {
  "email": "rrakestraw5@devhub.com",
  "saida": "rra****@devhub.com"
}, {
  "email": "ufrrj",
  "saida": "Entrada invalida"
}, {
  "email": "jporcher7@goo.ne.jp",
  "saida": "jpo****@goo.ne.jp"
}, {
  "email": "hburhouse8@google.es",
  "saida": "hbu****@google.es"
}, {
  "email": "bcullinan9@oakley.com",
  "saida": "bcu****@oakley.com"
}, {
  "email": "jhearsona@drupal.org",
  "saida": "jhe****@drupal.org"
}, {
  "email": "ddonneelyb@arizona.edu",
  "saida": "ddo****@arizona.edu"
}, {
  "email": "nscholerc@icq.com",
  "saida": "nsc****@icq.com"
}, {
  "email": "akdjdidjedldj",
  "saida": "Entrada invalida"
}, {
  "email": "bkrzysztofiake@nsw.gov.au",
  "saida": "bkr****@nsw.gov.au"
}, {
  "email": "lkaygillf@cnn.com",
  "saida": "lka****@cnn.com"
}, {
  "email": "agerrillg@merriam-webster.com",
  "saida": "age****@merriam-webster.com"
}, {
  "email": "lassenderh@howstuffworks.com",
  "saida": "las****@howstuffworks.com"
}, {
  "email": "wmettetali@prweb.com",
  "saida": "wme****@prweb.com"
}, {
  "email": "lgossj@phoca.cz",
  "saida": "lgo****@phoca.cz"
}, {
  "email": "bbassk@omniture.com",
  "saida": "bba****@omniture.com"
}, {
  "email": "vallotl@webs.com",
  "saida": "val****@webs.com"
}, {
  "email": "icuniamm@boston.com",
  "saida": "icu****@boston.com"
}, {
  "email": "tkeileyn@constantcontact.com",
  "saida": "tke****@constantcontact.com"
}, {
  "email": "slonghorneo@merriam-webster.com",
  "saida": "slo****@merriam-webster.com"
}, {
  "email": "omaiorp@ucoz.ru",
  "saida": "oma****@ucoz.ru"
}, {
  "email": "ncarnowq@people.com.cn",
  "saida": "nca****@people.com.cn"
}, {
  "email": "pbanhamr@dell.com",
  "saida": "pba****@dell.com"
}, {
  "email": "wnunns@stumbleupon.com",
  "saida": "wnu****@stumbleupon.com"
}, {
  "email": "espriggt@msu.edu",
  "saida": "esp****@msu.edu"
}];


  casos.forEach(function (caso) {
      let mensagem = 'Email original: "' + caso.email + '"\nEmail escondido: ' + caso.saida;
      test(mensagem, () => {
        expect(funcoes.item2(caso.email)).toBe(caso.saida);
      });
  });

