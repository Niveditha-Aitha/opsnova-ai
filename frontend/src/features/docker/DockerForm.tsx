import { useState } from "react";
import type { DockerRequest } from "../../api/dockerApi";
import {
  Card,
  Input,
  Select,
  Button,
} from "../../components/ui";

type Props = {
  onGenerate: (config: DockerRequest) => void;
  loading: boolean;
};

function DockerForm({ onGenerate, loading }: Props) {
  const [appName, setAppName] = useState("");
  const [language, setLanguage] = useState("Python");
const [framework, setFramework] = useState("FastAPI");
  const [port, setPort] = useState("8000");

  const handleSubmit = () => {
  onGenerate({
    app_name: appName,
    language: language,
    framework: framework,
    port: Number(port),
  });
};

  return (
   <Card className="w-1/2">

      <h2 className="text-2xl font-bold mb-6">
        🐳 Docker Expert
      </h2>

      <div className="space-y-5">

        <Input
          className="w-full bg-slate-800 p-3 rounded-xl"
          placeholder="Application Name"
          value={appName}
          onChange={(e) => setAppName(e.target.value)}
        />

        <Select
  className="w-full bg-slate-800 p-3 rounded-xl"
  value={language}
  onChange={(e) => {
    const lang = e.target.value;
    setLanguage(lang);

    if (lang === "Python") {
      setFramework("FastAPI");
    } else if (lang === "Node.js") {
      setFramework("Express");
    }
    switch (lang) {
  case "Python":
    setFramework("FastAPI");
    break;
  case "Node.js":
    setFramework("Express");
    break;
  case "Java":
    setFramework("Spring Boot");
    break;
  case ".NET":
    setFramework("ASP.NET Core");
    break;
  case "Go":
    setFramework("Gin");
    break;
  case "PHP":
    setFramework("Laravel");
    break;
  case "React":
    setFramework("Vite");
    break;
  case "Angular":
    setFramework("Angular CLI");
    break;
  case "Vue":
    setFramework("Vite");
    break;
  case "Rust":
    setFramework("Actix");
    break;
  case "Ruby":
    setFramework("Rails");
    break;
}
  }}
>
  <option value="Python">Python</option>
<option value="Node.js">Node.js</option>
<option value="Java">Java</option>
<option value=".NET">.NET</option>
<option value="Go">Go</option>
<option value="PHP">PHP</option>
<option value="React">React</option>
<option value="Angular">Angular</option>
<option value="Vue">Vue</option>
<option value="Rust">Rust</option>
<option value="Ruby">Ruby</option>
</Select>

<Select
  className="w-full bg-slate-800 p-3 rounded-xl"
  value={framework}
  onChange={(e) => setFramework(e.target.value)}
>
  {language === "Python" && (
    <>
      <option value="FastAPI">FastAPI</option>
      <option value="Flask">Flask</option>
      <option value="Django">Django</option>
    </>
  )}

  {language === "Node.js" && (
    <>
      <option value="Express">Express</option>
      <option value="NestJS">NestJS</option>
    </>
  )}

  {language === "Java" && (
  <>
    <option value="Spring Boot">Spring Boot</option>
  </>
)}

{language === ".NET" && (
  <>
    <option value="ASP.NET Core">ASP.NET Core</option>
  </>
)}

{language === "Go" && (
  <>
    <option value="Gin">Gin</option>
  </>
)}

{language === "PHP" && (
  <>
    <option value="Laravel">Laravel</option>
  </>
)}

{language === "React" && (
  <>
    <option value="Vite">Vite</option>
    <option value="Create React App">Create React App</option>
  </>
)}

{language === "Angular" && (
  <>
    <option value="Angular CLI">Angular CLI</option>
  </>
)}

{language === "Vue" && (
  <>
    <option value="Vite">Vite</option>
  </>
)}

{language === "Rust" && (
  <>
    <option value="Actix">Actix</option>
  </>
)}

{language === "Ruby" && (
  <>
    <option value="Rails">Rails</option>
  </>
)}
</Select>

        <Input
  placeholder="Port"
  type="number"
  value={port}
  onChange={(e) => setPort(e.target.value)}
/>

   <Button
  fullWidth
  type="button"
  onClick={handleSubmit}
  disabled={loading}
>
  {loading
    ? "⏳ Generating..."
    : "🚀 Generate Dockerfile"}
</Button>

      </div>

    </Card>
  );
}

export default DockerForm;