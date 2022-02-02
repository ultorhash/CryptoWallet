import styled, { CSSProperties } from "styled-components";
import { Colors } from "../../colors/colors";

export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const BannerWrapper = styled.div`
  width: 100%;
  height: 700px;
  background-color: ${Colors.Gray800};
  display: flex;
  justify-content: center;
`;

export const BannerColumn = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: ${Colors.White};
    margin: 10px;
  }

  p {
    color: ${Colors.Gray100};
    height: 30px;
    line-height: 30px;
  }
`;

export const ArticleWrapper = styled.div`
  height: 600px;
  display: flex;
  flex-direction: row;
  background-color: ${Colors.Gray800}
`;

export const StepsWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const Step = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    color: ${Colors.White}
  }

  p {
    margin: 10px 20px;
    text-align: center;
    color: ${Colors.Gray300}
  }
`;

export const StepsImageWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    margin: 20px 0;
    color: ${Colors.Gray400}
  }

  img {
    width: 70%;
    height: 70%;
  }
`;

export const StepIcon: CSSProperties = {
  width: '50px',
  height: '50px',
  color: `${Colors.Gray400}`
}

export const ProcessIcon: CSSProperties = {
  width: '80px',
  height: '80px',
  color: `${Colors.Gray600}`
}