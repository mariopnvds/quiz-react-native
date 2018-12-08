const colors = {
  dark: '#15161C',
  primary: '#0A59F8',
  bright: '#E0E7EE',
  error: '#F94423',
  background: '#f4f4f4',
  input: '#cfcfcf'
};
const fontFamily = 'Roboto';
const fontSizes = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 32,
  xl: 48,
  xxl: 64
}
const spacing = {
  xs: 5,
  sm: 10,
  md: 20,
  lg: 40,
  xl: 50
};
const container = {
  flex: 1,
  padding: spacing.md
}
const headers = {
  h1: {
    fontSize: fontSizes.xxl,
    fontWeight: 'bold',
    marginTop: spacing.xl,
    marginBottom: spacing.xl,
    fontFamily: fontFamily,
    color: colors.primary
  },
  h2: {
    fontSize: fontSizes.xl,
    fontWeight: 'bold',
    marginTop: spacing.lg,
    marginBottom: spacing.lg,
    fontFamily: fontFamily,
    color: colors.primary
  },
  h3: {
    fontSize: fontSizes.lg,
    fontWeight: 'bold',
    marginTop: spacing.md,
    marginBottom: spacing.md,
    fontFamily: fontFamily,
    color: colors.primary
  },
  h4: {
    fontSize: fontSizes.md,
    fontWeight: 'bold',
    marginTop: spacing.sm,
    marginBottom: spacing.sm,
    fontFamily: fontFamily,
    color: colors.primary
  }
}

const navbar = {
  height: spacing.xl,
  backgroundColor: colors.primary
}

const text = {
  fontFamily: fontFamily
}

const textInput = {
  ...container,
  backgroundColor: colors.input,
  borderRadius: spacing.xs
}

export const layout = {
  colors: colors,
  fontSizes: fontSizes,
  spacing: spacing,
  headers: headers,
  text: text,
  textInput: textInput,
  navbar: navbar
}