import { useState } from "react";

import Sidebar from "../components/Sidebar";

import DockerWorkspace from "../features/docker/DockerWorkspace";
import KubernetesWorkspace from "../features/kubernetes/KubernetesWorkspace";
import JenkinsWorkspace from "../features/jenkins/JenkinsWorkspace";
import TerraformWorkspace from "../features/terraform/TerraformWorkspace";
import GitHubActionsWorkspace from "../features/github-actions/GitHubActionsWorkspace";
import AnsibleWorkspace from "../features/ansible/AnsibleWorkspace";
import AwsWorkspace from "../features/aws/AwsWorkspace";
import CicdWorkspace from "../features/cicd/CicdWorkspace";
import LinuxWorkspace from "../features/linux/LinuxWorkspace";
import TroubleshooterWorkspace from "../features/troubleshooter/TroubleshooterWorkspace";

type DashboardProps = {
  searchTerm: string;
  onRequireLogin: () => void;
};

function Dashboard({ searchTerm, onRequireLogin }: DashboardProps) {
  const [selectedExpert, setSelectedExpert] = useState("");
  const filteredExpert = selectedExpert
  .toLowerCase()
  .includes(searchTerm.toLowerCase());

  return (
    <div className="flex h-[calc(100vh-80px)] overflow-hidden">

      <Sidebar
        selectedExpert={selectedExpert}
        setSelectedExpert={setSelectedExpert}
      />

      <main className="flex-1 overflow-y-auto bg-slate-950 p-8">

        {/* Welcome Screen */}

        {selectedExpert === "" && (
          <div className="flex h-full items-center justify-center">

            <div className="max-w-3xl text-center">

              <h1 className="text-5xl font-bold">
                🚀 OpsNova AI Workspace
              </h1>

              <p className="mt-6 text-xl text-slate-400 leading-8">
                Welcome to your AI-powered DevOps workspace.
                Choose an expert from the sidebar to generate
                production-ready DevOps configurations.
              </p>

              <div className="mt-12 grid gap-6 md:grid-cols-2">

                <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                  <h2 className="text-xl font-semibold">
                    📦 Infrastructure
                  </h2>

                  <p className="mt-3 text-slate-400">
                    Docker, Kubernetes,
                    Terraform & AWS
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                  <h2 className="text-xl font-semibold">
                    ⚙ Automation
                  </h2>

                  <p className="mt-3 text-slate-400">
                    Jenkins, GitHub Actions,
                    CI/CD & Ansible
                  </p>
                </div>

              </div>

            </div>

          </div>
        )}

        {filteredExpert && selectedExpert === "docker" && <DockerWorkspace
  onRequireLogin={onRequireLogin}
/>}

        {filteredExpert && selectedExpert === "kubernetes" && <KubernetesWorkspace onRequireLogin={onRequireLogin} />}

        {filteredExpert && selectedExpert === "jenkins" && <JenkinsWorkspace onRequireLogin={onRequireLogin} />}

        {filteredExpert && selectedExpert === "terraform" && <TerraformWorkspace onRequireLogin={onRequireLogin} />}

        {filteredExpert && selectedExpert === "github-actions" && (
          <GitHubActionsWorkspace onRequireLogin={onRequireLogin} />
        )}

        {filteredExpert && selectedExpert === "ansible" && (
          <AnsibleWorkspace onRequireLogin={onRequireLogin}  />
        )}

        {filteredExpert && selectedExpert === "aws" && <AwsWorkspace onRequireLogin={onRequireLogin} />}

        {filteredExpert && selectedExpert === "cicd" && <CicdWorkspace onRequireLogin={onRequireLogin}  />}

        {filteredExpert && selectedExpert === "linux" && <LinuxWorkspace onRequireLogin={onRequireLogin}  />}

        {filteredExpert && selectedExpert === "troubleshooter" && (
          <TroubleshooterWorkspace onRequireLogin={onRequireLogin} />
        )}

      </main>

    </div>
  );
}

export default Dashboard;