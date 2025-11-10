const items = [
  {
    name: "Obsidian Cestus",
    rarity: "Mythic",
    type: "FistWeapon",
    damageRange: [9.5, 65.5],
    element: "Shadow",
    slots: ["Main Hand", "Off Hand"],
    attributes: {},
    effects: ["Shadow Damage {4,20}%", "% Life Steal 4"],
    bosses: ["The Sultan"],
    zones: ["Wyrmrest Desert", "Wyrmrest Desert"]
  },
  {
    name: "Abaddon",
    rarity: "Mythic",
    type: "Mace_2H",
    damageRange: [27.5, 207.5],
    element: "Shadow",
    slots: ["Main Hand"],
    attributes: { Might: "{3,22}", Intelligence: "{3,22}" },
    effects: [
      "Shadow Damage {8,40}%",
      "20% chance to cast Raise Servant of Abaddon on enemy death"
    ],
    bosses: ["Black Dragon", "The Dusk King"],
    zones: [
      "Castle Gloom",
      "Castle Gloom",
      "Frostwrought Mountain",
      "Frostwrought Mountain"
    ]
  },
  {
    name: "Ancient Staff",
    rarity: "Mythic",
    type: "Staff",
    damageRange: [17.5, 129.5],
    element: "Cold",
    slots: ["Main Hand"],
    attributes: { Intelligence: "{13,97}" },
    effects: [
      "Max Mana 25%",
      "increased power for mana use Source[\"MaxMana\"] * .05f%",
      "Mana Costs Source[\"MaxMana\"] * .05f%",
      "Increases the power and cost of all @Mana Abilities@ by 5% of your Max Mana."
    ],
    bosses: ["The Sun Queen"],
    zones: ["Wyrmrest Desert", "Wyrmrest Desert"]
  },
  {
    name: "Apocalypse",
    rarity: "Mythic",
    type: "Sword_2H",
    damageRange: [23.5, 172.5],
    element: "Fire",
    slots: ["Main Hand"],
    attributes: { Might: "{6,43}" },
    effects: ["Fire Damage {8,40}%"],
    bosses: ["Lord Infernicus", "Red Dragon"],
    zones: ["Emberlands", "Emberlands"]
  },
  {
    name: "Arcane Pillar",
    rarity: "Mythic",
    type: "Staff",
    damageRange: [19.5, 142.5],
    element: "Fire",
    slots: ["Main Hand"],
    attributes: { Might: "{15,113}" },
    effects: [],
    bosses: ["The Sultan"],
    zones: ["Wyrmrest Desert", "Wyrmrest Desert"]
  },
  {
    name: "Arcane Sceptre",
    rarity: "Mythic",
    type: "Wand",
    damageRange: [10.5, 71.5],
    element: "Fire",
    slots: ["Main Hand", "Off Hand"],
    attributes: { Might: "{8,57}" },
    effects: [],
    bosses: ["The Sultan"],
    zones: ["Wyrmrest Desert", "Wyrmrest Desert"]
  },
  {
    name: "Bedlam Burner",
    rarity: "Mythic",
    type: "Gun_1H",
    damageRange: [12.5, 91.5],
    element: "Physical",
    slots: ["Main Hand", "Off Hand"],
    attributes: { Might: "{2,11}", Reflex: "{2,11}" },
    effects: ["10% chance to cast Hurting on striking."],
    bosses: ["Admiral Blackbeard", "The Mad Mage"],
    zones: ["Water Temple Ruins", "Water Temple Ruins"]
  },
  {
    name: "Big Game Hunter",
    rarity: "Mythic",
    type: "Gun_2H",
    damageRange: [40.0, 301.5],
    element: "Physical",
    slots: ["Main Hand"],
    attributes: {},
    effects: ["Movement Points -1"],
    bosses: ["Councilor Jahsun"],
    zones: ["Emerald Jungle", "Emerald Jungle"]
  },
  {
    name: "Bishop Staff",
    rarity: "Mythic",
    type: "Staff",
    damageRange: [22.5, 168.5],
    element: "Healing",
    slots: ["Main Hand"],
    attributes: { Vitality: "{5,33}", Intelligence: "{5,33}" },
    effects: [
      "Holy Power {8,40}%",
      "Mana Costs {8,40}%",
      "Grants the passive skill {SKL=Wrath of the Righteous}."
    ],
    bosses: ["The Bishop"],
    zones: [
      "Castle Gloom",
      "Castle Gloom",
      "Sunken Swamplands",
      "Sunken Swamplands"
    ]
  },
  {
    name: "Black Crusade",
    rarity: "Mythic",
    type: "Bow",
    damageRange: [24.5, 181.5],
    element: "Physical",
    slots: ["Main Hand"],
    attributes: { Might: "{2,11}", Dexterity: "{2,11}", Vitality: "{2,11}" },
    effects: ["Attacks with this weapon cause 2 stacks of Bleeding."],
    bosses: ["The Black Knight"],
    zones: [
      "Wyrmrest Desert",
      "Wyrmrest Desert",
      "Sunken Swamplands",
      "Sunken Swamplands"
    ]
  },
  {
    name: "Champion Blade",
    rarity: "Mythic",
    type: "Axe_2H",
    damageRange: [28.5, 215.5],
    element: "Physical",
    slots: ["Main Hand"],
    attributes: { Vitality: "{5,33}" },
    effects: ["Grants the passive skill {SKL=Colossus}."],
    bosses: ["Maximus"],
    zones: []
  },
  {
    name: "Cold Steel Axe",
    rarity: "Mythic",
    type: "Axe_1H",
    damageRange: [12.5, 86.5],
    element: "Cold",
    slots: ["Main Hand", "Off Hand"],
    attributes: { Might: "{2,11}", Vitality: "{2,11}" },
    effects: [
      "Cold Damage {4,20}%",
      "10% chance to cast Level [level value] {SKL=Ice Lance} on striking."
    ],
    bosses: ["Blue Dragon"],
    zones: ["Frostwrought Mountain", "Frostwrought Mountain"]
  },
  {
    name: "Coldsteel Vanquisher",
    rarity: "Mythic",
    type: "Gun_1H",
    damageRange: [12.5, 91.5],
    element: "Cold",
    slots: ["Main Hand", "Off Hand"],
    attributes: { Might: "{3,22}" },
    effects: ["Cold Damage {4,20}%"],
    bosses: ["Blue Dragon", "The Prospector", "Olgoi, Devourer of Treasure"],
    zones: [
      "Frostwrought Mountain",
      "Frostwrought Mountain",
      "Dwarven Halls",
      "Dwarven Halls",
      "Forgotten Mines",
      "Forgotten Mines"
    ]
  },
  {
    name: "Crimson Brand",
    rarity: "Mythic",
    type: "Sword_1H",
    damageRange: [13.5, 99.5],
    element: "Shadow",
    slots: ["Main Hand", "Off Hand"],
    attributes: { Might: "{2,11}", Dexterity: "{2,11}" },
    effects: ["% Life Steal 4"],
    bosses: ["Samara the Vampire", "The Duke"],
    zones: ["Castle Gloom", "Castle Gloom"]
  },
  {
    name: "Crystal Spire",
    rarity: "Mythic",
    type: "Staff",
    damageRange: [21.5, 155.5],
    element: "Cold",
    slots: ["Main Hand"],
    attributes: {
      Might: "{6,43}",
      Dexterity: "{6,43}",
      Vitality: "{6,43}",
      Intelligence: "{6,43}",
      Reflex: "{6,43}"
    },
    effects: [],
    bosses: ["Crystal Golem"],
    zones: ["Forgotten Mines", "Forgotten Mines"]
  },
  {
    name: "Dark God's Sceptre",
    rarity: "Mythic",
    type: "Staff",
    damageRange: [24.5, 181.5],
    element: "Shadow",
    slots: ["Main Hand"],
    attributes: { Might: "{7,54}" },
    effects: ["Shadow Damage {8,40}%", "% Mana Steal 5%"],
    bosses: ["Black Dragon", "The Countess", "The Bishop"],
    zones: [
      "Castle Gloom",
      "Castle Gloom",
      "Sunken Swamplands",
      "Sunken Swamplands"
    ]
  },
  {
    name: "Dead One's Scythe",
    rarity: "Mythic",
    type: "Wand",
    damageRange: [13.5, 97.5],
    element: "Shadow",
    slots: ["Main Hand", "Off Hand"],
    attributes: { Might: "{6,43}" },
    effects: [
      "Summon Damage {6,30}%",
      "Summon Limit 1",
      "Summon Level Bonus 3"
    ],
    bosses: ["The Dead One", "Lady of the Well", "The Scarecrow"],
    zones: [
      "Castle Gloom",
      "Castle Gloom",
      "Sunken Swamplands",
      "Sunken Swamplands"
    ]
  },
  {
    name: "Dragon Fist",
    rarity: "Mythic",
    type: "FistWeapon",
    damageRange: [9.5, 65.5],
    element: "Shadow",
    slots: ["Main Hand", "Off Hand"],
    attributes: {},
    effects: [
      "5% chance to cast Thunder Bolt when hitting an enemy with any ability.",
      "5% chance to cast Frost Nova when hitting an enemy with any ability.",
      "5% chance to cast Fireball when hitting an enemy with any ability."
    ],
    bosses: ["Black Dragon", "Blue Dragon", "Green Dragon", "Red Dragon"],
    zones: [
      "Frostwrought Mountain",
      "Frostwrought Mountain",
      "Castle Gloom",
      "Castle Gloom",
      "Freewind Forest",
      "Freewind Forest",
      "Emberlands",
      "Emberlands"
    ]
  },
  {
    name: "Dwarven Lord's Sceptre",
    rarity: "Mythic",
    type: "Wand",
    damageRange: [9.5, 65.5],
    element: "Fire",
    slots: ["Main Hand", "Off Hand"],
    attributes: { Vitality: "{6,43}" },
    effects: ["Damage and Healing {5,25}%"],
    bosses: ["Mountain King Ironheart"],
    zones: ["Dwarven Halls", "Dwarven Halls"]
  },
  {
    name: "Earthshaker",
    rarity: "Mythic",
    type: "Mace_2H",
    damageRange: [23.5, 172.5],
    element: "Physical",
    slots: ["Main Hand"],
    attributes: { Might: "{3,22}", Vitality: "{3,22}" },
    effects: ["10% chance to cast Stunning Slam on striking."],
    bosses: ["Ursa", "Forest Giant"],
    zones: ["Freewind Forest", "Freewind Forest"]
  },
  {
    name: "Ember King's Might",
    rarity: "Mythic",
    type: "Sword_2H",
    damageRange: [21.5, 155.5],
    element: "Fire",
    slots: ["Main Hand"],
    attributes: { Might: "{2,11}", Vitality: "{2,11}" },
    effects: [
      "Fire Damage {8,40}%",
      "15% chance to cast Detonate on striking."
    ],
    bosses: ["The Ember King"],
    zones: ["Emberlands", "Emberlands"]
  },
  {
    name: "Emberstone Staff",
    rarity: "Mythic",
    type: "Staff",
    damageRange: [22.5, 168.5],
    element: "Fire",
    slots: ["Main Hand"],
    attributes: { Might: "{5,33}", Intelligence: "{5,33}" },
    effects: [
      "Fire Damage {8,40}%",
      "20% chance to cast Burning Ground when hitting with any ability."
    ],
    bosses: ["The Broker"],
    zones: ["Emberlands", "Emberlands"]
  },
  {
    name: "Excalibur",
    rarity: "Mythic",
    type: "Sword_2H",
    damageRange: [27.5, 207.5],
    element: "Holy",
    slots: ["Main Hand"],
    attributes: { Might: "{3,22}", Vitality: "{3,22}" },
    effects: [
      "Holy Power Source[\"Might\"] * .2f%",
      "Gain Increased Holy Power equal to 20% of your Might."
    ],
    bosses: ["Event"],
    zones: []
  },
  {
    name: "Executioner Axe",
    rarity: "Mythic",
    type: "Axe_2H",
    damageRange: [27.5, 207.5],
    element: "Physical",
    slots: ["Main Hand"],
    attributes: { Might: "{2,11}", Vitality: "{2,11}" },
    effects: ["Weapon attacks apply 2 stacks of bleeding."],
    bosses: ["The Black Knight"],
    zones: [
      "Wyrmrest Desert",
      "Wyrmrest Desert",
      "Sunken Swamplands",
      "Sunken Swamplands"
    ]
  },
  {
    name: "Fencer's Gift",
    rarity: "Mythic",
    type: "Sword_1H",
    damageRange: [13.5, 95.5],
    element: "Physical",
    slots: ["Main Hand", "Off Hand"],
    attributes: { Reflex: "{3,22}" },
    effects: ["Dodge Counter Damage {10,50}%"],
    bosses: ["The Prospector"],
    zones: ["Forgotten Mines", "Forgotten Mines"]
  },
  {
    name: "Flame Grasp",
    rarity: "Mythic",
    type: "Wand",
    damageRange: [11.5, 78.5],
    element: "Fire",
    slots: ["Main Hand", "Off Hand"],
    attributes: { Intelligence: "{7,49}" },
    effects: [
      "Fire Damage Source[\"Intelligence\"] * .20f",
      "Gain Added Damage to Fire equal to 20% of your Intelligence."
    ],
    bosses: ["The Mad Mage", "Red Dragon"],
    zones: ["Emberlands", "Emberlands"]
  },
  {
    name: "Frost Grasp",
    rarity: "Mythic",
    type: "Wand",
    damageRange: [11.5, 78.5],
    element: "Cold",
    slots: ["Main Hand", "Off Hand"],
    attributes: { Intelligence: "{7,49}" },
    effects: [
      "Cold Damage Source[\"Intelligence\"] * .20f",
      "Gain Added Damage to Cold equal to 20% of your Intelligence."
    ],
    bosses: ["Blue Dragon", "The Mad Mage"],
    zones: ["Frostwrought Mountain", "Frostwrought Mountain"]
  },
  {
    name: "Fury Staff",
    rarity: "Mythic",
    type: "Staff",
    damageRange: [30.5, 226.5],
    element: "Lightning",
    slots: ["Main Hand"],
    attributes: {},
    effects: [],
    bosses: ["Tlaloc the Storm"],
    zones: [
      "Emerald Jungle",
      "Emerald Jungle",
      "Water Temple Ruins",
      "Water Temple Ruins"
    ]
  },
  {
    name: "Ghost Hunter",
    rarity: "Mythic",
    type: "Gun_2H",
    damageRange: [26.5, 196.5],
    element: "Shadow",
    slots: ["Main Hand"],
    attributes: { Might: "{2,11}", Dexterity: "{2,11}" },
    effects: ["Grants the skill {SKL=Spectral Mark}."],
    bosses: ["Admiral Blackbeard"],
    zones: ["Water Temple Ruins", "Water Temple Ruins"]
  },
  {
    name: "Gobfather's Smasher",
    rarity: "Mythic",
    type: "Mace_2H",
    damageRange: [27.5, 207.5],
    element: "Physical",
    slots: ["Main Hand"],
    attributes: { Might: "{3,22}", Vitality: "{3,22}" },
    effects: [],
    bosses: ["The Gobfather"],
    zones: ["Wyrmrest Desert", "Wyrmrest Desert"]
  },
  {
    name: "Goblin Chieftain Axe",
    rarity: "Mythic",
    type: "Axe_2H",
    damageRange: [28.5, 215.5],
    element: "Physical",
    slots: ["Main Hand"],
    attributes: { Might: "{5,33}", Vitality: "{2,11}" },
    effects: ["Casts {SKL=Rally} at the start of each turn."],
    bosses: ["Azug Spikefist", "Iceclaw Chieftain", "The Pale Goblin"],
    zones: ["Dwarven Halls", "Dwarven Halls"]
  },
  {
    name: "Golden Valkyrie Spear",
    rarity: "Mythic",
    type: "Polearm",
    damageRange: [25.5, 189.5],
    element: "Physical",
    slots: ["Main Hand"],
    attributes: { Might: "{3,22}", Vitality: "{3,22}" },
    effects: ["Applies Seal of Might at the start of battle."],
    bosses: ["Valkyrie Commander"],
    zones: [
      "Frostwrought Mountain",
      "Frostwrought Mountain",
      "Water Temple Ruins",
      "Water Temple Ruins"
    ]
  },
  {
    name: "Grandfather Odachi",
    rarity: "Mythic",
    type: "Sword_2H",
    damageRange: [18.5, 138.5],
    element: "Physical",
    slots: ["Main Hand"],
    attributes: { Might: "{3,22}", Vitality: "{2,11}" },
    effects: [
      "Additional Weapon Damage Source[\"Might\"] * .4f",
      "Gain Additional Weapon Damage equal to 40% of your Might."
    ],
    bosses: ["Ronin"],
    zones: ["Frostwrought Mountain", "Frostwrought Mountain"]
  },
  {
    name: "Hailstone Staff",
    rarity: "Mythic",
    type: "Staff",
    damageRange: [22.5, 168.5],
    element: "Cold",
    slots: ["Main Hand"],
    attributes: { Might: "{5,33}", Intelligence: "{5,33}" },
    effects: [
      "Cold Damage {8,40}%",
      "15% chance to cast Frost Nova when hitting with any ability."
    ],
    bosses: ["Hodr, the Frost Giant"],
    zones: ["Frostwrought Mountain", "Frostwrought Mountain"]
  },
  {
    name: "Harvester",
    rarity: "Mythic",
    type: "Axe_2H",
    damageRange: [23.5, 172.5],
    element: "Physical",
    slots: ["Main Hand"],
    attributes: { Might: "{3,22}", Vitality: "{3,22}" },
    effects: ["20% chance to cast Reaper's Scythe on striking."],
    bosses: ["The Black Knight", "Lady of the Well", "The Scarecrow"],
    zones: [
      "Wyrmrest Desert",
      "Wyrmrest Desert",
      "Castle Gloom",
      "Castle Gloom",
      "Sunken Swamplands",
      "Sunken Swamplands"
    ]
  },
  {
    name: "Heavenly Blade",
    rarity: "Mythic",
    type: "Sword_2H",
    damageRange: [28.5, 215.5],
    element: "Physical",
    slots: ["Main Hand"],
    attributes: {
      Might: "{2,11}",
      Dexterity: "{2,11}",
      Vitality: "{2,11}",
      Intelligence: "{2,11}",
      Reflex: "{2,11}"
    },
    effects: [],
    bosses: ["Unchained Efreet"],
    zones: ["Wyrmrest Desert", "Wyrmrest Desert"]
  },
  {
    name: "Holy Symbol",
    rarity: "Mythic",
    type: "Wand",
    damageRange: [13.5, 97.5],
    element: "Healing",
    slots: ["Main Hand", "Off Hand"],
    attributes: { Might: "{3,22}" },
    effects: ["Holy Power {3,15}%"],
    bosses: ["Herald of the Abyss"],
    zones: [
      "Castle Gloom",
      "Castle Gloom",
      "Sunken Swamplands",
      "Sunken Swamplands"
    ]
  },
  {
    name: "Ice King's Axe",
    rarity: "Mythic",
    type: "Axe_2H",
    damageRange: [23.5, 172.5],
    element: "Cold",
    slots: ["Main Hand"],
    attributes: { Might: "{3,22}", Vitality: "{3,22}" },
    effects: [
      "Cold Damage {8,40}%",
      "20% chance to cast Breath of Winter on striking."
    ],
    bosses: ["The Dusk King"],
    zones: ["Frostwrought Mountain", "Frostwrought Mountain"]
  },
  {
    name: "Kingsblade",
    rarity: "Mythic",
    type: "Sword_1H",
    damageRange: [12.5, 86.5],
    element: "Physical",
    slots: ["Main Hand", "Off Hand"],
    attributes: {
      Might: "{1,6}",
      Dexterity: "{1,6}",
      Vitality: "{1,6}",
      Intelligence: "{1,6}",
      Reflex: "{1,6}"
    },
    effects: [],
    bosses: ["The Dusk King"],
    zones: ["Frostwrought Mountain", "Frostwrought Mountain"]
  },
  {
    name: "Kingslayer",
    rarity: "Mythic",
    type: "Sword_1H",
    damageRange: [13.5, 95.5],
    element: "Physical",
    slots: ["Main Hand", "Off Hand"],
    attributes: { Dexterity: "{5,33}" },
    effects: [],
    bosses: ["The Butcher", "The Jester"],
    zones: [
      "Castle Gloom",
      "Castle Gloom",
      "Sunken Swamplands",
      "Sunken Swamplands"
    ]
  },
  {
    name: "Ksvaldir",
    rarity: "Mythic",
    type: "Sword_2H",
    damageRange: [28.5, 215.5],
    element: "Physical",
    slots: ["Main Hand"],
    attributes: { Reflex: "{6,43}" },
    effects: [
      "Dodge Counter Damage {20,100}%",
      "Dodge Counter Chance 100%",
      "% Life Steal 5",
      "Applies Hunger Ksvaldir"
    ],
    bosses: ["Black Dragon", "The Baron", "The Countess"],
    zones: ["Castle Gloom", "Castle Gloom"]
  },
  {
    name: "Last Word",
    rarity: "Mythic",
    type: "Gun_1H",
    damageRange: [9.5, 68.5],
    element: "Physical",
    slots: ["Main Hand", "Off Hand"],
    attributes: {},
    effects: [
      "Basic attacks have a 25% chance to proc an additional attack once per turn."
    ],
    bosses: ["Admiral Blackbeard"],
    zones: ["Water Temple Ruins", "Water Temple Ruins"]
  },
  {
    name: "Laying on Hands",
    rarity: "Mythic",
    type: "FistWeapon",
    damageRange: [11.5, 78.5],
    element: "Healing",
    slots: ["Main Hand", "Off Hand"],
    attributes: { Might: "{2,11}", Intelligence: "{1,6}" },
    effects: [
      "Healing Given Source[\"Might\"] * .5f",
      "Gain Additional Healing to Heals equal to 50% of your Might."
    ],
    bosses: ["The Butcher"],
    zones: [
      "Castle Gloom",
      "Castle Gloom",
      "Sunken Swamplands",
      "Sunken Swamplands"
    ]
  },
  {
    name: "Living Axe",
    rarity: "Mythic",
    type: "Axe_2H",
    damageRange: [23.5, 172.5],
    element: "Physical",
    slots: ["Main Hand"],
    attributes: { Vitality: "{3,22}", Reflex: "{3,22}" },
    effects: ["Health Per Turn {14,280}"],
    bosses: ["Ursa", "Forest Giant"],
    zones: ["Freewind Forest", "Freewind Forest"]
  },
  {
    name: "Logan's Paw",
    rarity: "Mythic",
    type: "FistWeapon",
    damageRange: [7.5, 52.5],
    element: "Physical",
    slots: ["Main Hand", "Off Hand"],
    attributes: { Vitality: "{3,17}" },
    effects: [
      "Health Per Turn {7,140}",
      "Physical Damage Source[\"MaxHealth\"] * .025f",
      "Gain Additional Physical Damage equal to 2.5% of your Max Health."
    ],
    bosses: ["The Grandmaster"],
    zones: ["Frostwrought Mountain", "Frostwrought Mountain"]
  },
  {
    name: "Magedraw",
    rarity: "Mythic",
    type: "Bow",
    damageRange: [18.5, 136.5],
    element: "Physical",
    slots: ["Main Hand"],
    attributes: {},
    effects: ["Gain {SKL=Enchant Fire}."],
    bosses: ["Crystal Golem"],
    zones: ["Forgotten Mines", "Forgotten Mines"]
  },
  {
    name: "Medusa Staff",
    rarity: "Mythic",
    type: "Staff",
    damageRange: [22.5, 168.5],
    element: "Shadow",
    slots: ["Main Hand"],
    attributes: { Might: "{5,33}", Vitality: "{5,33}" },
    effects: ["Grants the skill {SKL=Petrify}."],
    bosses: ["Anthulk", "The Minotaur", "Medusa"],
    zones: [
      "Water Temple Ruins",
      "Water Temple Ruins",
      "Forgotten Mines",
      "Forgotten Mines",
      "Emerald Jungle",
      "Emerald Jungle"
    ]
  },
  {
    name: "Mjolnir",
    rarity: "Mythic",
    type: "Mace_1H",
    damageRange: [12.5, 86.5],
    element: "Lightning",
    slots: ["Main Hand", "Off Hand"],
    attributes: { Might: "{2,11}", Vitality: "{2,11}" },
    effects: [
      "Lightning Damage {4,20}%",
      "10% chance to cast Thunder Bolt on striking."
    ],
    bosses: ["Lagertha", "Ragnar", "Green Dragon"],
    zones: [
      "Freewind Forest",
      "Freewind Forest",
      "Frostwrought Mountain",
      "Frostwrought Mountain"
    ]
  },
  {
    name: "Mourning Star",
    rarity: "Mythic",
    type: "Mace_1H",
    damageRange: [9.5, 69.5],
    element: "Physical",
    slots: ["Main Hand", "Off Hand"],
    attributes: {},
    effects: [
      "Return Damage Physical Source[\"Armor\"] * .02f",
      "Gain Added Return Damage Physical equal to 2% of your Armor."
    ],
    bosses: ["Dark Cultist Attendant", "The Gobfather", "The Pale Goblin"],
    zones: [
      "Wyrmrest Desert",
      "Wyrmrest Desert",
      "Castle Gloom",
      "Castle Gloom",
      "Dwarven Halls",
      "Dwarven Halls",
      "Sunken Swamplands",
      "Sunken Swamplands"
    ]
  },
  {
    name: "Ninjato",
    rarity: "Mythic",
    type: "Sword_1H",
    damageRange: [9.5, 69.5],
    element: "Physical",
    slots: ["Main Hand", "Off Hand"],
    attributes: { Dexterity: "{2,11}", Vitality: "{1,6}" },
    effects: [
      "Additional Weapon Damage Source[\"Dexterity\"] * .10f",
      "Gain Additional Weapon Damage equal to 10% of your Dexterity."
    ],
    bosses: ["Ronin"],
    zones: ["Frostwrought Mountain", "Frostwrought Mountain"]
  },
  {
    name: "Oculus Stone",
    rarity: "Mythic",
    type: "Wand",
    damageRange: [11.5, 84.5],
    element: "Lightning",
    slots: ["Main Hand", "Off Hand"],
    attributes: { Might: "{3,22}", Dexterity: "{3,22}", Intelligence: "{2,11}" },
    effects: [],
    bosses: ["The Minotaur", "Lady of the Well", "The Scarecrow"],
    zones: [
      "Castle Gloom",
      "Castle Gloom",
      "Sunken Swamplands",
      "Sunken Swamplands",
      "Forgotten Mines",
      "Forgotten Mines"
    ]
  },
  {
    name: "Peacekeeper",
    rarity: "Mythic",
    type: "Gun_2H",
    damageRange: [24.5, 181.5],
    element: "Physical",
    slots: ["Main Hand"],
    attributes: { Might: "{6,43}" },
    effects: [],
    bosses: ["The Sultan", "Medusa"],
    zones: [
      "Wyrmrest Desert",
      "Wyrmrest Desert",
      "Water Temple Ruins",
      "Water Temple Ruins",
      "Emerald Jungle",
      "Emerald Jungle"
    ]
  },
  {
    name: "Phantom Piercer",
    rarity: "Mythic",
    type: "Sword_1H",
    damageRange: [14.5, 104.5],
    element: "Shadow",
    slots: ["Main Hand", "Off Hand"],
    attributes: { Reflex: "{3,22}" },
    effects: [
      "10% chance to cast Reaper's Scythe on striking."
    ],
    bosses: ["Admiral Blackbeard"],
    zones: ["Water Temple Ruins", "Water Temple Ruins"]
  },
  {
    name: "Phoenix Claymore",
    rarity: "Mythic",
    type: "Sword_2H",
    damageRange: [23.5, 172.5],
    element: "Fire",
    slots: ["Main Hand"],
    attributes: { Vitality: "{3,22}" },
    effects: [
      "Fire Damage {8,40}%",
      "Return Damage Fire {6,112}",
      "Grants the passive {SKL=Glory}",
      "Gain Level [level value] {SKL=Enchant Fire} while holding this weapon."
    ],
    bosses: ["Red Dragon", "The Broker"],
    zones: ["Emberlands", "Emberlands"]
  },
  {
    name: "Problem Solver",
    rarity: "Mythic",
    type: "Gun_1H",
    damageRange: [16.5, 117.5],
    element: "Physical",
    slots: ["Main Hand", "Off Hand"],
    attributes: {},
    effects: [],
    bosses: ["Admiral Blackbeard"],
    zones: ["Water Temple Ruins", "Water Temple Ruins"]
  },
  {
    name: "Rabbit's Spear",
    rarity: "Mythic",
    type: "Polearm",
    damageRange: [30.5, 224.5],
    element: "Physical",
    slots: ["Main Hand"],
    attributes: { Dexterity: "{3,22}", Reflex: "{3,22}" },
    effects: [],
    bosses: ["Ronin", "The Grandmaster"],
    zones: ["Frostwrought Mountain", "Frostwrought Mountain"]
  },
  {
    name: "Shadow Stalker Bow",
    rarity: "Mythic",
    type: "Bow",
    damageRange: [24.5, 181.5],
    element: "Shadow",
    slots: ["Main Hand"],
    attributes: { Dexterity: "{6,43}" },
    effects: [
      "10% chance to cast Spectral Chains on striking",
      "10% chance to cast Blind on striking"
    ],
    bosses: ["The Sun Queen"],
    zones: ["Wyrmrest Desert", "Wyrmrest Desert"]
  },
  {
    name: "Shiny Blue Crusher",
    rarity: "Mythic",
    type: "Mace_1H",
    damageRange: [9.5, 65.5],
    element: "Cold",
    slots: ["Main Hand", "Off Hand"],
    attributes: { Vitality: "{3,22}", Intelligence: "{3,22}" },
    effects: ["Cold Damage {6,30}%"],
    bosses: ["Olgoi, Devourer of Treasure"],
    zones: ["Dwarven Halls", "Dwarven Halls"]
  },
  {
    name: "Shiny Orange Basher",
    rarity: "Mythic",
    type: "Mace_1H",
    damageRange: [9.5, 65.5],
    element: "Lightning",
    slots: ["Main Hand", "Off Hand"],
    attributes: { Dexterity: "{3,22}", Intelligence: "{3,22}" },
    effects: ["Lightning Damage {6,30}%"],
    bosses: ["Olgoi, Devourer of Treasure"],
    zones: ["Dwarven Halls", "Dwarven Halls"]
  },
  {
    name: "Shiny Red Smasher",
    rarity: "Mythic",
    type: "Mace_1H",
    damageRange: [9.5, 65.5],
    element: "Fire",
    slots: ["Main Hand", "Off Hand"],
    attributes: { Might: "{3,22}", Intelligence: "{3,22}" },
    effects: ["Fire Damage {6,30}%"],
    bosses: ["Olgoi, Devourer of Treasure"],
    zones: ["Dwarven Halls", "Dwarven Halls"]
  },
  {
    name: "Siegebreaker",
    rarity: "Mythic",
    type: "Mace_2H",
    damageRange: [23.5, 172.5],
    element: "Physical",
    slots: ["Main Hand"],
    attributes: { Might: "{2,11}", Vitality: "{2,11}" },
    effects: ["Physical Damage {8,40}%"],
    bosses: ["Hodr, the Frost Giant"],
    zones: ["Frostwrought Mountain", "Frostwrought Mountain"]
  },
  {
    name: "Slayer Axe",
    rarity: "Mythic",
    type: "Axe_2H",
    damageRange: [40.0, 301.5],
    element: "Physical",
    slots: ["Main Hand"],
    attributes: {},
    effects: [],
    bosses: ["The Butcher"],
    zones: [
      "Castle Gloom",
      "Castle Gloom",
      "Sunken Swamplands",
      "Sunken Swamplands"
    ]
  },
  {
    name: "Spectral Hammer",
    rarity: "Mythic",
    type: "Gun_1H",
    damageRange: [12.5, 91.5],
    element: "Shadow",
    slots: ["Main Hand", "Off Hand"],
    attributes: {},
    effects: [
      "Shadow Damage {2.5,12.5}%",
      "10% chance to shoot a Ghostly Cannon Ball on striking."
    ],
    bosses: ["Admiral Blackbeard"],
    zones: ["Water Temple Ruins", "Water Temple Ruins"]
  },
  {
    name: "Sun Staff",
    rarity: "Mythic",
    type: "Staff",
    damageRange: [26.5, 194.5],
    element: "Healing",
    slots: ["Main Hand"],
    attributes: { Might: "{6,43}" },
    effects: ["Holy Power {8,40}%"],
    bosses: ["The Sun Queen"],
    zones: ["Wyrmrest Desert", "Wyrmrest Desert"]
  },
  {
    name: "Thunder Grasp",
    rarity: "Mythic",
    type: "Wand",
    damageRange: [11.5, 78.5],
    element: "Lightning",
    slots: ["Main Hand", "Off Hand"],
    attributes: { Intelligence: "{6,43}" },
    effects: [
      "Lightning Damage Source[\"Intelligence\"] * .20f",
      "Gain Added Damage to Lightning equal to 20% of your Intelligence."
    ],
    bosses: ["Green Dragon", "The Mad Mage"],
    zones: ["Freewind Forest", "Freewind Forest"]
  },
  {
    name: "Thunder Pipe",
    rarity: "Mythic",
    type: "Gun_1H",
    damageRange: [12.5, 91.5],
    element: "Lightning",
    slots: ["Main Hand", "Off Hand"],
    attributes: { Might: "{3,22}" },
    effects: ["Lightning Damage {4,20}%"],
    bosses: ["Tlaloc the Storm"],
    zones: [
      "Emerald Jungle",
      "Emerald Jungle",
      "Water Temple Ruins",
      "Water Temple Ruins"
    ]
  },
  {
    name: "Thunderforce",
    rarity: "Mythic",
    type: "Bow",
    damageRange: [17.5, 128.5],
    element: "Lightning",
    slots: ["Main Hand"],
    attributes: { Dexterity: "{3,22}", Reflex: "{2,11}" },
    effects: [
      "Lightning Damage {8,40}%",
      "15% chance to cast Chain Lightning on striking with this weapon."
    ],
    bosses: ["Tlaloc the Storm"],
    zones: [
      "Emerald Jungle",
      "Emerald Jungle",
      "Water Temple Ruins",
      "Water Temple Ruins"
    ]
  },
  {
    name: "Thunderstone Staff",
    rarity: "Mythic",
    type: "Staff",
    damageRange: [22.5, 168.5],
    element: "Lightning",
    slots: ["Main Hand"],
    attributes: { Dexterity: "{5,33}", Intelligence: "{5,33}" },
    effects: [
      "Lightning Damage {8,40}%",
      "10% chance to proc Thunder Bolt when hitting with any ability."
    ],
    bosses: ["Tlaloc the Storm", "Green Dragon"],
    zones: [
      "Water Temple Ruins",
      "Water Temple Ruins",
      "Freewind Forest",
      "Emerald Jungle",
      "Freewind Forest",
      "Emerald Jungle"
    ]
  },
  {
    name: "Trophy Hunter",
    rarity: "Mythic",
    type: "Bow",
    damageRange: [27.5, 203.5],
    element: "Physical",
    slots: ["Main Hand"],
    attributes: { Dexterity: "{3,22}" },
    effects: ["Grants the passive skill {SKL=Trophy Hunter}."],
    bosses: ["Councilor Jahsun"],
    zones: ["Emerald Jungle", "Emerald Jungle"]
  },
  {
    name: "Volcanic",
    rarity: "Mythic",
    type: "Gun_1H",
    damageRange: [12.5, 91.5],
    element: "Fire",
    slots: ["Main Hand", "Off Hand"],
    attributes: { Might: "{3,22}" },
    effects: ["Fire Damage {4,20}%"],
    bosses: ["Dwarven Warmachine", "Red Dragon"],
    zones: [
      "Emberlands",
      "Emberlands",
      "Dwarven Halls",
      "Dwarven Halls"
    ]
  },
  {
    name: "Warmachine Gauntlet",
    rarity: "Mythic",
    type: "FistWeapon",
    damageRange: [11.5, 78.5],
    element: "Fire",
    slots: ["Main Hand", "Off Hand"],
    attributes: { Might: "{2,11}", Vitality: "{1,6}" },
    effects: [
      "10% chance to cast Meteor when Striking."
    ],
    bosses: ["Dwarven Warmachine"],
    zones: ["Dwarven Halls", "Dwarven Halls"]
  },
  {
    name: "Windstrike",
    rarity: "Mythic",
    type: "Bow",
    damageRange: [16.5, 121.5],
    element: "Physical",
    slots: ["Main Hand"],
    attributes: { Might: "{5,33}" },
    effects: [
      "Additional Weapon Damage Source[\"Might\"] * .35f",
      "Gain Additional Weapon Damage equal to 35% of your Might."
    ],
    bosses: ["Black Dragon"],
    zones: ["Castle Gloom", "Castle Gloom"]
  },
  {
    name: "Winged Axe",
    rarity: "Mythic",
    type: "Axe_1H",
    damageRange: [13.5, 99.5],
    element: "Physical",
    slots: ["Main Hand", "Off Hand"],
    attributes: {},
    effects: [
      "Basic attacks have a 25% chance to proc an additional attack once per turn."
    ],
    bosses: ["Valkyrie Commander"],
    zones: [
      "Frostwrought Mountain",
      "Frostwrought Mountain",
      "Water Temple Ruins",
      "Water Temple Ruins"
    ]
  },
  {
    name: "Witch's Broom",
    rarity: "Mythic",
    type: "Staff",
    damageRange: [21.5, 155.5],
    element: "Shadow",
    slots: ["Main Hand"],
    attributes: { Might: "{5,33}", Vitality: "{5,33}" },
    effects: ["Damage you deal applies 2 stacks of Poison."],
    bosses: ["The Risen Witch", "The Witch"],
    zones: ["Sunken Swamplands", "Sunken Swamplands"]
  },
  //
  // Helms
  //
{
    name: "Adamant Helm",
    rarity: "Mythic",
    type: "Helmet",
    armor: [21, 162],
    magicArmor: [21, 162],
    slots: ["Head"],
    attributes: { Might: "{2, 11}", Vitality: "{2, 11}" },
    effects: ["Damage Reduction 10%", "Resist Fire 15%"],
    bosses: ["Dwarven Warmachine"],
    zones: ["Dwarven Halls", "Dwarven Halls"]
  },
  {
    name: "Arcane Veil",
    rarity: "Mythic",
    type: "Helmet",
    armor: [4, 26],
    magicArmor: [4, 26],
    slots: ["Head"],
    attributes: { Might: "{10, 76}" },
    effects: [],
    bosses: ["Unchained Efreet", "The Ember King"],
    zones: [
      "Emberlands",
      "Wyrmrest Desert",
      "Wyrmrest Desert",
      "Emberlands"
    ]
  },
  {
    name: "Bladed Great Helm",
    rarity: "Mythic",
    type: "Helmet",
    armor: [17, 129],
    magicArmor: [17, 129],
    slots: ["Head"],
    attributes: { Might: "{2, 11}", Vitality: "{3, 22}" },
    effects: [
      "Return Damage Physical Source['Armor'] * .02f",
      "Resist Physical 15%",
      "Gain Added Return Damage Physical equal to 2% of your Armor."
    ],
    bosses: ["Dwarven Warmachine"],
    zones: ["Dwarven Halls", "Dwarven Halls"]
  },
  {
    name: "Bone Jester Mask",
    rarity: "Mythic",
    type: "Helmet",
    armor: [9, 65],
    magicArmor: [9, 65],
    slots: ["Head"],
    attributes: { Vitality: "{2, 11}", Reflex: "{3, 22}" },
    effects: ["Dodge Counter Damage {10,50}%"],
    bosses: ["The Jester"],
    zones: [
      "Castle Gloom",
      "Sunken Swamplands",
      "Castle Gloom",
      "Sunken Swamplands"
    ]
  },
  {
    name: "Crown of Mana",
    rarity: "Mythic",
    type: "Helmet",
    armor: [],
    magicArmor: [9, 65],
    slots: ["Head"],
    attributes: { Intelligence: "{10, 76}" },
    effects: [],
    bosses: ["Olgoi, Devourer of Treasure"],
    zones: ["Dwarven Halls", "Dwarven Halls"]
  },
  {
    name: "Dead One's Mind",
    rarity: "Mythic",
    type: "Helmet",
    armor: [5, 33],
    magicArmor: [5, 33],
    slots: ["Head"],
    attributes: { Vitality: "{2, 11}", Intelligence: "{2, 11}" },
    effects: [
      "Summon Resistance 10%",
      "Summon Damage {5,30}%",
      "Summon Health {5,30}%",
      "Summon Level Bonus 3"
    ],
    bosses: ["The Countess"],
    zones: ["Castle Gloom", "Castle Gloom"]
  },
  {
    name: "Discipline",
    rarity: "Mythic",
    type: "Helmet",
    armor: [5, 33],
    magicArmor: [5, 33],
    slots: ["Head"],
    attributes: { Vitality: "{10, 76}" },
    effects: [],
    bosses: ["Ronin", "The Grandmaster"],
    zones: ["Frostwrought Mountain", "Frostwrought Mountain"]
  },
  {
    name: "Ember King's Will",
    rarity: "Mythic",
    type: "Helmet",
    armor: [9, 65],
    magicArmor: [9, 65],
    slots: ["Head"],
    attributes: { Might: "{3, 17}", Vitality: "{3, 17}" },
    effects: [
      "Fire Damage {5,25}%",
      "Resist Fire 10%",
      "Resist Physical 10%",
      "The wearer gains Level [level value] {SKL=Aura of Flame}."
    ],
    bosses: ["The Ember King"],
    zones: ["Emberlands", "Emberlands"]
  },
  {
    name: "Ghost Face",
    rarity: "Mythic",
    type: "Helmet",
    armor: [5, 33],
    magicArmor: [5, 33],
    slots: ["Head"],
    attributes: { Reflex: "{10, 76}" },
    effects: [],
    bosses: ["The Countess"],
    zones: ["Castle Gloom", "Castle Gloom"]
  },
  {
    name: "Golden Valkyrie Helm",
    rarity: "Mythic",
    type: "Helmet",
    armor: [9, 65],
    magicArmor: [9, 65],
    slots: ["Head"],
    attributes: { Might: "{2, 11}", Dexterity: "{2, 11}" },
    effects: [
      "Skill Granted: Glory",
      "Skill Range 3",
      "Resist Physical 10%",
      "Resist Divine 10%",
      "Basic attacks have a 25% chance to proc an additional attack once per turn."
    ],
    bosses: ["Valkyrie Commander"],
    zones: [
      "Frostwrought Mountain",
      "Frostwrought Mountain",
      "Water Temple Ruins",
      "Water Temple Ruins"
    ]
  },
  {
    name: "Leviathan Skull",
    rarity: "Mythic",
    type: "Helmet",
    armor: [17, 129],
    magicArmor: [17, 129],
    slots: ["Head"],
    attributes: { Might: "{5, 33}", Vitality: "{3, 17}" },
    effects: [
      "Health Per Turn {7, 140}",
      "Resist Cold 15%",
      "Resist Fire 15%",
      "Resist Lightning 15%",
      "Resist Physical 15%",
      "Resist Divine 15%"
    ],
    bosses: ["Black Dragon", "Blue Dragon", "Green Dragon", "Red Dragon"],
    zones: [
      "Frostwrought Mountain",
      "Castle Gloom",
      "Freewind Forest",
      "Emberlands",
      "Frostwrought Mountain",
      "Freewind Forest",
      "Castle Gloom",
      "Emberlands"
    ]
  },
  {
    name: "Night Stalker Mask",
    rarity: "Mythic",
    type: "Helmet",
    armor: [5, 33],
    magicArmor: [5, 33],
    slots: ["Head"],
    attributes: { Dexterity: "{7, 54}", Reflex: "{3, 22}" },
    effects: ["20% chance to cast Stealth on turn start."],
    bosses: ["Samara the Vampire", "The Duke"],
    zones: ["Castle Gloom", "Castle Gloom"]
  },
  {
    name: "Ninja Hood",
    rarity: "Mythic",
    type: "Helmet",
    armor: [5, 33],
    magicArmor: [5, 33],
    slots: ["Head"],
    attributes: { Dexterity: "{10, 76}" },
    effects: [],
    bosses: ["Ronin"],
    zones: ["Frostwrought Mountain", "Frostwrought Mountain"]
  },
  {
    name: "Rage Casque",
    rarity: "Mythic",
    type: "Helmet",
    armor: [9, 65],
    magicArmor: [9, 65],
    slots: ["Head"],
    attributes: { Might: "{3, 22}", Vitality: "{3, 22}" },
    effects: [
      "Resist Fire 10%",
      "Resist Physical 10%",
      "The wearer gains Berserker's Rage."
    ],
    bosses: ["Maximus"],
    zones: []
  },
  {
    name: "Shako",
    rarity: "Mythic",
    type: "Helmet",
    armor: [5, 33],
    magicArmor: [5, 33],
    slots: ["Head"],
    attributes: {
      Might: "{1, 6}",
      Dexterity: "{1, 6}",
      Vitality: "{1, 6}",
      Intelligence: "{1, 6}",
      Reflex: "{1, 6}"
    },
    effects: [
      "Max Health 10%",
      "Max Mana 10%",
      "Damage and Healing {3,15}%",
      "Damage Reduction 5%"
    ],
    bosses: ["Black Dragon", "Blue Dragon", "Green Dragon", "Red Dragon"],
    zones: [
      "Frostwrought Mountain",
      "Castle Gloom",
      "Freewind Forest",
      "Emberlands",
      "Frostwrought Mountain",
      "Freewind Forest",
      "Castle Gloom",
      "Emberlands"
    ]
  },
  {
    name: "Slayer Mask",
    rarity: "Mythic",
    type: "Helmet",
    armor: [17, 129],
    magicArmor: [17, 129],
    slots: ["Head"],
    attributes: { Might: "{3, 17}", Vitality: "{3, 17}" },
    effects: ["Physical Damage {6,30}%", "% Life Steal 3"],
    bosses: ["The Baron"],
    zones: ["Castle Gloom", "Castle Gloom"]
  },
  {
    name: "Wolfshead Hood",
    rarity: "Mythic",
    type: "Helmet",
    armor: [9, 65],
    magicArmor: "Cold",
    slots: ["Head"],
    attributes: { Might: "2–11", Vitality: "2–11", Reflex: "2–11" },
    effects: ["Physical Damage 1–28", "Resist Cold 15%"],
    bosses: ["Hod", "Lagertha", "Ragnar"],
    zones: ["Frostwrought Mountain", "Frostwrought Mountain"]
  },
  //
  // Shields
  //
  {
    "name": "Anthulk Shell",
    "rarity": "Mythic",
    "type": "Shield",
    "armor": [21, 162],
    "magicArmor": [13, 97],
    "slots": ["Off Hand"],
    "attributes": { "Might": "{2, 11}", "Vitality": "{2, 11}" },
    "effects": [
      "Resist Physical 20%",
      "25% Chance when hit to cast Level [level value] {SKL=Ankheg Spines}."
    ],
    "bosses": ["Anthulk"],
    "zones": ["Forgotten Mines", "Forgotten Mines"]
  },
  {
    "name": "Crimson Guard",
    "rarity": "Mythic",
    "type": "Shield",
    "armor": [19, 145],
    "magicArmor": [19, 145],
    "slots": ["Off Hand"],
    "attributes": { "Vitality": "{3, 22}" },
    "effects": [
      "Return Damage Physical Source['Armor'] * .02f",
      "Damage Reduction 10%",
      "Gain Added Return Damage Physical equal to 2% of your Armor."
    ],
    "bosses": ["The Baron"],
    "zones": ["Castle Gloom", "Castle Gloom"]
  },
  {
    "name": "Dead One's Head",
    "rarity": "Mythic",
    "type": "Shield",
    "armor": [9, 65],
    "magicArmor": [17, 129],
    "slots": ["Off Hand"],
    "attributes": { "Intelligence": "{3, 22}" },
    "effects": [
      "Summon Resistance 30%",
      "Summon Health {6,30}%",
      "Summon Limit 1",
      "Summon Level Bonus 3"
    ],
    "bosses": ["The Dead One", "The Bishop", "The Butcher"],
    "zones": [
      "Castle Gloom",
      "Sunken Swamplands",
      "Castle Gloom",
      "Sunken Swamplands"
    ]
  },
  {
    "name": "Demon Skull",
    "rarity": "Mythic",
    "type": "Shield",
    "armor": [13, 97],
    "magicArmor": [21, 162],
    "slots": ["Off Hand"],
    "attributes": {},
    "effects": [
      "Fire Damage {5,20}%",
      "Return Damage Fire {3, 56}",
      "Resist Fire 15%",
      "Resist Divine 15%",
      "10% chance when struck to cast Level [level value] {SKL=Burning Ground}."
    ],
    "bosses": ["The Broker"],
    "zones": ["Emberlands", "Emberlands"]
  },
  {
    "name": "Dwarven Defender",
    "rarity": "Mythic",
    "type": "Shield",
    "armor": [17, 129],
    "magicArmor": [17, 129],
    "slots": ["Off Hand"],
    "attributes": { "Vitality": "{2, 11}" },
    "effects": [
      "Resist Cold 15%",
      "Resist Fire 15%",
      "Resist Lightning 15%",
      "Resist Physical 15%",
      "Resist Divine 15%",
      "Guardian bold, in steel and gold, against despair, a shield does hold."
    ],
    "bosses": ["Mountain King Ironheart"],
    "zones": ["Dwarven Halls", "Dwarven Halls"]
  },
  {
    "name": "Gilded Kite Shield",
    "rarity": "Mythic",
    "type": "Shield",
    "armor": [17, 129],
    "magicArmor": [17, 129],
    "slots": ["Off Hand"],
    "attributes": { "Might": "{2, 11}", "Vitality": "{3, 17}" },
    "effects": [
      "Resist Lightning 15%",
      "Resist Divine 15%",
      "10% chance upon getting hit to cast Level [level value] {SKL=Shield of Light}."
    ],
    "bosses": ["Olgoi, Devourer of Treasure"],
    "zones": ["Dwarven Halls", "Dwarven Halls"]
  },
  {
    "name": "Golden Aspis",
    "rarity": "Legendary",
    "type": "Shield",
    "armor": [14, 105],
    "magicArmor": [14, 105],
    "slots": ["Off Hand"],
    "attributes": { "Might": "{2, 10}", "Dexterity": "{2, 10}", "Reflex": "{3, 20}" },
    "effects": ["Resist Physical 15%"],
    "bosses": ["Lucilla", "Maximus", "Proximo"],
    "zones": []
  },
  {
    "name": "Holy Heater",
    "rarity": "Legendary",
    "type": "Shield",
    "armor": [12, 90],
    "magicArmor": [12, 90],
    "slots": ["Off Hand"],
    "attributes": { "Might": "{2, 10}", "Vitality": "{3, 20}" },
    "effects": ["Holy Power {4,20}%", "Resist Divine 15%"],
    "bosses": [],
    "zones": ["Global Loot"]
  },
  {
    "name": "Ilsalay's Indestructible Aegis",
    "rarity": "Mythic",
    "type": "Shield",
    "armor": [17, 129],
    "magicArmor": [11, 81],
    "slots": ["Off Hand"],
    "attributes": { "Might": "{5, 33}", "Vitality": "{5, 33}" },
    "effects": ["Damage Reduction 10%", "Grants the passive skill {SKL=Indestructible}"],
    "bosses": ["The Witch"],
    "zones": ["Sunken Swamplands", "Sunken Swamplands"]
  },
  {
    "name": "Ironbark Shield",
    "rarity": "Legendary",
    "type": "Shield",
    "armor": [18, 135],
    "magicArmor": [18, 135],
    "slots": ["Off Hand"],
    "attributes": { "Vitality": "{3, 20}" },
    "effects": ["Return Damage Physical {3, 52}", "Damage Reduction 8%"],
    "bosses": ["Ursa", "Forest Giant"],
    "zones": ["Freewind Forest", "Freewind Forest"]
  },
  {
    "name": "Ivory Aegis",
    "rarity": "Mythic",
    "type": "Shield",
    "armor": [7, 49],
    "magicArmor": [7, 49],
    "slots": ["Off Hand"],
    "attributes": { "Might": "{2, 11}", "Vitality": "{2, 11}" },
    "effects": [
      "Holy Power {2.5,12.5}%",
      "Resist Divine 20%",
      "10% chance when hit to cast Level [level value] {SKL=Mass Cure}."
    ],
    "bosses": ["The Bishop"],
    "zones": [
      "Castle Gloom",
      "Sunken Swamplands",
      "Castle Gloom",
      "Sunken Swamplands"
    ]
  },
  {
    "name": "Kingdom Guard",
    "rarity": "Legendary",
    "type": "Shield",
    "armor": [12, 90],
    "magicArmor": [12, 90],
    "slots": ["Off Hand"],
    "attributes": { "Might": "{2, 10}", "Dexterity": "{2, 10}", "Vitality": "{2, 10}", "Intelligence": "{2, 10}", "Reflex": "{2, 10}" },
    "effects": ["Resist Fire 10%", "Resist Fire 10%"],
    "bosses": [],
    "zones": ["Global Loot"]
  },
  {
    "name": "Savage Shield",
    "rarity": "Legendary",
    "type": "Shield",
    "armor": [14, 105],
    "magicArmor": [14, 105],
    "slots": ["Off Hand"],
    "attributes": { "Vitality": "{3, 20}" },
    "effects": [
      "Additional Weapon Damage {6, 40}",
      "Physical Damage {2,10}%",
      "Resist Physical 10%"
    ],
    "bosses": ["Hod", "Lagertha", "Ragnar"],
    "zones": ["Frostwrought Mountain", "Frostwrought Mountain"]
  },
  {
    "name": "Silver Kite Shield",
    "rarity": "Legendary",
    "type": "Shield",
    "armor": [14, 105],
    "magicArmor": [14, 105],
    "slots": ["Off Hand"],
    "attributes": { "Vitality": "{2, 10}", "Reflex": "{2, 10}" },
    "effects": [
      "Resist Divine 15%",
      "10% chance to cast Level [level value] {SKL=Blinding Light} when struck."
    ],
    "bosses": [],
    "zones": ["Global Loot"]
  },
  {
    "name": "Thorn Shield",
    "rarity": "Legendary",
    "type": "Shield",
    "armor": [12, 90],
    "magicArmor": [12, 90],
    "slots": ["Off Hand"],
    "attributes": { "Vitality": "{3, 20}" },
    "effects": ["Resist Fire 15%", "Attackers gain 4 stacks of poison."],
    "bosses": ["The Risen Witch", "The Witch", "Twisted Soul of the Swamp", "Twisted Treant"],
    "zones": ["Sunken Swamplands", "Sunken Swamplands"]
  },
  {
    "name": "Tribal Guardian",
    "rarity": "Legendary",
    "type": "Shield",
    "armor": [],
    "magicArmor": [24, 180],
    "slots": ["Off Hand"],
    "attributes": {},
    "effects": ["Resist Cold 15%", "Resist Fire 15%", "Resist Lightning 15%"],
    "bosses": ["Avatar of Xotec"],
    "zones": ["Emerald Jungle", "Water Temple Ruins", "Emerald Jungle", "Water Temple Ruins"]
  },
  {
    "name": "Westarch Defender",
    "rarity": "Mythic",
    "type": "Shield",
    "armor": [17, 129],
    "magicArmor": [17, 129],
    "slots": ["Off Hand"],
    "attributes": { "Might": "{2, 11}", "Vitality": "{2, 11}" },
    "effects": [
      "Resist Cold 15%",
      "Resist Physical 15%",
      "10% chance to cast Level [level value] {SKL=Howl} when struck."
    ],
    "bosses": ["Hodr, the Frost Giant"],
    "zones": ["Frostwrought Mountain", "Frostwrought Mountain"]
  },
  //
  // Chest
  //
  {
    name: "Adamant Platemail",
    rarity: "Mythic",
    type: "Armor",
    armor: [21, 162],
    magicArmor: [21, 162],
    slots: ["Chest"],
    attributes: { Might: "{2, 11}", Vitality: "{2, 11}" },
    effects: ["Damage Reduction 10%", "Resist Fire 15%"],
    bosses: ["The Ember King"],
    zones: ["Emberlands", "Emberlands"]
  },
  {
    name: "Arcane Robes",
    rarity: "Mythic",
    type: "Armor",
    armor: [5, 33],
    magicArmor: [5, 33],
    slots: ["Chest"],
    attributes: { Might: "{10, 76}" },
    effects: [],
    bosses: ["Herald of the Abyss", "Unchained Efreet"],
    zones: ["Wyrmrest Desert", "Castle Gloom", "Sunken Swamplands", "Sunken Swamplands", "Castle Gloom", "Wyrmrest Desert"]
  },
  {
    name: "Black Belt",
    rarity: "Mythic",
    type: "Armor",
    armor: [5, 33],
    magicArmor: [5, 33],
    slots: ["Chest"],
    attributes: { Reflex: "{10, 76}" },
    effects: [],
    bosses: ["The Grandmaster"],
    zones: ["Frostwrought Mountain", "Frostwrought Mountain"]
  },
  {
    name: "Bone Jester Jacket",
    rarity: "Mythic",
    type: "Armor",
    armor: [9, 65],
    magicArmor: [9, 65],
    slots: ["Chest"],
    attributes: { Vitality: "{2, 11}", Reflex: "{3, 22}" },
    effects: ["Dodge Counter Damage {10,50}%"],
    bosses: ["Samara the Vampire", "The Duke", "The Jester"],
    zones: ["Castle Gloom", "Sunken Swamplands", "Castle Gloom", "Sunken Swamplands"]
  },
  {
    name: "Dead One's Robes",
    rarity: "Mythic",
    type: "Armor",
    armor: [4, 26],
    magicArmor: [6, 39],
    slots: ["Chest"],
    attributes: { Vitality: "{2, 11}", Intelligence: "{2, 11}" },
    effects: ["Summon Resistance 10%", "Summon Damage {5,30}%", "Summon Health {5,30}%", "Summon Level Bonus 3"],
    bosses: ["The Dusk King"],
    zones: ["Frostwrought Mountain", "Frostwrought Mountain"]
  },
  {
    name: "Emperor's Cuirass",
    rarity: "Mythic",
    type: "Armor",
    armor: [15, 113],
    magicArmor: [15, 113],
    slots: ["Chest"],
    attributes: { Might: "{2, 11}", Dexterity: "{2, 11}", Vitality: "{2, 11}", Intelligence: "{2, 11}", Reflex: "{2, 11}" },
    effects: ["Resist Divine 10%", "Resist Fire 10%", "Casts Emperor's Blessing on the wearer."],
    bosses: ["Emperor Marcus"],
    zones: []
  },
  {
    name: "Energy Vestments",
    rarity: "Mythic",
    type: "Armor",
    armor: [2, 13],
    magicArmor: [7, 52],
    slots: ["Chest"],
    attributes: { Intelligence: "{10, 76}" },
    effects: [],
    bosses: ["Tlaloc the Storm"],
    zones: ["Emerald Jungle", "Water Temple Ruins", "Emerald Jungle", "Water Temple Ruins"]
  },
  {
    name: "Fallen Cleric Robes",
    rarity: "Mythic",
    type: "Armor",
    armor: [15, 113],
    magicArmor: [15, 113],
    slots: ["Chest"],
    attributes: { Might: "{3, 17}", Intelligence: "{3, 17}" },
    effects: ["Damage and Healing {5,25}%", "Resist Divine 15%", "10% chance on hit to cast Level [level value] {SKL=Consumption}"],
    bosses: ["The Countess"],
    zones: ["Castle Gloom", "Castle Gloom"]
  },
  {
    name: "Flame Vestments",
    rarity: "Mythic",
    type: "Armor",
    armor: [5, 33],
    magicArmor: [5, 33],
    slots: ["Chest"],
    attributes: { Might: "{3, 22}", Vitality: "{2, 11}", Intelligence: "{2, 11}" },
    effects: ["Fire Damage {7,35}%", "Resist Fire 15%", "Gain Level [level value] {SKL=Enchant Fire}."],
    bosses: ["The Ember King"],
    zones: ["Emberlands", "Emberlands"]
  },
  {
    name: "Forgemaster's Links",
    rarity: "Mythic",
    type: "Armor",
    armor: [15, 113],
    magicArmor: [21, 162],
    slots: ["Chest"],
    attributes: { Might: "{5, 33}", Vitality: "{2, 11}" },
    effects: ["Fire Damage {7,35}%", "Resist Fire 10%", "Resist Physical 10%", "The wearer gains Level [level value] {SKL=Fire Shield}."],
    bosses: ["The Forgemaster"],
    zones: ["Emberlands", "Emberlands"]
  },
  {
    name: "Frost Mantle",
    rarity: "Mythic",
    type: "Armor",
    armor: [5, 33],
    magicArmor: [5, 33],
    slots: ["Chest"],
    attributes: { Might: "{2, 11}", Vitality: "{2, 11}", Intelligence: "{3, 22}" },
    effects: ["Cold Damage {7,35}%", "Resist Cold 15%", "Gain Level [level value] {SKL=Enchant Cold}."],
    bosses: ["Hodr, the Frost Giant"],
    zones: ["Frostwrought Mountain", "Frostwrought Mountain"]
  },
  {
    name: "Golden Valkyrie Plate",
    rarity: "Mythic",
    type: "Armor",
    armor: [9, 65],
    magicArmor: [9, 65],
    slots: ["Chest"],
    attributes: { Might: "{2, 11}", Dexterity: "{2, 11}" },
    effects: ["Skill Range 3", "Resist Physical 10%", "Resist Divine 10%", "Basic attacks have a 25% chance to proc an additional attack once per turn."],
    bosses: ["Valkyrie Commander"],
    zones: ["Frostwrought Mountain", "Frostwrought Mountain", "Water Temple Ruins", "Water Temple Ruins"]
  },
  {
    name: "Grandmaster's Gi",
    rarity: "Mythic",
    type: "Armor",
    armor: [5, 33],
    magicArmor: [5, 33],
    slots: ["Chest"],
    attributes: {},
    effects: ["Physical Damage {1, 22}", "Cold Damage {1, 22}", "Fire Damage {1, 22}", "Lightning Damage {1, 22}", "Healing Given {1, 22}", "Shadow Damage {1, 22}"],
    bosses: ["The Grandmaster"],
    zones: ["Frostwrought Mountain", "Frostwrought Mountain"]
  },
  {
    name: "Inner Strength",
    rarity: "Mythic",
    type: "Armor",
    armor: [5, 33],
    magicArmor: [5, 33],
    slots: ["Chest"],
    attributes: { Might: "{7, 54}", MaxHealth: "{21, 162}" },
    effects: [],
    bosses: ["Forest Giant"],
    zones: ["Freewind Forest", "Freewind Forest"]
  },
  {
    name: "Iron Thorn Cuirass",
    rarity: "Mythic",
    type: "Armor",
    armor: [17, 129],
    magicArmor: [17, 129],
    slots: ["Chest"],
    attributes: { Might: "{2, 11}", Vitality: "{3, 22}" },
    effects: ["Return Damage Physical Source[\"Armor\"] * .02f", "Resist Physical 15%", "Gain Added Return Damage Physical equal to 2% of your Armor."],
    bosses: ["Azug Spikefist"],
    zones: []
  },
  {
    name: "Leviathan Plate",
    rarity: "Mythic",
    type: "Armor",
    armor: [17, 129],
    magicArmor: [17, 129],
    slots: ["Chest"],
    attributes: { Might: "{5, 33}", Vitality: "{3, 17}" },
    effects: ["Health Per Turn {7, 140}", "Resist Cold 15%", "Resist Fire 15%", "Resist Lightning 15%", "Resist Physical 15%", "Resist Divine 15%"],
    bosses: ["Black Dragon", "Blue Dragon", "Green Dragon", "Red Dragon"],
    zones: ["Frostwrought Mountain", "Castle Gloom", "Freewind Forest", "Emberlands", "Frostwrought Mountain", "Freewind Forest", "Castle Gloom", "Emberlands"]
  },
  {
    name: "Night Stalker Leathers",
    rarity: "Mythic",
    type: "Armor",
    armor: [5, 33],
    magicArmor: [5, 33],
    slots: ["Chest"],
    attributes: { Dexterity: "{7, 54}", Reflex: "{3, 22}" },
    effects: ["20% chance to cast Stealth on turn start."],
    bosses: ["The Duke"],
    zones: ["Castle Gloom", "Castle Gloom"]
  },
  {
    name: "Ninja Gear",
    rarity: "Mythic",
    type: "Armor",
    armor: [5, 33],
    magicArmor: [5, 33],
    slots: ["Chest"],
    attributes: { Dexterity: "{10, 76}" },
    effects: [],
    bosses: ["The Grandmaster"],
    zones: ["Frostwrought Mountain", "Frostwrought Mountain"]
  },
  {
    name: "Resolve",
    rarity: "Mythic",
    type: "Armor",
    armor: [5, 33],
    magicArmor: [5, 33],
    slots: ["Chest"],
    attributes: { Vitality: "{10, 76}" },
    effects: [],
    bosses: ["Olgoi, Devourer of Treasure"],
    zones: ["Dwarven Halls", "Dwarven Halls"]
  },
  {
    name: "Slayer Plate",
    rarity: "Mythic",
    type: "Armor",
    armor: [17, 129],
    magicArmor: [17, 129],
    slots: ["Chest"],
    attributes: { Might: "{3, 17}", Vitality: "{3, 17}" },
    effects: ["Physical Damage {6,30}%", "% Life Steal 3"],
    bosses: ["The Baron"],
    zones: ["Castle Gloom", "Castle Gloom"]
  },
  {
    name: "Thunder Robes",
    rarity: "Mythic",
    type: "Armor",
    armor: [5, 33],
    magicArmor: [5, 33],
    slots: ["Chest"],
    attributes: { Dexterity: "{3, 22}", Vitality: "{2, 11}", Intelligence: "{2, 11}" },
    effects: ["Lightning Damage {7,35}%", "Resist Lightning 15%", "Gain Level [level value] {SKL=Enchant Lightning}."],
    bosses: ["Tlaloc the Storm"],
    zones: ["Emerald Jungle", "Water Temple Ruins", "Emerald Jungle", "Water Temple Ruins"]
  },
  {
    name: "Warlord Mantle",
    rarity: "Mythic",
    type: "Armor",
    armor: [9, 65],
    magicArmor: [9, 65],
    slots: ["Chest"],
    attributes: { Might: "{2, 11}", Vitality: "{2, 11}", Reflex: "{2, 11}" },
    effects: ["Physical Damage {1, 28}", "Resist Cold 15%"],
    bosses: ["Hod", "Lagertha", "Ragnar"],
    zones: ["Frostwrought Mountain", "Frostwrought Mountain"]
  },
  {
    name: "Will to Survive",
    rarity: "Mythic",
    type: "Armor",
    armor: [5, 33],
    magicArmor: [5, 33],
    slots: ["Chest"],
    attributes: { Might: "{3, 22}", MaxHealth: "{21, 162}" },
    effects: ["Armor Source[\"Might\"] * 2f", "Magic Armor Source[\"Might\"] * 2f", "Gain Armor and Magic Armor equal to 2x your Might", "10% chance upon getting hit to cast Level [level value] {SKL=Pain Suppression}."],
    bosses: ["Councilor Jahsun"],
    zones: ["Emerald Jungle", "Emerald Jungle"]
  },
  //
  // Rings
  //
  {
    name: "Abyssal Binding",
    rarity: "Mythic",
    type: "Ring",
    armor: [],
    magicArmor: [],
    slots: ["Ring"],
    attributes: {},
    effects: ["Damage and Healing {10,50}%", "Resist Physical -10%", "Resist Cold -10%", "Resist Fire -10%", "Resist Lightning -10%"],
    bosses: ["Herald of the Abyss"],
    zones: ["Castle Gloom", "Sunken Swamplands", "Castle Gloom", "Sunken Swamplands"]
  },
  {
    name: "Adamant Band",
    rarity: "Mythic",
    type: "Ring",
    armor: [13, 97],
    magicArmor: [13, 97],
    slots: ["Ring"],
    attributes: { Might: "{2, 11}", Vitality: "{2, 11}" },
    effects: ["Damage Reduction 5%", "Resist Fire 15%"],
    bosses: ["Lord Infernicus", "The Forgemaster", "Nagomahu"],
    zones: ["Emberlands", "Wyrmrest Desert", "Wyrmrest Desert", "Emberlands"]
  },
  {
    name: "Band of Blades",
    rarity: "Mythic",
    type: "Ring",
    armor: [15, 113],
    magicArmor: [15, 113],
    slots: ["Ring"],
    attributes: { Vitality: "{3, 22}" },
    effects: ["Return Damage Physical Source[\"Armor\"] * .02f", "Resist Physical 15%", "Gain Added Return Damage Physical equal to 2% of your Armor."],
    bosses: ["Dwarven Warmachine"],
    zones: ["Dwarven Halls", "Dwarven Halls"]
  },
  {
    name: "Band of Freedom",
    rarity: "Mythic",
    type: "Ring",
    armor: [],
    magicArmor: [],
    slots: ["Ring"],
    attributes: { Dexterity: "{2, 11}", Reflex: "{2, 11}" },
    effects: ["Rooted Immunity 1", "Opportunity Attack Immunity 1", "Chilled Immunity 1", "Movement Points 2"],
    bosses: ["The Butcher"],
    zones: ["Castle Gloom", "Sunken Swamplands", "Castle Gloom", "Sunken Swamplands"]
  },
  {
    name: "Black Dragon Scale",
    rarity: "Mythic",
    type: "Ring",
    armor: [11, 81],
    magicArmor: [11, 81],
    slots: ["Ring"],
    attributes: { Vitality: "{2, 11}" },
    effects: ["Return Damage Shadow {3, 56}", "Health Per Turn {7, 140}", "Resist Divine 15%"],
    bosses: ["Black Dragon"],
    zones: ["Castle Gloom", "Castle Gloom"]
  },
  {
    name: "Bleeding Band",
    rarity: "Legendary",
    type: "Ring",
    armor: [],
    magicArmor: [],
    slots: ["Ring"],
    attributes: { Might: "{2, 10}", Vitality: "{2, 10}" },
    effects: ["Weapon attacks apply 1 stack of bleeding."],
    bosses: ["Anthulk", "The Minotaur"],
    zones: ["Forgotten Mines", "Forgotten Mines"]
  },
  {
    name: "Blue Dragon Scale",
    rarity: "Mythic",
    type: "Ring",
    armor: [11, 81],
    magicArmor: [11, 81],
    slots: ["Ring"],
    attributes: { Intelligence: "{2, 11}" },
    effects: ["Return Damage Cold {3, 56}", "Health Per Turn {7, 140}", "Resist Cold 15%"],
    bosses: ["Blue Dragon"],
    zones: ["Frostwrought Mountain", "Frostwrought Mountain"]
  },
  {
    name: "Claw of Kuvonn",
    rarity: "Mythic",
    type: "Ring",
    armor: [],
    magicArmor: [],
    slots: ["Ring"],
    attributes: {},
    effects: ["Summon Resistance 10%", "Summon Damage {5,20}%", "Summon Health {5,20}%", "Summon Level Bonus 3", "Summon Limit 1", "All creatures you summon have Ghost Armor applied."],
    bosses: ["Black Dragon", "The Dead One"],
    zones: ["Castle Gloom", "Sunken Swamplands", "Castle Gloom", "Sunken Swamplands"]
  },
  {
    name: "Dark Steel Ring",
    rarity: "Legendary",
    type: "Ring",
    armor: [8, 60],
    magicArmor: [8, 60],
    slots: ["Ring"],
    attributes: { Might: "{2, 10}" },
    effects: ["Physical Damage {5,25}%", "Resist Divine 8%"],
    bosses: ["Global Loot"],
    zones: []
  },
  {
    name: "Elemental Loop",
    rarity: "Legendary",
    type: "Ring",
    armor: [],
    magicArmor: [],
    slots: ["Ring"],
    attributes: { Vitality: "{3, 20}" },
    effects: ["Cold Damage {1, 21}", "Fire Damage {1, 21}", "Lightning Damage {1, 21}"],
    bosses: ["Crystal Golem"],
    zones: ["Forgotten Mines", "Forgotten Mines"]
  },
  {
    name: "Emberstone Ring",
    rarity: "Mythic",
    type: "Ring",
    armor: [],
    magicArmor: [],
    slots: ["Ring"],
    attributes: { Might: "{2, 11}" },
    effects: ["Fire Damage {8,40}%", "Resist Fire 15%"],
    bosses: ["Dwarven Warmachine", "Red Dragon"],
    zones: ["Emberlands", "Dwarven Halls", "Dwarven Halls", "Emberlands"]
  },
  {
    name: "Ethereal Loop",
    rarity: "Mythic",
    type: "Ring",
    armor: [],
    magicArmor: [],
    slots: ["Ring"],
    attributes: { Reflex: "{6, 43}" },
    effects: [],
    bosses: ["Herald of the Abyss"],
    zones: ["Castle Gloom", "Sunken Swamplands", "Castle Gloom", "Sunken Swamplands"]
  },
  {
    name: "Gladiator's Mark",
    rarity: "Legendary",
    type: "Ring",
    armor: [],
    magicArmor: [],
    slots: ["Ring"],
    attributes: { Vitality: "{3, 20}" },
    effects: ["Physical Damage {1, 26}", "Resist Physical 8%"],
    bosses: ["Lucilla", "Proximo"],
    zones: []
  },
  {
    name: "Green Dragon Scale",
    rarity: "Mythic",
    type: "Ring",
    armor: [11, 81],
    magicArmor: [11, 81],
    slots: ["Ring"],
    attributes: { Dexterity: "{2, 11}" },
    effects: ["Return Damage Lightning {3, 56}", "Health Per Turn {7, 140}", "Resist Lightning 15%"],
    bosses: ["Green Dragon"],
    zones: ["Freewind Forest", "Freewind Forest"]
  },
  {
    name: "Hailstone Ring",
    rarity: "Mythic",
    type: "Ring",
    armor: [],
    magicArmor: [],
    slots: ["Ring"],
    attributes: { Intelligence: "{2, 11}" },
    effects: ["Cold Damage {8,40}%", "Resist Cold 15%"],
    bosses: ["Blue Dragon"],
    zones: ["Frostwrought Mountain", "Frostwrought Mountain"]
  },
  {
    name: "Heart Signet",
    rarity: "Mythic",
    type: "Ring",
    armor: [],
    magicArmor: [],
    slots: ["Ring"],
    attributes: { Vitality: "{6, 43}" },
    effects: [],
    bosses: ["Ursa"],
    zones: ["Freewind Forest", "Freewind Forest"]
  },
  {
    name: "Iron Fortress Band",
    rarity: "Mythic",
    type: "Ring",
    armor: [9, 65],
    magicArmor: [9, 65],
    slots: ["Ring"],
    attributes: {},
    effects: ["Resist Physical 15%", "Resist Cold 15%", "Resist Fire 15%", "Resist Lightning 15%", "Resist Divine 15%"],
    bosses: ["The Gobfather", "The Pale Goblin"],
    zones: ["Wyrmrest Desert", "Wyrmrest Desert", "Dwarven Halls", "Dwarven Halls"]
  },
  {
    name: "King's Signet",
    rarity: "Mythic",
    type: "Ring",
    armor: [],
    magicArmor: [],
    slots: ["Ring"],
    attributes: { Might: "{2, 10}", Dexterity: "{2, 10}", Vitality: "{2, 10}", Intelligence: "{2, 10}", Reflex: "{2, 10}" },
    effects: [],
    bosses: ["The Dusk King"],
    zones: ["Frostwrought Mountain", "Frostwrought Mountain"]
  },
  {
    name: "Living Band",
    rarity: "Legendary",
    type: "Ring",
    armor: [],
    magicArmor: [],
    slots: ["Ring"],
    attributes: { Might: "{2, 10}", Vitality: "{2, 10}" },
    effects: ["Health Per Turn {9, 182}", "Resist Fire -25%"],
    bosses: ["Ursa", "Burning Treant", "Forest Giant", "Forest Keeper", "Forest Treant", "Forest Watcher", "Frozen Treant", "Trial of Honor"],
    zones: ["Frostwrought Mountain", "Freewind Forest", "Emberlands", "Frostwrought Mountain", "Freewind Forest", "Emberlands"]
  },
  {
    name: "Mark of Nobility",
    rarity: "Legendary",
    type: "Ring",
    armor: [],
    magicArmor: [],
    slots: ["Ring"],
    attributes: { Might: "{1, 7}", Dexterity: "{1, 7}", Vitality: "{1, 7}", Intelligence: "{1, 7}", Reflex: "{1, 7}" },
    effects: ["Resist Lightning 8%", "Resist Cold 8%"],
    bosses: ["Global Loot"],
    zones: []
  },
  {
    name: "Meteorite Band",
    rarity: "Legendary",
    type: "Ring",
    armor: [],
    magicArmor: [],
    slots: ["Ring"],
    attributes: { Vitality: "{3, 20}" },
    effects: ["Fire Damage {1, 26}", "Resist Fire 10%"],
    bosses: ["Ember Golem"],
    zones: ["Emberlands", "Emberlands"]
  },
  {
    name: "Mithril Loop",
    rarity: "Legendary",
    type: "Ring",
    armor: [8, 60],
    magicArmor: [8, 60],
    slots: ["Ring"],
    attributes: { Might: "{2, 10}", Vitality: "{2, 10}" },
    effects: ["Resist Physical 8%"],
    bosses: ["Global Loot"],
    zones: []
  },
  {
    name: "Orichalcum Band",
    rarity: "Legendary",
    type: "Ring",
    armor: [],
    magicArmor: [],
    slots: ["Ring"],
    attributes: { Might: "{2, 10}", Intelligence: "{2, 10}" },
    effects: ["increased power for mana use {8,40}%", "Mana Costs {4,20}%"],
    bosses: ["Global Loot"],
    zones: []
  },
  {
    name: "Purifying Band",
    rarity: "Legendary",
    type: "Ring",
    armor: [],
    magicArmor: [],
    slots: ["Ring"],
    attributes: { Intelligence: "{3, 20}" },
    effects: [],
    bosses: ["Global Loot"],
    zones: []
  },
  {
    name: "Red Dragon Scale",
    rarity: "Mythic",
    type: "Ring",
    armor: [11, 81],
    magicArmor: [11, 81],
    slots: ["Ring"],
    attributes: { Might: "{2, 11}" },
    effects: ["Return Damage Fire {3, 56}", "Health Per Turn {7, 140}", "Resist Fire 15%"],
    bosses: ["Red Dragon"],
    zones: ["Emberlands", "Emberlands"]
  },
  {
    name: "Ring of Alacrity",
    rarity: "Legendary",
    type: "Ring",
    armor: [],
    magicArmor: [],
    slots: ["Ring"],
    attributes: { Dexterity: "{2, 10}", Reflex: "{2, 10}" },
    effects: ["Movement Points 2", "Resist Lightning 10%"],
    bosses: ["Blood Mask Boss"],
    zones: ["Freewind Forest", "Freewind Forest"]
  },
  {
    name: "Ring of Brilliance",
    rarity: "Mythic",
    type: "Ring",
    armor: [],
    magicArmor: [],
    slots: ["Ring"],
    attributes: { Intelligence: "{6, 43}" },
    effects: [],
    bosses: ["Crystal Golem"],
    zones: ["Forgotten Mines", "Forgotten Mines"]
  },
  {
    name: "Ring of Cunning",
    rarity: "Mythic",
    type: "Ring",
    armor: [],
    magicArmor: [],
    slots: ["Ring"],
    attributes: { Dexterity: "{6, 43}" },
    effects: [],
    bosses: ["Ronin"],
    zones: ["Frostwrought Mountain", "Frostwrought Mountain"]
  },
  {
    name: "Ring of Haste",
    rarity: "Legendary",
    type: "Ring",
    armor: [],
    magicArmor: [],
    slots: ["Ring"],
    attributes: { Dexterity: "{2, 10}" },
    effects: [],
    bosses: ["The Sun Queen"],
    zones: ["Wyrmrest Desert", "Wyrmrest Desert"]
  },
  {
    name: "Ring of Power",
    rarity: "Mythic",
    type: "Ring",
    armor: [],
    magicArmor: [],
    slots: ["Ring"],
    attributes: { Might: "{6, 43}" },
    effects: [],
    bosses: ["The Broker"],
    zones: ["Emberlands", "Emberlands"]
  },
  {
    name: "Ring of Vision",
    rarity: "Legendary",
    type: "Ring",
    armor: [],
    magicArmor: [],
    slots: ["Ring"],
    attributes: { Might: "{2, 10}", Dexterity: "{2, 10}" },
    effects: ["Skill Range 2", "Blind Immunity 1"],
    bosses: ["Global Loot"],
    zones: []
  },
  {
    name: "Sunstone Ring",
    rarity: "Mythic",
    type: "Ring",
    armor: [],
    magicArmor: [],
    slots: ["Ring"],
    attributes: { Might: "{3, 22}", Intelligence: "{3, 22}" },
    effects: ["Resist Divine 15%", "10% chance to cast Level [level value] {SKL=Blinding Light} when hitting with any ability."],
    bosses: ["Avatar of Xotec"],
    zones: ["Emerald Jungle", "Water Temple Ruins", "Emerald Jungle", "Water Temple Ruins"]
  },
  {
    name: "Thief's Ring",
    rarity: "Legendary",
    type: "Ring",
    armor: [],
    magicArmor: [],
    slots: ["Ring"],
    attributes: { Dexterity: "{2, 10}" },
    effects: [],
    bosses: ["Samara the Vampire", "The Duke", "Thief"],
    zones: ["Castle Gloom", "Emerald Jungle", "Castle Gloom", "Emerald Jungle"]
  },
  {
    name: "Thunderstone Ring",
    rarity: "Mythic",
    type: "Ring",
    armor: [],
    magicArmor: [],
    slots: ["Ring"],
    attributes: { Dexterity: "{2, 11}" },
    effects: ["Lightning Damage {8,40}%", "Resist Lightning 15%"],
    bosses: ["Ragnar", "Green Dragon"],
    zones: ["Freewind Forest", "Frostwrought Mountain", "Frostwrought Mountain", "Freewind Forest"]
  },
  {
    name: "Titanium Band",
    rarity: "Legendary",
    type: "Ring",
    armor: [4, 30],
    magicArmor: [4, 30],
    slots: ["Ring"],
    attributes: { Vitality: "{2, 10}" },
    effects: ["Return Damage Physical {3, 52}", "Resist Physical 8%"],
    bosses: ["Global Loot"],
    zones: []
  },
  //
  // Amulets
  //
  {
    name: "Abyssal Chain",
    rarity: "Mythic",
    type: "Amulet",
    armor: [],
    magicArmor: [],
    slots: ["Amulet"],
    attributes: { Might: "{2, 11}" },
    effects: ["Damage and Healing {10,50}%", "Resist Physical -10%", "Resist Cold -10%", "Resist Fire -10%", "Resist Lightning -10%"],
    bosses: ["Admiral Blackbeard", "The Dead One", "The Prospector"],
    zones: ["Water Temple Ruins", "Castle Gloom", "Water Temple Ruins", "Sunken Swamplands", "Forgotten Mines", "Sunken Swamplands", "Castle Gloom", "Forgotten Mines"]
  },
  {
    name: "Adamant Chain",
    rarity: "Mythic",
    type: "Amulet",
    armor: [13, 97],
    magicArmor: [13, 97],
    slots: ["Amulet"],
    attributes: { Might: "{2, 11}", Vitality: "{2, 11}" },
    effects: ["Damage Reduction 5%", "Resist Fire 15%"],
    bosses: ["Dwarven Warmachine"],
    zones: ["Dwarven Halls", "Dwarven Halls"]
  },
  {
    name: "Amulet of Alacrity",
    rarity: "Legendary",
    type: "Amulet",
    armor: [],
    magicArmor: [],
    slots: ["Amulet"],
    attributes: { Dexterity: "{2, 10}", Reflex: "{2, 10}" },
    effects: ["Movement Points 2", "Resist Lightning 10%"],
    bosses: ["Global Loot"],
    zones: []
  },
  {
    name: "Amulet of Brilliance",
    rarity: "Mythic",
    type: "Amulet",
    armor: [],
    magicArmor: [],
    slots: ["Amulet"],
    attributes: { Intelligence: "{6, 43}" },
    effects: [],
    bosses: ["The Sun Queen"],
    zones: ["Wyrmrest Desert", "Wyrmrest Desert"]
  },
  {
    name: "Amulet of Power",
    rarity: "Mythic",
    type: "Amulet",
    armor: [],
    magicArmor: [],
    slots: ["Amulet"],
    attributes: { Might: "{6, 43}" },
    effects: [],
    bosses: ["Lord Infernicus", "The Forgemaster", "Nagomahu"],
    zones: ["Emberlands", "Wyrmrest Desert", "Wyrmrest Desert", "Emberlands"]
  },
  {
    name: "Amulet of Vision",
    rarity: "Legendary",
    type: "Amulet",
    armor: [],
    magicArmor: [],
    slots: ["Amulet"],
    attributes: { Might: "{2, 10}", Dexterity: "{2, 10}" },
    effects: ["Skill Range 2", "Blind Immunity 1"],
    bosses: ["The Sun Queen"],
    zones: ["Wyrmrest Desert", "Wyrmrest Desert"]
  },
  {
    name: "Black Dragon Eye",
    rarity: "Mythic",
    type: "Amulet",
    armor: [],
    magicArmor: [],
    slots: ["Amulet"],
    attributes: { Vitality: "{2, 11}" },
    effects: ["Shadow Damage {2, 42}", "Resist Divine 15%"],
    bosses: ["Black Dragon"],
    zones: ["Castle Gloom", "Castle Gloom"]
  },
  {
    name: "Blue Dragon Eye",
    rarity: "Mythic",
    type: "Amulet",
    armor: [],
    magicArmor: [],
    slots: ["Amulet"],
    attributes: { Vitality: "{2, 11}" },
    effects: ["Cold Damage {2, 42}", "Resist Cold 15%"],
    bosses: ["Blue Dragon"],
    zones: ["Frostwrought Mountain", "Frostwrought Mountain"]
  },
  {
    name: "Contender's Chain",
    rarity: "Legendary",
    type: "Amulet",
    armor: [],
    magicArmor: [],
    slots: ["Amulet"],
    attributes: { Vitality: "{3, 20}" },
    effects: ["Physical Damage {1, 26}", "Resist Physical 8%"],
    bosses: ["Maximus"],
    zones: []
  },
  {
    name: "Dark Steel Locket",
    rarity: "Legendary",
    type: "Amulet",
    armor: [8, 60],
    magicArmor: [8, 60],
    slots: ["Amulet"],
    attributes: { Might: "{2, 10}" },
    effects: ["Physical Damage {5,25}%", "Resist Divine 8%"],
    bosses: ["Herald of the Abyss"],
    zones: ["Castle Gloom", "Sunken Swamplands", "Castle Gloom", "Sunken Swamplands"]
  },
  {
    name: "Dead One's Phylactery",
    rarity: "Mythic",
    type: "Amulet",
    armor: [],
    magicArmor: [],
    slots: ["Amulet"],
    attributes: {},
    effects: ["Summon Resistance -20%", "Summon Damage {5,20}%", "Summon Health {5,20}%", "Summon Level Bonus 3", "Summon Limit 1", "Grants the passive skill {SKL=Lich Lord}"],
    bosses: ["The Dead One", "The Risen Witch"],
    zones: ["Castle Gloom", "Sunken Swamplands", "Castle Gloom", "Sunken Swamplands"]
  },
  {
    name: "Dragon's Blood Amulet",
    rarity: "Mythic",
    type: "Amulet",
    armor: [11, 81],
    magicArmor: [11, 81],
    slots: ["Amulet"],
    attributes: {},
    effects: ["Health Per Turn {7, 140}", "Resist Fire 15%", "Resist Cold 15%", "Resist Lightning 15%"],
    bosses: ["Black Dragon", "Blue Dragon", "Green Dragon", "Red Dragon"],
    zones: ["Frostwrought Mountain", "Castle Gloom", "Freewind Forest", "Emberlands", "Frostwrought Mountain", "Freewind Forest", "Castle Gloom", "Emberlands"]
  },
  {
    name: "Drake Eye Pendant",
    rarity: "Legendary",
    type: "Amulet",
    armor: [8, 60],
    magicArmor: [8, 60],
    slots: ["Amulet"],
    attributes: { Might: "{2, 10}" },
    effects: ["Health Per Turn {6, 130}", "Resist Cold 8%", "Resist Fire 8%", "Resist Lightning 8%"],
    bosses: ["Global Loot"],
    zones: []
  },
  {
    name: "Draught of Life",
    rarity: "Mythic",
    type: "Amulet",
    armor: [],
    magicArmor: [],
    slots: ["Amulet"],
    attributes: { Vitality: "{6, 43}" },
    effects: [],
    bosses: ["Avatar of Xotec", "Medusa"],
    zones: ["Emerald Jungle", "Water Temple Ruins", "Emerald Jungle", "Water Temple Ruins"]
  },
  {
    name: "Elemental Chain",
    rarity: "Legendary",
    type: "Amulet",
    armor: [],
    magicArmor: [],
    slots: ["Amulet"],
    attributes: { Vitality: "{3, 20}" },
    effects: ["Cold Damage {1, 21}", "Fire Damage {1, 21}", "Lightning Damage {1, 21}"],
    bosses: ["Global Loot"],
    zones: []
  },
  {
    name: "Ethereal Charm",
    rarity: "Mythic",
    type: "Amulet",
    armor: [],
    magicArmor: [],
    slots: ["Amulet"],
    attributes: { Reflex: "{6, 43}" },
    effects: [],
    bosses: ["Herald of the Abyss"],
    zones: ["Castle Gloom", "Sunken Swamplands", "Castle Gloom", "Sunken Swamplands"]
  },
  {
    name: "Green Dragon Eye",
    rarity: "Mythic",
    type: "Amulet",
    armor: [],
    magicArmor: [],
    slots: ["Amulet"],
    attributes: { Dexterity: "{2, 11}" },
    effects: ["Lightning Damage {2, 42}", "Resist Lightning 15%"],
    bosses: ["Green Dragon"],
    zones: ["Freewind Forest", "Freewind Forest"]
  },
  {
    name: "Martyr's Chain",
    rarity: "Legendary",
    type: "Amulet",
    armor: [],
    magicArmor: [],
    slots: ["Amulet"],
    attributes: { Might: "{3, 20}" },
    effects: ["Max Health -15%", "Holy Power {5,25}%", "Resist Divine 10%"],
    bosses: ["Emperor Marcus"],
    zones: []
  },
  {
    name: "Mithril Pendant",
    rarity: "Legendary",
    type: "Amulet",
    armor: [8, 60],
    magicArmor: [8, 60],
    slots: ["Amulet"],
    attributes: { Might: "{2, 10}", Vitality: "{2, 10}" },
    effects: ["Resist Physical 8%"],
    bosses: ["Global Loot"],
    zones: []
  },
  {
    name: "Orichalcum Chain",
    rarity: "Legendary",
    type: "Amulet",
    armor: [],
    magicArmor: [],
    slots: ["Amulet"],
    attributes: { Might: "{2, 10}", Intelligence: "{2, 10}" },
    effects: ["increased power for mana use {8,40}%", "Mana Costs {4,20}%"],
    bosses: ["Crystal Golem"],
    zones: ["Forgotten Mines", "Forgotten Mines"]
  },
  {
    name: "Pendant of Cunning",
    rarity: "Mythic",
    type: "Amulet",
    armor: [],
    magicArmor: [],
    slots: ["Amulet"],
    attributes: { Dexterity: "{6, 43}" },
    effects: [],
    bosses: ["The Duke"],
    zones: ["Castle Gloom", "Castle Gloom"]
  },
  {
    name: "Razor Wire",
    rarity: "Mythic",
    type: "Amulet",
    armor: [15, 113],
    magicArmor: [15, 113],
    slots: ["Amulet"],
    attributes: { Vitality: "{3, 22}" },
    effects: ["Return Damage Physical Source[\"Armor\"] * .02f", "Resist Physical 15%", "Gain Added Return Damage Physical equal to 2% of your Armor."],
    bosses: ["The Risen Witch", "The Witch", "Twisted Soul of the Swamp"],
    zones: ["Sunken Swamplands", "Sunken Swamplands"]
  },
  {
    name: "Red Dragon Eye",
    rarity: "Mythic",
    type: "Amulet",
    armor: [],
    magicArmor: [],
    slots: ["Amulet"],
    attributes: { Vitality: "{2, 11}" },
    effects: ["Fire Damage {2, 42}", "Resist Fire 15%"],
    bosses: ["Red Dragon"],
    zones: ["Emberlands", "Emberlands"]
  },
  {
    name: "Sunstone Amuletlace",
    rarity: "Mythic",
    type: "Amulet",
    armor: [],
    magicArmor: [],
    slots: ["Amulet"],
    attributes: { Might: "{3, 22}", Intelligence: "{3, 22}" },
    effects: ["Resist Divine 15%", "10% chance to cast Level [level value] {SKL=Blinding Light} when hitting with any ability."],
    bosses: ["The Sun Queen"],
    zones: ["Wyrmrest Desert", "Wyrmrest Desert"]
  },
  {
    name: "Titanium Chain",
    rarity: "Legendary",
    type: "Amulet",
    armor: [4, 30],
    magicArmor: [4, 30],
    slots: ["Amulet"],
    attributes: { Vitality: "{2, 10}" },
    effects: ["Return Damage Physical {3, 52}", "Resist Physical 8%"],
    bosses: ["Global Loot"],
    zones: []
  },
  {
    name: "Valler's Pocket Watch",
    rarity: "Mythic",
    type: "Amulet",
    armor: [],
    magicArmor: [],
    slots: ["Amulet"],
    attributes: { Vitality: "{3, 22}" },
    effects: ["All Cooldowns {-1, -1}", "Mana Costs {20, 20}%"],
    bosses: ["The Mad Mage", "The Broker"],
    zones: ["Emberlands", "Emberlands"]
  },
  {
    name: "Weight of the Void",
    rarity: "Mythic",
    type: "Amulet",
    armor: [],
    magicArmor: [],
    slots: ["Amulet"],
    attributes: { Might: "{2, 11}", Vitality: "{2, 11}" },
    effects: ["Movement Points -2", "Grants the passive skill {SKL=Child of the Abyss}"],
    bosses: ["The Dead One"],
    zones: ["Castle Gloom", "Sunken Swamplands", "Castle Gloom", "Sunken Swamplands"]
  }
];

const fortunes = [
  {
    "name": "Ancestral Protection",
    "rarity": "Legendary",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Grants a 10% chance to cast Level 30 Avenging Ancestors on an enemy that strikes you. Grants 300 Armor and Magic Armor.",
    "Event": ["Talk to the Spirits"],
    "zones": ["Wyrmrest Desert"]
  },
  {
    "name": "Ball Lightning",
    "rarity": "Mythic",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Dealing lightning damage grants a stack of Overcharge: Each stack adds 420 lightning damage to your next basic attack.",
    "Event": ["Cursed Chest"],
    "zones": ["Castle Gloom", "Forgotten Mines", "Sunken Swamplands", "Dwarven Halls"]
  },
  {
    "name": "Blessing of the Mountain",
    "rarity": "Mythic",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Grants a 50% to resist any control effect. Increases Max Health by 25%.",
    "Event": ["Desecrated Statue of the First Mountain King"],
    "zones": ["Dwarven Halls"]
  },
  {
    "name": "Blessing of the Seraph",
    "rarity": "Rare",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Health Recovery increased by 82.",
    "Event": ["Shrine to the Seraph"],
    "zones": ["Global Event"]
  },
  {
    "name": "Bloodied Bargain",
    "rarity": "Mythic",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Increases Physical Damage by 30%. Physical damage you deal applies 1 stack of Bleeding.",
    "Event": ["Witch's Pyre"],
    "zones": ["Sunken Swamplands"]
  },
  {
    "name": "Boar Charm",
    "rarity": "Rare",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Allows you to summon a level 30 Wild Boar to fight for you.",
    "Event": ["Entangled Boar"],
    "zones": ["Wyrmrest Desert"]
  },
  {
    "name": "Brawler's Brew",
    "rarity": "Rare",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Might increased by 60. Applies Blind at the start of your turn.",
    "Event": ["Brawler's Brew"],
    "zones": ["Global Event"]
  },
  {
    "name": "Brilliance",
    "rarity": "Uncommon",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Intelligence increased by 20.",
    "Event": ["Enchanted Obelisk"],
    "zones": ["Global Event"]
  },
  {
    "name": "Call of the Reaper",
    "rarity": "Rare",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Increases Damage by 30%. Increases Damage Taken by 10%.",
    "Event": ["Shrine to the Reaper"],
    "zones": ["Global Event"]
  },
  {
    "name": "Celerity",
    "rarity": "Uncommon",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Dexterity increased by 20.",
    "Event": ["Carved Monolith"],
    "zones": ["Global Event"]
  },
  {
    "name": "Claw of the Anthulk",
    "rarity": "Mythic",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Your weapon attacks apply level 30 Anthulk Venom: Increases the Physical Damage the target takes by 23.8-32.2.",
    "Event": ["What Lurks"],
    "zones": ["Wyrmrest Desert"]
  },
  {
    "name": "Crystal Ball",
    "rarity": "Rare",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Gain 1.5% bonus damage for every hex between you and your target. Skill range increased by 3.",
    "Event": ["Jewelry Box"],
    "zones": ["Global Event"]
  },
  {
    "name": "Curse of the Reaper",
    "rarity": "Rare",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Increases Life Steal by 6%. Reduces Max Life by 15%.",
    "Event": ["Shrine to the Reaper"],
    "zones": ["Global Event"]
  },
  {
    "name": "Cursed Coin",
    "rarity": "Legendary",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "The first time your health is brought below 1 instead receive Cursed Coin: Health cannot drop below 1. Lasts 2 turns. Applies Ritual Sickness. 1 charge per Quest.",
    "Event": ["Pirate's Treasure"],
    "zones": ["Water Temple Ruins"]
  },
  {
    "name": "Dragon Claw Talisman",
    "rarity": "Rare",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Summons a level 30 Red Dragon Whelp to fight for you.",
    "Event": ["Treasure of Moltendunn"],
    "zones": ["Global Event"]
  },
  {
    "name": "Drop of Shadow",
    "rarity": "Mythic",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Shadow damage you deal applies Sludge. Increase Shadow Damage by 30%.",
    "Event": ["Lady of the Well"],
    "zones": ["Sunken Swamps"]
  },
  {
    "name": "Dwarven Force Generator",
    "rarity": "Rare",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "All Teleport (Relocate, Teleport Self, Teleport Other, Escape) spells deal 1393 damage on entry within 1 hex and knockback 2 hexes.",
    "Event": ["Jewelry Box"],
    "zones": ["Global Event"]
  },
  {
    "name": "Ebony Dragon Scale",
    "rarity": "Mythic",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Gain the ability to shapeshift into a Black Dragonkin.",
    "Event": ["Taste for Blood quest"],
    "zones": ["Castle Gloom"]
  },
  {
    "name": "Edwin's Enchantment",
    "rarity": "Rare",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Mana costs and power for mana use increased by 50%. Mana costs are now paid in Health instead.",
    "Event": ["Edwin's Demise"],
    "zones": ["Water Temple Ruins", "Castle Gloom", "Dwarven Halls"]
  },
  {
    "name": "Elemental Equilibrium",
    "rarity": "Mythic",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Dealing damage with a specific element will grant you a buff that increases all elemental damage. Stacks for each element.",
    "Event": ["Unleashed"],
    "zones": ["Global Event"]
  },
  {
    "name": "Elemental Power",
    "rarity": "Rare",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Increases Elemental Damage by 25%.",
    "Event": ["The Fortune Teller"],
    "zones": ["Global Event"]
  },
  {
    "name": "Elixir of the Scarlet Ox",
    "rarity": "Legendary",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Grants Elixir of the Scarlet Ox: Grants 1 additional Action Point and 3 Movement Points. Applies Exhaustion. 1 charge.",
    "Event": ["Treasure Chest"],
    "zones": ["Global Event"]
  },
  {
    "name": "Emblem of the Iron Fortress",
    "rarity": "Mythic",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Grants 250 Armor. 3% of your Armor is added as physical damage return.",
    "Event": ["Cursed Chest"],
    "zones": ["Castle Gloom"]
  },
  {
    "name": "Enchant Holy",
    "rarity": "Legendary",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Grants level 30 Enchant Holy. (Enchant a target's weapon to add holy damage to attacks)",
    "Event": ["Hell Coffer"],
    "zones": ["Emberlands"]
  },
  {
    "name": "Enchant Shadow",
    "rarity": "Legendary",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Grants level 30 Enchant Shadow. (Enchants a target's weapon to add shadow damage to attacks)",
    "Event": ["Hell Coffer"],
    "zones": ["Emberlands"]
  },
  {
    "name": "Enchanted Pumpkin",
    "rarity": "Legendary",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Gain 82 Health and Mana each turn.",
    "Event": ["Enchanted Pumpkin Patch"],
    "zones": ["Freewind Forest"]
  },
  {
    "name": "Enchanted Whetstone",
    "rarity": "Rare",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Weapon damage increased by 30%.",
    "Event": ["Jewelry Box"],
    "zones": ["Global Event"]
  },
  {
    "name": "Endurance",
    "rarity": "Rare",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Increases Max Health by 500.",
    "Event": ["The Fortune Teller"],
    "zones": ["Global Event"]
  },
  {
    "name": "Ethereal",
    "rarity": "Rare",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Increases Physical Resistance by 50%. Reduces Elemental Resistance by 25%.",
    "Event": ["Between Worlds"],
    "zones": ["Global Event"]
  },
  {
    "name": "Fortitude",
    "rarity": "Uncommon",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Vitality increased by 20.",
    "Event": ["Runed Obelisk"],
    "zones": ["Global Event"]
  },
  {
    "name": "Frozen Lich Heart",
    "rarity": "Mythic",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Your cold damage is increased by 100% against targets that are frozen. Grants immunity to chilled.",
    "Event": ["Cursed Mimic"],
    "zones": ["Global Event"]
  },
  {
    "name": "Gift to the Conquered",
    "rarity": "Rare",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "All Stats increased by 15.",
    "Event": ["Shrine of the Conqueror"],
    "zones": ["Global Event"]
  },
  {
    "name": "Glory of the Conqueror",
    "rarity": "Rare",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Critical Hit Chance increased by 12%.",
    "Event": ["Shrine of the Conqueror"],
    "zones": ["Global Event"]
  },
  {
    "name": "Grace of the Rogue",
    "rarity": "Rare",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Reflex increased by 25.",
    "Event": ["Shrine of the Rogue"],
    "zones": ["Global Event"]
  },
  {
    "name": "Guile of the Rogue",
    "rarity": "Rare",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Dexterity increased by 25.",
    "Event": ["Shrine of the Rogue"],
    "zones": ["Global Event"]
  },
  {
    "name": "Horn of Devotion",
    "rarity": "Legendary",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Increases the effect of Shrines by 100%.",
    "Event": ["Dwarven Tomb"],
    "zones": ["Dwarven Halls", "Forgotten Mines"]
  },
  {
    "name": "Ice Crystal",
    "rarity": "Mythic",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Allows you to summon a level 30 Ice Golem to fight for you. Benefits from your Cold Damage.",
    "Event": ["Strange Crystal"],
    "zones": ["Wyrmrest Desert"]
  },
  {
    "name": "Ivory Dragonscale",
    "rarity": "Mythic",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Gain the ability to shapeshift into a White Dragonkin.",
    "Event": ["Wrath of the Righteous"],
    "zones": ["Castle Gloom"]
  },
  {
    "name": "March of the Warrior",
    "rarity": "Rare",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Movement Points increased by 4.",
    "Event": ["Shrine of the Warrior"],
    "zones": ["Global Event"]
  },
  {
    "name": "Mark of the Alpha",
    "rarity": "Mythic",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Changes your Nature Summons into Pack Summons. Increases Summon Damage and Health by 25%.",
    "Event": ["Scent of Blood"],
    "zones": ["Frostwrought Mountain"]
  },
  {
    "name": "Martial Prowess",
    "rarity": "Rare",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Increases Physical Damage by 20%.",
    "Event": ["The Fortune Teller"],
    "zones": ["Global Event"]
  },
  {
    "name": "Might of the Warrior",
    "rarity": "Rare",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Might increased by 25.",
    "Event": ["Shrine of the Warrior"],
    "zones": ["Global Event"]
  },
  {
    "name": "Might of the Ymir",
    "rarity": "Mythic",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Allows you to wield Two-handed Axes, Swords, and Hammers in one hand. Weapon Damage is lowered by 35% if you choose to do so.",
    "Event": ["Ymir Rune"],
    "zones": ["Frostwrought Mountain"]
  },
  {
    "name": "Mirror Shard",
    "rarity": "Rare",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Summon a Dark clone of yourself but it fights for you.",
    "Event": ["Magic Mirror"],
    "zones": ["Castle Gloom"]
  },
  {
    "name": "Molten Crystal",
    "rarity": "Mythic",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Allows you to summon a level 30 Fire Golem to fight for you. Benefits from your fire damage.",
    "Event": ["Strange Crystal"],
    "zones": ["Emerald Jungle"]
  },
  {
    "name": "Necronomicon",
    "rarity": "Mythic",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Changes your Skeletal Summons into something... stronger. Increases Summon damage and Health by 25%.",
    "Event": ["Cursed Tome"],
    "zones": ["Castle Gloom"]
  },
  {
    "name": "Oculus Gem",
    "rarity": "Rare",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Teleports you randomly when struck. 4 turn cooldown.",
    "Event": ["Treasure of Moltendunn"],
    "zones": ["Global Event"]
  },
  {
    "name": "Overflowing Energy",
    "rarity": "Rare",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Increases Mana Costs by 20%, power of all Mana Abilities by 40% and Intelligence by 15.",
    "Event": ["Mana Spring"],
    "zones": ["Global Event"]
  },
  {
    "name": "Perfect Rage",
    "rarity": "Mythic",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Grants the skill Perfect Rage.",
    "Event": ["Master of Rage"],
    "zones": ["Frostwrought Mountain"]
  },
  {
    "name": "Phoenix Feather",
    "rarity": "Rare",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Brings you back with 20% Health. 1 charge per Quest.",
    "Event": ["Treasure of Moltendunn"],
    "zones": ["Global Event"]
  },
  {
    "name": "Pirate's Rum",
    "rarity": "Legendary",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Increases Damage Reduction by 20%.",
    "Event": ["Party like a Pirate"],
    "zones": ["Water Temple Ruins"]
  },
  {
    "name": "Point Blank",
    "rarity": "Mythic",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Your ranged damage is increased by 12% for every hex less than your max range.",
    "Event": ["Archery Competition"],
    "zones": ["Freewind Forest"]
  },
  {
    "name": "Polished",
    "rarity": "Uncommon",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Increases Armor and Magic Armor by 250.",
    "Event": ["Talking Suit of Armor"],
    "zones": ["Global Event"]
  },
  {
    "name": "Ruby of Rancor",
    "rarity": "Mythic",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Grants 1 charge of Ruby of Rancor: Grants 3 extra Action Points and reduces Mana Costs. Die at the end of your turn.",
    "Event": ["Foreboding Gem"],
    "zones": ["Forgotten Mines"]
  },
  {
    "name": "Rune of Refreshment",
    "rarity": "Mythic",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Reset all cooldowns. Cost 75% of Max Mana. 1 charge per battle.",
    "Event": ["The Spell Council"],
    "zones": ["Global Event"]
  },
  {
    "name": "Scroll of Monster Summoning",
    "rarity": "Legendary",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Summons a random level 30 Monster to fight for you.",
    "Event": ["Treasure Chest"],
    "zones": ["Global Event"]
  },
  {
    "name": "Sharpened",
    "rarity": "Uncommon",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Increases Physical Damage by 22.",
    "Event": ["Talking Suit of Armor"],
    "zones": ["Global Event"]
  },
  {
    "name": "Shield of the Guardian",
    "rarity": "Rare",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Increases all Resistances by 12%.",
    "Event": ["Shrine of the Guardian"],
    "zones": ["Global Event"]
  },
  {
    "name": "Silver Signet",
    "rarity": "Legendary",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Grants 200 Armor. 1% of your Armor is added as Additional Weapon Damage.",
    "Event": ["Treasure Chest"],
    "zones": ["Global Event"]
  },
  {
    "name": "Slightly Petrified",
    "rarity": "Uncommon",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Armor increased by 200. Movement reduced by 1.",
    "Event": ["Petrified Party"],
    "zones": ["Global Event"]
  },
  {
    "name": "Soul of Fire",
    "rarity": "Mythic",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Gain 30% Increased Fire Damage. Your stacks of Heat now reduce Healing Received by 5% per stack.",
    "Event": ["Hell Gate"],
    "zones": ["Global Event"]
  },
  {
    "name": "Strength",
    "rarity": "Common",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Might increased by 20.",
    "Event": ["Etched Monolith"],
    "zones": ["Global Event"]
  },
  {
    "name": "Sword of the Guardian",
    "rarity": "Rare",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Increases Damage by 20%.",
    "Event": ["Shrine of the Guardian"],
    "zones": ["Global Event"]
  },
  {
    "name": "Taste for Blood",
    "rarity": "Rare",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Increases Life Steal by 4%.",
    "Event": ["Taste for Blood quest"],
    "zones": ["Gloom Castle"]
  },
  {
    "name": "The Heart of Iron",
    "rarity": "Mythic",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Allows you to raise a level 30 Iron Golem to fight for you.",
    "Event": ["The Animator"],
    "zones": ["Forgotten Mines"]
  },
  {
    "name": "The True King",
    "rarity": "Mythic",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Light Spells no longer cost mana to cast. Holy Power increased by 30%.",
    "Event": ["Sword in the Stone"],
    "zones": ["Freewind Forest"]
  },
  {
    "name": "Thunder Crystal",
    "rarity": "Mythic",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Allows you to summon a level 30 Thunder Golem to fight for you. Benefits from your thunder damage.",
    "Event": ["Strange Crystal"],
    "zones": ["Emberlands"]
  },
  {
    "name": "Tome of Tadashi",
    "rarity": "Mythic",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Grants spells that can allow the user to escape death. Grants 10% Dodge Chance.",
    "Event": ["The Librarian"],
    "zones": ["Water Temple Ruins"]
  },
  {
    "name": "Touch of Flame",
    "rarity": "Rare",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Increases Fire Damage by 24.",
    "Event": ["The Mad Mage"],
    "zones": ["Water Temple Ruins"]
  },
  {
    "name": "Touch of Frost",
    "rarity": "Rare",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Increases Cold Damage by 24.",
    "Event": ["The Mad Mage"],
    "zones": ["Water Temple Ruins"]
  },
  {
    "name": "Touch of Thunder",
    "rarity": "Rare",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Increases Lightning Damage by 24.",
    "Event": ["The Mad Mage"],
    "zones": ["Water Temple Ruins"]
  },
  {
    "name": "Transcendence",
    "rarity": "Mythic",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Reduces Max Health by 35%. Grants 4 charges of Transcendence per battle.",
    "Event": ["Transcendence"],
    "zones": ["Frostwrought Mountain"]
  },
  {
    "name": "Unholy Sacrifice",
    "rarity": "Mythic",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Grants the skill Unholy Sacrifice. Increases Shadow Damage by 30%.",
    "Event": ["Dark Discoveries"],
    "zones": ["Sunken Swamplands"]
  },
  {
    "name": "Vampirism",
    "rarity": "Mythic",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Increases Life Steal by 12% and Damage by 35%. Gain the ability to shapeshift into a Vampire Bat. Decreases Fire Resistance by 25%. Can no longer heal from anything but lifesteal.",
    "Event": ["Taste for Blood quest"],
    "zones": ["Castle Gloom"]
  },
  {
    "name": "Will of the Shaman",
    "rarity": "Rare",
    "type": "Fortune",
    "slots": ["Fortune"],
    "effects": "Mana Recovery increased by 82.",
    "Event": ["Shrine to the Shaman"],
    "zones": ["Global Event"]
  }

];
