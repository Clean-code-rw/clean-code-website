<div align="center">

# Clean Code RW

**The official website of Clean Code RW, a community of developers in Rwanda who care about writing clean, maintainable software.**

Built in the open, by the community, for the community.

[Get started](#-run-it-locally) · [Contribute](#-contributing) · [Report a bug](../../issues/new?template=bug_report.md) · [Request a feature](../../issues/new?template=feature_request.md)

</div>

---

## 👋 We need you

This website belongs to the community, and we want as many members as possible to help build it. You don't need to be a senior developer. If you can write a little code, design a page, fix a typo or test a feature, there is a place for you here.

Contributing to this project is a good way to:

- **Practise clean code** on a real project, with code reviews from other members
- **Learn** React, Django and REST APIs, or get better at them
- **Build your portfolio** with work that is live and public
- **Meet other developers** in the Rwandan tech community

New to open source? Look for issues labelled [`good first issue`](../../issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22). They are chosen to be friendly first contributions.

## 🧱 Tech stack

| Part     | Technology                                                                   |
| -------- | ---------------------------------------------------------------------------- |
| Frontend | [React 19](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/), [Vite](https://vite.dev/) and [Tailwind CSS 4](https://tailwindcss.com/) |
| Backend  | [Django 6](https://www.djangoproject.com/) with [Django REST Framework](https://www.django-rest-framework.org/) |
| Database | SQLite in development                                                        |
| Quality  | [Ruff](https://docs.astral.sh/ruff/) (Python), [oxlint](https://oxc.rs/) and `tsc` (TypeScript), GitHub Actions CI |

## 📁 Project structure

```
.
├── backend/                 Django project
│   ├── config/              Settings, root URLs, WSGI/ASGI entry points
│   ├── api/                 The REST API app (views, urls, tests)
│   ├── manage.py
│   ├── requirements.txt     Runtime dependencies
│   ├── requirements-dev.txt Development tools (Ruff)
│   └── .env.example         Template for your local environment variables
├── frontend/                React app
│   ├── src/                 Components, styles, entry point
│   ├── public/              Static files served as-is
│   ├── tsconfig*.json       TypeScript settings
│   └── vite.config.ts       Dev server, Tailwind plugin and /api proxy
└── .github/                 CI workflow, issue and pull request templates
```

The frontend and backend run as two separate servers during development. The Vite dev server forwards every request that starts with `/api` to Django, so frontend code calls the API with relative URLs such as `fetch('/api/health/')`.

## 🚀 Run it locally

### Prerequisites

Install these first:

- [Git](https://git-scm.com/)
- [Python](https://www.python.org/downloads/) 3.12 or newer
- [Node.js](https://nodejs.org/) 22.12 or newer (the project uses Node 24, see [`frontend/.nvmrc`](frontend/.nvmrc))

Check your versions:

```bash
git --version
python3 --version   # on Windows: python --version
node --version
```

### 1. Get the code

If you plan to contribute, [fork the repository](../../fork) first and clone your fork:

```bash
git clone https://github.com/<your-username>/cleancode.git
cd cleancode
```

### 2. Set up the backend

```bash
cd backend

# Create and activate a virtual environment
python3 -m venv .venv
source .venv/bin/activate          # Windows (PowerShell): .venv\Scripts\Activate.ps1

# Install dependencies
pip install -r requirements-dev.txt

# Create your local environment file
cp .env.example .env               # Windows: copy .env.example .env
```

Open `backend/.env` and set `DJANGO_SECRET_KEY`. You can generate one with:

```bash
python -c "from django.core.management.utils import get_random_secret_key as g; print(g())"
```

Then create the database and start the server:

```bash
python manage.py migrate
python manage.py createsuperuser   # optional, gives you access to /admin
python manage.py runserver
```

The API is now running at http://127.0.0.1:8000. Check http://127.0.0.1:8000/api/health/, which should return `{"status": "ok", ...}`.

### 3. Set up the frontend

Open a **second terminal** and keep the backend running in the first one:

```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:5173. The page should show **API status: ok**, which means the frontend is talking to the backend. 🎉

### Troubleshooting

<details>
<summary><code>python3 -m venv</code> fails with "ensurepip is not available"</summary>

On Debian, Ubuntu and Kali, install the venv package for your Python version, for example `sudo apt install python3.12-venv`. Then delete the half-created `.venv` folder and run the command again.

</details>

<details>
<summary><code>KeyError: 'DJANGO_SECRET_KEY'</code> when starting Django</summary>

You haven't created `backend/.env`, or `DJANGO_SECRET_KEY` is missing from it. See step 2.

</details>

<details>
<summary>The page shows "API status: unreachable"</summary>

The Django server isn't running, or it isn't on port 8000. Start it with `python manage.py runserver` in the `backend` folder, with the virtual environment activated.

</details>

<details>
<summary>PowerShell won't run <code>Activate.ps1</code></summary>

Run `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` once, then try again.

</details>

## ✅ Tests and code quality

Run these before opening a pull request. CI runs the same checks on every pull request.

**Backend** (from `backend/`, with the virtual environment activated):

```bash
ruff check .              # lint
ruff format .             # format
python manage.py test     # run tests
```

**Frontend** (from `frontend/`):

```bash
npm run lint              # lint
npm run build             # production build
```

## 🤝 Contributing

We welcome contributions of every size. The short version:

1. Find an issue you'd like to work on, or open one to discuss your idea.
2. Comment on the issue so others know you're working on it.
3. Fork the repo and create a branch from `main`, for example `feature/events-page` or `fix/navbar-mobile`.
4. Make your change, with tests where it makes sense.
5. Run the checks above.
6. Open a pull request and fill in the template.

Please read **[CONTRIBUTING.md](CONTRIBUTING.md)** for the full guide, including branch naming, commit messages, code style and the review process.

Everyone taking part is expected to follow our **[Code of Conduct](CODE_OF_CONDUCT.md)**.

## 💬 Community

Have a question, an idea, or want to meet the team? Open a [discussion or issue](../../issues), or reach out to the Clean Code RW organisers through the community's channels.

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<div align="center">

Made with ❤️ in Rwanda by the Clean Code RW community.

</div>
