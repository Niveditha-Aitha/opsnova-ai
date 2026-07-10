from app.models.ansible_models import AnsibleRequest

from app.templates.ansible_templates import (
    NGINX_PLAYBOOK,
    APACHE_PLAYBOOK,
    DOCKER_PLAYBOOK,
    KUBERNETES_PLAYBOOK,
    PACKAGE_PLAYBOOK,
    SERVICE_PLAYBOOK,
    USER_PLAYBOOK,
    COPY_PLAYBOOK,
    INVENTORY,
    ANSIBLE_CONFIG,
    REQUIREMENTS,
)


def generate_ansible(request: AnsibleRequest):
    """
    Generate Ansible configuration files.
    """

    playbook_type = request.playbook_type.lower()

    # ---------------------------------------------------------
    # Select Playbook
    # ---------------------------------------------------------

    if playbook_type == "nginx":
        playbook = NGINX_PLAYBOOK

    elif playbook_type == "apache":
        playbook = APACHE_PLAYBOOK

    elif playbook_type == "docker":
        playbook = DOCKER_PLAYBOOK

    elif playbook_type == "kubernetes":
        playbook = KUBERNETES_PLAYBOOK

    elif playbook_type == "package":
        playbook = PACKAGE_PLAYBOOK

    elif playbook_type == "service":
        playbook = SERVICE_PLAYBOOK

    elif playbook_type == "user":
        playbook = USER_PLAYBOOK

    elif playbook_type == "copy":
        playbook = COPY_PLAYBOOK

    else:
        raise ValueError(
            f"Unsupported playbook type: {request.playbook_type}"
        )

    playbook = playbook.format(
        playbook_name=request.playbook_name,
        hosts=request.hosts,
        become=str(request.become).lower(),
        package_manager=request.package_manager,
        package_name=request.package_name,
        service_name=request.service_name,
        service_state=request.service_state,
        username=request.username,
        file_path=request.file_path,
        destination_path=request.destination_path,
    )

    return {
        "playbook": playbook,
        "inventory": INVENTORY,
        "config": ANSIBLE_CONFIG,
        "requirements": REQUIREMENTS,
    }