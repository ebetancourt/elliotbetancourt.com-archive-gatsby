import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.666,
  scaleRatio: 3,
  headerFontFamily: ['Josefin Sans', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  headerWeight: 600,
  bodyFontFamily: ['Georgia', 'serif'],
  googleFonts: [
    {
      name: 'Josefin Sans',
      styles: [
        '600',
      ],
    },
  ],
});

export default typography;