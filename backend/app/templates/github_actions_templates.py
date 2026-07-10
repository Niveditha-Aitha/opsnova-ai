# ==========================================================
# React Workflow
# ==========================================================

REACT_WORKFLOW = """name: {workflow_name}

on:

  push:

    branches:

      - {branch}

  pull_request:

    branches:

      - {branch}

jobs:

  build:

    runs-on: {os_runner}

    steps:

      - name: Checkout Repository

        uses: actions/checkout@v4

      - name: Setup Node.js

        uses: actions/setup-node@v4

        with:

          node-version: "{node_version}"

      - name: Install Dependencies

        run: npm install

      - name: Build

        run: npm run build

      - name: Test

        run: npm test
"""


# ==========================================================
# Node.js Workflow
# ==========================================================

NODE_WORKFLOW = """name: {workflow_name}

on:

  push:

    branches:

      - {branch}

jobs:

  build:

    runs-on: {os_runner}

    steps:

      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4

        with:

          node-version: "{node_version}"

      - run: npm install

      - run: npm test

      - run: npm run build
"""


# ==========================================================
# Python Workflow
# ==========================================================

PYTHON_WORKFLOW = """name: {workflow_name}

on:

  push:

    branches:

      - {branch}

jobs:

  build:

    runs-on: {os_runner}

    steps:

      - uses: actions/checkout@v4

      - uses: actions/setup-python@v5

        with:

          python-version: "{python_version}"

      - run: pip install -r requirements.txt

      - run: pytest
"""


# ==========================================================
# Java (Maven) Workflow
# ==========================================================

JAVA_WORKFLOW = """name: {workflow_name}

on:

  push:

    branches:

      - {branch}

jobs:

  build:

    runs-on: {os_runner}

    steps:

      - uses: actions/checkout@v4

      - uses: actions/setup-java@v4

        with:

          distribution: temurin

          java-version: "{java_version}"

      - run: mvn clean install
"""


# ==========================================================
# .NET Workflow
# ==========================================================

DOTNET_WORKFLOW = """name: {workflow_name}

on:

  push:

    branches:

      - {branch}

jobs:

  build:

    runs-on: {os_runner}

    steps:

      - uses: actions/checkout@v4

      - uses: actions/setup-dotnet@v4

        with:

          dotnet-version: "{dotnet_version}"

      - run: dotnet restore

      - run: dotnet build

      - run: dotnet test
"""


# ==========================================================
# Go Workflow
# ==========================================================

GO_WORKFLOW = """name: {workflow_name}

on:

  push:

    branches:

      - {branch}

jobs:

  build:

    runs-on: {os_runner}

    steps:

      - uses: actions/checkout@v4

      - uses: actions/setup-go@v5

        with:

          go-version: "{go_version}"

      - run: go mod download

      - run: go test ./...

      - run: go build ./...
"""