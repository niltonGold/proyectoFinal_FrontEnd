import * as React from 'react';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CalculateIcon from '@mui/icons-material/Calculate';
import EuroIcon from '@mui/icons-material/Euro';



import Stack from '@mui/material/Stack';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';






const CustomButtonRoot = styled('button')`
  background-color: #007fff;
  padding: 15px 20px;
  border-radius: 10px;
  color: #fff;
  font-weight: 600;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
  transition: all 200ms ease;
  cursor: pointer;
  box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0);
  border: none;

  &:hover {
    background-color: #0059b2;
  }

  &.${buttonUnstyledClasses.active} {
    background-color: #004386;
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: 0 0 0 0 rgba(0, 127, 255, 0);
  }
`;

function CustomButton(props) {  
  return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
}






export default function Div_a_b(){
    return(
        <div className="div_a_b">
  
            <Stack className="botones_div_a_b_container_all" spacing={3} direction="row" >

                <div className="botones_div_a_b_individual">
                    <CustomButton size='small' >INV</CustomButton>
                    <CustomButton size='small' > <DeleteForeverIcon></DeleteForeverIcon> </CustomButton>
                    <CustomButton size='small' > <CalculateIcon ></CalculateIcon> </CustomButton>
                    <CustomButton size='small' > <EuroIcon></EuroIcon> </CustomButton>
                </div>

            </Stack> 

        </div>
    )
}