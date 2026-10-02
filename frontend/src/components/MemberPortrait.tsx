export type HairStyle = 'afro' | 'short' | 'long' | 'bun' | 'buzz'

export interface PortraitStyle {
  skin: string
  hair: string
  hairStyle: HairStyle
  /** Tailwind fill classes, so shirts and backgrounds follow the brand tokens. */
  shirtClass: string
  backgroundClass: string
}

// These styles frame the head, so they are drawn behind it.
const HAIR_BEHIND_HEAD: HairStyle[] = ['afro', 'long']

interface MemberPortraitProps {
  portrait: PortraitStyle
}

function Hair({ style, color }: { style: HairStyle; color: string }) {
  switch (style) {
    case 'afro':
      return <circle cx="60" cy="60" r="38" fill={color} />
    case 'long':
      return <path d="M30 70 C28 30 92 30 90 70 L94 128 L26 128 Z" fill={color} />
    case 'bun':
      return (
        <>
          <circle cx="60" cy="38" r="13" fill={color} />
          <path d="M34 66 C34 34 86 34 86 66 C80 50 40 50 34 66 Z" fill={color} />
        </>
      )
    case 'buzz':
      return <path d="M36 62 C36 36 84 36 84 62 C76 52 44 52 36 62 Z" fill={color} />
    case 'short':
      return <path d="M34 66 C30 34 90 30 86 64 C78 46 56 56 40 50 C38 56 36 60 34 66 Z" fill={color} />
  }
}

/** A friendly, abstract portrait of a community member, drawn in brand colors. */
function MemberPortrait({ portrait }: MemberPortraitProps) {
  const hair = <Hair style={portrait.hairStyle} color={portrait.hair} />
  const isHairBehindHead = HAIR_BEHIND_HEAD.includes(portrait.hairStyle)

  return (
    <svg
      viewBox="0 0 120 160"
      preserveAspectRatio="xMidYMax slice"
      className="h-full w-full"
      aria-hidden="true"
    >
      <rect width="120" height="160" className={portrait.backgroundClass} />
      <circle cx="96" cy="30" r="34" className="fill-white/40 dark:fill-white/8" />
      {isHairBehindHead && hair}
      <path
        d="M8 160 C8 122 32 110 60 110 C88 110 112 122 112 160 Z"
        className={portrait.shirtClass}
      />
      <path d="M51 96 L69 96 L69 112 C64 118 56 118 51 112 Z" fill={portrait.skin} />
      <ellipse cx="60" cy="72" rx="24" ry="28" fill={portrait.skin} />
      {!isHairBehindHead && hair}
      <circle cx="51" cy="74" r="2.4" fill="#1b232a" />
      <circle cx="69" cy="74" r="2.4" fill="#1b232a" />
      <path
        d="M51 85 Q60 93 69 85"
        stroke="#1b232a"
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="45" cy="82" r="3.5" fill="#e88b7a" opacity="0.35" />
      <circle cx="75" cy="82" r="3.5" fill="#e88b7a" opacity="0.35" />
    </svg>
  )
}

export default MemberPortrait
