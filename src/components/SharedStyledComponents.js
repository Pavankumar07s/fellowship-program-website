import Img from "gatsby-image"
import styled from "styled-components"

import Link from "./Link"
import * as styles from "../utils/styles"

// TODO add styled-components ThemeProvider to handle pixel widths

export const PageBody = styled.div`
  margin: 0 auto 1rem;
  max-width: 780px;
  padding: 40px 16px;
`

export const PageBodyNoBanner = styled(PageBody)`
  padding-top: 220px;
  @media (max-width: 480px) {
    padding-top: 160px;
  }
`

export const PageBodyWide = styled.div`
  margin: 0 auto 1rem;
  max-width: 960px;
  padding: 40px 16px;
`

export const PageHeader = styled.div`
  height: 100px;
  background-image: linear-gradient(
    to right,
    ${styles.colorGreenLightest},
    ${styles.colorBlue}
  );
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`

export const H1 = styled.h1`
  margin-bottom: 0;
  font-size: 1.8rem;
  font-weight: 700;

  @media (max-width: 480px) {
    padding: 0 16px;
    text-align: center;
  }
`

export const H2 = styled.h2`
  font-weight: bold;
  padding-top: 32px;
  text-align: left;
  font-size: 20px;
`

export const HR = styled.hr`
  margin-bottom: 8px;
  background: #e4e4e4;
  height: 2px;
`

export const FakeLink = styled.div`
  cursor: pointer;
  text-align: right;
  color: ${styles.colorBlueLight};

  &:hover {
    color: ${styles.colorBlue};
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
  padding: 2rem 4rem;
  border-radius: 4px;

  @media (max-width: ${styles.screenSizeS}) {
    padding: 2rem 1rem;
  }
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-bottom: 2rem;

  span {
    font-weight: bold;
  }
`

export const Input = styled.input`
  margin-top: 8px;
  border: 1px solid #d1d1d1; /* TODO move to styles */
  height: 40px;
  padding: 8px;
  border-radius: 2px;
`

export const Checkbox = styled(Label)`
  flex-direction: row;
  align-items: center;
`
export const CheckboxInput = styled.input`
  margin-right: 1.5rem;
  transform: scale(1.5);
`

export const RadioContainer = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
`

export const RadioInputContainer = styled.div`
  display: flex;
  align-items: center;

  input {
    margin-right: 1rem;
    margin-top: 0;
  }
`

export const RadioPrompt = styled.div`
  margin-bottom: 1rem;
  font-weight: bold;
`

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
`

export const TextArea = styled.textarea`
  margin-top: 8px;
  padding: 8px;
  border-radius: 2px;
  height: 80px;
  border: 1px solid #d1d1d1; /* TODO move to styles */
`

export const FormHeader = styled.header`
  max-width: 548px;
  margin: auto;
  margin-top: 3rem;
  margin-bottom: 3rem;
`

export const Required = styled.span`
  color: ${styles.colorGreen};
  font-weight: bold;
`

export const CardImage = styled(Img)`
  flex: 0 0 200px;
  border-radius: 10px;
`

export const LightText = styled.div`
  color: ${styles.colorGray};
  font-size: 0.9rem;
`

export const LighterText = styled.div`
  color: ${styles.colorGrayLight};
  font-size: 0.9rem;
`

export const Button = styled.button`
  display: inline-block;
  line-height: 1.5;
  font-weight: bold;
  text-align: center;
  border-radius: 4px;
  color: ${styles.colorWhite};
  background: ${styles.colorBlueLight};
  border: 1px solid ${styles.colorBlueLight};
  font-size: 1.1rem;
  padding: 15px 30px;
  cursor: pointer;

  &:hover {
    background: ${styles.colorBlue};
  }
  &:disabled {
    background: ${styles.colorGrayDark};
    border: 1px solid ${styles.colorGrayDark};
    cursor: not-allowed;
  }
`

export const ButtonLink = styled(Link)`
  display: inline-block;
  line-height: 1.5;
  text-align: center;
  border-radius: 5px;
  background: linear-gradient(90deg, #99CD66 1.14%, #1BABCA 100%);
  color: ${styles.colorWhite};
  font-size: 1.1rem;
  padding: 8px 30px;

  &:hover {
    background: linear-gradient(20deg, #99CD66 1.14%, #1BABCA 100%);
    color: ${styles.colorWhite};
    font-weight: 500;
  }
`

export const Section = styled.div`
  margin-bottom: 48px;
`

export const Disclaimer = styled.p`
  opacity: 0.6;
  font-size: 0.8rem;
`

export const TextHiddenMobile = styled.span`
  @media (max-width: ${styles.screenSizeS}) {
    display: none;
  }
`
export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const Left = styled.div`
  display: flex;
  justify-content: left;
  align-items: left;
  text-align: left;
  flex-direction: column;
`
