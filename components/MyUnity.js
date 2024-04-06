// import React from "react";
// import { Unity, useUnityContext } from "react-unity-webgl";
// import { View } from "react-native";

// const unityContextLocation = "MyUnityBuild/Build";

// export default function MyUnity() {
//   const { unityProvider } = useUnityContext({
//     loaderUrl: `${unityContextLocation}"G_Quiz.loader.js"`,
//     dataUrl: `${unityContextLocation}"webgl.data"`,
//     frameworkUrl: `${unityContextLocation}"bulid.framework.js"`,
//     codeUrl: `${unityContextLocation}"bulid.wasm"`,
//   });
//   return <Unity unityProvider={unityProvider} />;
// }
// ----------------------------------------------------

import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function MyUnity() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "MyUnityBuild/Build/G_Quiz.loader.js",
    dataUrl: "MyUnityBuild/Build/webgl.data",
    frameworkUrl: "MyUnityBuild/Build/bulid.framework.js",
    codeUrl: "MyUnityBuild/Build/bulid.wasm",
  });

  return (
    <Unity unityProvider={unityProvider} style={{ width: 800, height: 600 }} />
  );
}
