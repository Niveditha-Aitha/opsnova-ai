CONFIGMAP_TEMPLATE = """apiVersion: v1
kind: ConfigMap

metadata:
  name: {app_name}-config

data:
{config_data}
"""