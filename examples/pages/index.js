import React from "react";
import useFitText from "use-fit-text";

function Example1() {
  const { fontSize, ref } = useFitText();
  return (
    <div
      ref={ref}
      style={{ fontSize, height: 40, width: 120, border: "1px solid #ccc" }}
    >
      Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
      consectetur
    </div>
  );
}

function Example2() {
  const { fontSize, ref } = useFitText();
  return (
    <div
      ref={ref}
      style={{ fontSize, height: 40, width: 120, border: "1px solid #ccc" }}
    >
      <div style={{ whiteSpace: "nowrap" }}>
        Lorem ipsum dolor sit amet, consectetur
      </div>
    </div>
  );
}

function Page() {
  return (
    <div style={{ fontSize: 16 }}>
      <Example1 />
      <Example2 />
    </div>
  );
}

export default Page;
