import { useEffect, useState } from "react";
import { ThemeProvider } from "./Contexts/Theme";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };

  //actual change in theme

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add("themeMode");
  }, []);

  return (
    <ThemeProvider vale={{ themeMode, darkTheme, lightTheme }}>
      {" "}
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* {themeButton} */}
          </div>
          <h1>Hey Sharon</h1>

          <div className="w-full max-w-sm mx-auto">{/* card */}</div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
