from app.models.troubleshooter_models import TroubleshooterRequest

from app.templates.troubleshooter_templates import (
    DOCKER_ERRORS,
    KUBERNETES_ERRORS,
    JENKINS_ERRORS,
    TERRAFORM_ERRORS,
    LINUX_ERRORS,
    UNKNOWN_ERROR,
)


def analyze_error(request: TroubleshooterRequest):
    """
    Analyze DevOps error messages.
    """

    technology = request.technology.lower()
    error = request.error_message.lower()

    database = {}

    if technology == "docker":
        database = DOCKER_ERRORS

    elif technology == "kubernetes":
        database = KUBERNETES_ERRORS

    elif technology == "jenkins":
        database = JENKINS_ERRORS

    elif technology == "terraform":
        database = TERRAFORM_ERRORS

    elif technology == "linux":
        database = LINUX_ERRORS

    else:
        return {
            "technology": request.technology,
            "severity": UNKNOWN_ERROR["severity"],
            "root_cause": UNKNOWN_ERROR["root_cause"],
            "explanation": UNKNOWN_ERROR["explanation"],
            "solution": UNKNOWN_ERROR["solution"],
            "best_practice": UNKNOWN_ERROR["best_practice"],
        }

    for pattern, details in database.items():

        if pattern in error:

            return {
                "technology": request.technology,
                "severity": details["severity"],
                "root_cause": details["root_cause"],
                "explanation": details["explanation"],
                "solution": details["solution"],
                "best_practice": details["best_practice"],
            }

    return {
        "technology": request.technology,
        "severity": UNKNOWN_ERROR["severity"],
        "root_cause": UNKNOWN_ERROR["root_cause"],
        "explanation": UNKNOWN_ERROR["explanation"],
        "solution": UNKNOWN_ERROR["solution"],
        "best_practice": UNKNOWN_ERROR["best_practice"],
    }