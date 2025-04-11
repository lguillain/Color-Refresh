export interface ColorPalette {
  title: string;
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
}

export const palettes: ColorPalette[] = [
  {
    title: "Violet Venture",
    colors: {
      primary: "#6B4BFF",
      secondary: "#00C2D7",
      tertiary: "#9C6AE3"
    }
  },
  {
    title: "Indigo Innovator",
    colors: {
      primary: "#4F46E5",
      secondary: "#06B6D4",
      tertiary: "#A855F7"
    }
  },
  {
    title: "Ultraviolet",
    colors: {
      primary: "#7C3AED",
      secondary: "#0EA5E9", 
      tertiary: "#C084FC"
    }
  },
  {
    title: "Cobalt Disruptor",
    colors: {
      primary: "#4338CA",
      secondary: "#06B6D4",
      tertiary: "#8B5CF6"
    }
  },
  {
    title: "Blurple Bold",
    colors: {
      primary: "#635BFF",
      secondary: "#38BDF8",
      tertiary: "#A78BFA"
    }
  }
]; 