const size = {
  mobile: '575px',
  tablet: '768px',
  desktop: '992px',
  largeDesktop: '1200px'
}

export const device = {
  xs: `(max-width: ${size.mobile})`,
  sm: `(min-width: ${size.mobile})`,
  md: `(min-width: ${size.tablet})`,
  lg: `(min-width: ${size.desktop})`,
  xl: `(min-width: ${size.largeDesktop})`
};
