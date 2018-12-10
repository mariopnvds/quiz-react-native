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

const elevations = [  // NOTICE THAT 0 ELEVATION MEANS NO ELEVATION
  {},
  {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1
  },
  {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2
  },
  {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3
  }
]

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
      ...elevations[1],
      alignItems: 'center',
      justifyContent: 'center'
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
        alignItems: 'center',
        justifyContent: 'center'
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
      ...elevations[1],
      borderRadius: 100,
      alignItems: 'center',
      justifyContent: 'center'
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
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
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

const iconButton = {
  img : {
    tintColor: colors.dark,
    height: 30,
    width: 30,
  },
  button: {
    backgroundColor: colors.background,
    height: 40,
    width: 40,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    padding: spacing.xs
  }
}

const navbar = {
  backgroundColor: colors.primary,
  padding: spacing.sm,
  maxHeight: 56,
  flex: 1,
  justifyContent: 'center'
}

const niceButton = {
  view: {
    position: 'absolute',
    alignItems: 'center'
  },
  circleButton: {
    position: 'absolute',
    zIndex: 100,
    ...elevations[2],
    backgroundColor: colors.dark
  },
  iconButton: {
    position: 'absolute',
    zIndex: 99,
    ...elevations[1]
  }
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
  elevations: elevations,
  fontSizes: fontSizes,
  spacing: spacing,
  buttons: buttons,
  headers: headers,
  iconButton: iconButton,
  navbar: navbar,
  niceButton: niceButton,
  text: text,
  textInput: textInput
}