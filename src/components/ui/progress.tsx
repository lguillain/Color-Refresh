import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { ExtendedColorPalette } from "../../palettes"

interface ProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  selectedPalette?: ExtendedColorPalette;
  style?: React.CSSProperties & {
    '--progress-background'?: string;
  };
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, style, selectedPalette, ...props }, ref) => {
  const primary = selectedPalette?.colors.primary || '#6B4BFF';
  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={`relative h-2 w-full overflow-hidden rounded-full bg-primary/20 ${className}`}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className="h-full w-full flex-1 bg-primary transition-all"
        style={{ 
          transform: `translateX(-${100 - (value || 0)}%)`,
          backgroundColor: style?.['--progress-background'] || primary
        }}
      />
    </ProgressPrimitive.Root>
  )
})
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress } 