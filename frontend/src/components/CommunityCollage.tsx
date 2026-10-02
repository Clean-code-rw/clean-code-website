import type { CSSProperties } from 'react'
import MemberPortrait, { type PortraitStyle } from './MemberPortrait'

interface CollageMember {
  role: string
  /** Tile height relative to the tallest tile, so the row forms a gentle arch. */
  heightPercent: number
  /** Hidden below this breakpoint to keep the row readable on small screens. */
  visibility: string
  portrait: PortraitStyle
}

const MEMBERS: CollageMember[] = [
  {
    role: 'Designer',
    heightPercent: 74,
    visibility: 'hidden lg:block',
    portrait: { skin: '#6b4430', hair: '#1b1410', hairStyle: 'afro', shirtClass: 'fill-teal', backgroundClass: 'fill-teal-soft' },
  },
  {
    role: 'Backend',
    heightPercent: 84,
    visibility: 'hidden sm:block',
    portrait: { skin: '#c99a76', hair: '#3a2416', hairStyle: 'short', shirtClass: 'fill-ink', backgroundClass: 'fill-sky-soft' },
  },
  {
    role: 'Student',
    heightPercent: 90,
    visibility: 'block',
    portrait: { skin: '#e9bf9b', hair: '#b4472a', hairStyle: 'long', shirtClass: 'fill-sky', backgroundClass: 'fill-surface' },
  },
  {
    role: 'Maintainer',
    heightPercent: 100,
    visibility: 'block',
    portrait: { skin: '#5a3826', hair: '#16100c', hairStyle: 'afro', shirtClass: 'fill-teal', backgroundClass: 'fill-sky-soft' },
  },
  {
    role: 'Frontend',
    heightPercent: 92,
    visibility: 'block',
    portrait: { skin: '#d9a77f', hair: '#5a3a1e', hairStyle: 'bun', shirtClass: 'fill-sky', backgroundClass: 'fill-teal-soft' },
  },
  {
    role: 'Reviewer',
    heightPercent: 84,
    visibility: 'hidden sm:block',
    portrait: { skin: '#7a4b31', hair: '#120d0a', hairStyle: 'buzz', shirtClass: 'fill-ink', backgroundClass: 'fill-surface' },
  },
  {
    role: 'Mentor',
    heightPercent: 74,
    visibility: 'hidden lg:block',
    portrait: { skin: '#e3b48c', hair: '#1f1a17', hairStyle: 'short', shirtClass: 'fill-sky', backgroundClass: 'fill-sky-soft' },
  },
]

interface FloatingNote {
  text: string
  position: string
  animation: string
  accentClass: string
}

const FLOATING_NOTES: FloatingNote[] = [
  {
    text: 'refactor: extract MemberCard',
    position: 'left-[4%] top-[8%] sm:left-[8%]',
    animation: 'animate-float',
    accentClass: 'bg-sky',
  },
  {
    text: '✓ All checks passed',
    position: 'right-[4%] top-[2%] sm:right-[10%]',
    animation: 'animate-float-slow',
    accentClass: 'bg-teal',
  },
  {
    text: 'review: approved',
    position: 'hidden md:flex left-[30%] -top-[6%]',
    animation: 'animate-float-slow',
    accentClass: 'bg-ink',
  },
]

/** A row of community member portraits, echoing a group photo of the community. */
function CommunityCollage() {
  return (
    <div className="relative mx-auto mt-16 max-w-6xl px-2 sm:mt-20">
      <div
        className="absolute inset-x-[10%] bottom-0 h-2/3 rounded-full bg-sky/20 blur-3xl"
        aria-hidden="true"
      />

      <ul
        className="relative flex h-[min(52vw,22rem)] items-end justify-center gap-2 sm:h-[min(40vw,24rem)] sm:gap-3 lg:gap-4"
        aria-label="Members of the community"
      >
        {MEMBERS.map((member, index) => (
          <li
            key={member.role}
            className={`${member.visibility} group relative w-[30%] animate-[collage-rise_0.9s_cubic-bezier(0.22,1,0.36,1)_both] sm:w-[18%] lg:w-[13%]`}
            style={
              {
                height: `${member.heightPercent}%`,
                animationDelay: `${300 + index * 90}ms`,
              } as CSSProperties
            }
          >
            <div className="h-full overflow-hidden rounded-t-[2rem] rounded-b-xl border border-line shadow-[0_20px_40px_-24px_rgb(43_54_64/0.5)] transition-transform duration-500 group-hover:-translate-y-2">
              <MemberPortrait portrait={member.portrait} />
            </div>
            <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-card/90 px-3 py-1 font-mono text-[10px] font-medium whitespace-nowrap text-ink shadow-sm backdrop-blur sm:text-xs">
              {member.role}
            </span>
          </li>
        ))}
      </ul>

      {FLOATING_NOTES.map((note) => (
        <div
          key={note.text}
          className={`absolute ${note.position} ${note.animation} z-10 flex items-center gap-2 rounded-xl border border-line bg-card/95 px-3 py-2 font-mono text-[10px] text-ink shadow-[0_12px_32px_-16px_rgb(43_54_64/0.45)] backdrop-blur sm:text-xs`}
          aria-hidden="true"
        >
          <span className={`h-2 w-2 rounded-full ${note.accentClass}`} />
          {note.text}
        </div>
      ))}
    </div>
  )
}

export default CommunityCollage
