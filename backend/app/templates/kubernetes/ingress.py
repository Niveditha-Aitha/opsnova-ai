INGRESS_TEMPLATE = """apiVersion: networking.k8s.io/v1
kind: Ingress

metadata:
  name: {app_name}-ingress

spec:
  rules:
    - host: {host}
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: {app_name}-service
                port:
                  number: {service_port}
"""