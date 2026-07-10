import Editor from "@monaco-editor/react";

type Props = {
  code: string;
  editable?: boolean;
  onChange?: (value: string) => void;
  height?: string;
};

function CodeEditor({
  code,
  editable = false,
  onChange,
  height = "500px",
}: Props) {
  return (
    <Editor
      height={height}
      defaultLanguage="plaintext"
      theme="vs-dark"
      value={code}
      onChange={(value) => onChange?.(value ?? "")}
      options={{
        minimap: {
          enabled: false,
        },
        fontSize: 15,
        wordWrap: "on",
        readOnly: !editable,
      }}
    />
  );
}

export default CodeEditor;