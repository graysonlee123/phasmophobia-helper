export const ghosts: Ghost[] = [
  {
    slug: 'banshee',
    label: 'Banshee',
    evidences: ['fingerprints', 'orbs', 'dots'],
    desc: (
      <p>
        Targets one specific player until they are killed, ignoring others. Its
        hunt threshold is based on the target&apos;s sanity. A distinctive
        screech can be heard when using the Parabolic Microphone.
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
        Has a rare chance to hunt at any time, regardless of the average sanity.
        There is less time between hunts (20s). Smudging will prevent hunts for
        less time (60s). Crucifixes have an increased effective range.
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
        Always knows player locations, making hiding useless during hunts. Slows
        down when close to a player. Kiting this ghost is the best method to
        survive a hunt. Can produce a unique Spirit Box response.
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
        Appears on D.O.T.S. only when viewed through a video camera and no
        players are in the same room as it. When not hunting, its wandering
        distance will be shorter.
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
        freezing rooms. Moves slower in warmer areas during hunts. Twice as
        likely to turn off the fuse box.
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
        Higher speed if the target is far away. Its ability will deduct nearby
        players&apos; sanity (25%). Turning off the breaker will prevent it from
        using its ability.
      </p>
    ),
    wiki: 'https://phasmophobia.fandom.com/wiki/Jinn',
  },
  {
    slug: 'mare',
    label: 'Mare',
    evidences: ['box', 'orbs', 'writing'],
    hunt: 60,
    desc: (
      <p>
        Hunts at higher sanity thresholds in the dark (60%), and lower sanity
        thresholds in the light (40%). Turns off lights and breaks lightbulbs
        more often. Remains in unlit rooms more often.
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
        Higher speed depending on average sanity. Can curse players, making them
        lose sanity faster, when obtaining a spirit box response or by hearing
        ghost sounds through the Parabolic Microphone. Consuming sanity pills
        removes the curse. Smudge sticks blind the ghost for longer during
        hunts.
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
        Has quieter footsteps and vocalizations during hunts that can only be
        heard when closer to the ghost (12m). When using a Parabolic Microphone,
        it produces paranormal sounds more frequently.
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
        leave fingerprints (75%), and can leave unique fingerprints (1/6). It
        can use its ability to half the lifespan of fingerprints on the map.
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
        Chance to hunt at any sanity when blowing out flames (50%, +25% / dead
        player). Blows out flames more often than other ghost types. Presence of
        flames prevents the ghost from hunting (4m).
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
        manifestations. Can roam towards random players. Taking a picture of the
        Phantom renders it temporarily invisible during ghost events. While
        hunting, the ghost will be invisible in photos and will be visible for
        less time.
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
        Its ability can throw multiple objects at once with great force. Using
        its ability reduces player sanity faster. During a hunt, it opens more
        doors and throws everything it comes across. Ineffective in empty rooms
        with no objects to throw.
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
        Being near active electronics boost its speed during hunts and allow it
        to hunt at higher sanity thresholds. Disrupts electronics from further
        away when manifesting.
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
        hunt, making it crucial to hide as soon as possible when a hunt starts.
        Travels very slowly when no line-of-sight established.
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
        Spirits have no special behavior, other than using smudge sticks while
        nearby prevents it from hunting for much longer.
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
        players spend near it, the quieter and slower it becomes, and its hunt
        chance decreases.
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
        Includes Ghost Orbs as fourth false evidence. Can mimic evidence
        properties if the ghost it is mimicing shares the evidence. For example,
        the Obake&apos;s fingerprints.
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
        It is actually one ghost, which behaves differently on a chance. Can
        hunt from and interact with things in a different place than expected.
        Can interact with the environment simultaneously.
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
        players randomly. Stepping in salt temporarily makes it more active, and
        salt piles it steps in will not provide photo evidence.
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
        When at least one player talks within a certain range of it, its hunt
        sanity threshold is increased to 80%. During hunts, it can only hear or
        sense electronics that are within 2m of it.
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
        temporarily confined to its room after smudging. If a ghost shuts an
        exit door fully without a manifestation, it is definitively a Yurei.
      </p>
    ),
    wiki: 'https://phasmophobia.fandom.com/wiki/Yurei',
  },
]
