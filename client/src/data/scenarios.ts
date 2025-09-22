export interface Scenario {
  id: string;
  title: string;
  description: string;
  recommendedMedium: string;
  why: string;
  speed: {
    value: number; // 0-100 for speedometer
    level: string; // Low, Medium, High, Very High
    description: string;
  };
  cost: {
    value: number; // 0-100 for speedometer  
    level: string; // Low, Medium, High
    description: string;
  };
  interference: {
    value: number; // 0-100 for speedometer
    level: string; // None, Low, Medium, High
    description: string;
  };
  type: 'guided' | 'unguided';
}

export const guidedScenarios: Scenario[] = [
  {
    id: 'local-network',
    title: 'Local Network for Home or Office',
    description: 'You want to connect computers, printers and other devices within a short-to-medium range (e.g., a single room, a floor, or a building).',
    recommendedMedium: 'UTP (Unshielded Twisted Pair)',
    why: 'UTP is the standard for Ethernet, is very affordable, easy to install, and provides more than enough speed for most indoor networking needs.',
    speed: {
      value: 40,
      level: 'Low to Medium',
      description: 'Common speeds are 1 Gbps, but can go up to 10 Gbps for high-grade cables over short distances.'
    },
    cost: {
      value: 20,
      level: 'Low',
      description: 'It is the most affordable and widely used type of network cable.'
    },
    interference: {
      value: 80,
      level: 'High',
      description: 'It has no shielding, making it very susceptible to electromagnetic interference (EMI) and crosstalk from nearby cables or electrical equipment.'
    },
    type: 'guided'
  },
  {
    id: 'backbone-network',
    title: 'High-Speed Network Backbone (Campus/Data Center)',
    description: 'You need to connect different buildings on a large campus, link data centers, or build the core of a city\'s internet infrastructure.',
    recommendedMedium: 'Fiber Optic Cable',
    why: 'This option is for the user who needs maximum speed, bandwidth, and resistance to signal loss over long distances. It\'s the best choice for a network backbone.',
    speed: {
      value: 95,
      level: 'High to Very High',
      description: 'Fiber optic cables can transmit data at speeds of 10 Gbps, 40 Gbps, and even 100 Gbps or more.'
    },
    cost: {
      value: 85,
      level: 'High',
      description: 'The materials and specialized installation tools make fiber optic significantly more expensive than copper-based cables.'
    },
    interference: {
      value: 0,
      level: 'None',
      description: 'Since data is transmitted using pulses of light, it is completely immune to electromagnetic interference.'
    },
    type: 'guided'
  },
  {
    id: 'industrial-environment',
    title: 'Industrial or High-Interference Environment',
    description: 'You want to run a network in a location with a lot of electrical equipment, motors, or machinery that could cause interference.',
    recommendedMedium: 'STP (Shielded Twisted Pair)',
    why: 'The extra shielding on an STP cable protects the data signal from electromagnetic interference (EMI), ensuring a reliable connection in a challenging environment.',
    speed: {
      value: 70,
      level: 'Medium to High',
      description: 'Due to the shielding, it can handle higher speeds than UTP over similar distances.'
    },
    cost: {
      value: 50,
      level: 'Medium',
      description: 'It\'s more expensive than UTP due to the added shielding material.'
    },
    interference: {
      value: 25,
      level: 'Low',
      description: 'The metallic shielding significantly protects the data signal from external EMI and crosstalk, making it suitable for industrial environments.'
    },
    type: 'guided'
  },
  {
    id: 'cable-tv-broadband',
    title: 'Connecting to a Cable TV or Broadband Service',
    description: 'You want to connect to a cable television service or receive a broadband internet connection from their service provider.',
    recommendedMedium: 'Coaxial Cable',
    why: 'Coaxial cable has a layered design that allows it to carry high-frequency signals with minimal interference over medium distances, making it the standard for CATV and broadband services.',
    speed: {
      value: 45,
      level: 'Low to Medium',
      description: 'It has a higher bandwidth than twisted pair cables and can achieve speeds up to 1 Gbps. However, it\'s generally not as fast as modern high-grade twisted pair or fiber optic.'
    },
    cost: {
      value: 50,
      level: 'Medium',
      description: 'It\'s more expensive than twisted pair cables but less expensive than fiber optic.'
    },
    interference: {
      value: 25,
      level: 'Low',
      description: 'Its design with an inner conductor and an outer metallic shield provides excellent resistance to interference.'
    },
    type: 'guided'
  },
  {
    id: 'global-connection',
    title: 'Extremely Long-Distance/Global Connection',
    description: 'You want to establish a connection between continents or countries.',
    recommendedMedium: 'Fiber Optic Cable (Submarine)',
    why: 'The ability of fiber optics to transmit signals over vast distances with almost no signal degradation makes it the only viable option for a global communication backbone.',
    speed: {
      value: 95,
      level: 'High to Very High',
      description: 'Fiber optic cables can transmit data at speeds of 10 Gbps, 40 Gbps, and even 100 Gbps or more.'
    },
    cost: {
      value: 85,
      level: 'High',
      description: 'The materials and specialized installation tools make fiber optic significantly more expensive than copper-based cables.'
    },
    interference: {
      value: 0,
      level: 'None',
      description: 'Since data is transmitted using pulses of light, it is completely immune to electromagnetic interference.'
    },
    type: 'guided'
  }
];

export const unguidedScenarios: Scenario[] = [
  {
    id: 'broadcasting-wireless',
    title: 'General Broadcasting or Wide-Area Wireless (e.g., radio, Wi-Fi)',
    description: 'You want to broadcast a signal from one source to many receivers over a large area, like radio or television signals. This is also suitable for mobile communication, Wi-Fi, and general-purpose wireless networking.',
    recommendedMedium: 'Radio Waves',
    why: 'Radio waves are omnidirectional, meaning they propagate in all directions from the antenna. This makes them ideal for broadcasting because a single transmitter can cover a vast geographical area. They can also penetrate walls and other obstacles, ensuring wide coverage.',
    speed: {
      value: 30,
      level: 'Low',
      description: 'While capable of high speeds in some applications (like Wi-Fi), their wide broadcast nature and susceptibility to interference generally result in lower speeds compared to more focused wireless technologies.'
    },
    cost: {
      value: 20,
      level: 'Low',
      description: 'The technology is widespread and inexpensive, from a simple radio receiver to Wi-Fi routers. This makes it an affordable solution for most broadcasting and local wireless needs.'
    },
    interference: {
      value: 85,
      level: 'High',
      description: 'Radio waves are omnidirectional and travel through walls, making them highly susceptible to interference from other wireless devices, electrical signals, and even natural phenomena.'
    },
    type: 'unguided'
  },
  {
    id: 'point-to-point-link',
    title: 'Point-to-Point, High-Speed Link (e.g., between buildings)',
    description: 'You want to create a focused, high-speed wireless link between two specific locations that have a clear line of sight, such as connecting two buildings or serving as a cellular network\'s backhaul.',
    recommendedMedium: 'Microwaves',
    why: 'Microwaves are unidirectional and require a clear line of sight. Their high frequency allows them to carry large amounts of data at high speeds, making them perfect for dedicated, long-distance communication links that are more affordable than laying physical cables. They\'re also used for satellite communication.',
    speed: {
      value: 80,
      level: 'High',
      description: 'Microwaves operate at a higher frequency than radio waves, allowing them to carry more data. This makes them ideal for high-speed, point-to-point communication.'
    },
    cost: {
      value: 75,
      level: 'High',
      description: 'Microwave communication requires specialized equipment, including high-gain parabolic antennas, which must be precisely aligned. This makes the initial setup and maintenance more expensive.'
    },
    interference: {
      value: 50,
      level: 'Medium',
      description: 'Microwaves are unidirectional and must have a clear line of sight, which significantly reduces the chance of interference from signals outside the path. However, they can be affected by weather conditions like heavy rain or snow.'
    },
    type: 'unguided'
  },
  {
    id: 'short-range-control',
    title: 'Short-Range Device Control (e.g., remote control)',
    description: 'You need to control a device from a short distance without a wire, and the signal should not pass through walls to avoid interference with other rooms.',
    recommendedMedium: 'Infrared (IR) Waves',
    why: 'Infrared waves are ideal for short-range communication, typically within a single room. They require a line of sight between the transmitter and receiver (e.g., a TV remote and the television). This limitation makes them highly secure for their intended purpose, as the signal cannot be intercepted from outside the room.',
    speed: {
      value: 20,
      level: 'Low',
      description: 'Infrared is used for short-range communication, such as TV remotes. While it can support high data rates in specific applications, its limited range and line-of-sight requirement make its overall application speed low.'
    },
    cost: {
      value: 15,
      level: 'Low',
      description: 'Infrared emitters and receivers are very common and cheap, making the technology affordable for consumer electronics.'
    },
    interference: {
      value: 25,
      level: 'Low',
      description: 'Infrared signals cannot penetrate solid objects, which prevents them from interfering with devices in other rooms. However, the signal can be interfered with by strong light sources, especially sunlight.'
    },
    type: 'unguided'
  }
];

// Chart data for comparisons
export const chartData = {
  guidedCostComparison: [
    { name: 'UTP', cost: 20 },
    { name: 'STP', cost: 50 },
    { name: 'Coaxial', cost: 50 },
    { name: 'Fiber', cost: 85 }
  ],
  guidedSpeedComparison: [
    { name: 'UTP', speed: 40 },
    { name: 'STP', speed: 70 },
    { name: 'Coaxial', speed: 45 },
    { name: 'Fiber', speed: 95 }
  ],
  guidedInterferenceComparison: [
    { name: 'UTP', interference: 80 },
    { name: 'STP', interference: 25 },
    { name: 'Coaxial', interference: 25 },
    { name: 'Fiber', interference: 0 }
  ],
  unguidedCostComparison: [
    { name: 'Radio Waves', cost: 20 },
    { name: 'Microwaves', cost: 75 },
    { name: 'Infrared', cost: 15 }
  ],
  unguidedSpeedComparison: [
    { name: 'Radio Waves', speed: 30 },
    { name: 'Microwaves', speed: 80 },
    { name: 'Infrared', speed: 20 }
  ],
  unguidedInterferenceComparison: [
    { name: 'Radio Waves', interference: 85 },
    { name: 'Microwaves', interference: 50 },
    { name: 'Infrared', interference: 25 }
  ],
  overallCostComparison: [
    { name: 'Guided', cost: 51.25 }, // Average of guided media costs
    { name: 'Unguided', cost: 36.67 } // Average of unguided media costs
  ],
  overallSpeedComparison: [
    { name: 'Guided', speed: 62.5 }, // Average of guided media speeds
    { name: 'Unguided', speed: 43.33 } // Average of unguided media speeds
  ],
  overallInterferenceComparison: [
    { name: 'Guided', interference: 32.5 }, // Average of guided media interference
    { name: 'Unguided', interference: 53.33 } // Average of unguided media interference
  ]
};