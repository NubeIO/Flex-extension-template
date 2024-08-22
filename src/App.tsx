import { ThemeProvider } from '@/components/themeProvider';
import './App.css';

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="content">
        <h1>Rsbuild with React</h1>
        <p>Start building amazing things with Rsbuild!!!</p>
      </div>
    </ThemeProvider>
  );
};

export default App;
