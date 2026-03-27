# Lab 6 – FastAPI Todo (per authenticated user)

## Setup

```bash
# 1. Create & activate virtual environment (Windows)
python -m venv venv
venv\Scripts\activate

# 2. Install dependencies
pip install -r requirements.txt

# 3. Run Alembic migration
alembic upgrade head

# 4. Start the server
uvicorn main:app --reload
```

## Endpoints

### Auth
| Method | URL               | Description         | Auth required |
|--------|-------------------|---------------------|---------------|
| POST   | `/auth/register`  | Register a user     | No            |
| POST   | `/auth/login`     | Login → JWT token   | No            |
| GET    | `/auth/me`        | Current user info   | Yes (Bearer)  |

### Todos (all require Bearer JWT)
| Method | URL            | Description                     |
|--------|----------------|---------------------------------|
| GET    | `/todos`       | List todos for logged-in user   |
| POST   | `/todos`       | Create a new todo               |
| PUT    | `/todos/{id}`  | Update a todo (text / done)     |
| DELETE | `/todos/{id}`  | Delete a todo                   |

Interactive docs: **http://127.0.0.1:8000/docs**

## Project Structure

```
LAB6_FastAPITodo/
├── main.py
├── requirements.txt
├── alembic.ini
├── alembic/
│   ├── env.py
│   ├── script.py.mako
│   └── versions/
│       └── 001_create_users_and_todos.py
└── app/
    ├── config.py
    ├── database.py
    ├── models.py         ← User + Todo ORM models
    ├── schemas.py
    ├── dependencies.py
    ├── controllers/
    │   ├── auth_controller.py
    │   └── todo_controller.py
    └── routes/
        ├── auth_routes.py
        └── todo_routes.py
```
