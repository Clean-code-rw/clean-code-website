# Contributing to Clean Code RW

Thank you for wanting to help build the Clean Code RW website! 🎉 This guide explains how we work together, so your contribution can be reviewed and merged quickly.

If anything here is unclear, open an issue and ask. Improving this guide is a contribution too.

## Ways to contribute

You don't have to write code to help:

- **Code**: build pages and features, fix bugs, write tests
- **Design**: propose layouts, improve accessibility and mobile views
- **Content**: write or proofread text, translate it (Kinyarwanda, French, English)
- **Testing**: try the site, report bugs, review open pull requests
- **Ideas**: suggest features that would help the community

## Before you start

1. **Set up the project locally** by following the [README](README.md#-run-it-locally).
2. **Find something to work on.** Browse the [open issues](../../issues). If you're new, start with one labelled `good first issue`.
3. **Say you're working on it.** Comment on the issue, so two people don't build the same thing. If you haven't opened a pull request within a week, someone else may pick it up.
4. **Discuss big changes first.** For a new page, a new dependency or a change to the architecture, open an issue and agree on the approach before writing a lot of code.

## Workflow

### 1. Fork and branch

Fork the repository, clone your fork, and add the main repository as `upstream`:

```bash
git remote add upstream https://github.com/<org>/cleancode.git
```

Always create a new branch from an up-to-date `main`:

```bash
git checkout main
git pull upstream main
git checkout -b feature/short-description
```

Branch name prefixes:

| Prefix      | Use it for                         | Example                   |
| ----------- | ---------------------------------- | ------------------------- |
| `feature/`  | New functionality                  | `feature/events-page`     |
| `fix/`      | Bug fixes                          | `fix/navbar-mobile`       |
| `docs/`     | Documentation only                 | `docs/setup-windows`      |
| `refactor/` | Code changes with no new behaviour | `refactor/api-serializers`|
| `chore/`    | Tooling, dependencies, CI          | `chore/update-vite`       |

### 2. Commit

Keep each commit focused on one thing. We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>: <short summary in the imperative mood>
```

Examples:

```
feat: add events listing page
fix: stop navbar overlapping content on mobile
docs: add Windows setup steps
refactor: extract member card component
test: cover the health endpoint
chore: bump Django to 6.1.2
```

### 3. Check your work

Run the same checks CI runs before pushing.

Backend (in `backend/`, virtual environment activated):

```bash
ruff check .
ruff format .
python manage.py makemigrations --check --dry-run
python manage.py test
```

Frontend (in `frontend/`):

```bash
npm run lint
npm run build
```

### 4. Open a pull request

Push your branch to your fork and open a pull request against `main`. In the description:

- Explain **what** changed and **why**
- Link the issue it closes, for example `Closes #12`
- Add screenshots for any visual change
- Keep it small. Several small pull requests are reviewed much faster than one large one.

### 5. Review

At least one maintainer reviews every pull request. Reviews are a conversation, not a judgement: expect questions and suggestions, and feel free to ask your own. Once the review is approved and CI passes, a maintainer will merge it.

## Code style

This is a clean code community, so the code should be an example of what we teach.

### General

- Use names that describe intent. `upcoming_events` is better than `data` or `list2`.
- Keep functions small and focused on a single job.
- Don't leave commented-out code, debugging `print()` or `console.log()` calls behind.
- Write comments to explain *why* something is done, not *what* the code does.
- Don't repeat yourself. If you copy the same logic a third time, extract it.

### Python / Django

- Formatting and linting are enforced by [Ruff](https://docs.astral.sh/ruff/), using the settings in [`backend/pyproject.toml`](backend/pyproject.toml).
- Group features into Django apps (`events`, `members`, `blog`, …) rather than making `api` grow forever.
- Put API endpoints under `/api/`, and use Django REST Framework serializers for input validation.
- Every new endpoint or model needs tests.
- Commit migrations together with the model changes that need them.
- Never commit secrets. New settings go into `.env.example` with a safe placeholder value.

### JavaScript / React

- Use function components and hooks.
- One component per file, with the file named after the component (`EventCard.jsx`).
- Call the backend with relative URLs (`/api/...`). The Vite dev server forwards them to Django.
- Make pages work on mobile, and keep them accessible: use semantic HTML, `alt` text on images, and labels on form fields.
- `npm run lint` must pass.

## Reporting bugs and requesting features

Use the issue templates:

- [Report a bug](../../issues/new?template=bug_report.md)
- [Request a feature](../../issues/new?template=feature_request.md)

Search the existing issues first, so we don't get duplicates.

**Security problems** should not be reported in a public issue. Contact the maintainers privately instead.

## Code of Conduct

Everyone taking part in this project must follow our [Code of Conduct](CODE_OF_CONDUCT.md). Be kind, be patient with beginners, and assume good intent.

Thank you for helping build Clean Code RW! 🇷🇼
