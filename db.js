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
    zones: ["Wyrmrest Desert Day", "Wyrmrest Desert Night"]
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
      "Castle Gloom Day",
      "Castle Gloom Night",
      "Frostwrought Mountain Day",
      "Frostwrought Mountain Night"
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
    zones: ["Wyrmrest Desert Day", "Wyrmrest Desert Night"]
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
    zones: ["Emberlands Day", "Emberlands Night"]
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
    zones: ["Wyrmrest Desert Day", "Wyrmrest Desert Night"]
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
    zones: ["Wyrmrest Desert Day", "Wyrmrest Desert Night"]
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
    zones: ["WaterTempleRuins Day", "WaterTempleRuins Night"]
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
    zones: ["Emerald Jungle Day", "Emerald Jungle Night"]
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
      "Castle Gloom Day",
      "Castle Gloom Night",
      "Sunken Swamplands Day",
      "Sunken Swamplands Night"
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
      "Wyrmrest Desert Day",
      "Wyrmrest Desert Night",
      "Sunken Swamplands Day",
      "Sunken Swamplands Night"
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
    zones: ["Frostwrought Mountain Day", "Frostwrought Mountain Night"]
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
      "Frostwrought Mountain Day",
      "Frostwrought Mountain Night",
      "Dwarven Halls Day",
      "Dwarven Halls Night",
      "Forgotten Mines Day",
      "Forgotten Mines Night"
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
    zones: ["Castle Gloom Day", "Castle Gloom Night"]
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
    zones: ["Forgotten Mines Day", "Forgotten Mines Night"]
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
      "Castle Gloom Day",
      "Castle Gloom Night",
      "Sunken Swamplands Day",
      "Sunken Swamplands Night"
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
      "Castle Gloom Day",
      "Castle Gloom Night",
      "Sunken Swamplands Day",
      "Sunken Swamplands Night"
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
      "Frostwrought Mountain Day",
      "Frostwrought Mountain Night",
      "Castle Gloom Day",
      "Castle Gloom Night",
      "Freewind Forest Day",
      "Freewind Forest Night",
      "Emberlands Day",
      "Emberlands Night"
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
    zones: ["Dwarven Halls Day", "Dwarven Halls Night"]
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
    zones: ["Freewind Forest Day", "Freewind Forest Night"]
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
    zones: ["Emberlands Day", "Emberlands Night"]
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
    zones: ["Emberlands Day", "Emberlands Night"]
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
      "Wyrmrest Desert Day",
      "Wyrmrest Desert Night",
      "Sunken Swamplands Day",
      "Sunken Swamplands Night"
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
    zones: ["Forgotten Mines Day", "Forgotten Mines Night"]
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
    zones: ["Emberlands Day", "Emberlands Night"]
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
    zones: ["Frostwrought Mountain Day", "Frostwrought Mountain Night"]
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
      "Emerald Jungle Day",
      "Emerald Jungle Night",
      "WaterTempleRuins Day",
      "WaterTempleRuins Night"
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
    zones: ["WaterTempleRuins Day", "WaterTempleRuins Night"]
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
    zones: ["Wyrmrest Desert Day", "Wyrmrest Desert Night"]
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
    zones: ["Dwarven Halls Day", "Dwarven Halls Night"]
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
      "Frostwrought Mountain Day",
      "Frostwrought Mountain Night",
      "WaterTempleRuins Day",
      "WaterTempleRuins Night"
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
    zones: ["Frostwrought Mountain Day", "Frostwrought Mountain Night"]
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
    zones: ["Frostwrought Mountain Day", "Frostwrought Mountain Night"]
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
      "Wyrmrest Desert Day",
      "Wyrmrest Desert Night",
      "Castle Gloom Day",
      "Castle Gloom Night",
      "Sunken Swamplands Day",
      "Sunken Swamplands Night"
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
    zones: ["Wyrmrest Desert Day", "Wyrmrest Desert Night"]
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
      "Castle Gloom Day",
      "Castle Gloom Night",
      "Sunken Swamplands Day",
      "Sunken Swamplands Night"
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
    zones: ["Frostwrought Mountain Day", "Frostwrought Mountain Night"]
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
    zones: ["Frostwrought Mountain Day", "Frostwrought Mountain Night"]
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
      "Castle Gloom Day",
      "Castle Gloom Night",
      "Sunken Swamplands Day",
      "Sunken Swamplands Night"
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
    zones: ["Castle Gloom Day", "Castle Gloom Night"]
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
    zones: ["WaterTempleRuins Day", "WaterTempleRuins Night"]
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
      "Castle Gloom Day",
      "Castle Gloom Night",
      "Sunken Swamplands Day",
      "Sunken Swamplands Night"
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
    zones: ["Freewind Forest Day", "Freewind Forest Night"]
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
    zones: ["Frostwrought Mountain Day", "Frostwrought Mountain Night"]
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
    zones: ["Forgotten Mines Day", "Forgotten Mines Night"]
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
      "WaterTempleRuins Day",
      "WaterTempleRuins Night",
      "Forgotten Mines Day",
      "Forgotten Mines Night",
      "Emerald Jungle Day",
      "Emerald Jungle Night"
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
      "Freewind Forest Day",
      "Freewind Forest Night",
      "Frostwrought Mountain Day",
      "Frostwrought Mountain Night"
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
      "Wyrmrest Desert Day",
      "Wyrmrest Desert Night",
      "Castle Gloom Day",
      "Castle Gloom Night",
      "Dwarven Halls Day",
      "Dwarven Halls Night",
      "Sunken Swamplands Day",
      "Sunken Swamplands Night"
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
    zones: ["Frostwrought Mountain Day", "Frostwrought Mountain Night"]
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
      "Castle Gloom Day",
      "Castle Gloom Night",
      "Sunken Swamplands Day",
      "Sunken Swamplands Night",
      "Forgotten Mines Day",
      "Forgotten Mines Night"
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
      "Wyrmrest Desert Day",
      "Wyrmrest Desert Night",
      "WaterTempleRuins Day",
      "WaterTempleRuins Night",
      "Emerald Jungle Day",
      "Emerald Jungle Night"
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
    zones: ["WaterTempleRuins Day", "WaterTempleRuins Night"]
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
    zones: ["Emberlands Day", "Emberlands Night"]
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
    zones: ["WaterTempleRuins Day", "WaterTempleRuins Night"]
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
    zones: ["Frostwrought Mountain Day", "Frostwrought Mountain Night"]
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
    zones: ["Wyrmrest Desert Day", "Wyrmrest Desert Night"]
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
    zones: ["Dwarven Halls Day", "Dwarven Halls Night"]
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
    zones: ["Dwarven Halls Day", "Dwarven Halls Night"]
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
    zones: ["Dwarven Halls Day", "Dwarven Halls Night"]
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
    zones: ["Frostwrought Mountain Day", "Frostwrought Mountain Night"]
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
      "Castle Gloom Day",
      "Castle Gloom Night",
      "Sunken Swamplands Day",
      "Sunken Swamplands Night"
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
    zones: ["WaterTempleRuins Day", "WaterTempleRuins Night"]
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
    zones: ["Wyrmrest Desert Day", "Wyrmrest Desert Night"]
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
    zones: ["Freewind Forest Day", "Freewind Forest Night"]
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
      "Emerald Jungle Day",
      "Emerald Jungle Night",
      "WaterTempleRuins Day",
      "WaterTempleRuins Night"
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
      "Emerald Jungle Day",
      "Emerald Jungle Night",
      "WaterTempleRuins Day",
      "WaterTempleRuins Night"
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
      "WaterTempleRuins Day",
      "WaterTempleRuins Night",
      "Freewind Forest Day",
      "Emerald Jungle Day",
      "Freewind Forest Night",
      "Emerald Jungle Night"
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
    zones: ["Emerald Jungle Day", "Emerald Jungle Night"]
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
      "Emberlands Day",
      "Emberlands Night",
      "Dwarven Halls Day",
      "Dwarven Halls Night"
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
    zones: ["Dwarven Halls Day", "Dwarven Halls Night"]
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
    zones: ["Castle Gloom Day", "Castle Gloom Night"]
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
      "Frostwrought Mountain Day",
      "Frostwrought Mountain Night",
      "WaterTempleRuins Day",
      "WaterTempleRuins Night"
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
    zones: ["Sunken Swamplands Day", "Sunken Swamplands Night"]
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
    zones: ["DwarvenHalls Day", "DwarvenHalls Night"]
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
      "Emberlands Day",
      "WyrmrestDesert Day",
      "WyrmrestDesert Night",
      "Emberlands Night"
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
    zones: ["DwarvenHalls Day", "DwarvenHalls Night"]
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
      "CastleGloom Day",
      "SunkenSwamplands Day",
      "CastleGloom Night",
      "SunkenSwamplands Night"
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
    zones: ["DwarvenHalls Day", "DwarvenHalls Night"]
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
    zones: ["CastleGloom Day", "CastleGloom Night"]
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
    zones: ["FrostwroughtMountain Night", "FrostwroughtMountain Day"]
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
    zones: ["Emberlands Day", "Emberlands Night"]
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
    zones: ["CastleGloom Day", "CastleGloom Night"]
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
      "FrostwroughtMountain Night",
      "FrostwroughtMountain Day",
      "WaterTempleRuins Day",
      "WaterTempleRuins Night"
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
      "FrostwroughtMountain Night",
      "CastleGloom Night",
      "FreewindForest Day",
      "Emberlands Day",
      "FrostwroughtMountain Day",
      "FreewindForest Night",
      "CastleGloom Day",
      "Emberlands Night"
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
    zones: ["CastleGloom Day", "CastleGloom Night"]
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
    zones: ["FrostwroughtMountain Night", "FrostwroughtMountain Day"]
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
      "FrostwroughtMountain Night",
      "CastleGloom Night",
      "FreewindForest Day",
      "Emberlands Day",
      "FrostwroughtMountain Day",
      "FreewindForest Night",
      "CastleGloom Day",
      "Emberlands Night"
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
    zones: ["CastleGloom Day", "CastleGloom Night"]
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
    zones: ["FrostwroughtMountain Night", "FrostwroughtMountain Day"]
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
    "zones": ["ForgottenMines Night", "ForgottenMines Day"]
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
    "zones": ["CastleGloom Day", "CastleGloom Night"]
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
      "CastleGloom Day",
      "SunkenSwamplands Day",
      "CastleGloom Night",
      "SunkenSwamplands Night"
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
    "zones": ["Emberlands Day", "Emberlands Night"]
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
    "zones": ["DwarvenHalls Day", "DwarvenHalls Night"]
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
    "zones": ["DwarvenHalls Day", "DwarvenHalls Night"]
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
    "zones": ["SunkenSwamplands Day", "SunkenSwamplands Night"]
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
    "zones": ["FreewindForest Day", "FreewindForest Night"]
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
      "CastleGloom Day",
      "SunkenSwamplands Day",
      "CastleGloom Night",
      "SunkenSwamplands Night"
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
    "zones": ["FrostwroughtMountain Night", "FrostwroughtMountain Day"]
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
    "zones": ["SunkenSwamplands Day", "SunkenSwamplands Night"]
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
    "zones": ["EmeraldJungle Night", "WaterTempleRuins Day", "EmeraldJungle Day", "WaterTempleRuins Night"]
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
    "zones": ["FrostwroughtMountain Night", "FrostwroughtMountain Day"]
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
    zones: ["Emberlands Day", "Emberlands Night"]
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
    zones: ["WyrmrestDesert Night", "CastleGloom Night", "SunkenSwamplands Night", "SunkenSwamplands Day", "CastleGloom Day", "WyrmrestDesert Day"]
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
    zones: ["FrostwroughtMountain Night", "FrostwroughtMountain Day"]
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
    zones: ["CastleGloom Day", "SunkenSwamplands Day", "CastleGloom Night", "SunkenSwamplands Night"]
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
    zones: ["FrostwroughtMountain Night", "FrostwroughtMountain Day"]
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
    zones: ["EmeraldJungle Night", "WaterTempleRuins Day", "EmeraldJungle Day", "WaterTempleRuins Night"]
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
    zones: ["CastleGloom Day", "CastleGloom Night"]
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
    zones: ["Emberlands Day", "Emberlands Night"]
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
    zones: ["Emberlands Day", "Emberlands Night"]
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
    zones: ["FrostwroughtMountain Night", "FrostwroughtMountain Day"]
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
    zones: ["FrostwroughtMountain Night", "FrostwroughtMountain Day", "WaterTempleRuins Day", "WaterTempleRuins Night"]
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
    zones: ["FrostwroughtMountain Night", "FrostwroughtMountain Day"]
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
    zones: ["FreewindForest Day", "FreewindForest Night"]
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
    zones: ["FrostwroughtMountain Night", "CastleGloom Night", "FreewindForest Day", "Emberlands Day", "FrostwroughtMountain Day", "FreewindForest Night", "CastleGloom Day", "Emberlands Night"]
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
    zones: ["CastleGloom Day", "CastleGloom Night"]
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
    zones: ["FrostwroughtMountain Night", "FrostwroughtMountain Day"]
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
    zones: ["DwarvenHalls Day", "DwarvenHalls Night"]
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
    zones: ["CastleGloom Day", "CastleGloom Night"]
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
    zones: ["EmeraldJungle Night", "WaterTempleRuins Day", "EmeraldJungle Day", "WaterTempleRuins Night"]
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
    zones: ["FrostwroughtMountain Night", "FrostwroughtMountain Day"]
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
    zones: ["EmeraldJungle Night", "EmeraldJungle Day"]
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
    zones: ["CastleGloom Day", "SunkenSwamplands Day", "CastleGloom Night", "SunkenSwamplands Night"]
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
    zones: ["Emberlands Day", "WyrmrestDesert Day", "WyrmrestDesert Night", "Emberlands Night"]
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
    zones: ["DwarvenHalls Day", "DwarvenHalls Night"]
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
    zones: ["CastleGloom Day", "SunkenSwamplands Day", "CastleGloom Night", "SunkenSwamplands Night"]
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
    zones: ["CastleGloom Day", "CastleGloom Night"]
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
    zones: ["ForgottenMines Night", "ForgottenMines Day"]
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
    zones: ["FrostwroughtMountain Night", "FrostwroughtMountain Day"]
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
    zones: ["CastleGloom Day", "SunkenSwamplands Day", "CastleGloom Night", "SunkenSwamplands Night"]
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
    zones: ["ForgottenMines Night", "ForgottenMines Day"]
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
    zones: ["Emberlands Day", "DwarvenHalls Day", "DwarvenHalls Night", "Emberlands Night"]
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
    zones: ["CastleGloom Day", "SunkenSwamplands Day", "CastleGloom Night", "SunkenSwamplands Night"]
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
    zones: ["FreewindForest Day", "FreewindForest Night"]
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
    zones: ["FrostwroughtMountain Night", "FrostwroughtMountain Day"]
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
    zones: ["FreewindForest Day", "FreewindForest Night"]
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
    zones: ["WyrmrestDesert Day", "WyrmrestDesert Night", "DwarvenHalls Day", "DwarvenHalls Night"]
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
    zones: ["FrostwroughtMountain Night", "FrostwroughtMountain Day"]
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
    zones: ["FrostwroughtMountain Night", "FreewindForest Day", "Emberlands Day", "FrostwroughtMountain Day", "FreewindForest Night", "Emberlands Night"]
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
    zones: ["Emberlands Day", "Emberlands Night"]
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
    zones: ["Emberlands Day", "Emberlands Night"]
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
    zones: ["FreewindForest Day", "FreewindForest Night"]
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
    zones: ["ForgottenMines Night", "ForgottenMines Day"]
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
    zones: ["FrostwroughtMountain Night", "FrostwroughtMountain Day"]
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
    zones: ["WyrmrestDesert Day", "WyrmrestDesert Night"]
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
    zones: ["Emberlands Day", "Emberlands Night"]
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
    zones: ["EmeraldJungle Night", "WaterTempleRuins Day", "EmeraldJungle Day", "WaterTempleRuins Night"]
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
    zones: ["CastleGloom Day", "EmeraldJungle Day", "CastleGloom Night", "EmeraldJungle Night"]
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
    zones: ["FreewindForest Day", "FrostwroughtMountain Night", "FrostwroughtMountain Day", "FreewindForest Night"]
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
    zones: ["WaterTempleRuins Night", "CastleGloom Night", "WaterTempleRuins Day", "SunkenSwamplands Night", "ForgottenMines Night", "SunkenSwamplands Day", "CastleGloom Day", "ForgottenMines Day"]
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
    zones: ["DwarvenHalls Day", "DwarvenHalls Night"]
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
    zones: ["WyrmrestDesert Day", "WyrmrestDesert Night"]
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
    zones: ["Emberlands Day", "WyrmrestDesert Day", "WyrmrestDesert Night", "Emberlands Night"]
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
    zones: ["WyrmrestDesert Day", "WyrmrestDesert Night"]
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
    zones: ["CastleGloom Day", "CastleGloom Night"]
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
    zones: ["FrostwroughtMountain Night", "FrostwroughtMountain Day"]
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
    zones: ["CastleGloom Day", "SunkenSwamplands Day", "CastleGloom Night", "SunkenSwamplands Night"]
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
    zones: ["CastleGloom Day", "SunkenSwamplands Day", "CastleGloom Night", "SunkenSwamplands Night"]
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
    zones: ["FrostwroughtMountain Night", "CastleGloom Night", "FreewindForest Day", "Emberlands Day", "FrostwroughtMountain Day", "FreewindForest Night", "CastleGloom Day", "Emberlands Night"]
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
    zones: ["EmeraldJungle Night", "WaterTempleRuins Day", "EmeraldJungle Day", "WaterTempleRuins Night"]
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
    zones: ["CastleGloom Day", "SunkenSwamplands Day", "CastleGloom Night", "SunkenSwamplands Night"]
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
    zones: ["FreewindForest Day", "FreewindForest Night"]
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
    zones: ["ForgottenMines Night", "ForgottenMines Day"]
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
    zones: ["CastleGloom Day", "CastleGloom Night"]
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
    zones: ["SunkenSwamplands Day", "SunkenSwamplands Night"]
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
    zones: ["Emberlands Day", "Emberlands Night"]
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
    zones: ["WyrmrestDesert Day", "WyrmrestDesert Night"]
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
    zones: ["Emberlands Day", "Emberlands Night"]
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
    zones: ["CastleGloom Day", "SunkenSwamplands Day", "CastleGloom Night", "SunkenSwamplands Night"]
  }

];





const dbLength = items.length;
const countEl = document.getElementById('item-count');
countEl.textContent = `Total items in DB: ${dbLength}`;
