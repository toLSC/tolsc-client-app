import * as React from "react"
import Svg, { Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */

const SvgComponent = (props) => (
  <Svg
    data-name="Capa 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 383.13 381.97"
    {...props}
  >
    <Path
      d="M106.07 538c4-6 8-12.1 12.08-18.09 2.49-3.64 5.65-6.17 10.48-5.28 2.21-1 3.9.3 5.48 1.42 17.69 12.5 35.29 25.14 53.06 37.53a4.61 4.61 0 0 1 2.19 2.45 1.82 1.82 0 0 1-1.29 1.68c-4.2 1.48-6.37 5-8.62 8.43-2.56 4-5.21 7.9-7.87 11.82a24.88 24.88 0 0 0-3.91 7.59c-.21.85-.25 2.13-1.76 1.91q-15.65-11-31.28-22c-8.09-5.73-16.06-11.62-24.24-17.21-2-1.35-2.82-3.37-4.32-5Z"
      transform="translate(-106.07 -230.28)"
      style={{
        fill: "#b4dbfe",
      }}
    />
    <Path
      d="M406.08 486.41c-7 4.53-13.18 10.11-19.86 15-4.2 3.09-8.3 6.32-12.44 9.48-4.88 3.71-7.92 4.11-11.87 1.58-2.94-1.88-5-7.95-4.26-12.1 1.08-5.9 4.72-10.35 8.41-14.71 10.19-12 22.14-22.11 34.55-31.67 4.75-3.67 6.08-8.18 5.53-13.73a20.89 20.89 0 0 1 0-2.62c3.74-8.78 8.19-17.27 10.67-26.58a153 153 0 0 0 3.86-20.87 6.46 6.46 0 0 0-.08-1.86c-.49-3-2.36-4.9-4.79-4.83-3.06.09-4.53 2.07-4.73 4.8a99.06 99.06 0 0 1-1.75 13.29 90.06 90.06 0 0 1-3.09 11.51c-.49 1.41-.89 2.88-2.39 3.62-6.65 10.21-13.65 20.13-22.34 28.77-5.25 5.24-11.58 6.81-18.51 5.31-15.73-3.41-31.38-7.21-47.08-10.8a20.24 20.24 0 0 1-6.64-2.62c.92 7.56-1.33 14.52-3.45 21.4A284.34 284.34 0 0 1 275 526.43c-6.23 9.91-14.68 17.66-23.61 25.06a188.73 188.73 0 0 0-20.1 20c-2.88 3.22-6.36 6-8.48 9.86-3.8-2-6.71-5.2-10.27-7.56-6.59-4.38-12.9-9.17-19.45-13.62-1.76-1.2-3.45-2.45-3.79-4.77-1.21-6.85-.28-13.69.56-20.43a157.54 157.54 0 0 1 21.24-61.65 4.76 4.76 0 0 1 1-1.13c1.4-.53 1.79.62 2.11 1.47 4.43 11.69 17.26 13.72 26.64 12 8.53-1.55 14.4-7 19.36-13.68 6.23-8.4 10.11-18 14.14-27.55 3.63-8.58 9.84-13.84 19.12-15.51a17.64 17.64 0 0 1 12.74 2.49c.62-4.63 2.08-8.68 5.74-11.52 4.88-3.79 10.77-4.45 16.63-4.78 6.75-.38 13.41.72 20 2 .74.14 1.46.35 2.19.51 10 2.25 11.48 1.69 16.74-7.05 3.67-6.09 7.6-12 11.07-18.22 3.31-5.92 4.9-12.24 3.57-19.06-2-10.5-9-16.34-19.77-16.9-3.6-.18-7.16.87-10.74.13-1.39-1.4-.72-3-.43-4.58 2.46-12.84 7.61-24.65 13.83-36.05a215.16 215.16 0 0 1 27.32-39 2.07 2.07 0 0 1 2.13.17c20.58 14.37 41 29 61.45 43.52 3.53 2.52 7.27 4.72 10.8 7.24-4.79 14.48-8.27 29.14-9.13 44.51-.9 16.14-.17 32.26-.52 48.38a18 18 0 0 0 .68 3.63 1.56 1.56 0 0 0-.34 1c1.84 14.69-1.22 28.7-6.24 42.34a301.12 301.12 0 0 1-19.35 41.53 3.11 3.11 0 0 1-1 1.1c-4 3.84-5.65 9.22-8.68 13.7-2.21 3.27-3.83 6.79-7.89 8.54-7.54 3.25-16.44-1.72-17.08-9.94a35.24 35.24 0 0 1 2.25-16.06c2.56-3.79 6.38-6.27 9.82-9.11 7.68-6.34 15.3-12.76 23-19.08a23.56 23.56 0 0 0 8.58-16.49c1.31-13.75 2.61-27.49 4-41.23.42-4.08.55-8.19 1.19-12.25a13.76 13.76 0 0 0 .14-4.1c-.32-2.35-1.58-3.95-4-4.25-2.6-.32-4.24 1-5 3.45-1.15 3.61-1 7.41-1.29 11.1-1.24 14.13-3 28.21-4 42.36-.47 6.64-2.53 12.22-8.27 16.33-4.74 3.4-9 7.47-13.55 11.15-1.24.92-2.32 2.02-3.98 1.98Z"
      transform="translate(-106.07 -230.28)"
      style={{
        fill: "#feddce",
      }}
    />
    <Path
      d="M212.37 472.1c-1.41 4.55-4.29 8.36-6.38 12.58a161 161 0 0 0-15.22 50.23 113.86 113.86 0 0 0-.9 21.14.51.51 0 0 1-.78 0q-27.68-19.62-55.36-39.25a11 11 0 0 0-5.1-2.18c4.77-14.4 8.16-29 9.06-44.28.93-16 .2-32.08.53-48.12a21.64 21.64 0 0 0-.66-4c.17-5.53-.33-11 .21-16.62a108.87 108.87 0 0 1 6.11-26c5.25-14.79 12.19-28.82 19.78-42.54a2.56 2.56 0 0 1 .78-.79c3.86-4 5.73-9.18 8.69-13.71 2.16-3.3 3.84-6.8 7.89-8.54 7.55-3.24 16.41 1.75 17.06 10a36.62 36.62 0 0 1-2.26 15.98c-3.89 5.5-9.74 8.84-14.7 13.15-5.92 5.15-12.05 10.06-18.11 15.05a23.55 23.55 0 0 0-8.57 16.5q-2 20.64-4 41.25c-.42 4.09-.54 8.2-1.19 12.26a11.24 11.24 0 0 0 0 4.83 4.35 4.35 0 0 0 4.3 3.5 4.12 4.12 0 0 0 4.44-3.23c1.16-3.86 1.18-7.89 1.51-11.84 1.19-14.14 3-28.23 4-42.38.48-6.53 2.84-11.89 8.36-15.95 4.7-3.46 9.1-7.37 13.59-11.12a6.39 6.39 0 0 1 3.61-1.78l23.1-17.52c3.06-2.32 6.21-4.55 9.13-7 3.65-3.1 7.39-4.55 11.86-1.78 3.16 2 5.22 7.91 4.42 12.33-1.07 5.93-4.86 10.28-8.47 14.65-9.77 11.86-21.6 21.56-33.56 31-4.39 3.47-7.09 7.11-6.43 12.83a29.73 29.73 0 0 1-.06 4.11c-3.64 8.68-8 17.05-10.56 26.21a125.39 125.39 0 0 0-3.84 21.6c-.35 3.43 1.67 6.09 4.41 6.31 2.9.22 5-1.78 5.19-5.55a91.16 91.16 0 0 1 4.63-23.7c.49-1.52.85-3.16 2.49-4 6.59-10.28 13.71-20.14 22.38-28.82a18.92 18.92 0 0 1 18.19-5.33c16.14 3.44 32.18 7.31 48.26 11a16 16 0 0 1 5.85 2.58c-1.12-7.38 1.07-14.07 3.08-20.65a283.68 283.68 0 0 1 31.32-68.72c6.2-9.86 14.7-17.39 23.46-24.79A202.25 202.25 0 0 0 364 271c2.89-3.24 6.32-6 8.53-9.86 5.52 3.86 10.79 8.05 16.34 11.87 1.49 1 3.33 1.77 3.76 3.85-2.61 5-6.74 8.81-10 13.28-11.68 15.9-21.81 32.63-27.94 51.52a62.84 62.84 0 0 0-3.18 14.49c.16.95-.53 1.36-1.19 1.66-12.08 5.5-18.41 16-23.7 27.34-2.16 4.63-4.1 9.36-6.15 14-4 9.17-13.5 15.24-22.85 14.7a15 15 0 0 1-8.38-2.91c-2.48 14.15-11.8 15.65-22.57 16.38-7 .48-13.91-.74-20.76-2.15-1.95-.41-3.9-.85-5.86-1.23-4.25-.81-7.66.46-9.95 4.2-4.74 7.77-9.78 15.37-14.13 23.36a26.72 26.72 0 0 0-3 16.64c.14 1.42.53 2.8-.6 3.96Z"
      transform="translate(-106.07 -230.28)"
      style={{
        fill: "#fecdbd",
      }}
    />
    <Path
      d="M466.69 327.78a6.8 6.8 0 0 1-4.1-1.55q-29.43-20.84-58.85-41.66c-3.23-2.29-6.4-4.66-9.59-7-2.7-2.95-1.77-6.14-.14-9 3.84-6.66 7.88-13.21 12.23-19.55 2-2.95 4.8-5 8.79-4.34q34.8 24.66 69.61 49.31c4.88 3.46 6 8.22 2.7 13.28-3.36 5.23-6.77 10.44-10.36 15.5-2.45 3.49-5.51 6.16-10.29 5.01ZM189.09 556.05h.78c5.29 5.32 12 8.75 17.85 13.29 5.07 3.93 11 6.8 15 12 .84 5.1-.89 9.46-3.71 13.59s-5.46 8.57-8.3 12.78c-3.41 5-7.79 5.93-12.74 2.47-10.75-7.51-21.4-15.15-32.1-22.73 3.34-10.17 10.78-17.88 16.13-26.84 1.58-2.61 4.85-2.85 7.09-4.56Z"
      transform="translate(-106.07 -230.28)"
      style={{
        fill: "#daecfe",
      }}
    />
    <Path
      d="M164.44 332.22c.05 2.53-1.47 4.47-2.59 6.51-9.41 17-17.48 34.67-21.77 53.75a89.59 89.59 0 0 0-1.86 21.46c0 1.42.59 3-.66 4.27q-4.23-18.34-8.45-36.68a31.05 31.05 0 0 1 0-14.06c2.5-10.65 5.05-21.28 7.58-31.92 1.87-7.84 6.16-12.38 13.06-12.82 5.04-.32 11.05 1.45 14.69 9.49Z"
      transform="translate(-106.07 -230.28)"
      style={{
        fill: "#feb09f",
      }}
    />
    <Path
      d="M430.82 510.3c-.11-2.4 1.31-4.26 2.39-6.16a252.24 252.24 0 0 0 18.43-41 99.85 99.85 0 0 0 5.4-34.25c0-1.54-.63-3.25.68-4.62 2.64 11.46 5.16 23 8 34.38a38.85 38.85 0 0 1 0 18.41c-2.33 9.89-4.73 19.76-7.11 29.63-2 8.16-6.17 12.72-13.17 13.1-4.91.29-10.92-1.29-14.62-9.49ZM406.08 486.41c6.4-5.29 12.78-10.6 19.21-15.85 4.38-3.58 5-8.62 5.5-13.72.87-9.74 1.71-19.47 2.89-29.17.79-6.51 1.19-13.07 1.57-19.62a37.48 37.48 0 0 1 .87-5.12c.72-3.57 3.35-4.54 6.48-4 2.83.45 4.83 2.28 4.63 5.35-.43 6.79-1.05 13.58-1.69 20.35-.61 6.4-1.33 12.79-2 19.19-.78 7.38-1.15 14.83-2.44 22.12-1.35 7.67-7.06 12.55-12.82 17.23-8.27 6.72-16.44 13.56-24.68 20.33-1.34 1.1-2.79 2.06-4.18 3.08a74.28 74.28 0 0 1 6.32-15.72c.74-1.48 1.67-2.86.34-4.45Z"
      transform="translate(-106.07 -230.28)"
      style={{
        fill: "#fecdbd",
      }}
    />
    <Path
      d="m189.06 356.24-19.21 15.86c-3.75 3.11-4.78 7.51-5.26 12-1 8.87-1.55 17.77-2.42 26.64-.92 9.49-1.95 19-3 28.43-.4 3.57-2.76 4.76-6.06 4.59A5.3 5.3 0 0 1 148 438c.4-6.67 1-13.34 1.66-20 .61-6.41 1.35-12.8 2-19.19.77-7.39 1.12-14.85 2.44-22.14 1.15-6.29 5.18-11 10.27-15 10.61-8.37 20.95-17.09 31.39-25.66-1.34 5.59-3.85 10.72-6.34 15.86-.6 1.36-1.91 2.75-.36 4.37Z"
      transform="translate(-106.07 -230.28)"
      style={{
        fill: "#feb09f",
      }}
    />
    <Path
      d="M415 244.72c-5 .9-8 4.2-10.44 8.48-2.86 5.06-6.22 9.84-9.29 14.79a10.18 10.18 0 0 0-1.15 9.59l-1.49-.68c-4.73-3.39-9.41-6.86-14.2-10.16a24 24 0 0 1-5.9-5.56 16.08 16.08 0 0 1 2.93-12.31c3.24-4.54 5.94-9.47 9-14.11 3.35-5 8.3-5.84 13.24-2.38 5.86 4.07 11.58 8.23 17.3 12.34Z"
      transform="translate(-106.07 -230.28)"
      style={{
        fill: "#b4dbfe",
      }}
    />
    <Path
      d="M403.88 416.76c3.33-8.85 5.72-17.91 6-27.44.14-4.67 2.52-7.2 6.39-7 3.49.22 5.93 3.28 5.52 7.52a118.69 118.69 0 0 1-14.3 46.55 6.56 6.56 0 0 1-1.31 1.26c-.53-5.83 1-11.57.75-17.4-.1-2.13-.45-3.67-3.05-3.49Z"
      transform="translate(-106.07 -230.28)"
      style={{
        fill: "#fecdbd",
      }}
    />
    <Path
      d="M191.37 425.77c-3.32 8.86-5.71 17.91-6 27.43-.14 4.79-2.77 7.44-6.75 6.95-3.47-.42-5.62-4.16-5.09-8.23 1.1-8.47 2.32-16.91 5.19-25 2.72-7.68 5.3-15.46 10.33-22.07-.23 5.81-.43 11.61-.7 17.41-.11 2.22.44 3.74 3.02 3.51Z"
      transform="translate(-106.07 -230.28)"
      style={{
        fill: "#feb09f",
      }}
    />
  </Svg>
)

export default SvgComponent
