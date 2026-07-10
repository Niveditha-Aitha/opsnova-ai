function AwsInfo() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}

      <section className="mx-auto max-w-7xl px-8 pt-16">

        <div className="flex items-center gap-5">

          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-400 text-5xl shadow-xl">
            ☁️
          </div>

          <div>

            <h1 className="text-5xl font-bold">
              Amazon Web Services
            </h1>

            <p className="mt-2 text-xl text-slate-400">
              Cloud Computing Platform
            </p>

          </div>

        </div>

      </section>

      {/* Quote */}

      <section className="mx-auto mt-10 max-w-6xl rounded-3xl border border-slate-800 bg-slate-900 p-8">

        <h2 className="text-3xl font-semibold">
          "Build, Deploy and Scale in the Cloud."
        </h2>

      </section>

      {/* Overview */}

      <section className="mx-auto mt-10 max-w-6xl rounded-3xl border border-slate-800 bg-slate-900 p-8">

        <h2 className="text-3xl font-bold">
          📖 What is AWS?
        </h2>

        <p className="mt-6 text-lg leading-9 text-slate-300">

          Amazon Web Services (AWS) is the world's leading cloud
          computing platform providing more than 200 fully featured
          services including compute, storage, networking, databases,
          AI, analytics and security.

          <br /><br />

          AWS enables organizations to build scalable, reliable and
          secure applications while paying only for the resources
          they consume.

        </p>

      </section>

      {/* Benefits */}

      <section className="mx-auto mt-10 max-w-6xl">

        <h2 className="mb-8 text-3xl font-bold">
          ✨ Why Use AWS?
        </h2>

        <div className="grid gap-6 md:grid-cols-3">

          {[
            "☁ Global Cloud Infrastructure",
            "🚀 Highly Scalable",
            "💰 Pay As You Go",
            "🔐 Enterprise Security",
            "⚡ High Availability",
            "📈 200+ Cloud Services",
          ].map((item) => (

            <div
              key={item}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <p className="text-lg">{item}</p>
            </div>

          ))}

        </div>

      </section>

      {/* Workflow */}

      <section className="mx-auto mt-14 max-w-6xl rounded-3xl border border-slate-800 bg-slate-900 p-10">

        <h2 className="text-3xl font-bold mb-10">
          🏗 AWS Deployment Workflow
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-6 text-center">

          {[
            "Developer",
            "AWS CLI",
            "EC2 / ECS",
            "Load Balancer",
            "Cloud",
            "Users",
          ].map((step, index) => (

            <div
              key={step}
              className="flex items-center gap-6"
            >

              <div className="rounded-xl bg-slate-800 px-6 py-4 font-semibold">
                {step}
              </div>

              {index !== 5 && (
                <span className="text-3xl text-blue-400">
                  ➜
                </span>
              )}

            </div>

          ))}

        </div>

      </section>

      {/* Commands */}

      <section className="mx-auto mt-14 max-w-6xl rounded-3xl border border-slate-800 bg-slate-900 p-8">

        <h2 className="text-3xl font-bold mb-8">
          ⚡ Common AWS CLI Commands
        </h2>

        <div className="space-y-4 font-mono">

          <div className="rounded-xl bg-slate-800 p-4">
            aws configure
          </div>

          <div className="rounded-xl bg-slate-800 p-4">
            aws s3 ls
          </div>

          <div className="rounded-xl bg-slate-800 p-4">
            aws ec2 describe-instances
          </div>

          <div className="rounded-xl bg-slate-800 p-4">
            aws iam list-users
          </div>

          <div className="rounded-xl bg-slate-800 p-4">
            aws lambda list-functions
          </div>

          <div className="rounded-xl bg-slate-800 p-4">
            aws cloudformation deploy
          </div>

        </div>

      </section>

      {/* Best Practices */}

      <section className="mx-auto mt-14 max-w-6xl rounded-3xl border border-slate-800 bg-slate-900 p-8">

        <h2 className="text-3xl font-bold">
          💡 Best Practices
        </h2>

        <ul className="mt-6 space-y-4 text-lg text-slate-300">

          <li>✅ Follow the AWS Well-Architected Framework</li>

          <li>✅ Apply Least Privilege IAM Policies</li>

          <li>✅ Enable Multi-Factor Authentication (MFA)</li>

          <li>✅ Monitor Resources with CloudWatch</li>

          <li>✅ Store Secrets in AWS Secrets Manager</li>

          <li>✅ Use Auto Scaling and Load Balancers</li>

        </ul>

      </section>

      {/* Official Resources */}

      <section className="mx-auto mt-14 mb-20 max-w-6xl rounded-3xl border border-slate-800 bg-slate-900 p-8">

        <h2 className="text-3xl font-bold mb-8">
          📚 Official Resources
        </h2>

        <div className="space-y-5">

          <a
            href="https://aws.amazon.com/"
            target="_blank"
            rel="noreferrer"
            className="block text-blue-400 hover:text-blue-300"
          >
            🌐 AWS Official Website
          </a>

          <a
            href="https://docs.aws.amazon.com/"
            target="_blank"
            rel="noreferrer"
            className="block text-blue-400 hover:text-blue-300"
          >
            📖 AWS Documentation
          </a>

          <a
            href="https://github.com/aws"
            target="_blank"
            rel="noreferrer"
            className="block text-blue-400 hover:text-blue-300"
          >
            💻 AWS GitHub Repository
          </a>

          <a
            href="https://aws.amazon.com/cli/"
            target="_blank"
            rel="noreferrer"
            className="block text-blue-400 hover:text-blue-300"
          >
            ⚡ AWS CLI Documentation
          </a>

        </div>

      </section>

    </main>
  );
}

export default AwsInfo;