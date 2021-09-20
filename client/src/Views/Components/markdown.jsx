import React, {useState} from "react";
import MDEditor from "@uiw/react-md-editor";
import katex from "katex";
import "katex/dist/katex.css";
// import "./styles.css";

const mdKaTeX = `Woke up this mornin' 

\`print "Hello World!"\`
`;

export default function Markdown() {
  const [value, setValue] = useState(mdKaTeX);
  return (
    <div className="container">
      <MDEditor
        value={value}
        onChange={(val) => {
          setValue(val);
        }}
        previewOptions={{
          components: {
            code: ({ inline, children, className, ...props }) => {
              const txt = children[0] || "";
              if (inline) {
                if (typeof txt === "string" && /^\$\$(.*)\$\$/.test(txt)) {
                  const html = katex.renderToString(
                    txt.replace(/^\$\$(.*)\$\$/, "$1"),
                    {
                      throwOnError: false
                    }
                  );
                  return <code dangerouslySetInnerHTML={{ __html: html }} />;
                }
                return <code>{txt}</code>;
              }
              if (
                typeof txt === "string" &&
                typeof className === "string" &&
                /^language-katex/.test(className.toLocaleLowerCase())
              ) {
                const html = katex.renderToString(txt, {
                  throwOnError: false
                });
                console.log("props", txt, className, props);
                return <code dangerouslySetInnerHTML={{ __html: html }} />;
              }
              return <code className={String(className)}>{txt}</code>;
            }
          }
        }}
      />
    </div>
  );
}
