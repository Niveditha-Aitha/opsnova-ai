import { useState } from "react";
import { generateKubernetes } from "../../api/kubernetesApi";
import type {
  KubernetesRequest,
  KubernetesResponse,
} from "../../api/kubernetesApi";

import KubernetesForm from "./KubernetesForm";
import KubernetesOutput from "./KubernetesOutput";

type KubernetesWorkspaceProps = {
  onRequireLogin: () => void;
};

function KubernetesWorkspace({
  onRequireLogin,
}: KubernetesWorkspaceProps) {

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState<KubernetesRequest>({
    app_name: "",
    image_name: "",
    replicas: 1,

    container_port: 80,

    service_port: 80,
    service_type: "ClusterIP",

    host: "example.com",

    config_data: {},

    secret_data: {},

    min_replicas: 2,
    max_replicas: 10,
    cpu_utilization: 80,
  });

  const [output, setOutput] =
    useState<KubernetesResponse | null>(null);

  const handleGenerate = async () => {
    const currentUser = localStorage.getItem("opsnova_current_user");

if (!currentUser) {
  onRequireLogin();
  return;
}
    try {
      setLoading(true);

      const result = await generateKubernetes(formData);

      setOutput(result);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 p-6 overflow-auto">

      <h1 className="text-3xl font-bold mb-6">
        Kubernetes Expert
      </h1>

      <div className="grid grid-cols-2 gap-6">

        <KubernetesForm
          formData={formData}
          setFormData={setFormData}
          onGenerate={handleGenerate}
          loading={loading}
        />

        <KubernetesOutput output={output} />

      </div>

    </div>
  );
}

export default KubernetesWorkspace;