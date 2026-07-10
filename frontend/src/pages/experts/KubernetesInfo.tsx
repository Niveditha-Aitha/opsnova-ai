function KubernetesInfo() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto mt-10 max-w-6xl rounded-3xl border border-slate-800 bg-slate-900 p-8">
        <h2 className="text-3xl font-semibold">"Automate. Scale. Heal."</h2>
      </section>
      <section className="mx-auto mt-10 max-w-6xl rounded-3xl border border-slate-800 bg-slate-900 p-8">
        <h2 className="text-3xl font-bold">📖 What is Kubernetes?</h2>
        <p className="mt-6 text-lg leading-9 text-slate-300">Kubernetes is an open-source container orchestration platform that automates deployment, scaling and management of containerized applications. It provides self-healing, load balancing and rolling updates across clusters.</p>
      </section>
      <section className="mx-auto mt-10 max-w-6xl">
        <h2 className="mb-8 text-3xl font-bold">✨ Why Use Kubernetes?</h2>
        <div className="grid gap-6 md:grid-cols-3">{["☸ Container Orchestration","📈 Auto Scaling","🔄 Self Healing","⚖ Load Balancing","🚀 Rolling Updates","🔐 High Availability"].map(item=><div key={item} className="rounded-2xl border border-slate-800 bg-slate-900 p-6"><p className="text-lg">{item}</p></div>)}</div>
      </section>
      <section className="mx-auto mt-14 max-w-6xl rounded-3xl border border-slate-800 bg-slate-900 p-10">
        <h2 className="mb-10 text-3xl font-bold">🏗 Kubernetes Workflow</h2>
        <div className="flex flex-wrap items-center justify-center gap-6 text-center">{["Developer","Docker Image","Deployment","Pods","Service","Users"].map((s,i)=><div key={s} className="flex items-center gap-6"><div className="rounded-xl bg-slate-800 px-6 py-4 font-semibold">{s}</div>{i!==5&&<span className="text-3xl text-blue-400">➜</span>}</div>)}</div>
      </section>
      <section className="mx-auto mt-14 max-w-6xl rounded-3xl border border-slate-800 bg-slate-900 p-8">
        <h2 className="mb-8 text-3xl font-bold">⚡ Common kubectl Commands</h2>
        <div className="space-y-4 font-mono">{["kubectl get pods","kubectl get deployments","kubectl apply -f deployment.yaml","kubectl describe pod <pod-name>","kubectl logs <pod-name>","kubectl rollout restart deployment app"].map(c=><div key={c} className="rounded-xl bg-slate-800 p-4">{c}</div>)}</div>
      </section>
      <section className="mx-auto mt-14 max-w-6xl rounded-3xl border border-slate-800 bg-slate-900 p-8">
        <h2 className="text-3xl font-bold">💡 Best Practices</h2>
        <ul className="mt-6 space-y-4 text-lg text-slate-300"><li>✅ Use Namespaces</li><li>✅ Configure Resource Requests & Limits</li><li>✅ Use Readiness & Liveness Probes</li><li>✅ Store Secrets in Kubernetes Secrets</li><li>✅ Use ConfigMaps</li><li>✅ Prefer Declarative YAML</li></ul>
      </section>
      <section className="mx-auto mt-14 max-w-6xl rounded-3xl border border-slate-800 bg-slate-900 p-8">
        <h2 className="mb-8 text-3xl font-bold">📚 Official Resources</h2>
        <div className="space-y-5">
          <a href="https://kubernetes.io/" target="_blank" rel="noreferrer" className="block text-blue-400 hover:text-blue-300">🌐 Kubernetes Official Website</a>
          <a href="https://kubernetes.io/docs/" target="_blank" rel="noreferrer" className="block text-blue-400 hover:text-blue-300">📖 Kubernetes Documentation</a>
          <a href="https://github.com/kubernetes/kubernetes" target="_blank" rel="noreferrer" className="block text-blue-400 hover:text-blue-300">💻 Kubernetes GitHub</a>
        </div>
      </section>
      <section className="mx-auto mt-16 mb-20 max-w-6xl rounded-3xl border border-blue-500 bg-slate-900 p-10 text-center">
        <h2 className="text-3xl font-bold">Ready to Generate Kubernetes YAML?</h2>
        <p className="mt-5 text-slate-400">Launch the Kubernetes Expert to generate Deployments, Services, ConfigMaps, Secrets, Ingress and HPA manifests.</p>
        <button className="mt-10 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 text-lg font-semibold transition hover:scale-105">☸ Launch Kubernetes Expert</button>
      </section>
    </main>
  );
}
export default KubernetesInfo;
