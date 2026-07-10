import { useState } from "react";

import type {
  AWSRequest,
} from "../../api/awsApi";

type Props = {
  onGenerate: (
    config: AWSRequest
  ) => void;

  loading: boolean;
};

function AwsForm({
  onGenerate,
  loading,
}: Props) {

  const [service, setService] = useState("EC2");

  const [resourceName, setResourceName] = useState("web-server");

  const [region, setRegion] = useState("us-east-1");

  const [instanceType, setInstanceType] = useState("t2.micro");

  const [amiId, setAmiId] = useState("ami-0c02fb55956c7d316");

  const [bucketName, setBucketName] = useState("");

  const [vpcCidr, setVpcCidr] = useState("10.0.0.0/16");

  const [iamRoleName, setIamRoleName] = useState("EC2Role");

  const [lambdaRuntime, setLambdaRuntime] = useState("python3.12");

  const [lambdaHandler, setLambdaHandler] = useState("lambda_function.lambda_handler");

  const [databaseEngine, setDatabaseEngine] = useState("mysql");

  const [tags, setTags] = useState("OpsNova");

  const handleSubmit = () => {
    onGenerate({
      service,
      resource_name: resourceName,
      region,
      instance_type: instanceType,
      ami_id: amiId,
      bucket_name: bucketName,
      vpc_cidr: vpcCidr,
      iam_role_name: iamRoleName,
      lambda_runtime: lambdaRuntime,
      lambda_handler: lambdaHandler,
      database_engine: databaseEngine,
      tags,
    });
  };

  return (
    <div className="w-1/2 bg-slate-900 rounded-2xl border border-slate-800 p-6">

      <h2 className="text-2xl font-bold mb-6">
        ☁ AWS Expert
      </h2>

      <div className="space-y-5">

        <select
          className="w-full bg-slate-800 p-3 rounded-xl"
          value={service}
          onChange={(e) => setService(e.target.value)}
        >
          <option>EC2</option>
          <option>S3</option>
          <option>VPC</option>
          <option>IAM</option>
          <option>Lambda</option>
          <option>RDS</option>
        </select>

        <input
          className="w-full bg-slate-800 p-3 rounded-xl"
          placeholder="Resource Name"
          value={resourceName}
          onChange={(e) => setResourceName(e.target.value)}
        />

        <input
          className="w-full bg-slate-800 p-3 rounded-xl"
          placeholder="Region"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        />

        {service === "EC2" && (
          <>
            <input
              className="w-full bg-slate-800 p-3 rounded-xl"
              placeholder="Instance Type"
              value={instanceType}
              onChange={(e) => setInstanceType(e.target.value)}
            />

            <input
              className="w-full bg-slate-800 p-3 rounded-xl"
              placeholder="AMI ID"
              value={amiId}
              onChange={(e) => setAmiId(e.target.value)}
            />
          </>
        )}

        {service === "S3" && (
          <input
            className="w-full bg-slate-800 p-3 rounded-xl"
            placeholder="Bucket Name"
            value={bucketName}
            onChange={(e) => setBucketName(e.target.value)}
          />
        )}

        {service === "VPC" && (
          <input
            className="w-full bg-slate-800 p-3 rounded-xl"
            placeholder="VPC CIDR"
            value={vpcCidr}
            onChange={(e) => setVpcCidr(e.target.value)}
          />
        )}

        {service === "IAM" && (
          <input
            className="w-full bg-slate-800 p-3 rounded-xl"
            placeholder="IAM Role Name"
            value={iamRoleName}
            onChange={(e) => setIamRoleName(e.target.value)}
          />
        )}

        {service === "Lambda" && (
          <>
            <input
              className="w-full bg-slate-800 p-3 rounded-xl"
              placeholder="Runtime"
              value={lambdaRuntime}
              onChange={(e) => setLambdaRuntime(e.target.value)}
            />

            <input
              className="w-full bg-slate-800 p-3 rounded-xl"
              placeholder="Handler"
              value={lambdaHandler}
              onChange={(e) => setLambdaHandler(e.target.value)}
            />
          </>
        )}

        {service === "RDS" && (
          <select
            className="w-full bg-slate-800 p-3 rounded-xl"
            value={databaseEngine}
            onChange={(e) => setDatabaseEngine(e.target.value)}
          >
            <option>mysql</option>
            <option>postgres</option>
            <option>mariadb</option>
          </select>
        )}

        <input
          className="w-full bg-slate-800 p-3 rounded-xl"
          placeholder="Tags"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />

        <button
          type="button"
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg disabled:opacity-50"
        >
          {loading
            ? "⏳ Generating..."
            : "🚀 Generate AWS Configuration"}
        </button>

      </div>

    </div>
  );
}

export default AwsForm;