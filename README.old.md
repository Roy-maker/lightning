# lightning

Color Reference Guide

Light Blue Scale
--blue-darkest: #001e44
--blue-darker: #002a66
--blue-dark: #003366
--blue-medium: #004a99
--blue-light: #0068D0
--blue-lighter: #5a9cf2
--blue-lightest: #a2d9ff

Dark Blue Scale:
--blue-darkest: #001e44
--blue-darker: #00233d
--blue-dark: #003366
--blue-medium: #004680
--blue-light: #005a99
--blue-lighter: #0068D0
--blue-lightest: #0068D0

Light Purple Scale
--purple-darkest: #2e004f
--purple-darker: #4b0082
--purple-dark: #6a0dad
--purple-medium: #8a2be2
--purple-light: #d3a8ff
--purple-lighter: #e5c4ff
--purple-lightest: #f3e5ff

Dark Purple Scale
--purple-darkest: #2e004f
--purple-darker: #3c0061
--purple-dark: #4b0082
--purple-medium: #6a0dad
--purple-light: #8a2be2
--purple-lighter: #c66df2
--purple-lightest: #d3a8ff

Light Gray Scale
--gray-darkest: #1a1a1a
--gray-darker: #333333
--gray-dark: #666666
--gray-medium: #999999
--gray-light: #cccccc
--gray-lighter: #e0e0e0
--gray-lightest: #f5f5f5

Dark Gray Scale
--gray-darkest: #1a1a1a
--gray-darker: #2a2a2a
--gray-dark: #3d3d3d
--gray-medium: #666666
--gray-light: #888888
--gray-lighter: #aaaaaa
--gray-lightest: #cccccc

Light White
--white: #ffffff

Dark White:
--white: #e0e0e0

Global Background Variables:
--bg-white-color: var(--white)
--bg-light-color: var(--gray-lightest)
--bg-medium-color: var(--gray-lighter)
--bg-dark-color: var(--gray-light)
--bg-darker-color: var(--gray-medium)

Global Text Variables:
--text-color: var(--gray-darkest) (default text)
--medium-text-color: var(--gray-darkest)/var(--white) (on backgrounds that need dark font on light mode and light fonr on dark mode);
--dark-text-color: var(--white) (on dark backgrounds)

Global Button Colors:
--button-dark-blue-bg: var(--blue-darker)
--button-dark-blue-hover-bg: var(--blue-medium)
--button-medium-blue-bg: var(--blue-dark)
--button-medium-blue-hover-bg: var(--blue-light)
--button-light-blue-bg: var(--blue-medium)
--button-light-blue-hover-bg: var(--blue-lighter)
--button-dark-purple-bg: var(--purple-darker)
--button-dark-purple-hover-bg: var(--purple-medium)
--button-medium-purple-bg: var(--purple-dark)
--button-medium-purple-hover-bg: var(--purple-light)
--button-light-purple-bg: var(--purple-medium)
--button-light-purple-hover-bg: var(--purple-lighter)

Additional Notes:
All hover states for links and buttons in both light and dark mode automatically apply font-weight: bold;.