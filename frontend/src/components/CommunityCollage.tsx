import { useState, type CSSProperties } from 'react'
// import MemberPortrait, { type PortraitStyle } from './MemberPortrait'

interface CollageMember {
  name: string
  /** Photo served from `public/members`. Without one, an illustrated portrait is shown instead. */
  imgSrc?: string
  /** Tile height relative to the tallest tile, so the row forms a gentle arch. */
  heightPercent: number
  /** Hidden below this breakpoint to keep the row readable on small screens. */
  visibility: string
  /** Placeholder drawn when there is no photo, or the photo fails to load. */
  // portrait: PortraitStyle
}

const MEMBERS: CollageMember[] = [
  {
    name: 'Valentin abamungu',
    imgSrc: '/members/valentin.png',
    heightPercent: 74,
    visibility: 'hidden lg:block',
    // portrait: { skin: '#6b4430', hair: '#1b1410', hairStyle: 'afro', shirtClass: 'fill-teal', backgroundClass: 'fill-teal-soft' },
  },
  {
    name: 'Rebecca Awar',
      imgSrc: '/members/rebecca.png',
    heightPercent: 84,
    visibility: 'hidden sm:block',
    // portrait: { skin: '#c99a76', hair: '#3a2416', hairStyle: 'short', shirtClass: 'fill-ink', backgroundClass: 'fill-sky-soft' },
  },
  {
    name: 'Victor Ansima',
    heightPercent: 90,
    imgSrc: '/members/victor.png',
    visibility: 'block',
    // portrait: { skin: '#e9bf9b', hair: '#b4472a', hairStyle: 'long', shirtClass: 'fill-sky', backgroundClass: 'fill-surface' },
  },
  {
    name: 'Monica David',
    imgSrc: '/members/monica.png',
    heightPercent: 100,
    visibility: 'block',
    // portrait: { skin: '#5a3826', hair: '#16100c', hairStyle: 'afro', shirtClass: 'fill-teal', backgroundClass: 'fill-sky-soft' },
  },
  {
    name: 'Oplano Mulba',
    imgSrc: '/members/oplano.png',
    heightPercent: 92,
    visibility: 'block',
    // portrait: { skin: '#d9a77f', hair: '#5a3a1e', hairStyle: 'bun', shirtClass: 'fill-sky', backgroundClass: 'fill-teal-soft' },
  },
  {
    name: 'Tasabeeh',
    heightPercent: 84,
      imgSrc: '/members/tasabeeh.png',
    visibility: 'hidden sm:block',
    // portrait: { skin: '#7a4b31', hair: '#120d0a', hairStyle: 'buzz', shirtClass: 'fill-ink', backgroundClass: 'fill-surface' },
  },
  {
    name: 'Ornella',
    heightPercent: 74,
    imgSrc : "/members/ornella.png",
    visibility: 'hidden lg:block',
    
    // portrait: { skin: '#e3b48c', hair: '#1f1a17', hairStyle: 'short', shirtClass: 'fill-sky', backgroundClass: 'fill-sky-soft' },
  },
]

function MemberPhoto({ member }: { member: CollageMember }) {
  const [failed, setFailed] = useState(false)

 

  return (
    <img
      src={member.imgSrc}
      alt={member.name}
      loading="lazy"
      className="h-full w-full object-cover"
      onError={() => setFailed(true)}
    />
  )
}

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
            key={index}
            className={`${member.visibility} group relative w-[30%] animate-[collage-rise_0.9s_cubic-bezier(0.22,1,0.36,1)_both] sm:w-[18%] lg:w-[13%]`}
            style={
              {
                height: `${member.heightPercent}%`,
                animationDelay: `${300 + index * 90}ms`,
              } as CSSProperties
            }
          >
            <div className="h-full overflow-hidden rounded-t-4xl rounded-b-xl border border-line shadow-[0_20px_40px_-24px_rgb(43_54_64/0.5)] transition-transform duration-500 group-hover:-translate-y-2">
              <MemberPhoto member={member} />
            </div>
            <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-card/90 px-3 py-1 text-[11px] font-semibold whitespace-nowrap text-ink shadow-sm backdrop-blur sm:text-xs">
              {member.name}
            </span>
          </li>
        ))}
      </ul>

      <div
        className="absolute top-[-6%] left-1/2 z-10 flex -translate-x-1/2 animate-float-slow items-center gap-2 rounded-xl border border-line bg-card/95 px-3 py-2 font-mono text-[10px] text-ink shadow-[0_12px_32px_-16px_rgb(43_54_64/0.45)] backdrop-blur sm:text-xs"
        aria-hidden="true"
      >
        <span className="h-2 w-2 rounded-full bg-teal" />
        Members
      </div>
    </div>
  )
}

export default CommunityCollage
