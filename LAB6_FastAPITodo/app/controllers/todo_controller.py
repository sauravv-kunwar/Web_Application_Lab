from fastapi import HTTPException, status
from sqlalchemy.orm import Session

from app.models import Todo, User
from app.schemas import TodoCreate, TodoUpdate


def get_todos(db: Session, user: User) -> list[Todo]:
    """Return all todos that belong to the given user."""
    return db.query(Todo).filter(Todo.user_id == user.id).all()


def create_todo(db: Session, data: TodoCreate, user: User) -> Todo:
    todo = Todo(text=data.text, done=False, user_id=user.id)
    db.add(todo)
    db.commit()
    db.refresh(todo)
    return todo


def update_todo(db: Session, todo_id: int, data: TodoUpdate, user: User) -> Todo:
    todo = db.query(Todo).filter(Todo.id == todo_id, Todo.user_id == user.id).first()
    if not todo:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Todo not found")

    if data.text is not None:
        todo.text = data.text
    if data.done is not None:
        todo.done = data.done

    db.commit()
    db.refresh(todo)
    return todo


def delete_todo(db: Session, todo_id: int, user: User) -> None:
    todo = db.query(Todo).filter(Todo.id == todo_id, Todo.user_id == user.id).first()
    if not todo:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Todo not found")

    db.delete(todo)
    db.commit()
