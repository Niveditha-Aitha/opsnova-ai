# ==========================================================
# Docker Errors
# ==========================================================

DOCKER_ERRORS = {
    "permission denied": {
        "severity": "Medium",
        "root_cause": "Current user is not allowed to access the Docker daemon socket.",

        "explanation": """
Docker daemon runs with elevated privileges.
The current user is not a member of the docker group.
""",

        "solution": """
sudo usermod -aG docker $USER

newgrp docker

systemctl restart docker
""",

        "best_practice": """
Avoid using sudo for every Docker command.
Add your user to the docker group permanently.
"""
    },

    "cannot connect to the docker daemon": {
        "severity": "High",

        "root_cause": "Docker service is not running.",

        "explanation": """
Docker daemon must be running before Docker CLI can communicate.
""",

        "solution": """
sudo systemctl start docker

sudo systemctl enable docker

systemctl status docker
""",

        "best_practice": """
Verify Docker service status after every reboot.
"""
    }
}

# ==========================================================
# Kubernetes Errors
# ==========================================================

KUBERNETES_ERRORS = {
    "imagepullbackoff": {
        "severity": "High",

        "root_cause": "Kubernetes cannot pull the container image.",

        "explanation": """
Image name is incorrect,
registry authentication failed,
or image does not exist.
""",

        "solution": """
kubectl describe pod POD_NAME

docker pull IMAGE_NAME

kubectl apply -f deployment.yaml
""",

        "best_practice": """
Always verify image name before deployment.
"""
    },

    "crashloopbackoff": {
        "severity": "Critical",

        "root_cause": "Application repeatedly crashes after startup.",

        "explanation": """
Container starts successfully
but exits immediately.
""",

        "solution": """
kubectl logs POD_NAME

kubectl describe pod POD_NAME
""",

        "best_practice": """
Use readiness and liveness probes.
"""
    }
}

# ==========================================================
# Jenkins Errors
# ==========================================================

JENKINS_ERRORS = {
    "pipeline failed": {
        "severity": "Medium",

        "root_cause": "One of the pipeline stages failed.",

        "explanation": """
Compilation, testing,
or deployment stage returned a non-zero exit code.
""",

        "solution": """
Review Jenkins console output.

Fix failed stage.

Re-run pipeline.
""",

        "best_practice": """
Use stage-specific error handling.
"""
    }
}

# ==========================================================
# Terraform Errors
# ==========================================================

TERRAFORM_ERRORS = {
    "provider": {
        "severity": "Medium",

        "root_cause": "Terraform provider configuration is invalid.",

        "explanation": """
Provider plugin cannot initialize.
""",

        "solution": """
terraform init

terraform validate

terraform plan
""",

        "best_practice": """
Always run terraform validate before apply.
"""
    }
}

# ==========================================================
# Linux Errors
# ==========================================================

LINUX_ERRORS = {
    "permission denied": {
        "severity": "Medium",

        "root_cause": "Insufficient file or directory permissions.",

        "explanation": """
Linux file permissions prevent the requested operation.
""",

        "solution": """
chmod

chown

sudo
""",

        "best_practice": """
Follow the principle of least privilege.
"""
    }
}

# ==========================================================
# Generic Template
# ==========================================================

UNKNOWN_ERROR = {
    "severity": "Unknown",

    "root_cause": "Unable to identify the error.",

    "explanation": """
The current knowledge base does not contain this error.
""",

    "solution": """
Review complete logs.

Check official documentation.

Verify configuration.

Search vendor knowledge base.
""",

    "best_practice": """
Capture complete logs before troubleshooting.
"""
}