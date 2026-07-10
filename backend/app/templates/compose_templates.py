FASTAPI_COMPOSE = """
version: "3.9"

services:
  app:
    build: .
    container_name: {app_name}
    ports:
      - "{port}:{port}"
"""

NODE_EXPRESS_COMPOSE = """
version: "3.9"

services:
  app:
    build: .
    container_name: {app_name}
    ports:
      - "{port}:{port}"
"""

REACT_VITE_COMPOSE = """
version: "3.9"

services:
  app:
    build: .
    container_name: {app_name}
    ports:
      - "{port}:{port}"
"""

JAVA_SPRING_COMPOSE = """
version: "3.9"

services:
  app:
    build: .
    container_name: {app_name}
    ports:
      - "{port}:{port}"
"""

FLASK_COMPOSE = """
version: "3.9"

services:
  app:
    build: .
    container_name: {app_name}
    ports:
      - "{port}:{port}"
"""

DJANGO_COMPOSE = """
version: "3.9"

services:
  app:
    build: .
    container_name: {app_name}
    ports:
      - "{port}:{port}"
"""

NODE_NEST_COMPOSE = """
version: "3.9"

services:
  app:
    build: .
    container_name: {app_name}
    ports:
      - "{port}:{port}"
"""

REACT_CRA_COMPOSE = """
version: "3.9"

services:
  app:
    build: .
    container_name: {app_name}
    ports:
      - "{port}:{port}"
"""

ANGULAR_COMPOSE = """
version: "3.9"

services:
  app:
    build: .
    container_name: {app_name}
    ports:
      - "{port}:{port}"
"""

VUE_COMPOSE = """
version: "3.9"

services:
  app:
    build: .
    container_name: {app_name}
    ports:
      - "{port}:{port}"
"""

DOTNET_COMPOSE = """
version: "3.9"

services:
  app:
    build: .
    container_name: {app_name}
    ports:
      - "{port}:{port}"
"""

GO_COMPOSE = """
version: "3.9"

services:
  app:
    build: .
    container_name: {app_name}
    ports:
      - "{port}:{port}"
"""

PHP_LARAVEL_COMPOSE = """
version: "3.9"

services:
  app:
    build: .
    container_name: {app_name}
    ports:
      - "{port}:{port}"
"""

RUST_COMPOSE = """
version: "3.9"

services:
  app:
    build: .
    container_name: {app_name}
    ports:
      - "{port}:{port}"
"""

RUBY_RAILS_COMPOSE = """
version: "3.9"

services:
  app:
    build: .
    container_name: {app_name}
    ports:
      - "{port}:{port}"
"""

