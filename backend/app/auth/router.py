from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session

from app.database.database import get_db
from app.schemas.user import UserRegister
from app.schemas.user import UserResponse
from app.services.auth_service import register_user
from app.schemas.user import UserLogin
from app.schemas.user import LoginResponse
from app.services.auth_service import login_user

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"],
)


@router.post(
    "/register",
    response_model=UserResponse,
)
def register(
    user: UserRegister,
    db: Session = Depends(get_db),
):
    try:
        return register_user(db, user)

    except ValueError as e:
        raise HTTPException(
            status_code=400,
            detail=str(e),
        )
    

@router.post(
    "/login",
    response_model=LoginResponse,
)
def login(
    user: UserLogin,
    db: Session = Depends(get_db),
):

    try:
        return login_user(
            db,
            user.email,
            user.password,
        )

    except ValueError as e:
        raise HTTPException(
            status_code=401,
            detail=str(e),
        )