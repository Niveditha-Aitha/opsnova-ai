from app.models.docker import DockerRequest

from app.templates.compose_templates import (
    FASTAPI_COMPOSE,
    FLASK_COMPOSE,
    DJANGO_COMPOSE,
    NODE_EXPRESS_COMPOSE,
    NODE_NEST_COMPOSE,
    JAVA_SPRING_COMPOSE,
    REACT_VITE_COMPOSE,
    REACT_CRA_COMPOSE,
    ANGULAR_COMPOSE,
    VUE_COMPOSE,
    DOTNET_COMPOSE,
    GO_COMPOSE,
    PHP_LARAVEL_COMPOSE,
    RUST_COMPOSE,
    RUBY_RAILS_COMPOSE,
)


def generate_compose(request: DockerRequest):

    # -----------------------------
    # Python
    # -----------------------------
    if request.language == "Python":

        if request.framework == "FastAPI":
            return FASTAPI_COMPOSE.format(
                app_name=request.app_name,
                port=request.port,
            )

        if request.framework == "Flask":
            return FLASK_COMPOSE.format(
                app_name=request.app_name,
                port=request.port,
            )

        if request.framework == "Django":
            return DJANGO_COMPOSE.format(
                app_name=request.app_name,
                port=request.port,
            )

    # -----------------------------
    # Node.js
    # -----------------------------
    elif request.language == "Node.js":

        if request.framework == "Express":
            return NODE_EXPRESS_COMPOSE.format(
                app_name=request.app_name,
                port=request.port,
            )

        if request.framework == "NestJS":
            return NODE_NEST_COMPOSE.format(
                app_name=request.app_name,
                port=request.port,
            )

    # -----------------------------
    # Java
    # -----------------------------
    elif request.language == "Java":

        if request.framework == "Spring Boot":
            return JAVA_SPRING_COMPOSE.format(
                app_name=request.app_name,
                port=request.port,
            )

    # -----------------------------
    # React
    # -----------------------------
    elif request.language == "React":

        if request.framework == "Vite":
            return REACT_VITE_COMPOSE.format(
                app_name=request.app_name,
                port=request.port,
            )

        if request.framework == "Create React App":
            return REACT_CRA_COMPOSE.format(
                app_name=request.app_name,
                port=request.port,
            )

    # -----------------------------
    # Angular
    # -----------------------------
    elif request.language == "Angular":

        if request.framework == "Angular CLI":
            return ANGULAR_COMPOSE.format(
                app_name=request.app_name,
                port=request.port,
            )

    # -----------------------------
    # Vue
    # -----------------------------
    elif request.language == "Vue":

        if request.framework == "Vite":
            return VUE_COMPOSE.format(
                app_name=request.app_name,
                port=request.port,
            )

    # -----------------------------
    # .NET
    # -----------------------------
    elif request.language == ".NET":

        if request.framework == "ASP.NET Core":
            return DOTNET_COMPOSE.format(
                app_name=request.app_name,
                port=request.port,
            )

    # -----------------------------
    # Go
    # -----------------------------
    elif request.language == "Go":

        if request.framework == "Gin":
            return GO_COMPOSE.format(
                app_name=request.app_name,
                port=request.port,
            )

    # -----------------------------
    # PHP
    # -----------------------------
    elif request.language == "PHP":

        if request.framework == "Laravel":
            return PHP_LARAVEL_COMPOSE.format(
                app_name=request.app_name,
                port=request.port,
            )

    # -----------------------------
    # Rust
    # -----------------------------
    elif request.language == "Rust":

        if request.framework == "Actix":
            return RUST_COMPOSE.format(
                app_name=request.app_name,
                port=request.port,
            )

    # -----------------------------
    # Ruby
    # -----------------------------
    elif request.language == "Ruby":

        if request.framework == "Rails":
            return RUBY_RAILS_COMPOSE.format(
                app_name=request.app_name,
                port=request.port,
            )

    # -----------------------------
    # Unsupported
    # -----------------------------
    return "# Unsupported language/framework"