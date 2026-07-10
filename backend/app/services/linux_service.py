from app.models.linux_models import LinuxRequest

from app.templates.linux_templates import (
    USER_COMMANDS,
    USER_AUTOMATION,
    FILE_COMMANDS,
    FILE_AUTOMATION,
    PERMISSION_COMMANDS,
    PERMISSION_AUTOMATION,
    PACKAGE_COMMANDS,
    PACKAGE_AUTOMATION,
    NETWORK_COMMANDS,
    NETWORK_AUTOMATION,
    PROCESS_COMMANDS,
    PROCESS_AUTOMATION,
    SERVICE_COMMANDS,
    SERVICE_AUTOMATION,
    DISK_COMMANDS,
    DISK_AUTOMATION,
    MONITOR_COMMANDS,
    MONITOR_AUTOMATION,
    README,
    CHEATSHEET,
)


def generate_linux(request: LinuxRequest):
    """
    Generate Linux commands and automation scripts.
    """

    category = request.category.lower()

    if category == "user management":
        commands = USER_COMMANDS
        automation = USER_AUTOMATION

    elif category == "file management":
        commands = FILE_COMMANDS
        automation = FILE_AUTOMATION

    elif category == "permissions":
        commands = PERMISSION_COMMANDS
        automation = PERMISSION_AUTOMATION

    elif category == "package management":
        commands = PACKAGE_COMMANDS
        automation = PACKAGE_AUTOMATION

    elif category == "networking":
        commands = NETWORK_COMMANDS
        automation = NETWORK_AUTOMATION

    elif category == "process management":
        commands = PROCESS_COMMANDS
        automation = PROCESS_AUTOMATION

    elif category == "service management":
        commands = SERVICE_COMMANDS
        automation = SERVICE_AUTOMATION

    elif category == "disk management":
        commands = DISK_COMMANDS
        automation = DISK_AUTOMATION

    elif category == "monitoring":
        commands = MONITOR_COMMANDS
        automation = MONITOR_AUTOMATION

    else:
        raise ValueError(
            f"Unsupported Linux category: {request.category}"
        )

    commands = commands.format(
        username=request.username,
        group_name=request.group_name,
        package_name=request.package_name,
        service_name=request.service_name,
        source_path=request.source_path,
        destination_path=request.destination_path,
        directory_name=request.directory_name,
        process_name=request.process_name,
        port=request.port,
        network_interface=request.network_interface,
        backup_directory=request.backup_directory,
    )

    automation = automation.format(
        username=request.username,
        group_name=request.group_name,
        package_name=request.package_name,
        service_name=request.service_name,
        source_path=request.source_path,
        destination_path=request.destination_path,
        directory_name=request.directory_name,
        process_name=request.process_name,
        port=request.port,
        network_interface=request.network_interface,
        backup_directory=request.backup_directory,
    )

    readme = README.format(
        category=request.category,
        distribution=request.distribution,
    )

    cheatsheet = CHEATSHEET

    return {
        "commands": commands,
        "automation": automation,
        "readme": readme,
        "cheatsheet": cheatsheet,
    }