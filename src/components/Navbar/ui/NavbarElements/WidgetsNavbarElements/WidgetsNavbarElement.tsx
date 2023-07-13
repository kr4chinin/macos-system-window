import { styled } from 'styled-components';
import { ReactComponent as WidgetsIcon } from '../../../../../assets/icons/Navbar/widgets.svg';
import { NavbarElement } from '../NavbarElement/NavbarElement';

const Grid = styled.div`
  width: 320px;

  padding: 4px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
`;

const Block = styled.div`
  min-height: 64px;

  padding: 4px;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: rgba(40, 40, 40, 0.6);
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
`;

const LargeFullLineBlock = styled(Block)`
  height: 64px;

  grid-column: 1 / 3;
`;

const LargeSquareBlock = styled(Block)`
  height: 152px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);

  padding: 8px;
  gap: 8px;
`;

const SmallSquareBlock = styled(Block)`
  height: 64px;
`;

const SmallFullLineBlock = styled(Block)`
  height: 64px;

  grid-column: 1 / 3;
`;

export const WidgetsNavbarElement = () => {
  return (
    <NavbarElement position="bottom" target={<WidgetsIcon />}>
      <Grid>
        <LargeSquareBlock />
        <LargeSquareBlock>
          <SmallSquareBlock />
          <SmallSquareBlock />

          <SmallFullLineBlock />
        </LargeSquareBlock>

        <LargeFullLineBlock />
        <LargeFullLineBlock />
        <LargeFullLineBlock />
      </Grid>
    </NavbarElement>
  );
};
