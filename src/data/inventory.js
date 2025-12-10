export const inventory = [
  // --- ESTAÇÕES TOTAIS TOPCON ---
  {
    id: 'station-topcon-es105',
    name: 'Estação Total Topcon ES-105',
    type: 'station',
    desc: 'Tecnologia EDM avançada para medições rápidas e precisas. Possui sistema TSshield™ de segurança e manutenção remota.',
    img: '/estacao_V-227N2.webp',
    specs: {
      precisionAngular: '5" (segundos)',
      precisionLinear: '±(2mm + 2ppm)',
      rangeNonPrism: '500m',
      rangePrism: '4.000m',
      connectivity: 'Bluetooth LongLink™, USB, Serial',
      display: 'Duplo Display Gráfico Iluminado',
      protection: 'IP66 (Alta resistência a água e poeira)',
      battery: '36 horas de operação',
      compensator: 'Eixo Duplo'
    }
  },
  {
    id: 'station-topcon-gts245nw',
    name: 'Estação Total Topcon GTS-245NW',
    type: 'station',
    desc: 'Conectividade Bluetooth integrada e teclado alfanumérico completo. Ideal para levantamentos que exigem agilidade na entrada de dados.',
    img: '/estacao_V-227N.webp',
    specs: {
      precisionAngular: '5"',
      precisionLinear: '±(2mm + 2ppm)',
      rangeNonPrism: 'N/A (Requer prisma)',
      rangePrism: '3.000m (1 prisma)',
      connectivity: 'Bluetooth (Wireless), Serial RS-232',
      display: 'Duplo Display Alfanumérico (24 teclas)',
      protection: 'IP54',
      battery: 'Aprox. 10h (Medição contínua)',
      compensator: 'Eixo Único'
    }
  },
  {
    id: 'station-topcon-gts246nw',
    name: 'Estação Total Topcon GTS-246NW',
    type: 'station',
    desc: 'Versão de 6 segundos da série GTS-240NW. Oferece a mesma conectividade sem fio com excelente custo-benefício.',
    img: '/estacao_V-227N.webp',
    specs: {
      precisionAngular: '6"',
      precisionLinear: '±(2mm + 2ppm)',
      rangeNonPrism: 'N/A',
      rangePrism: '3.000m (1 prisma)',
      connectivity: 'Bluetooth, Serial',
      display: 'Duplo Display',
      protection: 'IP54',
      battery: 'Aprox. 10h',
      compensator: 'Eixo Único'
    }
  },
  {
    id: 'station-topcon-gts235w',
    name: 'Estação Total Topcon GTS-235W',
    type: 'station',
    desc: 'A clássica série GTS agora sem cabos. Robustez comprovada em campo com a liberdade da comunicação Bluetooth.',
    img: '/estacao_V-227N.webp',
    specs: {
      precisionAngular: '5"',
      precisionLinear: '±(2mm + 2ppm)',
      rangeNonPrism: 'N/A',
      rangePrism: '3.000m',
      connectivity: 'Bluetooth Integrado',
      display: 'Duplo Display',
      protection: 'IP54',
      battery: 'Longa duração (Ni-MH)',
      compensator: 'Eixo Único'
    }
  },
  {
    id: 'station-topcon-gts236w',
    name: 'Estação Total Topcon GTS-236W',
    type: 'station',
    desc: 'Modelo de 6 segundos da série "W". Perfeita para obras de terraplenagem e locação onde a robustez é fundamental.',
    img: '/estacao_V-227N.webp',
    specs: {
      precisionAngular: '6"',
      precisionLinear: '±(2mm + 2ppm)',
      rangeNonPrism: 'N/A',
      rangePrism: '3.000m',
      connectivity: 'Bluetooth Integrado',
      display: 'Duplo Display',
      protection: 'IP54',
      battery: '10h (aprox.)',
      compensator: 'Eixo Único'
    }
  },

  // --- ESTAÇÕES TOTAIS NIKON ---
  {
    id: 'station-nikon-dtm332',
    name: 'Estação Total Nikon DTM-332',
    type: 'station',
    desc: 'Lentes Nikon de alta qualidade para imagens nítidas. Bateria de longa duração e design leve e compacto.',
    img: '/estacao_V-227N.webp',
    specs: {
      precisionAngular: '5"',
      precisionLinear: '±(3mm + 2ppm)',
      rangeNonPrism: 'N/A',
      rangePrism: '2.300m (1 prisma)',
      connectivity: 'Serial RS-232C',
      display: 'Display Único (LCD)',
      protection: 'IP55',
      battery: '15h (Bateria interna recarregável)',
      compensator: 'Eixo Único'
    }
  },

  // --- ESTAÇÕES TOTAIS PENTAX ---
  {
    id: 'station-pentax-v227n',
    name: 'Estação Total Pentax V-227N',
    type: 'station',
    desc: 'Interface intuitiva e grande capacidade de memória. Uma solução versátil para topografia geral.',
    img: '/estacao_V-227N.webp',
    specs: {
      precisionAngular: '7"',
      precisionLinear: '±(3mm + 2ppm)',
      rangeNonPrism: 'N/A',
      rangePrism: '2.000m',
      connectivity: 'Serial RS-232C',
      display: 'Duplo Display Grande',
      protection: 'IP54',
      battery: '8h de uso contínuo',
      memory: '24.000 pontos'
    }
  },
  {
    id: 'station-pentax-ats102',
    name: 'Estação Total Pentax ATS-102',
    type: 'station',
    desc: 'Alta precisão de 2 segundos. Teclado alfanumérico e software PowerTopolite integrado para cálculos complexos em campo.',
    img: '/estacao_V-227N.webp',
    specs: {
      precisionAngular: '2"',
      precisionLinear: '±(2mm + 2ppm)',
      rangeNonPrism: 'N/A (Refletorless opcional em alguns modelos, padrão com prisma)',
      rangePrism: '3.000m',
      connectivity: 'RS-232C',
      display: 'Duplo Display Gráfico',
      protection: 'IP55',
      battery: 'Duas baterias (troca a quente)',
      compensator: 'Eixo Único'
    }
  },

  // --- TEODOLITOS ---
  {
    id: 'theo-pentax-eth20f',
    name: 'Teodolito Eletrônico Pentax ETH-20F',
    type: 'theodolite',
    desc: 'Ideal para obras de construção civil, alinhamento de estruturas e locação de pontos que exigem robustez.',
    img: '/estacao_V-227N.webp',
    specs: {
      precisionAngular: '20" (vinte segundos)',
      magnification: '26x',
      display: 'Duplo LCD',
      battery: 'Caixa de pilhas (4x AA) - 40h operação',
      compensator: 'Vertical Automático',
      protection: 'IPX4'
    }
  },
  {
    id: 'theo-pentax-eth120f',
    name: 'Teodolito Eletrônico Pentax ETH-120F',
    type: 'theodolite',
    desc: 'Teclado simplificado e operação intuitiva. Perfeito para equipes que buscam praticidade em campo.',
    img: '/estacao_V-227N.webp',
    specs: {
      precisionAngular: '20" (vinte segundos)',
      magnification: '30x',
      display: 'Duplo LCD de fácil leitura',
      battery: 'Caixa de pilhas (4x AA)',
      compensator: 'Não possui',
      protection: 'Resistente a obras'
    }
  },
  {
    id: 'theo-topcon-dt209',
    name: 'Teodolito Eletrônico Topcon DT-209',
    type: 'theodolite',
    desc: 'Extrema durabilidade da bateria e resistência superior a intempéries. Um dos mais confiáveis para ambientes hostis.',
    img: '/estacao_V-227N.webp',
    specs: {
      precisionAngular: '9" (nove segundos)',
      magnification: '26x',
      display: 'Único LCD de alto contraste',
      battery: 'Longa duração (aprox. 170h)',
      compensator: 'Não possui',
      protection: 'IP66 (Jatos potentes de água)'
    }
  },
  {
    id: 'theo-nikon-ne101',
    name: 'Teodolito Eletrônico Nikon NE-101',
    type: 'theodolite',
    desc: 'Renomada qualidade óptica Nikon para visualização em baixa luz. Teclado numérico fácil com função de retenção de ângulo.',
    img: '/estacao_V-227N.webp',
    specs: {
      precisionAngular: '7" (sete segundos)',
      magnification: '30x (Óptica Nikon)',
      display: 'Único Grande e Ergonômico',
      battery: '48h (Pilhas AA)',
      compensator: 'Não possui',
      protection: 'IP54'
    }
  },

  // --- NÍVEIS ---
  {
    id: 'level-wild-na2',
    name: 'Nível Automático Wild NA2',
    type: 'level',
    desc: 'O padrão ouro em nivelamento. Compensador automático robusto e óptica de classe mundial para obras de alta precisão.',
    img: '/estacao_V-227N.webp',
    specs: {
      accuracy: '0.7mm (padrão) / 0.3mm (com micrômetro)',
      magnification: '32x',
      compensator: 'Automático com amortecimento a ar',
      micrometer: 'Opcional (GPM3) para alta precisão',
      protection: 'Resistente a intempéries',
      weight: '2.5kg'
    }
  },
  {
    id: 'level-wild-nk2',
    name: 'Nível Wild NK2',
    type: 'level',
    desc: 'Clássico nível de bolha bipartida. Ideal para ensino e obras onde a mecânica tradicional e confiável é preferida.',
    img: '/estacao_V-227N.webp',
    specs: {
      accuracy: '2.0mm por km duplo',
      magnification: '28x',
      compensator: 'Não (Nível de bolha)',
      horizontalCircle: 'Círculo de vidro (opcional em alguns modelos)',
      protection: 'Construção metálica robusta',
      weight: '2.3kg'
    }
  },
  {
    id: 'level-wild-nak1',
    name: 'Nível Automático Wild NAK1',
    type: 'level',
    desc: 'Versatilidade e rapidez. Possui círculo horizontal de vidro para medição de ângulos e taqueometria básica.',
    img: '/estacao_V-227N.webp',
    specs: {
      accuracy: '2.0mm (Desvio padrão por km)',
      magnification: '24x',
      compensator: 'Automático',
      horizontalCircle: 'Integrado (Leitura de ângulos)',
      protection: 'Resistente a pó e umidade',
      weight: '2.0kg'
    }
  },
  {
    id: 'level-wild-n3',
    name: 'Nível de Precisão Wild N3',
    type: 'level',
    desc: 'A lenda da precisão. Projetado para geodésia, monitoramento de estruturas e nivelamento industrial de primeira ordem.',
    img: '/estacao_V-227N.webp',
    specs: {
      accuracy: '0.2mm por km duplo (Alta Precisão)',
      magnification: '42x (Poderosa)',
      compensator: 'Não (Nível de bolha de alta sensibilidade)',
      micrometer: 'Placa plano-paralela integrada',
      protection: 'Carcaça selada',
      weight: '3.5kg'
    }
  },
  {
    id: 'level-topcon-atb4',
    name: 'Nível Automático Topcon AT-B4',
    type: 'level',
    desc: 'Compensador magnético estável e resistente a vibrações. Padrão da indústria para nivelamento de obras.',
    img: '/estacao_V-227N.webp',
    specs: {
      accuracy: '2.0mm',
      magnification: '24x',
      compensator: 'Magnético',
      protection: 'IPX6',
      weight: '1.7kg'
    }
  },
  {
    id: 'level-kolida-kl32',
    name: 'Nível Automático Kolida KL-32',
    type: 'level',
    desc: 'Excelente custo-benefício com alta ampliação. Compensador amortecido a ar para leituras estáveis em qualquer ambiente.',
    img: '/estacao_V-227N.webp',
    specs: {
      accuracy: '1.0mm (Desvio padrão por km duplo)',
      magnification: '32x',
      compensator: 'Automático (Amortecimento a ar)',
      protection: 'IP54 (Resistente a respingos e poeira)',
      weight: '1.3kg'
    }
  },

  // --- ACESSÓRIOS ---
  {
    id: 'acc-wild-gpm3',
    name: 'Placa Plano-Paralela (Micrômetro) Wild GPM3',
    type: 'accessory',
    desc: 'Acessório de alta precisão para Nível Wild NA2. Permite leituras diretas de 0.1mm e estimativa de 0.01mm.',
    img: '/estacao_V-227N.webp',
    specs: {
      precision: 'Leitura direta 0.1mm / Estimada 0.01mm',
      compatibility: 'Nível Wild NA2 / NAK2',
      range: '10mm (curso do micrômetro)',
      mount: 'Encaixe rápido na objetiva'
    }
  },
  {
    id: 'acc-prism-set',
    name: 'Conjunto Prisma com Bastão',
    type: 'accessory',
    desc: 'Kit completo com prisma circular, suporte e bastão extensível de 2.5m.',
    img: '/estacao_V-227N.webp',
    specs: {
      constant: '0/-30mm',
      poleHeight: '2.5m',
      material: 'Alumínio'
    }
  },
  {
    id: 'acc-tripod',
    name: 'Tripé de Alumínio',
    type: 'accessory',
    desc: 'Tripé robusto com travas duplas para estabilidade máxima da estação total.',
    img: '/estacao_V-227N.webp',
    specs: {
      head: 'Plana',
      lock: 'Dupla trava',
      weight: '4.2kg'
    }
  }
];