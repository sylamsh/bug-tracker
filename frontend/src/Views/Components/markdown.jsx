import React, {useState} from "react";
import MDEditor from "@uiw/react-md-editor";

const mdKaTeX = `Woke up this mornin'

\`print "Hello World!"\`
`;

// export default function Markdown(props) {
//   const {value, changeInput} = props;
//   const [text, setText] = useState(`# title`);
//   return (
//     <div className="container">
//       <MDEditor height={200} value={text} onChange={setText} />
//       {/* <input
//         type="text"
//         onChange={(e) => {
//           setText(e.target.value);
//         }}
//       /> */}
//       <div style={{ padding: "50px 0 0 0" }} />
//       <MDEditor.Markdown source={text} />
//     </div>
//   );
// }

export default function Markdown(props) {
  const {name, value, changeInput} = props;
  const [text, setText] = useState(value);

  return (
    <div className="container">
      <MDEditor
        value={text}
        onChange={(val) => {
          setText(val);
          changeInput(undefined, val, name);
        }}
      />
    </div>
  );
}

