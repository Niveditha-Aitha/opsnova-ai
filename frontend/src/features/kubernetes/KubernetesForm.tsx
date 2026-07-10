import type { Dispatch, SetStateAction } from "react";
import type { KubernetesRequest } from "../../api/kubernetesApi";

type KubernetesFormProps = {
  formData: KubernetesRequest;
  setFormData: Dispatch<SetStateAction<KubernetesRequest>>;
  onGenerate: () => void;
  loading: boolean;
};

function KubernetesForm({
  formData,
  setFormData,
  onGenerate,
  loading,
}: KubernetesFormProps) {
  return (
    <div className="bg-slate-900 rounded-xl p-6 border border-slate-800 space-y-4">
      <div>
        <label className="block mb-1 text-sm font-medium">
          Application Name
        </label>

        <input
          className="w-full rounded-lg bg-slate-800 p-2 border border-slate-700"
          value={formData.app_name}
          onChange={(e) =>
            setFormData({
              ...formData,
              app_name: e.target.value,
            })
          }
        />
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium">
          Image Name
        </label>

        <input
          className="w-full rounded-lg bg-slate-800 p-2 border border-slate-700"
          value={formData.image_name}
          onChange={(e) =>
            setFormData({
              ...formData,
              image_name: e.target.value,
            })
          }
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 text-sm font-medium">
            Replicas
          </label>

          <input
            type="number"
            className="w-full rounded-lg bg-slate-800 p-2 border border-slate-700"
            value={formData.replicas}
            onChange={(e) =>
              setFormData({
                ...formData,
                replicas: Number(e.target.value),
              })
            }
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">
            Container Port
          </label>

          <input
            type="number"
            className="w-full rounded-lg bg-slate-800 p-2 border border-slate-700"
            value={formData.container_port}
            onChange={(e) =>
              setFormData({
                ...formData,
                container_port: Number(e.target.value),
              })
            }
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 text-sm font-medium">
            Service Port
          </label>

          <input
            type="number"
            className="w-full rounded-lg bg-slate-800 p-2 border border-slate-700"
            value={formData.service_port}
            onChange={(e) =>
              setFormData({
                ...formData,
                service_port: Number(e.target.value),
              })
            }
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">
            Service Type
          </label>

          <select
            className="w-full rounded-lg bg-slate-800 p-2 border border-slate-700"
            value={formData.service_type}
            onChange={(e) =>
              setFormData({
                ...formData,
                service_type: e.target.value,
              })
            }
          >
            <option value="ClusterIP">ClusterIP</option>
            <option value="NodePort">NodePort</option>
            <option value="LoadBalancer">LoadBalancer</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium">
          Host
        </label>

        <input
          className="w-full rounded-lg bg-slate-800 p-2 border border-slate-700"
          value={formData.host}
          onChange={(e) =>
            setFormData({
              ...formData,
              host: e.target.value,
            })
          }
        />
      </div>

      <button
        onClick={onGenerate}
        disabled={loading}
        className="w-full rounded-lg bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 p-3 font-semibold transition"
      >
        {loading ? "Generating..." : "Generate Kubernetes"}
      </button>
    </div>
  );
}

export default KubernetesForm;