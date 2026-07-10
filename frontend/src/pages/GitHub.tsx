import { useEffect, useState } from "react";

type GitHubUser = {
  login: string;
  avatar_url: string;
  name: string | null;
  email: string | null;
};

type Repository = {
  id: number;
  name: string;
  private: boolean;
  html_url: string;
};

function GitHub() {

  const [user, setUser] = useState<GitHubUser | null>(null);

  const [repos, setRepos] = useState<Repository[]>([]);

  const [loading, setLoading] = useState(true);

    useEffect(() => {

    async function loadGitHub() {

      try {

        const userRes = await fetch(
          "http://127.0.0.1:8000/github/profile"
        );

        const userData = await userRes.json();

        setUser(userData);

        const repoRes = await fetch(
          "http://127.0.0.1:8000/github/repositories"
        );

        const repoData = await repoRes.json();

        setRepos(repoData);

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }

    }

    loadGitHub();

  }, []);

    if (loading) {

    return (
      <div className="p-10 text-white">
        Loading GitHub...
      </div>
    );

  }

  return (

    <div className="p-10 text-white">

      <div className="mb-8 flex items-center gap-6">

        <img
          src={user?.avatar_url}
          alt=""
          className="h-20 w-20 rounded-full"
        />

        <div>

          <h1 className="text-3xl font-bold">

            {user?.login}

          </h1>

          <p className="text-slate-400">

            {user?.email ?? "No public email"}

          </p>

        </div>

      </div>

      <h2 className="mb-4 text-2xl font-bold">

        Repositories

      </h2>

      <div className="space-y-3">

        {repos.map((repo) => (

          <div
            key={repo.id}
            className="rounded-xl border border-slate-700 bg-slate-900 p-5"
          >

            <h3 className="text-xl font-semibold">

              {repo.name}

            </h3>

            <p className="text-slate-400">

              {repo.private ? "Private" : "Public"}

            </p>

          </div>

        ))}

      </div>

    </div>

  );

}

export default GitHub;