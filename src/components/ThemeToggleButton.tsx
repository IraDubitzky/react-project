import { useTheme } from './hooks/useTheme';

const ThemeToggleButton = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="px-3 py-2 rounded bg-gray-200 dark:bg-gray-700"
        >
            {theme === 'light' ? '🌙' : '☀️'}
        </button>
    );
};

export default ThemeToggleButton;
