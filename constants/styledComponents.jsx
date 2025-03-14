import { COLORS, FONTS, SIZES } from "./index";
import styled from 'styled-components/native'
import { Dimensions } from 'react-native'


// Create a Title component that'll render an <h1> tag with some styles
export const Title = styled.Text`
        fontFamily: ${FONTS.bold};
        fontSize: ${SIZES.xLarge + 5};
        textAlign: "center";
        color: ${COLORS.white};
`;
export const MainText = styled.Text`
    fontFamily: ${FONTS.bold};
    fontSize: ${SIZES.medium + 5};
    textAlign: "center";
    color: ${COLORS.white};
`;

export const SubText = styled.Text`
       fontFamily: ${FONTS.light};
        textAlign: "center";
        marginTop: ${SIZES.large};
        color: ${COLORS.gray};
`;

// Create a Wrapper component that'll render a <section> tag with some styles
export const Wrapper = styled.View`
        paddingHorizontal: ${SIZES.small + 10};
        alignItems: "center";
        justifyContent: "center";
        flex: 1;
        backgroundColor: ${COLORS.bg};
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-horizontal: ${SIZES.small}px;
  gap: ${SIZES.small}px;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${props => props.primary ? COLORS.second : 'white'};
  padding: ${SIZES.small + 5}px;
  margin: ${SIZES.small}px;
  border-radius: ${SIZES.small}px;
  align-items: center;
`;

export const SubButton = styled.TouchableOpacity`
  background-color: ${props => props.primary ? COLORS.second : 'white'};
  padding: ${SIZES.small + 5}px;
  margin: ${SIZES.small}px;
  border-radius: ${SIZES.small}px;
  align-items: center;
  flex: 1;
`;

export const ButtonText = styled.Text`
  color: ${props => props.primary ? COLORS.white : COLORS.second};
  font-family: ${FONTS.semiBold};
  font-size: ${SIZES.large}px;
`;

export const Card = styled.View`
  background-color: ${COLORS.cardBg};
  border-radius: ${SIZES.medium}px;
  padding: ${SIZES.medium}px;
  margin: ${SIZES.small}px;
  width: ${Dimensions.get('window').width - 40}px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
`;

export const CardHeader = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${COLORS.gray};
  padding-bottom: ${SIZES.small}px;
  margin-bottom: ${SIZES.small}px;
`;

export const CardContent = styled.View`
  padding: ${SIZES.small}px 0;
`;


// Use Example
 // <Wrapper>
        //     <Title>
        //         Hello World!
        //     </Title>
        //     <MainText>
        //         I'm your Copilot
        //     </MainText>
        //     <SubText>
        //         automated generated Text
        //     </SubText>
        //   <Button primary><ButtonText primary>Click Me</ButtonText></Button>
        //   <ButtonContainer>
        //     <SubButton>
        //     <ButtonText>Click Me</ButtonText>
        //     </SubButton>
        //     <SubButton>
        //     <ButtonText>Click Me</ButtonText>
        //     </SubButton>
        //   </ButtonContainer>
        // </Wrapper>


