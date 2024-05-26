import Image from "next/image"

const EmptyFavorite = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image 
        src="/empty-favorite.png"
        alt="Empty favorite"
        width={190}
        height={190}
      />
      <h2 className="text-2xl font-semibold mt-6">
        No favorite boards!
      </h2>
      <p className="text-muted-foreground text-sm mt-2">
        Try favoriting a board
      </p>
    </div>
  )
}

export default EmptyFavorite;