import * as React from "react"

import { cn } from "../../lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "placeholder:flex field-sizing-content min-h-16 w-full  bg-transparent px-3 py-2 text-base shadow-xs  outline-none  disabled:cursor-not-allowed disabled:opacity-50 md:text-xl",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
