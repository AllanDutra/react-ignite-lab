import { Logo } from "./Logo";

export function Header() {
    return (
        // Tailwind trabalha com medidas relativas então ex: py-1 = 4px, py-2 = 8px, sempre múltiplo de 4
        <header className="w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600"> 
            <Logo />
        </header>
    )
}