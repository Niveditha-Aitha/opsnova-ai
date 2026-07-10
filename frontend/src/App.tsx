import { useEffect, useState } from "react";

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
/>
      )}
    
    {currentPage === "github" && (
    <GitHub />
)}

      {currentPage === "docker-info" && <DockerInfo />}

      {currentPage === "kubernetes-info" && <KubernetesInfo />}

      {currentPage === "jenkins-info" && <JenkinsInfo />}

      {currentPage === "terraform-info" && <TerraformInfo />}

      {currentPage === "githubactions-info" && <GitHubActionsInfo />}

      {currentPage === "aws-info" && <AwsInfo />}

      {currentPage === "ansible-info" && <AnsibleInfo />}

      {currentPage === "cicd-info" && <CicdInfo />}

      {currentPage === "linux-info" && <LinuxInfo />}

      {currentPage === "troubleshooter-info" && <TroubleshooterInfo />}
 
     <LoginModal
  isOpen={showLoginModal}
  onClose={() => setShowLoginModal(false)}
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