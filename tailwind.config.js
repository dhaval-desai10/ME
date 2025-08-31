/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'playfair': ['Playfair Display', 'serif'],
                'inter': ['Inter', 'sans-serif'],
            },
            colors: {
                primary: {
                    50: '#f0f9ff',
                    500: '#667eea',
                    600: '#5a67d8',
                    700: '#4c51bf',
                },
                accent: {
                    500: '#764ba2',
                    600: '#6b46c1',
                },
                border: "rgb(var(--color-border) / <alpha-value>)",
                input: "rgb(var(--color-input) / <alpha-value>)",
                ring: "rgb(var(--color-ring) / <alpha-value>)",
                background: "rgb(var(--color-background) / <alpha-value>)",
                foreground: "rgb(var(--color-foreground) / <alpha-value>)",
                destructive: {
                    DEFAULT: "rgb(var(--color-destructive) / <alpha-value>)",
                    foreground: "rgb(var(--color-destructive-foreground) / <alpha-value>)",
                },
                muted: {
                    DEFAULT: "rgb(var(--color-muted) / <alpha-value>)",
                    foreground: "rgb(var(--color-muted-foreground) / <alpha-value>)",
                },
                popover: {
                    DEFAULT: "rgb(var(--color-popover) / <alpha-value>)",
                    foreground: "rgb(var(--color-popover-foreground) / <alpha-value>)",
                },
                card: {
                    DEFAULT: "rgb(var(--color-card) / <alpha-value>)",
                    foreground: "rgb(var(--color-card-foreground) / <alpha-value>)",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            animation: {
                'gradient': 'gradient 8s linear infinite',
                'float': 'float 3s ease-in-out infinite',
            },
            keyframes: {
                gradient: {
                    '0%, 100%': {
                        'background-size': '200% 200%',
                        'background-position': 'left center'
                    },
                    '50%': {
                        'background-size': '200% 200%',
                        'background-position': 'right center'
                    },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            }
        },
    },
    plugins: [],
}
