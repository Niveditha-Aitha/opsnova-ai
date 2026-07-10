# ==========================================================
# playbook.yml - NGINX
# ==========================================================

NGINX_PLAYBOOK = """---
- name: {playbook_name}

  hosts: {hosts}

  become: {become}

  tasks:

    - name: Install NGINX

      {package_manager}:

        name: nginx

        state: present

    - name: Start NGINX

      service:

        name: nginx

        state: started

        enabled: yes
"""


# ==========================================================
# playbook.yml - Apache
# ==========================================================

APACHE_PLAYBOOK = """---
- name: {playbook_name}

  hosts: {hosts}

  become: {become}

  tasks:

    - name: Install Apache

      {package_manager}:

        name: apache2

        state: present

    - name: Start Apache

      service:

        name: apache2

        state: started

        enabled: yes
"""


# ==========================================================
# Docker Installation
# ==========================================================

DOCKER_PLAYBOOK = """---
- name: {playbook_name}

  hosts: {hosts}

  become: {become}

  tasks:

    - name: Install Docker

      {package_manager}:

        name: docker.io

        state: present

    - name: Start Docker

      service:

        name: docker

        state: started

        enabled: yes
"""


# ==========================================================
# Kubernetes Installation
# ==========================================================

KUBERNETES_PLAYBOOK = """---
- name: {playbook_name}

  hosts: {hosts}

  become: {become}

  tasks:

    - name: Install kubeadm

      {package_manager}:

        name: kubeadm

        state: present

    - name: Install kubelet

      {package_manager}:

        name: kubelet

        state: present

    - name: Install kubectl

      {package_manager}:

        name: kubectl

        state: present
"""


# ==========================================================
# Package Installation
# ==========================================================

PACKAGE_PLAYBOOK = """---
- name: {playbook_name}

  hosts: {hosts}

  become: {become}

  tasks:

    - name: Install Package

      {package_manager}:

        name: {package_name}

        state: present
"""


# ==========================================================
# Service Management
# ==========================================================

SERVICE_PLAYBOOK = """---
- name: {playbook_name}

  hosts: {hosts}

  become: {become}

  tasks:

    - name: Manage Service

      service:

        name: {service_name}

        state: {service_state}

        enabled: yes
"""


# ==========================================================
# User Management
# ==========================================================

USER_PLAYBOOK = """---
- name: {playbook_name}

  hosts: {hosts}

  become: {become}

  tasks:

    - name: Create User

      user:

        name: {username}

        state: present
"""


# ==========================================================
# File Copy
# ==========================================================

COPY_PLAYBOOK = """---
- name: {playbook_name}

  hosts: {hosts}

  become: {become}

  tasks:

    - name: Copy File

      copy:

        src: {file_path}

        dest: {destination_path}
"""


# ==========================================================
# inventory.ini
# ==========================================================

INVENTORY = """[all]

server1 ansible_host=192.168.1.10

server2 ansible_host=192.168.1.11
"""


# ==========================================================
# ansible.cfg
# ==========================================================

ANSIBLE_CONFIG = """[defaults]

inventory = inventory.ini

host_key_checking = False

retry_files_enabled = False

timeout = 30
"""


# ==========================================================
# requirements.yml
# ==========================================================

REQUIREMENTS = """---

collections:

  - name: community.docker

  - name: kubernetes.core
"""