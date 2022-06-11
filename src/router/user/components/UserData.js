import styled from '@emotion/styled'
import { Button } from '@mui/material';

const UserdataWrapper = styled.div`
  background-color: black;
  height: 100vh;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;
const OrderBlock = styled.div`
  background-color: black;
  width: 100vh;
  height: 80vh;
  text-align: center;
  color: white;
  border: 1px solid white;
`;
const OrderBlockTitle = styled.h3`
  color: white;
  font-family: 'Roboto';
  margin: 30px;
`;
const InternalBlock = styled.div`
  margin-top: 2em;
  background-color: black;
  height: max-content;
`;
const Label = styled.label`
  display: block;
  color:white;
`;

export default function UserData(props) {

    const displayUserData = (props) => {
        const user = props.userdata;
        console.log(user)
        return (
            <UserdataWrapper>
            <OrderBlock>
              <OrderBlockTitle>
                User
              </OrderBlockTitle>
              <InternalBlock>
                <Label>DNI: {user.dni}</Label>
                <Label>Names: {user.names}</Label>
                <Label>Lastname: {user.lastname}</Label>
                <Label>Email: {user.email}</Label>
                <br />
                <br />
                <Button id={'Logout-button'} type={"submit"} color='secondary' variant="contained">Logout</Button>
                <br />
                <br />
                <Button id={'LogoutAll-button'} type={"submit"} color='secondary' variant="contained">Logout All</Button>
                <br />
                <br />
                <Button id={'Update-button'} type={"submit"} color='secondary' variant="contained">Update</Button>
      
              </InternalBlock>
            </OrderBlock>   
          </UserdataWrapper>
          )
    }
    return (
        <>
          {displayUserData(props)}
        </>
      )
  }