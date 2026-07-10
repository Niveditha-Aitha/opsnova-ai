SECRET_TEMPLATE = """apiVersion: v1
kind: Secret

metadata:
  name: {app_name}-secret

type: Opaque

stringData:
{secret_data}
"""