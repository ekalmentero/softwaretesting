const funcoes = require('./funcoes');

let casos = [{
	"entrada": "Up-sized impactful function",
	"saida": 'Up-sized-impactful-function'
}, {
	"entrada": "Managed maximized circuit",
	"saida": 'Managed-maximized-circuit'
}, {
	"entrada": "Triple-buffered logistical array",
	"saida": 'Triple-buffered-logistical-array'
}, {
	"entrada": "Seamless leading edge installation",
	"saida": 'Seamless-leading-edge-installation'
}, {
	"entrada": "De-engineered 24/7 collaboration",
	"saida": 'De-engineered-24/7-collaboration'
}, {
	"entrada": "Programmable heuristic access",
	"saida": 'Programmable-heuristic-access'
}, {
	"entrada": "Innovative dynamic migration",
	"saida": 'Innovative-dynamic-migration'
}, {
	"entrada": "Mandatory contextually-based neural-net",
	"saida": 'Mandatory-contextually-based-neural-net'
}, {
	"entrada": "46548865465421654849654654",
	"saida": 'Entrada invalida'
}, {
	"entrada": "Decentralized neutral structure",
	"saida": 'Decentralized-neutral-structure'
}, {
	"entrada": "Future-proofed multi-tasking customer loyalty",
	"saida": 'Future-proofed-multi-tasking-customer-loyalty'
}, {
	"entrada": "Team-oriented directional model",
	"saida": 'Team-oriented-directional-model'
}, {
	"entrada": "Triple-buffered radical architecture",
	"saida": 'Triple-buffered-radical-architecture'
}, {
	"entrada": "Assimilated solution-oriented secured line",
	"saida": 'Assimilated-solution-oriented-secured-line'
}, {
	"entrada": "Assimilated directional task-force",
	"saida": 'Assimilated-directional-task-force'
}, {
	"entrada": "Future-proofed needs-based forecast",
	"saida": 'Future-proofed-needs-based-forecast'
}, {
	"entrada": "654876543216355465",
	"saida": 'Entrada invalida'
}, {
	"entrada": "Cloned attitude-oriented superstructure",
	"saida": 'Cloned-attitude-oriented-superstructure'
}, {
	"entrada": "Visionary exuding pricing structure",
	"saida": 'Visionary-exuding-pricing-structure'
}, {
	"entrada": "User-centric logistical secured line",
	"saida": 'User-centric-logistical-secured-line'
}, {
	"entrada": "Operative multi-state implementation",
	"saida": 'Operative-multi-state-implementation'
}, {
	"entrada": "Focused bandwidth-monitored knowledge user",
	"saida": 'Focused-bandwidth-monitored-knowledge-user'
}, {
	"entrada": "Reduced context-sensitive alliance",
	"saida": 'Reduced-context-sensitive-alliance'
}, {
	"entrada": "Reduced methodical open architecture",
	"saida": 'Reduced-methodical-open-architecture'
}, {
	"entrada": "Enterprise-wide cohesive approach",
	"saida": 'Enterprise-wide-cohesive-approach'
}, {
	"entrada": "54857458656562355",
	"saida": 'Entrada invalida'
}, {
	"entrada": "Polarised explicit emulation",
	"saida": 'Polarised-explicit-emulation'
}, {
	"entrada": "Business-focused 6th generation groupware",
	"saida": 'Business-focused-6th-generation-groupware'
}, {
	"entrada": "Total 6th generation data-warehouse",
	"saida": 'Total-6th-generation-data-warehouse'
}, {
	"entrada": "Phased zero tolerance installation",
	"saida": 'Phased-zero-tolerance-installation'
}];

  casos.forEach(function (caso) {
      let mensagem = 'Frase original:\n"' + caso.entrada + '"\nFrase parametrizada: ' + caso.saida;
      test(mensagem, () => {
        expect(funcoes.item3(caso.entrada)).toBe(caso.saida);
      });
  });
