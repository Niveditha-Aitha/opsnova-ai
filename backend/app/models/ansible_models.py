from pydantic import BaseModel, Field
from typing import Optional


class AnsibleRequest(BaseModel):
    playbook_name: str = Field(
        ...,
        min_length=1,
        description="Playbook Name"
    )

    playbook_type: str = Field(
        ...,
        description="Playbook Type"
    )

    hosts: str = Field(
        default="all",
        description="Target Hosts"
    )

    become: bool = Field(
        default=True,
        description="Run as sudo"
    )

    package_manager: Optional[str] = Field(
        default="apt"
    )

    service_name: Optional[str] = Field(
        default=""
    )

    service_state: Optional[str] = Field(
        default="started"
    )

    package_name: Optional[str] = Field(
        default=""
    )

    username: Optional[str] = Field(
        default=""
    )

    file_path: Optional[str] = Field(
        default=""
    )

    destination_path: Optional[str] = Field(
        default=""
    )