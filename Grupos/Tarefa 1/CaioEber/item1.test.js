const funcoes = require('./funcoes');

let casos = [{
    "frase": "eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam",
    "palavra": "justo",
    "saida": 'O termo "justo" foi encontrado 2 vezes'
  }, {
    "frase": "libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi",
    "palavra": "est",
    "saida": 'O termo "est" não foi encontrado'
  }, {
    "frase": "mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean",
    "palavra": "primis",
    "saida": 'O termo "primis" não foi encontrado'
  }, {
    "frase": "nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel",
    "palavra": "nulla",
    "saida": 'O termo "nulla" foi encontrado 4 vezes'
  }, {
    "frase": "                       ",
    "palavra": "volutpat",
    "saida": 'Frase inválida'
  },{
    "frase": "orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi",
    "palavra": "condimentum",
    "saida": 'O termo "condimentum" foi encontrado 1 vez'
  }, {
    "frase": "amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus",
    "palavra": "nisl",
    "saida": 'O termo "nisl" não foi encontrado'
  }, {
    "frase": "nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede",
    "palavra": "vel",
    "saida": 'O termo "vel" não foi encontrado'
  }, {
    "frase": "quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est",
    "palavra": "blandit",
    "saida": 'O termo "blandit" não foi encontrado'
  }, {
    "frase": "vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet",
    "palavra": "maecenas",
    "saida": 'O termo "maecenas" não foi encontrado'
  }, {
    "frase": "in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque",
    "palavra": "sapien",
    "saida": 'O termo "sapien" foi encontrado 1 vez'
  }, {
    "frase": "consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet",
    "palavra": "vulputate",
    "saida": 'O termo "vulputate" não foi encontrado'
  }, {
    "frase": "maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum",
    "palavra": "rhoncus",
    "saida": 'O termo "rhoncus" não foi encontrado'
  }, {
    "frase": "nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia",
    "palavra": "nonummy",
    "saida": 'O termo "nonummy" não foi encontrado'
  }, {
    "frase": "massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh",
    "palavra": "ut",
    "saida": 'O termo "ut" não foi encontrado'
  }, {
    "frase": "erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue",
    "palavra": "nulla",
    "saida": 'O termo "nulla" foi encontrado 2 vezes'
  }, {
    "frase": "mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue",
    "palavra": "habitasse",
    "saida": 'O termo "habitasse" não foi encontrado'
  }, {
    "frase": "platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec",
    "palavra": "rutrum",
    "saida": 'O termo "rutrum" não foi encontrado'
  }, {
    "frase": "habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem",
    "palavra": "platea",
    "saida": 'O termo "platea" foi encontrado 2 vezes'
  }, {
    "frase": "eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio",
    "palavra": "felis",
    "saida": 'O termo "felis" foi encontrado 1 vez'
  }, {
    "frase": "895621.-1^26465%%456873$212 1871289228921-\@",
    "palavra": "rhoncus",
    "saida": 'Frase inválida'
  },{
    "frase": "in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc",
    "palavra": "erat",
    "saida": 'O termo "erat" foi encontrado 1 vez'
  }, {
    "frase": "at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut",
    "palavra": "ante",
    "saida": 'O termo "ante" não foi encontrado'
  }, {
    "frase": "nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui",
    "palavra": "tortor",
    "saida": 'O termo "tortor" foi encontrado 1 vez'
  }, {
    "frase": "montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum",
    "palavra": "nunc",
    "saida": 'O termo "nunc" não foi encontrado'
  }, {
    "frase": "molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra",
    "palavra": "a",
    "saida": 'O termo "a" não foi encontrado'
  }, {
    "frase": "sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis",
    "palavra": "metus",
    "saida": 'O termo "metus" foi encontrado 1 vez'
  }, {
    "frase": "primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit",
    "palavra": "sem",
    "saida": 'O termo "sem" não foi encontrado'
  }, {
    "frase": "massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in",
    "palavra": "cursus",
    "saida": 'O termo "cursus" não foi encontrado'
  }, {
    "frase": "in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus",
    "palavra": "porttitor",
    "saida": 'O termo "porttitor" não foi encontrado'
  }, {
    "frase": "massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin",
    "palavra": "ligula",
    "saida": 'O termo "ligula" não foi encontrado'
  }, {
    "frase": "eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet",
    "palavra": "eu",
    "saida": 'O termo "eu" foi encontrado 1 vez'
  }];

  casos.forEach(function (caso) {
      let mensagem = caso.saida;
      test(mensagem, () => {
        expect(funcoes.item1(caso.frase, caso.palavra)).toBe(caso.saida);
      });
  });

