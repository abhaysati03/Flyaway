import React from 'react';
import './Home.css';

const Home = () => {
  const cities = [
    {
      id: 1,
      name: 'Asgard',
      description: 'Asgard, the realm of the Aesir gods, is a majestic fortress of golden halls and sprawling meadows. Connected to Midgard by the shimmering Bifrost bridge, it is ruled by Odin, the All-Father. Asgard is the seat of divine power, home to mighty gods like Thor and Frigg, and the site of Valhalla, where fallen warriors prepare for Ragnarok.',
      image: '/images/asgard.webp',
    },
    {
      id: 2,
      name: 'Olympus',
      description: 'Mount Olympus, the mythical home of the Olympian gods, towers above the clouds. Ruled by Zeus, it is a place of divine feasts, where gods like Athena, Apollo, and Hera reside. Its ethereal beauty and marble palaces embody perfection, overlooking the mortal realm with both benevolence and fury.',
      image: '/images/olympus.jpg',
    },
    {
      id: 3,
      name: 'Valhalla',
      description: 'Valhalla, Odin’s grand hall in Asgard, welcomes the souls of brave warriors who fell in battle. Its towering walls are adorned with golden shields, and the eternal feasts are accompanied by tales of valor. Here, the Einherjar train for the ultimate battle during Ragnarok, reveling in glory and camaraderie.',
      image: '/images/valhalla.jpg',
    },
    {
      id: 4,
      name: 'Elysium',
      description: 'Elysium, the Isle of the Blessed, is a haven of eternal peace and joy for virtuous souls. Located at the edge of the world, it is adorned with lush gardens, tranquil streams, and perpetual springtime. Only the most heroic and pure-hearted are granted entrance to this paradise.',
      image: '/images/elysium.jpg',
    },
    {
      id: 5,
      name: 'Midgard',
      description: 'Midgard, the realm of humans, lies at the center of Yggdrasil, the World Tree. Encircled by the great serpent Jormungandr, it is connected to Asgard by the rainbow bridge. This mortal realm is both fragile and resilient, embodying the balance between order and chaos.',
      image: '/images/midgard.webp',
    },
    {
      id: 6,
      name: 'Helheim',
      description: 'Helheim, the somber realm of the dead, is ruled by Hel, the daughter of Loki. It is a cold, misty domain shrouded in shadows, where those who died of sickness or old age reside. Its gates are guarded by Garmr, the fierce hound, ensuring only the worthy can pass.',
      image: '/images/helheim.webp',
    },
    {
      id: 7,
      name: 'Atlantis',
      description: 'Atlantis, the fabled city beneath the waves, is a marvel of ancient technology and wisdom. Its grand temples, intricate canals, and shimmering towers speak of a civilization that once rivaled the gods themselves. Though lost to the ocean’s depths, its legacy continues to inspire awe.',
      image: '/images/atlantis.jpg',
    },
    {
      id: 8,
      name: 'Sparta',
      description: 'Sparta, the city of warriors, is famed for its discipline and martial prowess. Guided by Ares, the god of war, Spartans embody the ideals of strength, courage, and sacrifice. Its stone walls echo with the cries of warriors preparing for battle, ensuring their glory in life and beyond.',
      image: '/images/sparta.jpg',
    },
    {
      id: 9,
      name: 'Tartarus',
      description: 'Tartarus, a dark abyss far below the Underworld, is both a prison for the wicked and a realm of punishment. Guarded by the Hecatoncheires and steeped in shadows, it holds the Titans and other foes of the gods. This chilling place is a stark reminder of divine justice.',
      image: '/images/tartarus.avif',
    },
    {
      id: 10,
      name: 'Jotunheim',
      description: 'Jotunheim, the land of giants, is a rugged and untamed wilderness. Home to the Jotnar, it is a realm of towering mountains, dark forests, and icy rivers. Though often at odds with Asgard, it is a place of ancient wisdom and formidable strength, challenging even the mightiest of gods.',
      image: '/images/jotunheim.jpg',
    },
  ];

  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to FLYAway-Realms</h1>
        <p>
          Explore the legendary cities! From the shining halls of Asgard to the sunlit fields of Elysium, embark on a journey through realms of gods and myths.
        </p>
      </header>
      <div className="city-cards">
        {cities.map((city) => (
          <div key={city.id} className="city-card">
            <img src={city.image} alt={city.name} className="city-image" />
            <h2>{city.name}</h2>
            <p>{city.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
