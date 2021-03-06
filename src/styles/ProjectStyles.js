import styled from "styled-components";

export const ProjectStyle = styled.div`
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 100vh;
    margin: auto;
  }

  .card-container {
    position: relative;
    width: 36rem;
    height: 22rem;
  }

  .background-block {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  .card-container svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 3rem;
    color: var(--main-color);
  }

  .card-container svg:hover {
    cursor: pointer;
    color: #15265c;
  }

  article {
    position: absolute;
    width: 16rem;
    height: 100%;
    transition: all 1s;
  }

  .card {
    position: absolute;
    height: 25rem;
    width: 15rem;
    margin: 1rem;
    color:#15265c;
    background-color: var(--main-color);
    border-radius: 1rem;
    text-align: center;
    text-transform: capitalize;
    box-sizing: border-box;
    user-select: none;
  }

  .card:hover {
    cursor: pointer;
  }

  .card img {
    height: 13rem;
    width: 15rem;
    border-radius: 1rem;
    object-fit: cover;
    object-position: top;
    pointer-events: none;
  }

  .prevCard {
    left: 0;
    opacity: 0;
    z-index: -1;
  }

  .activeCard {
    left: 50%;
    transform: translateX(-50%);
  }

  .nextCard {
    left: 100%;
    transform: translateX(-100%);
    opacity: 0;
    z-index: -1;
  }
  .skills,
  .summary {
    font-size: 13px;
  }
  /* Carousel buttons */

  .leftBtn {
    left: -1rem;
  }

  .rightBtn {
    right: -1rem;
  }

  /* Paginator styles */
  .paginator {
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: -2rem;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 30rem;
    height: 2rem;
  }

  .hr {
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: var(--main-color);
  }

  .dot {
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    background-color:  var(--main-color);;
    z-index: 1;
    transition: all 1s;
  }

  .dot:hover {
    cursor: pointer;
  }

  .dot.active {
    box-shadow: 0 0 0 4px grey;
    background-color: white;
  }

  @media screen and (max-width: 425px) {
    .container {
      width: 100%;
      overflow: hidden;
    }

    .card-container {
      width: 80%;
    }

    .prevCard {
      left: -35%;
    }

    .nextCard {
      left: 135%;
    }
  }
`;

export const ButtonStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
