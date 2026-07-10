import { useState } from "react";

import type { TerraformRequest } from "../../api/terraformApi";

type Props = {
  onGenerate: (config: TerraformRequest) => void;
  loading: boolean;
};

function TerraformForm({ onGenerate, loading }: Props) {
  const [cloudProvider, setCloudProvider] = useState("AWS");
  const [resourceType, setResourceType] = useState("EC2");
  const [resourceName, setResourceName] = useState("");

  const [region, setRegion] = useState("us-east-1");

  const [instanceType, setInstanceType] = useState("t2.micro");

  const [bucketName, setBucketName] = useState("");

  const [vpcCidr, setVpcCidr] = useState("10.0.0.0/16");

  const [enablePublicIP, setEnablePublicIP] =
    useState(true);

  const [tags, setTags] = useState("OpsNova");

  const handleSubmit = () => {
    onGenerate({
      cloud_provider: cloudProvider,
      resource_type: resourceType,
      resource_name: resourceName,
      region,
      instance_type: instanceType,
      bucket_name: bucketName,
      vpc_cidr: vpcCidr,
      enable_public_ip: enablePublicIP,
      tags,
    });
  };

  return (
    <div className="w-1/2 bg-slate-900 rounded-2xl p-6 border border-slate-800">

      <h2 className="text-2xl font-bold mb-6">
        ☁ Terraform Expert
      </h2>

      <div className="space-y-5">

        {/* Cloud Provider */}

        <select
          className="w-full bg-slate-800 p-3 rounded-xl"
          value={cloudProvider}
          onChange={(e) => {
            const provider = e.target.value;

            setCloudProvider(provider);

            if (provider === "AWS") {
              setResourceType("EC2");
              setRegion("us-east-1");
            }

            if (provider === "Azure") {
              setResourceType("Resource Group");
              setRegion("East US");
            }

            if (provider === "GCP") {
              setResourceType("Compute");
              setRegion("us-central1");
            }
          }}
        >
          <option>AWS</option>
          <option>Azure</option>
          <option>GCP</option>
        </select>

        {/* Resource */}

        <select
          className="w-full bg-slate-800 p-3 rounded-xl"
          value={resourceType}
          onChange={(e) =>
            setResourceType(e.target.value)
          }
        >
          {cloudProvider === "AWS" && (
            <>
              <option>EC2</option>
              <option>S3</option>
              <option>VPC</option>
            </>
          )}

          {cloudProvider === "Azure" && (
            <>
              <option>Resource Group</option>
              <option>Virtual Machine</option>
              <option>Storage Account</option>
            </>
          )}

          {cloudProvider === "GCP" && (
            <>
              <option>Compute</option>
              <option>Storage</option>
            </>
          )}
        </select>

        <input
          className="w-full bg-slate-800 p-3 rounded-xl"
          placeholder="Resource Name"
          value={resourceName}
          onChange={(e) =>
            setResourceName(e.target.value)
          }
        />

        <input
          className="w-full bg-slate-800 p-3 rounded-xl"
          placeholder="Region"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        />

        <input
          className="w-full bg-slate-800 p-3 rounded-xl"
          placeholder="Instance Type"
          value={instanceType}
          onChange={(e) =>
            setInstanceType(e.target.value)
          }
        />

        <input
          className="w-full bg-slate-800 p-3 rounded-xl"
          placeholder="Bucket Name"
          value={bucketName}
          onChange={(e) =>
            setBucketName(e.target.value)
          }
        />

        <input
          className="w-full bg-slate-800 p-3 rounded-xl"
          placeholder="VPC CIDR"
          value={vpcCidr}
          onChange={(e) =>
            setVpcCidr(e.target.value)
          }
        />

        <input
          className="w-full bg-slate-800 p-3 rounded-xl"
          placeholder="Tags"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />

        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={enablePublicIP}
            onChange={(e) =>
              setEnablePublicIP(e.target.checked)
            }
          />

          Enable Public IP
        </label>

        <button
          type="button"
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg disabled:opacity-50"
        >
          {loading
            ? "⏳ Generating..."
            : "🚀 Generate Terraform"}
        </button>

      </div>

    </div>
  );
}

export default TerraformForm;