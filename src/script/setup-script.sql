CREATE TABLE `videogames`.`games` (
  `id` INT NOT NULL,
  `title` VARCHAR(100) NULL,
  `description` VARCHAR(1000) NULL,
  `image` VARCHAR(1000) NULL,
  `price` INT NULL,
  `likes` INT NULL,
  PRIMARY KEY (`id`));

INSERT INTO `videogames`.`games`
 (`id`,
 `title`,
 `description`,
 `image`,
 `price`,
 `likes`)
 VALUES
 (
  4,
  "KIRBY",
  "Expand Waddle Dee Town by rescuing more Waddle Dees to unlock more surprises - like some of the townsfolk's favorite games, shops, and even leaderboards.",
  "https://media.gamestop.com/i/gamestop/11164162/Kirby-and-the-Forgotten-Land---Nintendo-Switch?fmt=auto",
  60,
  273
)

INSERT INTO `videogames`.`games`
 (`id`,
 `title`,
 `description`,
 `image`,
 `price`,
 `likes`)
 VALUES
 (
  5,
  "GRAND TURISMO 7",
  "Find what matters most to you whether that's racing, collecting, tuning, designing, or photography - there's something for every fan to enjoy",
  "https://media.gamestop.com/i/gamestop/11162003/Gran-Turismo-7---PlayStation-5?fmt=auto",
  45,
  362
)

INSERT INTO `videogames`.`games`
 (`id`,
 `title`,
 `description`,
 `image`,
 `price`,
 `likes`)
 VALUES
 (
  6,
  "DONKEY KONG COUNTRY",
  "Spectacular surfing simian Funky Kong. No matter which mode you choose, a wealth of collectibles and two-player co-op round out the fun!",
  "https://media.gamestop.com/i/gamestop/10157965/Donkey-Kong-Country-Tropical-Freeze---Nintendo-Switch?fmt=auto",
  49,
  458
)

INSERT INTO `videogames`.`games`
 (`id`,
 `title`,
 `description`,
 `image`,
 `price`,
 `likes`)
 VALUES
 (
  7,
  "FORZA HORIZON 5",
  "Take on awe-inspiring weather events such as towering dust storms and intense tropical storms as Mexico’s unique, dynamic seasons change the world every week.",
  "https://media.gamestop.com/i/gamestop/11148773/Forza-Horizon-5---Xbox-Series-X?fmt=auto",
  43,
  136
)

INSERT INTO `videogames`.`games`
 (`id`,
 `title`,
 `description`,
 `image`,
 `price`,
 `likes`)
 VALUES
 (
  8,
  "DRAGONBALL Z KAKAROT",
  "Experience the story of DRAGON BALL Z from epic events to light-hearted side quests, including never-before-seen story moments that answer some burning questions of DRAGON BAL Llore for the first time!",
  "https://media.gamestop.com/i/gamestop/10172926/DRAGON-BALL-Z-KAKAROT---Xbox-One?fmt=auto",
  20,
  53
)

INSERT INTO `videogames`.`games`
 (`id`,
 `title`,
 `description`,
 `image`,
 `price`,
 `likes`)
 VALUES
 (
  9,
  "NO MAN'S SKY",
  "Your journey will be charged with danger, encountering hostile creatures and fierce pirates, in order to survive you will need to prepare, upgrading your ship, suit and weapons.",
  "https://media.gamestop.com/i/gamestop/10161089/No-Mans-Sky---Xbox-One?fmt=auto",
  15,
  70
)

INSERT INTO `videogames`.`games`
 (`id`,
 `title`,
 `description`,
 `image`,
 `price`,
 `likes`)
 VALUES
 (
  10,
  "LEGO WORLDS",
  "Open environment of procedurally-generated Worlds made entirely of LEGO bricks which you can freely manipulate and dynamically populate with LEGO models.",
  "https://media.gamestop.com/i/gamestop/10139826/LEGO-Worlds---Xbox-One?fmt=auto",
  10,
  384
)