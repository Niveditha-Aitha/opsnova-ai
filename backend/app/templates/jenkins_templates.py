# ==========================================================
# Generic Declarative Pipeline
# ==========================================================

DECLARATIVE_PIPELINE = """pipeline {{

    agent any

    stages {{

        stage('Checkout') {{
            steps {{
                git branch: '{branch}', url: '{repository_url}'
            }}
        }}

        stage('Build') {{
            steps {{
                sh '''
                {build_command}
                '''
            }}
        }}

        stage('Test') {{
            steps {{
                sh '''
                {test_command}
                '''
            }}
        }}

        stage('Deploy') {{
            steps {{
                sh '''
                {deploy_command}
                '''
            }}
        }}

    }}
}}
"""


# ==========================================================
# Generic Scripted Pipeline
# ==========================================================

SCRIPTED_PIPELINE = """node {{

    stage('Checkout') {{
        git branch: '{branch}', url: '{repository_url}'
    }}

    stage('Build') {{
        sh '''
        {build_command}
        '''
    }}

    stage('Test') {{
        sh '''
        {test_command}
        '''
    }}

    stage('Deploy') {{
        sh '''
        {deploy_command}
        '''
    }}

}}
"""


# ==========================================================
# Generic Multibranch Pipeline
# ==========================================================

MULTIBRANCH_PIPELINE = """pipeline {{

    agent any

    triggers {{
        githubPush()
    }}

    stages {{

        stage('Checkout') {{
            steps {{
                checkout scm
            }}
        }}

        stage('Build') {{
            steps {{
                sh '''
                {build_command}
                '''
            }}
        }}

        stage('Test') {{
            steps {{
                sh '''
                {test_command}
                '''
            }}
        }}

        stage('Deploy') {{
            when {{
                branch 'main'
            }}

            steps {{
                sh '''
                {deploy_command}
                '''
            }}
        }}

    }}

}}
"""


# ==========================================================
# React Declarative Pipeline
# ==========================================================

REACT_DECLARATIVE = """pipeline {{

    agent any

    tools {{
        nodejs 'NodeJS'
    }}

    stages {{

        stage('Checkout') {{
            steps {{
                git branch: '{branch}', url: '{repository_url}'
            }}
        }}

        stage('Install Dependencies') {{
            steps {{
                sh 'npm install'
            }}
        }}

        stage('Build') {{
            steps {{
                sh 'npm run build'
            }}
        }}

        stage('Test') {{
            steps {{
                sh 'npm test'
            }}
        }}

        stage('Archive') {{
            steps {{
                archiveArtifacts artifacts: 'dist/**', fingerprint: true
            }}
        }}

    }}

}}
"""


# ==========================================================
# Node.js Declarative Pipeline
# ==========================================================

NODE_DECLARATIVE = """pipeline {{

    agent any

    tools {{
        nodejs 'NodeJS'
    }}

    stages {{

        stage('Checkout') {{
            steps {{
                git branch: '{branch}', url: '{repository_url}'
            }}
        }}

        stage('Install') {{
            steps {{
                sh 'npm install'
            }}
        }}

        stage('Test') {{
            steps {{
                sh 'npm test'
            }}
        }}

        stage('Build') {{
            steps {{
                sh 'npm run build'
            }}
        }}

    }}

}}
"""


# ==========================================================
# Python Declarative Pipeline
# ==========================================================

PYTHON_DECLARATIVE = """pipeline {{

    agent any

    stages {{

        stage('Checkout') {{
            steps {{
                git branch: '{branch}', url: '{repository_url}'
            }}
        }}

        stage('Install Dependencies') {{
            steps {{
                sh 'pip install -r requirements.txt'
            }}
        }}

        stage('Lint') {{
            steps {{
                sh 'flake8 . || true'
            }}
        }}

        stage('Test') {{
            steps {{
                sh 'pytest'
            }}
        }}

    }}

}}
"""


# ==========================================================
# Java (Maven) Declarative Pipeline
# ==========================================================

JAVA_DECLARATIVE = """pipeline {{

    agent any

    tools {{
        maven 'Maven'
    }}

    stages {{

        stage('Checkout') {{
            steps {{
                git branch: '{branch}', url: '{repository_url}'
            }}
        }}

        stage('Compile') {{
            steps {{
                sh 'mvn clean compile'
            }}
        }}

        stage('Test') {{
            steps {{
                sh 'mvn test'
            }}
        }}

        stage('Package') {{
            steps {{
                sh 'mvn package'
            }}
        }}

    }}

}}
"""


# ==========================================================
# .NET Declarative Pipeline
# ==========================================================

DOTNET_DECLARATIVE = """pipeline {{

    agent any

    stages {{

        stage('Checkout') {{
            steps {{
                git branch: '{branch}', url: '{repository_url}'
            }}
        }}

        stage('Restore') {{
            steps {{
                sh 'dotnet restore'
            }}
        }}

        stage('Build') {{
            steps {{
                sh 'dotnet build'
            }}
        }}

        stage('Test') {{
            steps {{
                sh 'dotnet test'
            }}
        }}

    }}

}}
"""


# ==========================================================
# Go Declarative Pipeline
# ==========================================================

GO_DECLARATIVE = """pipeline {{

    agent any

    stages {{

        stage('Checkout') {{
            steps {{
                git branch: '{branch}', url: '{repository_url}'
            }}
        }}

        stage('Download Dependencies') {{
            steps {{
                sh 'go mod download'
            }}
        }}

        stage('Test') {{
            steps {{
                sh 'go test ./...'
            }}
        }}

        stage('Build') {{
            steps {{
                sh 'go build ./...'
            }}
        }}

    }}

}}
"""