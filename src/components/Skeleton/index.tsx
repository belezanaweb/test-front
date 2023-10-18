import { Skeleton as SkeletonComponent } from '@/components/ui/skeleton'

export function SkeletonProduct() {
  return (
    <div className="flex items-center space-x-4">
      <SkeletonComponent className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <SkeletonComponent className="h-4 w-[250px]" />
        <SkeletonComponent className="h-4 w-[200px]" />
      </div>
    </div>
  )
}

export function Skeleton() {
  return (
    <div className="flex items-center space-x-4">
      <div className="space-y-2">
        <SkeletonComponent className="h-4 w-[250px]" />
        <SkeletonComponent className="h-4 w-[200px]" />
        <SkeletonComponent className="h-4 w-[400px]" />
        <SkeletonComponent className="h-4 w-[200px]" />
      </div>
    </div>
  )
}
