import { Skeleton } from "../ui/skeleton"

export function BlogSkeletonList() {
  return (
    <div className="flex flex-col">
      {Array.from({ length: 5 }).map((_, idx) => (
        <div
          key={idx}
          className="p-4 grid grid-cols-9 border-b cursor-pointer"
        >
          {/* Left Section (col-span-7) */}
          <div className="col-span-7 text-left">
            {/* Avatar + name + date */}
            <div className="flex items-center">
              <Skeleton className="mr-3 size-10 rounded-full" />
              <Skeleton className="h-4 w-48" />
            </div>

            {/* Title */}
            <div className="pt-2 pb-2">
              <Skeleton className="h-6 w-[90%]" />
            </div>

            {/* Content snippet */}
            <div className="pb-1 space-y-1">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-[85%]" />
            </div>

            {/* Minutes read */}
            <Skeleton className="h-3 w-24" />
          </div>

          {/* Right Section (col-span-2) */}
          <div className="col-span-2 flex items-center justify-center ml-2">
            <Skeleton className="h-24 w-full rounded-md" />
          </div>
        </div>
      ))}
    </div>
  )
}
