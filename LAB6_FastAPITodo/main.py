from fastapi import FastAPI
from app.database import Base, engine
from app.routes import auth_routes, todo_routes

# Create all tables on startup (development convenience)
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Lab 6 – FastAPI Todo (per user)")

app.include_router(auth_routes.router, prefix="/auth", tags=["Auth"])
app.include_router(todo_routes.router, prefix="/todos", tags=["Todos"])


@app.get("/")
def root():
    return {"message": "Lab 6 – FastAPI Todo API is running"}
