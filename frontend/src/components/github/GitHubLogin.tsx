import { githubLogin } from "../../api/githubApi";

function GitHubLogin() {
  return (
    <button
  onClick={githubLogin}
  className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-base font-semibold text-white transition-all duration-300 hover:border-purple-500 hover:bg-slate-800"
>
  🐙 Connect GitHub
</button>
  );
}

export default GitHubLogin;