from pydantic import BaseModel, Field
from typing import Optional


class LinuxRequest(BaseModel):
    category: str = Field(
        ...,
        description="Linux command category"
    )

    distribution: str = Field(
        default="Ubuntu",
        description="Linux Distribution"
    )

    username: Optional[str] = Field(
        default="developer"
    )

    group_name: Optional[str] = Field(
        default="developers"
    )

    package_name: Optional[str] = Field(
        default="nginx"
    )

    service_name: Optional[str] = Field(
        default="nginx"
    )

    source_path: Optional[str] = Field(
        default="/tmp/source"
    )

    destination_path: Optional[str] = Field(
        default="/tmp/destination"
    )

    directory_name: Optional[str] = Field(
        default="/opt/demo"
    )

    process_name: Optional[str] = Field(
        default="python"
    )

    port: Optional[int] = Field(
        default=8080
    )

    network_interface: Optional[str] = Field(
        default="eth0"
    )

    backup_directory: Optional[str] = Field(
        default="/backup"
    )