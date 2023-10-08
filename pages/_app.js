import '@/styles/globals.scss';
import { Outfit, Noto_Color_Emoji } from 'next/font/google';

const outfit = Outfit({
  weights: [ 
    "100", 
    "200", 
    "300", 
    "400", 
    "500", 
    "600",
    "700",
    "800",
    "900"
  ],
  subsets: [ "latin", "latin-ext" ],
  preload: true
});

const notoColorEmoji = Noto_Color_Emoji({
  weight: "400",
  subsets: [ "emoji" ],
  preload: true
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${outfit.style.fontFamily},${notoColorEmoji.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}
