import { Moon, SquarePen, Sun } from "lucide-react"
import { useTheme } from "../theme-provider"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "./tooltip"

export function WriteBlog({onclick}:{onclick:()=>void}){
    return(
        <Tooltip>
        <TooltipTrigger type="button" onClick={onclick} className="flex cursor-pointer size-10 rounded-full border mr-4 items-center justify-center" >
            <SquarePen/>
        </TooltipTrigger>
        <TooltipContent className="">
            <p>Create Blog</p>
        </TooltipContent>
        </Tooltip>
    )
}