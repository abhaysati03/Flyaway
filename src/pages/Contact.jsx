import React from 'react';
import './Contact.css';

const Contact = () => {
  const armies = [
    { 
      id: 1, 
      name: 'Valkyries', 
      description: 'The Valkyries are elite female warriors serving Odin, choosing the bravest of fallen warriors to bring to Valhalla. They possess exceptional combat skills and can wield powerful weapons, including swords and spears. Their role in Ragnarok, where they bring warriors to fight alongside Odin, is of great importance in the battle to protect the Nine Realms.',
      powerLevel: 'High', 
      achievements: 'Helped Odin during the battle of Ragnarok. Chose the greatest warriors of Midgard to fight alongside the gods.', 
      god: 'Odin', 
      image: '/images/valkyries.jpg' 
    },
    { 
      id: 2, 
      name: 'Spartan Warriors', 
      description: 'The Spartans were known for their discipline, courage, and extraordinary fighting skills. As elite soldiers of ancient Greece, they were renowned for their ability to endure harsh conditions and their unyielding loyalty to their city-state. Under the guidance of Ares, they became one of the most feared military forces in the ancient world.',
      powerLevel: 'High', 
      achievements: 'Defended Greece from the Persians in the Battle of Thermopylae. Demonstrated unparalleled courage and strength against overwhelming odds.', 
      god: 'Ares', 
      image: '/images/spartans.jpg' 
    },
    { 
      id: 3, 
      name: 'Mythical Titans', 
      description: 'The Titans were ancient, primordial deities with immense power. They ruled before the Olympians took control of the heavens. Each Titan was born with incredible abilities, ranging from control over elements to the ability to shape reality itself. Their fall to the Olympians marked the end of their reign and the beginning of the Olympian dominance in the mortal and divine realms.',
      powerLevel: 'Extremely High', 
      achievements: 'Ruled the Earth until they were defeated by Zeus and the Olympians. Their influence shaped the cosmos before their downfall.', 
      god: 'Cronos', 
      image: '/images/titans.webp' 
    },
    { 
      id: 4, 
      name: 'Greek Hoplites', 
      description: 'The Hoplites were heavily armed foot soldiers of ancient Greece, forming the backbone of Greek military strategy. They fought in tight formations known as the phalanx, making them a formidable force on the battlefield. Under the guidance of Athena, they defended the sanctity of Greece and upheld the honor of the gods.',
      powerLevel: 'Medium', 
      achievements: 'Played a crucial role in defending Greece from invaders, particularly during the Persian Wars and other key battles.',
      god: 'Athena', 
      image: '/images/hoplites.png' 
    },
    { 
      id: 5, 
      name: 'Aesir Warriors', 
      description: 'The Aesir warriors are divine protectors of Asgard, fiercely loyal to Odin and the gods of Asgard. They are known for their strength, bravery, and unwavering commitment to protecting the Nine Realms. They stood by Odin’s side during the Battle of Ragnarok, fighting valiantly to preserve the world from chaos and destruction.',
      powerLevel: 'High', 
      achievements: 'Fought in the Battle of Ragnarok, defending Asgard and all realms from the forces of chaos and destruction.', 
      god: 'Thor', 
      image: '/images/aesir.jpg' 
    },
    { 
      id: 6, 
      name: 'Legions of Hades', 
      description: 'Hades commands legions of souls in the Underworld, using them as a defense against intruders and enemies. These legions include both the souls of the dead and his loyal minions. The legions are bound by loyalty to Hades, and though not as powerful as the Aesir or the Titans, they play a crucial role in maintaining the order of the afterlife.',
      powerLevel: 'Medium', 
      achievements: 'Defended the Underworld against invaders, including the hero Hercules during his Twelve Labors.', 
      god: 'Hades', 
      image: '/images/legions_of_hades.webp' 
    },
    { 
      id: 7, 
      name: 'Jotnar (Giants)', 
      description: 'The Jotnar, or Giants, are ancient beings born from chaos and ice, and are in constant conflict with the Aesir gods. Known for their massive size and strength, they possess formidable abilities and are key players in the final battle of Ragnarok, where many are foretold to challenge the gods and bring about the end of the world.',
      powerLevel: 'Extremely High', 
      achievements: 'Engaged in countless battles with the gods, including being major players in Ragnarok, where they sought to destroy the divine order.', 
      god: 'Loki', 
      image: '/images/jotnar.webp' 
    },
    { 
      id: 8, 
      name: 'Chiron’s Centaurs', 
      description: 'Chiron, the wisest of the centaurs, led a group of noble and intelligent warriors, skilled in medicine, archery, and philosophy. They served the gods and helped numerous heroes in their quests, offering guidance and wisdom. Their strength and intellect made them unique among other warriors.',
      powerLevel: 'High', 
      achievements: 'Assisted many heroes, including Hercules and Achilles, in their quests. Played an integral role in several important mythological events.',
      god: 'Apollo', 
      image: '/images/centaurs.png' 
    },
    { 
      id: 9, 
      name: 'Greek Argonauts', 
      description: 'The Argonauts were a group of heroic warriors led by Jason, embarking on the legendary quest to find the Golden Fleece. Each member of this group had extraordinary skills and talents, making them an unstoppable force. Their quest was fraught with danger, but their unity and bravery allowed them to overcome any obstacle.',
      powerLevel: 'High', 
      achievements: 'Successfully retrieved the Golden Fleece and overcame numerous challenges, including harpies, clashing rocks, and hostile kings.',
      god: 'Hera', 
      image: '/images/argonauts.jpg' 
    },
    { 
      id: 10, 
      name: 'Valkyries of Freya', 
      description: 'Freya’s Valkyries, much like Odin’s, are fierce and skilled warriors tasked with choosing the most glorious of fallen warriors. Their service to Freya is a sacred duty, and they play a vital role in gathering warriors for the final battle of Ragnarok, where they will fight against the forces of chaos.',
      powerLevel: 'High', 
      achievements: 'Played a major role in the defense of the Nine Realms, selecting valiant warriors to join the ranks of the divine army during Ragnarok.',
      god: 'Freya', 
      image: '/images/freyas_valkyries.jpg' 
    }
  ];

  return (
    <div className="contact">
      <header className="contact-header">
        <h1>Hoplites and Warrior in the Realms</h1>
        <p>Discover the powerful armies of the Norse and Greek realms, their achievements, and their loyalty to the gods!</p>
      </header>
      <div className="army-cards">
        {armies.map((army) => (
          <div key={army.id} className="army-card">
            <div className="army-image-wrapper">
              <img src={army.image} alt={army.name} className="army-image" />
            </div>
            <h2>{army.name}</h2>
            <p><strong>Power Level:</strong> {army.powerLevel}</p>
            <p><strong>Achievements:</strong> {army.achievements}</p>
            <p><strong>Ruled by:</strong> {army.god}</p>
            <p>{army.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
