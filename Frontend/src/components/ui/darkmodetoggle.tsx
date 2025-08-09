import { Moon, Sun } from "lucide-react"
import { useTheme } from "../theme-provider"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "./tooltip"
export function ModeToggle() {
  const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

  return (
        <Tooltip>
        <TooltipTrigger onClick={toggleTheme} type="button" className="cursor-pointer size-10 rounded-full border mr-4" >
                <div className="flex items-center justify-center">
                <Sun  className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                </div>
        </TooltipTrigger>
        <TooltipContent className="">
            <p>Toggle Theme</p>
        </TooltipContent>
        </Tooltip>
  )
}