export const ORG_URL = 'https://github.com/Clean-code-rw'
export const REPO_URL = `${ORG_URL}/clean-code-website`
export const ISSUES_URL = `${REPO_URL}/issues`
export const GOOD_FIRST_ISSUES_URL = `${ISSUES_URL}?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22`

export interface NavLink {
  label: string
  href: string
}

export const NAV_LINKS: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Training', href: '#training' },
  { label: 'Principles', href: '#principles' },
  { label: 'Get involved', href: '#get-involved' },
  { label: 'Contribute', href: '#contribute' },
]

export const TECH_STACK: string[] = [
  'React 19',
  'TypeScript',
  'Vite',
  'Tailwind CSS',
  'Django',
  'Django REST Framework',
  'SQLite',
  'Ruff',
  'oxlint',
  'GitHub Actions',
]

export type TrainingIcon = 'trending-up' | 'video'

export interface TrainingFormat {
  icon: TrainingIcon
  title: string
  description: string
}

export const TRAINING_FORMATS: TrainingFormat[] = [
  {
    icon: 'trending-up',
    title: 'Level-up trainings',
    description:
      'Structured trainings that help members grow their skills, from writing their first lines of code to shipping work they are proud of.',
  },
  {
    icon: 'video',
    title: 'Online motivation events',
    description:
      'Online sessions for people who are just starting out, to keep the momentum going and remind beginners that every developer started where they are.',
  },
]

export type ProgramTopicIcon = 'code' | 'design' | 'zap' | 'github' | 'linkedin'

export interface ProgramTopic {
  icon: ProgramTopicIcon
  title: string
  description: string
}

export const CURRENT_PROGRAM = {
  durationWeeks: 7,
  audience: 'Beginners',
  title: 'Introduction to web development',
  description:
    'A seven-week program that takes complete beginners from zero to building and sharing their first web pages.',
  topics: [
    { icon: 'code', title: 'HTML', description: 'Structure content for the web' },
    { icon: 'design', title: 'CSS', description: 'Style layouts that look good on any screen' },
    { icon: 'zap', title: 'JavaScript', description: 'Bring pages to life with interactivity' },
    { icon: 'github', title: 'Git & GitHub', description: 'Track your code and collaborate' },
    { icon: 'linkedin', title: 'LinkedIn', description: 'Share your work and grow your network' },
  ] satisfies ProgramTopic[],
}

export interface Principle {
  title: string
  description: string
  snippet: string
}

export const PRINCIPLES: Principle[] = [
  {
    title: 'Names that reveal intent',
    description:
      'A good name tells you why something exists and how it is used. upcoming_events says more than data or list2.',
    snippet: 'upcoming_events',
  },
  {
    title: 'Small, focused functions',
    description:
      'Each function does one job and does it well. Small pieces are easier to read, test and change.',
    snippet: 'def send_invite()',
  },
  {
    title: 'Comments explain why',
    description:
      'The code shows what happens. Comments are for the reasons behind it, not a second copy of the logic.',
    snippet: '# why, not what',
  },
  {
    title: "Don't repeat yourself",
    description:
      'If the same logic shows up a third time, extract it. One source of truth means one place to fix.',
    snippet: 'extract()',
  },
  {
    title: 'Tests you can trust',
    description:
      'Every endpoint and model comes with tests, so we can refactor with confidence instead of fear.',
    snippet: 'manage.py test',
  },
  {
    title: 'Reviews are conversations',
    description:
      'Code review is a place to learn, not a verdict. Ask questions, suggest kindly and assume good intent.',
    snippet: 'LGTM ✓',
  },
]

export type ContributionIcon = 'code' | 'design' | 'content' | 'testing' | 'ideas'

export interface ContributionWay {
  icon: ContributionIcon
  title: string
  description: string
}

export const CONTRIBUTION_WAYS: ContributionWay[] = [
  {
    icon: 'code',
    title: 'Code',
    description: 'Build pages and features, fix bugs and write tests in React and Django.',
  },
  {
    icon: 'design',
    title: 'Design',
    description: 'Propose layouts and improve accessibility and the mobile experience.',
  },
  {
    icon: 'content',
    title: 'Content',
    description: 'Write and proofread text, or translate it into Kinyarwanda, French and English.',
  },
  {
    icon: 'testing',
    title: 'Testing',
    description: 'Try the site, report bugs and review open pull requests from other members.',
  },
  {
    icon: 'ideas',
    title: 'Ideas',
    description: 'Suggest features that would make the community stronger and more useful.',
  },
]

export interface Benefit {
  title: string
  description: string
}

export const BENEFITS: Benefit[] = [
  {
    title: 'Practise clean code',
    description: 'Work on a real, public codebase and get thoughtful reviews from other members.',
  },
  {
    title: 'Learn the stack',
    description: 'Get comfortable with React, TypeScript, Django and REST APIs, or go deeper.',
  },
  {
    title: 'Build your portfolio',
    description: 'Ship work that is live on the web, with your name in the commit history.',
  },
  {
    title: 'Meet developers',
    description: 'Connect with people across the Rwandan tech community who share your standards.',
  },
]

export interface WorkflowStep {
  title: string
  description: string
  command: string
}

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    title: 'Pick an issue',
    description: 'Browse open issues, or start with one labelled good first issue. Comment to claim it.',
    command: 'label:"good first issue"',
  },
  {
    title: 'Fork and branch',
    description: 'Create a branch from an up-to-date main with a clear prefix.',
    command: 'git checkout -b feature/events-page',
  },
  {
    title: 'Commit and check',
    description: 'Keep commits focused, follow Conventional Commits and run the same checks as CI.',
    command: 'npm run lint && npm run build',
  },
  {
    title: 'Open a pull request',
    description: 'Explain what changed and why, link the issue, and talk it through in review.',
    command: 'Closes #12',
  },
]
