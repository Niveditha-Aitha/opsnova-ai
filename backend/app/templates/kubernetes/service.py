SERVICE_TEMPLATE = """apiVersion: v1
kind: Service

metadata:
  name: {app_name}-service

spec:
  selector:
    app: {app_name}

  ports:
    - protocol: TCP
      port: {service_port}
      targetPort: {container_port}

  type: {service_type}
"""