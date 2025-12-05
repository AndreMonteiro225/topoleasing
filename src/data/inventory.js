export const inventory = [
  // --- ESTAÇÕES TOTAIS ---
  {
    id: 'station-topcon-gts236w',
    name: 'Estação Total Topcon GTS-236W',
    type: 'station',
    desc: 'Conectividade sem fio (Bluetooth) e robustez lendária. Ideal para obras que exigem transmissão de dados ágil em campo.',
    img: 'Topcon GTS-236W',
    specs: {
      precisionAngular: '6" (segundos)',
      precisionLinear: '±(2mm + 2ppm)',
      rangePrism: '3.000m (1 prisma)',
      connectivity: 'Bluetooth Integrado (Wireless)',
      display: 'Duplo Display Alfanumérico',
      protection: 'IP54 (Resistente a poeira e água)',
      battery: 'Duração aprox. 10h (Ni-MH)',
      compensator: 'Eixo simples com compensação líquida'
    }
  },
  {
    id: 'station-leica-ts06',
    name: 'Estação Total Leica FlexLine TS06',
    type: 'station',
    desc: 'Alta precisão e medição sem prisma de longo alcance. A escolha premium para levantamentos cadastrais e engenharia de precisão.',
    img: 'Leica TS06',
    specs: {
      precisionAngular: '2" (segundos)',
      precisionLinear: '±(1.5mm + 2ppm)',
      rangeNonPrism: 'R500 (500m sem prisma)',
      rangePrism: '3.500m',
      connectivity: 'USB, Bluetooth e Serial',
      display: 'Tela Touchscreen Gráfica',
      protection: 'IP55',
      memory: '100.000 pontos internos'
    }
  },
  {
    id: 'station-topcon-es105',
    name: 'Estação Total Topcon ES-105',
    type: 'station',
    desc: 'Tecnologia EDM avançada para medições rápidas. Feixe de laser estreito para medir cantos, paredes e cabos com exatidão.',
    img: 'Topcon ES-105',
    specs: {
      precisionAngular: '5" (segundos)',
      rangeNonPrism: '500m',
      communication: 'LongLink™ (Bluetooth de longa distância)',
      battery: '36 horas de operação contínua',
      protection: 'IP66 (À prova d\'água)',
      trigger: 'Gatilho rápido lateral'
    }
  },

  // --- TEODOLITOS ---
  {
    id: 'theo-sokkia-dt200',
    name: 'Teodolito Digital Sokkia DT-200',
    type: 'theodolite',
    desc: 'Óptica superior e mecânica de precisão. Equipamento compacto e leve, perfeito para alinhamentos e controle de prumo.',
    img: 'Sokkia DT-200',
    specs: {
      precisionAngular: '5"',
      magnification: '30x',
      protection: 'IP66 (Suporta jatos potentes de água)',
      power: 'Pilhas AA (Fácil reposição em campo)',
      display: 'Duplo LCD retroiluminado',
      weight: '4.2kg'
    }
  },
  {
    id: 'theo-nikon-ne100',
    name: 'Teodolito Nikon NE-100',
    type: 'theodolite',
    desc: 'Facilidade de uso com teclado ergonômico. Excelente para construção civil, locação de eixos e verificação de ângulos.',
    img: 'Nikon NE-100',
    specs: {
      precisionAngular: '10"',
      magnification: '30x',
      image: 'Direta',
      battery: '48h de operação (Pilhas Alcalinas)',
      protection: 'IP54',
      focus: 'Mínimo de 0.7m'
    }
  },

  // --- NÍVEIS ---
  {
    id: 'level-topcon-atb4',
    name: 'Nível Automático Topcon AT-B4',
    type: 'level',
    desc: 'Compensador magnético ultra-rápido e estável. Resiste a vibrações de máquinas pesadas no canteiro de obras.',
    img: 'Topcon AT-B4',
    specs: {
      accuracy: '2.0mm (Desvio padrão por km duplo)',
      magnification: '24x',
      compensator: 'Magnético com amortecimento',
      protection: 'IPX6 (Proteção contra chuvas fortes)',
      minFocus: '0.2m (Ideal para espaços confinados)',
      horizontalCircle: '360 graus'
    }
  },
  {
    id: 'level-leica-sprinter',
    name: 'Nível Digital Leica Sprinter 150M',
    type: 'level',
    desc: 'Elimine erros de leitura humana. Leitura eletrônica de código de barras com cálculo automático de desníveis e distâncias.',
    img: 'Leica Sprinter',
    specs: {
      accuracy: '1.5mm (Eletrônico)',
      range: '2m a 100m (Eletrônico)',
      memory: 'Armazenamento interno de medições',
      functions: 'Cálculo de corte e aterro, rastreamento',
      weight: '2.5kg',
      dataOutput: 'USB para PC'
    }
  },

  // --- ACESSÓRIOS ---
  {
    id: 'acc-prism-set',
    name: 'Conjunto Prisma com Suporte',
    type: 'accessory',
    desc: 'Prisma circular de alta reflexão com suporte basculante e alvo. Compatível com Leica, Topcon e Sokkia.',
    img: 'Prisma Topográfico',
    specs: {
      constant: '0mm / -30mm (Reversível)',
      material: 'Polímero de alta resistência e vidro óptico',
      thread: 'Rosca 5/8"',
      color: 'Laranja de alta visibilidade'
    }
  },
  {
    id: 'acc-tripod-alum',
    name: 'Tripé de Alumínio Pesado',
    type: 'accessory',
    desc: 'Estabilidade garantida para sua estação total. Travas duplas (Quick Clamp e Borboleta) para segurança extra.',
    img: 'Tripé Alumínio',
    specs: {
      headType: 'Plana',
      locking: 'Dupla trava (rápida + parafuso)',
      material: 'Alumínio anodizado',
      weight: '4.5kg',
      strap: 'Alça de transporte reforçada'
    }
  },
  {
    id: 'acc-bipod',
    name: 'Bipé de Bastão Ajustável',
    type: 'accessory',
    desc: 'Liberte suas mãos e garanta a verticalidade do bastão. Sistema "Thumb Release" para ajuste rápido de altura.',
    img: 'Bipé Bastão',
    specs: {
      material: 'Alumínio e Aço',
      type: 'Botão de pressão (Thumb Release)',
      compatibility: 'Bastões de 25mm a 32mm',
      legs: 'Extensíveis para terrenos acidentados'
    }
  }
];