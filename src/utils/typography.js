import Typography from "typography"
import Kirkham from "typography-theme-moraga"
 Kirkham.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
      
    },
    "a.gatsby-resp-image-link:hover": {
      
      textDecoration: `none`,
    },
  }
}

delete Kirkham.googleFonts

const typography = new Typography(Kirkham)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
