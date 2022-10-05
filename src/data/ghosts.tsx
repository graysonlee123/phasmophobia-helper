export const ghosts: Ghost[] = [
  {
    slug: 'banshee',
    label: 'Banshee',
    evidences: ['fingerprints', 'orbs', 'dots'],
    desc: (
      <p>
        Distinctive screech can be heard when using the Parabolic Microphone.
        Targets one specific player during hunts, triggered by the target
        player&apos;s sanity level instead of the average.
      </p>
    ),
    wiki: 'https://phasmophobia.fandom.com/wiki/Banshee',
  },
  {
    slug: 'demon',
    label: 'Demon',
    evidences: ['fingerprints', 'writing', 'freezing'],
    hunt: 70,
    desc: (
      <p>
        Can start a hunt regardless of average sanity when using its ability.
        Crucifix effectiveness has a larger range. Can hunt more often.
      </p>
    ),
    wiki: 'https://phasmophobia.fandom.com/wiki/Demon',
  },
  {
    slug: 'deogen',
    label: 'Deogen',
    evidences: ['box', 'writing', 'dots'],
    hunt: 40,
    desc: (
      <p>
        Always knows where the players are during a hunt. Slows down when close
        to a player during a hunt.
      </p>
    ),
    wiki: 'https://phasmophobia.fandom.com/wiki/Deogen',
  },
  {
    slug: 'goryo',
    label: 'Goryo',
    evidences: ['emf', 'fingerprints', 'dots'],
    desc: (
      <p>
        Appears on D.O.T.S. only when viewed through a video camera with no
        players nearby. When not hunting, its wandering distance will be
        shorter.
      </p>
    ),
    wiki: 'https://phasmophobia.fandom.com/wiki/Goryo',
  },
  {
    slug: 'hantu',
    label: 'Hantu',
    evidences: ['fingerprints', 'orbs', 'freezing'],
    desc: (
      <p>
        Increased speed in colder areas during hunts. Emits frosty breath in
        freezing rooms. Moves slower in warmer areas during hunts.
      </p>
    ),
    wiki: 'https://phasmophobia.fandom.com/wiki/Hantu',
  },
  {
    slug: 'jinn',
    label: 'Jinn',
    evidences: ['emf', 'freezing', 'fingerprints'],
    desc: (
      <p>
        Travels faster if the target is far away. Has a chance to deduct nearby
        players&apos; sanity. Turning off the breaker will prevent it from using
        its ability.
      </p>
    ),
    wiki: 'https://phasmophobia.fandom.com/wiki/Jinn',
  },
  {
    slug: 'mare',
    label: 'Mare',
    evidences: ['box', 'orbs', 'writing'],
    desc: (
      <p>
        Hunts at higher sanity thresholds in the dark. Turns off lights, breaks
        lightbulbs more often. Remains in unlit rooms more often. Hunts at lower
        sanity levels when in a lit room.
      </p>
    ),
    wiki: 'https://phasmophobia.fandom.com/wiki/Mare',
  },
  {
    slug: 'moroi',
    label: 'Moroi',
    evidences: ['box', 'writing', 'freezing'],
    desc: (
      <p>
        Moves faster at lower player sanity. Can curse players, making them lose
        sanity faster. Smudge sticks blind the ghost for longer during hunts.
      </p>
    ),
    wiki: 'https://phasmophobia.fandom.com/wiki/Moroi',
  },
  {
    slug: 'myling',
    label: 'Myling',
    evidences: ['emf', 'fingerprints', 'writing'],
    desc: (
      <p>
        Has quieter footsteps during hunts. Produces paranormal sounds more
        frequently.
      </p>
    ),
    wiki: 'https://phasmophobia.fandom.com/wiki/Myling',
  },
  {
    slug: 'obake',
    label: 'Obake',
    evidences: ['emf', 'fingerprints', 'orbs'],
    desc: (
      <p>
        Fingerprints disappear faster than other ghost types. Does not always
        leave fingerprints, and can leave unique fingerprints.
      </p>
    ),
    wiki: 'https://phasmophobia.fandom.com/wiki/Obake',
  },
  {
    slug: 'oni',
    label: 'Oni',
    evidences: ['emf', 'freezing', 'dots'],
    desc: (
      <p>
        More active when people are nearby. Cannot produce “air ball” ghost
        events. Stays visible for longer during hunts.
      </p>
    ),
    wiki: 'https://phasmophobia.fandom.com/wiki/Oni',
  },
  {
    slug: 'onryo',
    label: 'Onryo',
    evidences: ['box', 'orbs', 'freezing'],
    hunt: 60,
    desc: (
      <p>
        Chance to hunt at any sanity when blowing out flames. Blows out flames
        more often than other ghost types. Presence of flames prevents the ghost
        from hunting.
      </p>
    ),
    wiki: 'https://phasmophobia.fandom.com/wiki/Onryo',
  },
  {
    slug: 'phantom',
    label: 'Phantom',
    evidences: ['box', 'fingerprints', 'dots'],
    desc: (
      <p>
        Additional sanity drain from players within its line-of-sight during
        manifestations and hunts. Can roam towards random players. Taking a
        picture of the Phantom renders it temporarily invisible. While hunting,
        will be visible for less time.
      </p>
    ),
    wiki: 'https://phasmophobia.fandom.com/wiki/Phantom',
  },
  {
    slug: 'poltergeist',
    label: 'Poltergeist',
    evidences: ['box', 'writing', 'fingerprints'],
    desc: (
      <p>
        Can throw multiple objects at once. Using its ability reduces player
        sanity faster. Prone to open more doors during a hunt. Ineffective in
        empty rooms with no objects to throw.
      </p>
    ),
    wiki: 'https://phasmophobia.fandom.com/wiki/Poltergeist',
  },
  {
    slug: 'raiju',
    label: 'Raiju',
    evidences: ['emf', 'orbs', 'dots'],
    hunt: 65,
    desc: (
      <p>
        Active electronics boost its speed during hunts. Disrupts electronics
        from further away when manifesting.{' '}
      </p>
    ),
    wiki: 'https://phasmophobia.fandom.com/wiki/Raiju',
  },
  {
    slug: 'revenant',
    label: 'Revenant',
    evidences: ['orbs', 'writing', 'freezing'],
    desc: (
      <p>
        Travels at a faster speed when it has line-of-sight of a player during a
        hunt. Travels very slowly when no line-of-sight established.
      </p>
    ),
    wiki: 'https://phasmophobia.fandom.com/wiki/Revenant',
  },
  {
    slug: 'shade',
    label: 'Shade',
    evidences: ['emf', 'writing', 'freezing'],
    hunt: 35,
    desc: (
      <p>
        Harder to find due to it being less active. Prefers hissing and shadowy
        form ghost events. Generally unwilling to manifest in presence of
        players.
      </p>
    ),
    wiki: 'https://phasmophobia.fandom.com/wiki/Shade',
  },
  {
    slug: 'spirit',
    label: 'Spirit',
    evidences: ['emf', 'box', 'writing'],
    desc: (
      <p>
        Using smudge sticks while nearby prevents it from hunting for much
        longer.
      </p>
    ),
    wiki: 'https://phasmophobia.fandom.com/wiki/Spirit',
  },
  {
    slug: 'thaye',
    label: 'Thaye',
    evidences: ['orbs', 'writing', 'dots'],
    hunt: 75,
    desc: (
      <p>
        Becomes very active the first time the player gets nearby. The more time
        players spend near it, the quieter and slower it becomes.
      </p>
    ),
    wiki: 'https://phasmophobia.fandom.com/wiki/Thaye',
  },
  {
    slug: 'mimic',
    label: 'The Mimic',
    evidences: ['box', 'fingerprints', 'freezing'],
    desc: (
      <p>
        Mimics other ghost types one after another for a brief period of time.
        Includes Ghost Orbs as fourth evidence.
      </p>
    ),
    wiki: 'https://phasmophobia.fandom.com/wiki/The_Mimic',
  },
  {
    slug: 'twins',
    label: 'The Twins',
    evidences: ['emf', 'box', 'freezing'],
    desc: (
      <p>
        Can hunt from a different place than expected. Differing speeds
        depending on which twin hunts. Can interact with the environment
        simultaneously.{' '}
      </p>
    ),
    wiki: 'https://phasmophobia.fandom.com/wiki/The_Twins',
  },
  {
    slug: 'wraith',
    label: 'Wraith',
    evidences: ['emf', 'box', 'dots'],
    desc: (
      <p>
        Doesn&apos;t leave UV footprints after stepping in salt. Can teleport to
        players randomly. Stepping in salt temporarily makes it more active.
      </p>
    ),
    wiki: 'https://phasmophobia.fandom.com/wiki/Wraith',
  },
  {
    slug: 'yokai',
    label: 'Yokai',
    evidences: ['box', 'orbs', 'dots'],
    hunt: 80,
    desc: (
      <p>
        Talking near it will increase its chance of hunts and interactions. Can
        only hear and detect electronics within 2 meters of it.
      </p>
    ),
    wiki: 'https://phasmophobia.fandom.com/wiki/Yokai',
  },
  {
    slug: 'yurei',
    label: 'Yurei',
    evidences: ['orbs', 'freezing', 'dots'],
    desc: (
      <p>
        May randomly shut a door and deduct nearby players&apos; sanity. Will be
        temporarily confined to its room after smudging.
      </p>
    ),
    wiki: 'https://phasmophobia.fandom.com/wiki/Yurei',
  },
]
