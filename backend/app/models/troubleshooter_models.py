from pydantic import BaseModel, Field
from typing import Optional


class TroubleshooterRequest(BaseModel):
    technology: str = Field(
        ...,
        description="Technology Name"
    )

    error_message: str = Field(
        ...,
        min_length=5,
        description="Complete Error Message"
    )

    command: Optional[str] = Field(
        default="",
        description="Command Executed"
    )

    operating_system: Optional[str] = Field(
        default="Linux",
        description="Operating System"
    )

    environment: Optional[str] = Field(
        default="Local",
        description="Execution Environment"
    )