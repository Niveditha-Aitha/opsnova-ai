from app.models.docker import DockerRequest

from app.templates.dockerignore_templates import (
    PYTHON_DOCKERIGNORE,
    NODE_DOCKERIGNORE,
    JAVA_DOCKERIGNORE,
    DOTNET_DOCKERIGNORE,
    GO_DOCKERIGNORE,
    PHP_DOCKERIGNORE,
    FRONTEND_DOCKERIGNORE,
    RUST_DOCKERIGNORE,
    RUBY_DOCKERIGNORE,
)


def generate_dockerignore(request: DockerRequest):

    # -----------------------------
    # Python
    # -----------------------------
    if request.language == "Python":
        return PYTHON_DOCKERIGNORE

    # -----------------------------
    # Node.js
    # -----------------------------
    elif request.language == "Node.js":
        return NODE_DOCKERIGNORE

    # -----------------------------
    # Java
    # -----------------------------
    elif request.language == "Java":
        return JAVA_DOCKERIGNORE

    # -----------------------------
    # .NET
    # -----------------------------
    elif request.language == ".NET":
        return DOTNET_DOCKERIGNORE

    # -----------------------------
    # Go
    # -----------------------------
    elif request.language == "Go":
        return GO_DOCKERIGNORE

    # -----------------------------
    # PHP
    # -----------------------------
    elif request.language == "PHP":
        return PHP_DOCKERIGNORE

    # -----------------------------
    # React / Angular / Vue
    # -----------------------------
    elif request.language in ["React", "Angular", "Vue"]:
        return FRONTEND_DOCKERIGNORE

    # -----------------------------
    # Rust
    # -----------------------------
    elif request.language == "Rust":
        return RUST_DOCKERIGNORE

    # -----------------------------
    # Ruby
    # -----------------------------
    elif request.language == "Ruby":
        return RUBY_DOCKERIGNORE

    return "# Unsupported language"