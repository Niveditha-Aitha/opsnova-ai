from app.models.docker import DockerRequest

from app.templates.docker_templates import (
    PYTHON_FASTAPI,
    PYTHON_FLASK,
    PYTHON_DJANGO,
    NODE_EXPRESS,
    NODE_NEST,
    JAVA_SPRING_BOOT,
    REACT_VITE,
    REACT_CRA,
    ANGULAR,
    VUE,
    DOTNET_ASPNET,
    GO_GIN,
    PHP_LARAVEL,
    RUST_ACTIX,
    RUBY_RAILS
)


def generate_dockerfile(request: DockerRequest):

    if request.language == "Python":

        if request.framework == "FastAPI":
            return PYTHON_FASTAPI.format(port=request.port)

        if request.framework == "Flask":
            return PYTHON_FLASK.format(port=request.port)

        if request.framework == "Django":
            return PYTHON_DJANGO.format(port=request.port)

    elif request.language == "Node.js":

        if request.framework == "Express":
            return NODE_EXPRESS.format(port=request.port)

        if request.framework == "NestJS":
            return NODE_NEST.format(port=request.port)
        
    elif request.language == "Java":

         if request.framework == "Spring Boot":
           return JAVA_SPRING_BOOT.format(port=request.port) 
            
    elif request.language == "React":

          if request.framework == "Vite":
           return REACT_VITE.format(port=request.port)

          if request.framework == "Create React App":
            return REACT_CRA.format(port=request.port)  
    elif request.language == "Angular":

        if request.framework == "Angular CLI":
         return ANGULAR.format(port=request.port) 
    
    elif request.language == "Vue":

         if request.framework == "Vite":
          return VUE.format(port=request.port)
    
    elif request.language == ".NET":

         if request.framework == "ASP.NET Core":
          return DOTNET_ASPNET.format(port=request.port)
         
    elif request.language == "Go":

        if request.framework == "Gin":
          return GO_GIN.format(port=request.port)
        
    elif request.language == "PHP":

        if request.framework == "Laravel":
          return PHP_LARAVEL.format(port=request.port)
        
    elif request.language == "Rust":

        if request.framework == "Actix":
          return RUST_ACTIX.format(port=request.port)
        
    elif request.language == "Ruby":

        if request.framework == "Rails":
         return RUBY_RAILS.format(port=request.port)
    
    return "# Unsupported"