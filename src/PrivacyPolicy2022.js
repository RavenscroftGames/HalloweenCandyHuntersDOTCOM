import React from 'react'
import {Container, Header, Grid,} from 'semantic-ui-react'
import { Document } from 'react-pdf/dist/entry.webpack';
import { Page } from 'react-pdf'
import PrivacyPolicy2022 from '../assets/PrivacyPolicy2022.pdf'

const PrivacyPolicy2022 = () => {
  return(
    <Container fluid>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={16}>
            <Header className='header' as='h1'>Privacy Policy 2022</Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>

  )
}
 export default PrivacyPolicy2022