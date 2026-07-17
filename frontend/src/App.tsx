import { useEffect, useState } from "react";

import { getUser } from "./services/authService";

import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Vault from "./pages/Vault";
import Home from "./pages/Home";
import VaultEditor from "./pages/VaultEditor";
import type { VaultItem } from "./types/vault";
import LoginModal from "./components/LoginModal";
import AIChatButton from "./components/chat/AIChatButton";
import AIChatPanel from "./components/chat/AIChatPanel";
import GitHub from "./pages/GitHub";
import DockerWorkspace from "./features/docker/DockerWorkspace";
import KubernetesWorkspace from "./features/kubernetes/KubernetesWorkspace";
import JenkinsWorkspace from "./features/jenkins/JenkinsWorkspace";
import TerraformWorkspace from "./features/terraform/TerraformWorkspace";
import GitHubActionsWorkspace from "./features/github-actions/GitHubActionsWorkspace";
import AnsibleWorkspace from "./features/ansible/AnsibleWorkspace";
import AwsWorkspace from "./features/aws/AwsWorkspace";
import CicdWorkspace from "./features/cicd/CicdWorkspace";
import LinuxWorkspace from "./features/linux/LinuxWorkspace";
import TroubleshooterWorkspace from "./features/troubleshooter/TroubleshooterWorkspace";

import DockerInfo from "./pages/experts/DockerInfo";
import KubernetesInfo from "./pages/experts/KubernetesInfo";
import JenkinsInfo from "./pages/experts/JenkinsInfo";
import TerraformInfo from "./pages/experts/TerraformInfo";
import GitHubActionsInfo from "./pages/experts/GitHubActionsInfo";
import AwsInfo from "./pages/experts/AwsInfo";
import AnsibleInfo from "./pages/experts/AnsibleInfo";
import CicdInfo from "./pages/experts/CicdInfo";
import LinuxInfo from "./pages/experts/LinuxInfo";
import TroubleshooterInfo from "./pages/experts/TroubleshooterInfo";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedVaultItem, setSelectedVaultItem] =
  useState<VaultItem | null>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showAI, setShowAI] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(getUser());

  useEffect(() => {
  const params = new URLSearchParams(window.location.search);

  if (params.get("github") === "connected") {
    setCurrentPage("github");

    window.history.replaceState({}, "", "/");
  }
}, []);


  const openExpert = (expert: string) => {
    switch (expert) {
      case "docker":
        setCurrentPage("docker-info");
        break;

      case "kubernetes":
        setCurrentPage("kubernetes-info");
        break;

      case "jenkins":
        setCurrentPage("jenkins-info");
        break;

      case "terraform":
        setCurrentPage("terraform-info");
        break;

      case "github-actions":
        setCurrentPage("githubactions-info");
        break;

      case "aws":
        setCurrentPage("aws-info");
        break;

      case "ansible":
        setCurrentPage("ansible-info");
        break;

      case "cicd":
        setCurrentPage("cicd-info");
        break;

      case "linux":
        setCurrentPage("linux-info");
        break;

      case "troubleshooter":
        setCurrentPage("troubleshooter-info");
        break;

      default:
        setCurrentPage("home");
        break;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar
  onSearch={(value) => {
    setSearchTerm(value);

    if (value.trim() !== "") {
      setCurrentPage("dashboard");
    }
  }}
  onDashboard={() => setCurrentPage("dashboard")}
  onVault={() => setCurrentPage("vault")}
  onHome={() => setCurrentPage("home")}
  onLogin={() => setShowLoginModal(true)}
  loggedInUser={loggedInUser}
/>

{showAI && (
  <div className="fixed inset-0 bg-black/50">
    AI Panel
  </div>
)}

      {currentPage === "home" && (
        <Home onSelectExpert={openExpert} />
      )}
      

     {currentPage === "vault" && (
  <Vault
    onEdit={(item) => {
      setSelectedVaultItem(item);
      setCurrentPage("vault-editor");
    }}
  />
)}

{currentPage === "vault-editor" && selectedVaultItem && (
  <VaultEditor
    item={selectedVaultItem}
    onBack={() => {
      setSelectedVaultItem(null);
      setCurrentPage("vault");
    }}
  />
)}

      {currentPage === "dashboard" && (
        <Dashboard
    searchTerm={searchTerm}
    onRequireLogin={() => setShowLoginModal(true)}
    onBack={() => setCurrentPage("home")}
/>
      )}
    
    {currentPage === "github" && (
    <GitHub />
)}

      {currentPage === "docker-info" && (
  <DockerInfo
    onLaunch={() => setCurrentPage("docker-workspace")}
    onBack={() => setCurrentPage("home")}
  />
)}

{currentPage === "docker-workspace" && (
  <DockerWorkspace
    onRequireLogin={() => setShowLoginModal(true)}
     onBack={() => setCurrentPage("docker-info")}
  />
)}

      {currentPage === "kubernetes-workspace" && (
  <KubernetesWorkspace
    onRequireLogin={() => setShowLoginModal(true)}
     onBack={() => setCurrentPage("kubernetes-info")}
  />
)}

{currentPage === "kubernetes-info" && (
  <KubernetesInfo
    onLaunch={() => setCurrentPage("kubernetes-workspace")}
    onBack={() => setCurrentPage("home")}
  />
)}

{currentPage === "jenkins-workspace" && (
  <JenkinsWorkspace
    onRequireLogin={() => setShowLoginModal(true)}
    onBack={() => setCurrentPage("jenkins-info")}
  />
)}

      {currentPage === "jenkins-info" && (
  <JenkinsInfo
    onLaunch={() => setCurrentPage("jenkins-workspace")}
    onBack={() => setCurrentPage("home")}
  />
)}

{currentPage === "terraform-workspace" && (
  <TerraformWorkspace
    onRequireLogin={() => setShowLoginModal(true)}
    onBack={() => setCurrentPage("terraform-info")}
  />
)}

    {currentPage === "terraform-info" && (
  <TerraformInfo
    onLaunch={() => setCurrentPage("terraform-workspace")}
    onBack={() => setCurrentPage("home")}
  />
)}

{currentPage === "githubactions-workspace" && (
  <GitHubActionsWorkspace
    onRequireLogin={() => setShowLoginModal(true)}
    onBack={() => setCurrentPage("githubactions-info")}
  />
)}

{currentPage === "githubactions-info" && (
  <GitHubActionsInfo
    onLaunch={() => setCurrentPage("githubactions-workspace")}
    onBack={() => setCurrentPage("home")}
  />
)}

{currentPage === "ansible-workspace" && (
  <AnsibleWorkspace
    onRequireLogin={() => setShowLoginModal(true)}
    onBack={() => setCurrentPage("ansible-info")}
  />
)}

     {currentPage === "ansible-info" && (
  <AnsibleInfo
    onLaunch={() => setCurrentPage("ansible-workspace")}
    onBack={() => setCurrentPage("home")}
  />
)}

{currentPage === "aws-workspace" && (
  <AwsWorkspace
    onRequireLogin={() => setShowLoginModal(true)}
    onBack={() => setCurrentPage("aws-info")}
  />
)}

{currentPage === "aws-info" && (
  <AwsInfo
    onLaunch={() => setCurrentPage("aws-workspace")}
    onBack={() => setCurrentPage("home")}
  />
)}

{currentPage === "cicd-workspace" && (
  <CicdWorkspace
    onRequireLogin={() => setShowLoginModal(true)}
    onBack={() => setCurrentPage("cicd-info")}
  />
)}

    {currentPage === "cicd-info" && (
  <CicdInfo
    onLaunch={() => setCurrentPage("cicd-workspace")}
    onBack={() => setCurrentPage("home")}
  />
)}

{currentPage === "linux-workspace" && (
  <LinuxWorkspace
    onRequireLogin={() => setShowLoginModal(true)}
    onBack={() => setCurrentPage("linux-info")}
  />
)}

     {currentPage === "linux-info" && (
  <LinuxInfo
    onLaunch={() => setCurrentPage("linux-workspace")}
    onBack={() => setCurrentPage("home")}
  />
)}

{currentPage === "troubleshooter-workspace" && (
  <TroubleshooterWorkspace
    onRequireLogin={() => setShowLoginModal(true)}
    onBack={() => setCurrentPage("troubleshooter-info")}
  />
)}

   {currentPage === "troubleshooter-info" && (
  <TroubleshooterInfo
    onLaunch={() => setCurrentPage("troubleshooter-workspace")}
    onBack={() => setCurrentPage("home")}
  />
)}
 
     <LoginModal
  isOpen={showLoginModal}
  onClose={() => setShowLoginModal(false)}
  onLoginSuccess={() => {
    setLoggedInUser(getUser());
  }}
/>

<AIChatButton
    onClick={() => setShowAI(true)}
/>

<AIChatPanel
  isOpen={showAI}
  onClose={() => setShowAI(false)}
/>
    </div>
  );
}

export default App;