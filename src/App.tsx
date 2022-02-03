import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import { 
  motion, 
  AnimatePresence,
} from 'framer-motion';
import { useEffect, useState } from 'react';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}
body {
  font-weight: 300;
  font-family: 'Source Sans Pro', sans-serif;
  color: black;
  line-height: 1.2;
}
a {
  text-decoration:none;
  color:inherit;
}
`;

const Wrapper = styled(motion.div)`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background:linear-gradient(135deg, rgba(238, 0, 153), rgba(221, 0, 238));
  flex-direction: column;
`;

const Box = styled(motion.div)`
  position: absolute;
  top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 30px;
  box-shadow: 0, 0, 15px, rgba(0, 0, 0, 0.2);
`;

const box = {
  entry: (isBack: boolean) => ({
      x: isBack ? -500 : 500,
      opacity: 0,
      scale: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: (isBack: boolean) => ({  
    x: isBack ? 500 : -500,
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.3,
    },
  }),
}

function App() {
  const [visible, setVisible] = useState(1);
  const [isBack, setIsBack] = useState(false);
  const nextPlease = () =>{
    setIsBack(false);
    setVisible(prev => prev === 10 ? 10 : prev + 1);
  } 
  const prevPlease = () => {
    setIsBack(true);
    setVisible(prev => prev === 1?  1 : prev - 1)
  };
  return (
    <>  
      <GlobalStyle />
      <Wrapper>
        <AnimatePresence exitBeforeEnter custom={isBack}>
          <Box 
            custom={isBack}
            variants={box} 
            initial="entry" 
            animate="center" 
            exit="exit" 
            key={visible}
          >
            {visible}
          </Box>
        </AnimatePresence>
        <button onClick={prevPlease}>Prev</button>
        <button onClick={nextPlease}>next</button>
      </Wrapper>
    </>
  );
}

export default App;
