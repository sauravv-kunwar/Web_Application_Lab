from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.schemas import TodoCreate, TodoUpdate, TodoOut
from app.controllers import todo_controller
from app.dependencies import get_current_user
from app.models import User

router = APIRouter()


@router.get("/", response_model=list[TodoOut])
def list_todos(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    """Get all todos for the currently authenticated user."""
    return todo_controller.get_todos(db, current_user)


@router.post("/", response_model=TodoOut, status_code=201)
def create_todo(
    data: TodoCreate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    return todo_controller.create_todo(db, data, current_user)


@router.put("/{todo_id}", response_model=TodoOut)
def update_todo(
    todo_id: int,
    data: TodoUpdate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    return todo_controller.update_todo(db, todo_id, data, current_user)


@router.delete("/{todo_id}", status_code=204)
def delete_todo(
    todo_id: int,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    todo_controller.delete_todo(db, todo_id, current_user)
