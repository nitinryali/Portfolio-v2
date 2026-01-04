import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --pink: #E31F71;
    --black: #212121;
    --green: #23ce6b;
    --blue: #016fb9;
    scroll-padding-top: 10rem;

    /* theme-aware variables */
    --text: #FFFF;
    --heading: #e7fff7;
    --muted: rgba(255,255,255,0.85);
    --muted-2: rgba(255,255,255,0.6);
    --card-bg: rgba(255, 255, 255, 0.02);
    --card-border: rgba(124, 242, 228, 0.22);
    --card-before-shadow: rgba(124, 242, 228, 0.06) inset;
    --card-hover-border: rgba(0, 235, 210, 0.98);
    --card-hover-shadow: 0 6px 24px rgba(0, 235, 210, 0.06), 0 0 40px rgba(0, 235, 210, 0.12), 0 0 80px rgba(124, 242, 228, 0.08);

    &.light{
      /* override for light theme */
      --text: var(--black);
      --heading: var(--black);
      --muted: rgba(0,0,0,0.85);
      --muted-2: rgba(0,0,0,0.6);
      --card-bg: rgba(0,0,0,0.02);
      --card-border: rgba(33,33,33,0.12);
      --card-before-shadow: rgba(0,0,0,0.06) inset;
      --card-hover-border: rgba(33,33,33,0.6);
      --card-hover-shadow: 0 6px 24px rgba(0,0,0,0.04);
      
      body{
        transition: 0.5s;
        background-color: #f5f5f5;
        color: var(--black);
      }

      .logo{
        color: var(--black);
      }

      header.header-fixed{
        transition: 0.5s;
        background-color: #f5f5f550;
        a{
          transition: 0.5s;
          color: black;
        }
        .menu,.menu:before, .menu:after{
          background-color: var(--black); 
        }
        .menu.active{
          background-color: rgba(555,555,555,0);
        }
      }

      footer.footer{
        transition: 0.5s;
        background-color: rgba(0,0,0,0.1);
        color: var(--black);
      }

      form{
        input,textarea{
          transition: 0.5s;
          border: solid 1px var(--black);
          color: var(--black);
          &::placeholder{
            transition: 0.5s;
            color: var(--black);
          }
        }
      }

    }
  }

  ul, li {
    text-decoration: none;
    list-style: none;
    margin: 0;
    padding:0;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    background-color: var(--black);
    color: #FFFF;
  }

  body, input, textarea, button{
    font-family: 'Red Hat Display', sans-serif;
    font-weight: 400;
  }

  a{
    text-decoration: none;
  }

  button, .button{
    border: none;
    cursor: pointer;
    background-color: var(--green);
    color: #FFFF;
    border-radius: 2rem;
    font-weight: 500;
    transition: filter 0.25s;
    &:hover{
      filter: brightness(0.8);
    }
  }

  button:disabled, .button:disabled{
    filter: brightness(0.8);
    cursor: not-allowed;
  }


  .logo{
    font-size: 3rem;
    color: #FFFF;
    // &::first-letter{
    //   color: var(--green);
    // }
  }
`