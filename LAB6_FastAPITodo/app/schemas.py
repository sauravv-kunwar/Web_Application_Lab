from pydantic import BaseModel, EmailStr


# ── Auth schemas ──────────────────────────────────────────────
class UserRegister(BaseModel):
    name: str
    email: EmailStr
    password: str


class UserLogin(BaseModel):
    email: EmailStr
    password: str


class UserOut(BaseModel):
    id: int
    name: str
    email: str

    model_config = {"from_attributes": True}


class Token(BaseModel):
    access_token: str
    token_type: str


# ── Todo schemas ──────────────────────────────────────────────
class TodoCreate(BaseModel):
    text: str


class TodoUpdate(BaseModel):
    text: str | None = None
    done: bool | None = None


class TodoOut(BaseModel):
    id: int
    text: str
    done: bool
    user_id: int

    model_config = {"from_attributes": True}
