export interface ApplicationData {
  name: string;
  medium: string;
  speed: number;
  cost: number;
  interference: number;
  explanation: string;
}

export const applicationData: Record<string, ApplicationData> = {
  remote: {
    name: "Remote Areas",
    medium: "Microwaves/Satellite",
    speed: 70,
    cost: 80,
    interference: 40,
    explanation: "Microwaves and satellite communications are ideal for remote areas due to their long-range capabilities without requiring physical infrastructure. While installation costs are higher, they provide reliable connectivity where wired solutions are impractical."
  },
  lan: {
    name: "LAN",
    medium: "UTP/Fiber Optic",
    speed: 95,
    cost: 30,
    interference: 15,
    explanation: "UTP cables and fiber optics are perfect for LANs due to their high speed, low interference, and cost-effectiveness for short to medium distances. Fiber offers superior performance while UTP provides excellent value for most office environments."
  },
  bluetooth: {
    name: "Bluetooth",
    medium: "Radio Waves (2.4 GHz)",
    speed: 25,
    cost: 20,
    interference: 60,
    explanation: "Radio waves in the 2.4 GHz band are used for Bluetooth due to their ability to penetrate obstacles and provide short-range wireless connectivity. Though speed is limited and interference can be high in crowded areas, the low cost and convenience make it ideal for personal devices."
  },
  noisy: {
    name: "Noisy Area",
    medium: "Fiber Optic",
    speed: 95,
    cost: 70,
    interference: 5,
    explanation: "Fiber optic cables are immune to electromagnetic interference, making them the best choice for noisy industrial environments. Despite higher installation costs, they provide reliable, high-speed data transmission unaffected by electrical noise."
  },
  mobile: {
    name: "Mobile Internet",
    medium: "Radio Waves (Cellular)",
    speed: 60,
    cost: 50,
    interference: 45,
    explanation: "Cellular radio waves enable mobile internet by providing wide area coverage and mobility support. Modern 4G/5G networks offer good speeds with moderate interference levels, balancing coverage, speed, and cost for mobile applications."
  },
  tv: {
    name: "TV Remote",
    medium: "Infrared",
    speed: 15,
    cost: 10,
    interference: 25,
    explanation: "Infrared light is perfect for TV remotes due to its low cost, simple implementation, and line-of-sight operation that prevents interference between devices. Though limited in range and speed, it's ideal for direct control applications."
  },
  industrial: {
    name: "Industrial Environment",
    medium: "Shielded Twisted Pair",
    speed: 75,
    cost: 45,
    interference: 20,
    explanation: "Shielded Twisted Pair cables provide excellent protection against electromagnetic interference common in industrial settings. They offer good speed and moderate cost while maintaining reliability in harsh electrical environments."
  },
  backbone: {
    name: "High-Speed Backbone",
    medium: "Fiber Optic",
    speed: 100,
    cost: 85,
    interference: 5,
    explanation: "Fiber optic cables are essential for high-speed backbone networks due to their enormous bandwidth capacity, minimal signal loss over long distances, and immunity to interference. High installation costs are justified by superior performance and long-term reliability."
  }
};
