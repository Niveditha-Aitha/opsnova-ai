import FeatureCard from "./FeatureCard";

type Props = {
  onSelectExpert?: (expert: string) => void;
};

function FeatureGrid({ onSelectExpert }: Props) {
  const features = [
    {
      id: "docker",
      icon: "🐳",
      title: "Docker Expert",
      description: "Generate Dockerfiles, Docker Compose and .dockerignore.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "kubernetes",
      icon: "☸",
      title: "Kubernetes Expert",
      description: "Generate Deployments, Services, Ingress and ConfigMaps.",
      color: "from-indigo-500 to-blue-500",
    },
    {
      id: "jenkins",
      icon: "🔧",
      title: "Jenkins Expert",
      description: "Create production-ready Jenkins pipelines.",
      color: "from-red-500 to-orange-500",
    },
    {
      id: "terraform",
      icon: "☁",
      title: "Terraform Expert",
      description: "Provision cloud infrastructure using IaC.",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "github-actions",
      icon: "⚙",
      title: "GitHub Actions",
      description: "Generate modern GitHub CI/CD workflows.",
      color: "from-gray-500 to-slate-500",
    },
    {
      id: "ansible",
      icon: "📘",
      title: "Ansible Expert",
      description: "Automate servers with Ansible Playbooks.",
      color: "from-emerald-500 to-green-500",
    },
    {
      id: "aws",
      icon: "☁️",
      title: "AWS Expert",
      description: "Generate CloudFormation and AWS CLI scripts.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      id: "cicd",
      icon: "🚀",
      title: "CI/CD Expert",
      description: "Build complete DevOps pipelines.",
      color: "from-pink-500 to-red-500",
    },
    {
      id: "linux",
      icon: "🐧",
      title: "Linux Expert",
      description: "Linux commands, Bash automation and cheat sheets.",
      color: "from-lime-500 to-green-500",
    },
    {
      id: "troubleshooter",
      icon: "🔍",
      title: "Troubleshooter",
      description: "Analyze DevOps logs and suggest fixes.",
      color: "from-cyan-500 to-blue-500",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto mt-10 px-8">

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

        {features.map((feature) => (
          <FeatureCard
    key={feature.id}
    icon={feature.icon}
    title={feature.title}
    description={feature.description}
    color={feature.color}
    onClick={() => onSelectExpert?.(feature.id)}
/>
        ))}

      </div>

    </section>
  );
}

export default FeatureGrid;