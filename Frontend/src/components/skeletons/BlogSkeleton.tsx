import { Skeleton } from "../ui/skeleton"


export function FullBlogSkeleton() {
  return (
    <div>
      <div className="grid grid-cols-5">
        <div className="col-start-2 col-span-3">
          {/* Title */}
          <Skeleton className="h-10 w-[80%] mt-2" />

          {/* Author Section */}
          <div className="pt-4 mb-2 flex items-center">
            <Skeleton className="mr-3 size-10 rounded-full" />
            <Skeleton className="h-4 w-40" />
          </div>

          {/* Read time + date */}
          <div className="border-t flex justify-between font-extralight opacity-90 py-2">
            <Skeleton className="h-3 w-24" />
            <Skeleton className="h-3 w-20" />
          </div>
           
          {/* Content */}
          <div className="text-xl pt-4 leading-loose tracking-wide  space-y-3">
            {Array.from({ length: 15 }).map((_, idx) => (
              <Skeleton key={idx} className="h-4 w-full" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
