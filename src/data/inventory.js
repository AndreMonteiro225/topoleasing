export const inventory = [
  // --- ESTAÇÕES TOTAIS TOPCON ---
  {
    id: 'station-topcon-es105',
    name: 'Estação Total Topcon ES-105',
    type: 'station',
    desc: 'Tecnologia EDM avançada para medições rápidas e precisas. Possui sistema TSshield™ de segurança e manutenção remota.',
    img: 'Topcon ES-105',
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
    img: 'Topcon GTS-245NW',
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
    img: 'Topcon GTS-246NW',
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
    img: 'Topcon GTS-235W',
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
    img: 'Topcon GTS-236W',
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
    img: 'Nikon DTM-332',
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
    img: 'Pentax V-227N',
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
    img: 'Pentax ATS-102',
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

  // --- NÍVEIS (Mantidos como complemento de portfólio) ---
  {
    id: 'level-topcon-atb4',
    name: 'Nível Automático Topcon AT-B4',
    type: 'level',
    desc: 'Compensador magnético estável e resistente a vibrações. Padrão da indústria para nivelamento de obras.',
    img: 'Topcon AT-B4',
    specs: {
      accuracy: '2.0mm',
      magnification: '24x',
      compensator: 'Magnético',
      protection: 'IPX6',
      weight: '1.7kg'
    }
  },

  // --- ACESSÓRIOS ---
  {
    id: 'acc-prism-set',
    name: 'Conjunto Prisma com Bastão',
    type: 'accessory',
    desc: 'Kit completo com prisma circular, suporte e bastão extensível de 2.5m.',
    img: 'Prisma Completo',
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
    img: 'Tripé Topografia',
    specs: {
      head: 'Plana',
      lock: 'Dupla trava',
      weight: '4.2kg'
    }
  }
];