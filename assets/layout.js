// GLOBAL VALUES
const colors = {
  dark: '#15161C',
  transparentDark: 'rgba(21, 22, 28, 0.5)',
  primary: '#363D80',
  transparentPrimary: 'rgba(54, 61, 128, 0.5)',
  bright: '#E0E7EE',
  error: '#F94423',
  background: '#f4f4f4'
};

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

// COMPONENTS

const buttons = {
  button: {
    button: {
      margin: spacing.xs,
      backgroundColor: colors.dark,
      elevation: 1,
      maxHeight: spacing.xl
    },
    text: {
      color: colors.bright,
      marginLeft: spacing.md,
      marginRight: spacing.md,
      marginTop: spacing.sm,
      marginBottom: spacing.sm,
      fontSize: fontSizes.md

    },
    pressed: {
      button: {
        margin: spacing.xs,
        backgroundColor: colors.bright,
        maxHeight: spacing.xl
      },
      text: {
        color: colors.dark,
        marginLeft: spacing.md,
        marginRight: spacing.md,
        marginTop: spacing.sm,
        marginBottom: spacing.sm,
        fontSize: fontSizes.md
      }
    }
  },
  pill: {
    button: {
      margin: spacing.xs,
      backgroundColor: colors.dark,
      elevation: 1,
      maxHeight: spacing.xl,
      borderRadius: 100
    },
    text: {
      color: colors.bright,
      marginLeft: spacing.md,
      marginRight: spacing.md,
      marginTop: spacing.sm,
      marginBottom: spacing.sm,
      fontSize: fontSizes.md
    },
    pressed: {
      button: {
        margin: spacing.xs,
        backgroundColor: colors.bright,
        maxHeight: spacing.xl,
        borderRadius: 100
      },
      text: {
        color: colors.dark,
        marginLeft: spacing.md,
        marginRight: spacing.md,
        marginTop: spacing.sm,
        marginBottom: spacing.sm,
        fontSize: fontSizes.md
      }
    }
  },
}

const container = {
  flex: 1,
  padding: spacing.md
}

const headers = {
  h1: {
    fontSize: fontSizes.xxl,
    fontWeight: 'bold',
    color: colors.primary
  },
  h2: {
    fontSize: fontSizes.xl,
    fontWeight: 'bold',
    color: colors.primary
  },
  h3: {
    fontSize: fontSizes.lg,
    fontWeight: 'bold',
    color: colors.primary
  },
  h4: {
    fontSize: fontSizes.md,
    fontWeight: 'bold',
    color: colors.primary
  }
}

const navbar = {
  backgroundColor: colors.primary,
  padding: spacing.sm,
  maxHeight: fontSizes.xxl
}

const text = {
  
}

const textInput = {
  backgroundColor: colors.background,
  borderRadius: spacing.xs,
  borderBottomColor: colors.transparentDark,
  borderBottomWidth: 1,
}

// EXPORT

export const layout = {
  colors: colors,
  fontSizes: fontSizes,
  spacing: spacing,
  buttons: buttons,
  headers: headers,
  navbar: navbar,
  text: text,
  textInput: textInput
}