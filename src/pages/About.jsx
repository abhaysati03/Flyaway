import React from 'react';
import './About.css';

const About = () => {
  // Villain data
  const villains = [
    {
      id: 1,
      name: 'Loki',
      description: `
        Loki, the infamous trickster god of Norse mythology, is a figure of chaos, cunning, and unpredictability. Known for his sharp wit and shape-shifting abilities, Loki has taken many forms, including a horse, a fish, and even an old woman, to carry out his schemes.
        His achievements include orchestrating the death of Balder, the god of light, which plunged the gods into despair. Loki's role in bringing the monstrous children Fenrir, Hel, and Jörmungandr into the world further solidifies his legacy of destruction.

        Loki was also the mastermind behind the theft of Idunn's apples of immortality and numerous other deceptions that tested the gods' patience. Despite his resourcefulness, Loki's betrayal during Ragnarok led to his ultimate capture and punishment, where he was bound to a rock with venom dripping onto his face.
        
        Even in captivity, Loki's influence echoes through the Nine Realms, a testament to his enduring power and notoriety.
      `,
      image: '/images/loki.jpg',
    },
    {
      id: 2,
      name: 'Hades',
      description: `
        Hades, the somber ruler of the Greek Underworld, is both feared and respected by gods and mortals alike. With his Helm of Darkness, he possesses the ability to render himself invisible, a power he often uses to observe and manipulate events without interference.

        As the god of wealth and the dead, Hades oversees the flow of precious metals and ensures the proper passage of souls to the afterlife. His abduction of Persephone, daughter of Demeter, to make her his queen is one of the most pivotal moments in Greek mythology, explaining the cycle of seasons.

        Hades is a force of balance rather than evil, maintaining order in the realm of the dead. However, he has been challenged by mortals, such as Orpheus, who ventured into his domain to retrieve a loved one, and Hercules, who captured Cerberus during his Twelve Labors.

        Despite these challenges, Hades remains undefeated in his dominion, a symbol of inevitable fate and eternal rule.
      `,
      image: '/images/hades.jpg',
    },
    {
      id: 3,
      name: 'Fenrir',
      description: `
        Fenrir, the monstrous wolf of Norse prophecy, embodies raw strength and chaos. Born to Loki and the giantess Angrboða, Fenrir grew at an alarming rate, instilling fear even among the gods.

        The gods, foreseeing the destruction he would bring, attempted to bind him with chains, but Fenrir shattered each one with ease. Only Gleipnir, a magical ribbon forged by dwarves, was able to hold him. However, this act of containment came at a cost—Tyr, the god of war, lost his hand in the process.

        Fenrir’s destiny is intertwined with Ragnarok, where he breaks free from his bonds and slays Odin, the Allfather. His achievements, though destructive, mark him as one of the most feared entities in Norse mythology.

        Though subdued temporarily, Fenrir’s prophecy ensures his legacy as the harbinger of chaos.
      `,
      image: '/images/fenrir.webp',
    },
    {
      id: 4,
      name: 'Medusa',
      description: `
        Medusa, the most famous of the Gorgons, was once a beautiful priestess of Athena. However, after desecrating Athena's temple with Poseidon, she was cursed to bear a monstrous visage with snakes for hair and a deadly gaze that turned onlookers to stone.

        Medusa's power became legendary, her image used as a protective symbol on shields and temples. Despite her transformation, she was not inherently evil but rather a victim of divine wrath. Her lair became a place of dread, where many warriors met their doom.

        Her life came to an end at the hands of Perseus, who wielded a mirrored shield to avoid her deadly gaze. After her defeat, her head retained its petrifying power and was mounted on Athena's shield as a weapon of divine justice.

        Medusa’s story is both tragic and empowering, a symbol of resilience and enduring legacy.
      `,
      image: '/images/medusa.webp',
    },
    {
      id: 5,
      name: 'Surtur',
      description: `
        Surtur, the fire giant of Muspelheim, is a figure of apocalyptic destruction in Norse mythology. Wielding his immense flaming sword, he is fated to set the Nine Realms ablaze during Ragnarok.

        Surtur’s achievements include guarding the realm of fire, Muspelheim, and serving as an eternal threat to the gods. His sword, said to shine brighter than the sun, is a weapon of unparalleled power.

        During Ragnarok, Surtur plays a crucial role by battling the gods and ultimately engulfing the world in flames, paving the way for its rebirth. He is a figure of inevitability, embodying the destructive power necessary for renewal.

        Despite resistance from the gods, Surtur fulfills his destiny, remaining undefeated in his role as the harbinger of the end.
      `,
      image: '/images/surtur.webp',
    },
    {
      id: 6,
      name: 'Kronos',
      description: `
        Kronos, the Titan of time, was the youngest of the Titans and a pivotal figure in Greek mythology. Overthrowing his father Uranus, Kronos ruled during the Golden Age, a period of prosperity and abundance.

        Fearing a prophecy that his children would overthrow him, Kronos consumed each of them at birth. However, his wife Rhea saved their youngest son, Zeus, who eventually led the Olympians in a rebellion against the Titans.

        Kronos’ greatest achievements lie in his role as a ruler and his part in the Titanomachy, the epic battle between Titans and Olympians. His defeat marked the end of the Titans' reign and the beginning of the Olympian gods' era.

        Banished to Tartarus, Kronos remains a symbol of the relentless passage of time and the inevitability of change.
      `,
      image: '/images/kronos.webp',
    },
  ];

  return (
    <div className="about">
      <header className="about-header">
        <h1> Danger in Realms </h1>
        <p>Dare to tread the dark paths - uncover the most powerfull living of Norse and Greek realms. Discover their unparalleled powers, infamous achievements, and the ultimate risks that sealed their fates. Beware, for danger lurks in every shadowed tale</p>
      </header>
      <div className="villain-sections">
        {villains.map((villain) => (
          <div key={villain.id} className="villain-section">
            <img src={villain.image} alt={villain.name} className="villain-image" />
            <div className="villain-info">
              <h2>{villain.name}</h2>
              <p>{villain.description}</p>
            </div>
            <hr className="golden-line" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
